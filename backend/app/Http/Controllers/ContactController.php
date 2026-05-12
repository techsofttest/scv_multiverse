<?php
namespace App\Http\Controllers;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Banner;
use App\Models\Seo;
use Illuminate\Http\JsonResponse;
class ContactController extends Controller
{
    public function getInfo(): JsonResponse
    {
        try {
            $seo = Seo::find(5);
            $banner=Banner::find(4);
            $contactInfo = Contact::first();

            if (!$contactInfo) {
                return response()->json([
                    'contact' => null,
                    'message' => 'Contact information not found'
                ], 404);
            }

            return response()->json([
              'seo' => [
                    'meta_title' => $seo->meta_title,
                    'meta_desc' => $seo->meta_desc,
                    'meta_key' => $seo->meta_key,
                ],
                'banner' => [
                    'title' => $banner->title,
                    'content' => strip_tags($banner->content),
                    'image' => '/uploads/banner/' . $banner->image,
                ],
                'contact' => [
                    'phone' => $contactInfo->phone,
                    'phone2' => $contactInfo->phone2,
                    'email' => $contactInfo->email,
                    'email2' => $contactInfo->email2,
                    'whatsapp' => $contactInfo->whatsapp,
                    'address' => $contactInfo->address,
                    'location' => $contactInfo->location,
                    'facebook' => $contactInfo->facebook,
                    'instagram' => $contactInfo->instagram,
                    'twitter' => $contactInfo->twitter,
                    'linkedin' => $contactInfo->linkedin,
                    'youtube' => $contactInfo->youtube,
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch contact information',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function submitForm(Request $request): JsonResponse
    {
        try {
            if (isset($_SERVER["OS"]) && $_SERVER["OS"] == "Windows_NT") {
                $hostname = strtolower($_SERVER["COMPUTERNAME"]);
            } else {
                $hostname = trim(shell_exec('hostname'));
                $hostnamearray = explode('.', $hostname);
                $hostname = $hostnamearray[0];
            }

            // Inputs (clean + safe)
            $name = htmlspecialchars($request->input('name'), ENT_QUOTES, 'UTF-8');
            $email = filter_var($request->input('email'), FILTER_VALIDATE_EMAIL);
            $phone = htmlspecialchars($request->input('phone'), ENT_QUOTES, 'UTF-8');
            $subject = htmlspecialchars($request->input('subject'), ENT_QUOTES, 'UTF-8');
            $message = htmlspecialchars($request->input('message'), ENT_QUOTES, 'UTF-8');

            if (!$email) {
                return response()->json([
                    'error' => 'Invalid email address'
                ], 400);
            }

            $emailSubject = "Contact || Bayroof Construction";

            // EMAIL BODY
            $body = '<div style="font-family:DM Sans,Segoe UI,Arial,sans-serif; background:#E8F1F5; padding:30px;">
  <table width="100%" style="max-width:650px; margin:auto; background:#FFFFFF; border-radius:12px; overflow:hidden; border:1px solid #D4AF37;">

    <!-- Header -->
    <tr>
      <td style="background:#1A2B4C; padding:40px 30px; text-align:center;">
        <h1 style="color:#D4AF37; margin:0; font-size:24px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">
          Bayroof Construction
        </h1>
        <p style="color:#E8F1F5; margin-top:10px; font-size:14px; letter-spacing:2px;">
          NEW PROJECT ENQUIRY
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:40px 30px; color:#1E352F;">
        <p style="margin-top:0; font-size:16px;">Dear Admin,</p>
        <p style="color:#4A5D52; line-height:1.6;">
          A new contact request has been submitted. Here are the project details:
        </p>

        <!-- Info Table (Clean Layout) -->
        <table width="100%" style="margin-top:25px; border-collapse:collapse; font-size:15px;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#1A2B4C; font-weight:bold; width:30%;">Name</td>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#4A5D52;">'.$name.'</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#1A2B4C; font-weight:bold;">Email</td>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#2E8B57; font-weight:500;">'.$email.'</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#1A2B4C; font-weight:bold;">Phone</td>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#4A5D52;">'.$phone.'</td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#1A2B4C; font-weight:bold;">Subject</td>
            <td style="padding:12px 0; border-bottom:1px solid #E8F1F5; color:#4A5D52;">'.$subject.'</td>
          </tr>
          <tr>
            <td style="padding:12px 0; color:#1A2B4C; font-weight:bold; vertical-align:top;">Message</td>
            <td style="padding:12px 0; color:#4A5D52; line-height:1.5;">'.$message.'</td>
          </tr>
        </table>

        <!-- Action Button -->
        <div style="margin-top:40px; text-align:center;">
          <a href="mailto:'.$email.'"
             style="display:inline-block; padding:15px 35px; background:#D4AF37; color:#1A2B4C; text-decoration:none; border-radius:4px; font-size:14px; font-weight:bold; text-transform:uppercase;">
            Reply via Email
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:25px; background:#F9FAFB; text-align:center; font-size:12px; color:#4A5D52; border-top:1px solid #E8F1F5;">
        <strong>Bayroof Construction</strong><br>
        <span style="opacity:0.8;">Automated System Notification</span>
      </td>
    </tr>

  </table>
</div>';

            // Prepare and send email
            $mail = new PHPMailer;
            $mail->IsSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = 587;
            $mail->SMTPSecure = 'tls';
            $mail->SMTPAuth = true;
            $mail->Username = 'techsofttest@gmail.com';
            $mail->Password = 'celzboqebpcusnce ';
            $mail->From = 'techsofttest@gmail.com';
            $mail->FromName = 'Bayroof Construction';
            $mail->AddAddress('techsofttest@gmail.com');
            $mail->Subject = $emailSubject;
            $mail->IsHTML(true);
            $mail->Body = $body;

      if (!$mail->Send()) {
            return response()->json([
                'message' => 'Unable to send email. Please try again later.',
                'details' => $mail->ErrorInfo
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Failed to submit form',
            'details' => $e->getMessage()
        ], 500);
    }
}
}