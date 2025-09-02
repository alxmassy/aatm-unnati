// app/page.tsx
import { Card } from '@/components/Card';

export default function Home() {
  return (
    // The space-y-6 class will automatically handle the spacing for all cards
    <div className="space-y-6 pb-24"> 
      {/* --- Existing Cards --- */}
      <Card
        imageSrc="/aadhar.png"
        title="DBT"
        description="Direct Benefit Tranfer, Get your Bank Account Aadhaar seeded."
        linkText="Learn More"
        linkHref="/learn"
        bgColor="bg-blue-50"
        borderColor="border-blue-200"
      />

      <Card
        imageSrc="/promotion-student.png"
        title="Promotion"
        description="Spread the word, Download Ready-to-use promotional content."
        linkText="Download"
        linkHref="/promotion"
        bgColor="bg-pink-50"
        borderColor="border-pink-200"
      />

      <Card
        imageSrc="/rbi-logo.png"
        title="Check Status"
        description="Check your bank account seeding status with Aadhaar."
        linkText="Check Now"
        linkHref="https://resident.uidai.gov.in/bank-mapper" // External Link
        bgColor="bg-green-50"
        borderColor="border-green-200"
      />

      {/* --- NEW CARDS START HERE --- */}
      <Card
        imageSrc="/qr-code.png"
        title="QR Codes"
        description="Generate QR codes for promotion through notice boards."
        linkText="Generate Now"
        linkHref="/qr-generator"
        bgColor="bg-amber-100"
        borderColor="border-amber-200"
      />

      <Card
        imageSrc="/sms-gateway.png"
        title="e-SMS Gateway"
        description="Send bulk messages in your area for DBT awareness."
        linkText="Send Now"
        linkHref="/sms-gateway"
        bgColor="bg-cyan-100"
        borderColor="border-cyan-200"
      />

      <Card
        imageSrc="/rbi-logo.png"
        title="Bank Info"
        description="Get DBT related info and documents as per your bank."
        linkText="Check Now"
        linkHref="/bank-info"
        bgColor="bg-gray-200"
        borderColor="border-gray-300"
      />
    </div>
  );
}