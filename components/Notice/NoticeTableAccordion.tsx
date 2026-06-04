import { Notices } from "@/types/payload-types";
import { formatIsoDate } from "@/utils/formatDate";
import Link from "next/link";

export default function NoticeTableAccordion({
  notices,
}: {
  notices: Notices;
}) {
  return (
    <div className="w-full overflow-hidden border-t border-gray-400 bg-white">
      {/* Desktop Header */}
      <div className="hidden grid-cols-12 border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 md:grid">
        <div className="col-span-1">No</div>
        <div className="col-span-7 text-center">제목</div>
        <div className="col-span-2 text-center">글쓴이</div>
        <div className="col-span-2 text-center">작성시간</div>
      </div>

      {notices.data.map((item, index) => {
        return (
          <Link
            key={item.documentId}
            href={`/notice/${item.documentId}`}
            className="block border-b border-gray-200 transition hover:bg-gray-50"
          >
            {/* Desktop Layout */}
            <div className="hidden w-full grid-cols-12 items-center px-4 py-4 md:grid">
              <div className="col-span-1 text-sm text-gray-700">
                {index + 1}
              </div>
              <div className="col-span-7 flex items-center gap-2 text-sm text-gray-800">
                <span className="truncate">{item.Title}</span>
              </div>
              <div className="col-span-2 text-center text-sm text-gray-400">
                {typeof item.Author === "string" ? item.Author : ""}
              </div>
              <div className="col-span-2 text-center text-sm text-gray-400">
                {typeof item.Date === "string" && formatIsoDate(item.Date)}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block px-4 py-4 md:hidden">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 gap-2">
                  <span className="text-sm text-gray-500">{index + 1}</span>
                  <span className="truncate text-sm text-gray-800">
                    {item.Title}
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                <span>
                  {typeof item.Author === "string" ? item.Author : ""}
                </span>
                <span>
                  {typeof item.Date === "string" && formatIsoDate(item.Date)}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
