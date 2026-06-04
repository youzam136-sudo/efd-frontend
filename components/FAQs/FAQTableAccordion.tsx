import { useState } from "react";
import { ChevronDown, Lock } from "../Common/Icons";
import { Faqs } from "@/types/payload-types";
import { formatIsoDate } from "@/utils/formatDate";

export default function FAQTableAccordion({ data }: { data: Faqs }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full overflow-hidden border-t border-gray-400 bg-white">
      {/* Desktop Header */}
      <div className="hidden grid-cols-12 border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 md:grid">
        <div className="col-span-1">No</div>
        <div className="col-span-7 text-center">제목</div>
        <div className="col-span-2 text-center">글쓴이</div>
        <div className="col-span-2 text-center">작성시간</div>
      </div>

      {data.data.map((item, index) => {
        const isOpen = openId === item.documentId;

        return (
          <div key={item.documentId} className="border-b border-gray-200">
            {/* Desktop Layout */}
            <button
              onClick={() => toggleAccordion(item.documentId)}
              className="hidden w-full grid-cols-12 items-center px-4 py-4 text-left transition hover:bg-gray-50 md:grid"
            >
              <div className="col-span-1 text-sm text-gray-700">
                {index + 1}
              </div>

              <div className="col-span-7 flex items-center gap-2 text-sm text-gray-800">
                {/* <div className="h-3.5 w-3.5 text-gray-400">
                  <Lock />
                </div> */}

                <span className="truncate">{item.Title}</span>
              </div>

              <div className="col-span-2 text-center text-sm text-gray-400">
                {item.Author}
              </div>

              <div className="col-span-2 flex items-center justify-center gap-2 text-sm text-gray-400">
                {formatIsoDate(item.Date)}

                <div
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown />
                </div>
              </div>
            </button>

            {/* Mobile Layout */}
            <button
              onClick={() => toggleAccordion(item.documentId)}
              className="block w-full px-4 py-4 text-left transition hover:bg-gray-50 md:hidden"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 gap-2">
                  <span className="text-sm text-gray-500">{item.id}</span>

                  <div className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400 opacity-0">
                    <Lock />
                  </div>

                  <span className="truncate text-sm text-gray-800">
                    {item.Title}
                  </span>
                </div>

                <div
                  className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown />
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                <span>{item.Author}</span>
                <span> {formatIsoDate(item.Date)}</span>
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 px-4 py-4 text-sm leading-6 text-gray-600 md:px-6 md:py-5">
                {item.Content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
