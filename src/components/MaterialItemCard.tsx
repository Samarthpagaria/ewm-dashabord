'use client';

import React from 'react';
import {
  FileText,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
} from 'lucide-react';
import { BaseAcademicResource, Assignment } from '@/types';
import { resolvePublicAsset } from '@/lib/utils';

interface MaterialItemCardProps {
  item: BaseAcademicResource;
}

export function MaterialItemCard({ item }: MaterialItemCardProps) {
  const assignment = item as Assignment;
  const isHandedIn = assignment.status === 'Handed in';
  const docUrl = resolvePublicAsset(item.documentPath);

  return (
    <article className="bg-white border border-[#ECEEEF] rounded-[20px] p-5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:border-[#DFE2E4] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>

          {assignment.status && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                isHandedIn
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {isHandedIn ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              ) : (
                <Clock className="w-3 h-3 text-slate-500" />
              )}
              {assignment.status}
            </span>
          )}
        </div>

        <div>
          <h4 className="text-[15px] font-semibold text-[#202124] leading-snug">
            {item.title}
          </h4>
          <p className="text-xs text-[#7B8188] mt-0.5">
            {item.category}
          </p>
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4F6F8] text-[#555C63] font-normal"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 mt-4 border-t border-[#F2F4F6] flex items-center justify-between text-xs text-[#7B8188]">
        <span>{item.dateLabel || 'Academic Task'}</span>

        <div>
          {docUrl ? (
            <div className="flex items-center gap-2">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                View
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={docUrl}
                download
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800"
              >
                <Download className="w-3 h-3" />
              </a>
            </div>
          ) : (
            <span className="italic text-[#9AA0A6] text-[11px]">
              Document upload pending
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

