import axios from "axios";
import { SubmitEvent, useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-submissions`,
        {
          data: {
            Name: formData.name,
            Company: formData.companyName,
            Email: formData.email,
            Phone_Number: formData.phoneNumber,
            Option: formData.inquiryType,
            Message: formData.message,
          },
        },
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-[5px] bg-white p-5 md:p-8">
      <div className="">
        {/* <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>

        <p className="mt-2 text-sm text-gray-500">
          Fill out the form below and we’ll get back to you soon.
        </p> */}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Company */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              상호명
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="회사 상호명을 적어주세요"
              required
              className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              직책
            </label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="직책을 적어주세요"
              className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              이메일
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요"
              required
              className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              전화번호
            </label>

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호를 입력해주세요"
              className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            문의 유형
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
          >
            <option value="">문의 유형을 선택해주세요</option>
            <option value="제품 문의">제품 문의</option>
            <option value="견적 문의">견적 문의</option>
            <option value="투자 문의">투자 문의</option>
            <option value="기술 협력 문의">기술 협력 문의</option>
            <option value="A/S 문의">A/S 문의</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            문의사항
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="문의사항을 입력해주세요"
            required
            className="w-full resize-none rounded-[5px] border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black"
          />
        </div>

        {/* Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[5px] bg-[#2A4676] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50 md:w-auto"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
