import React from 'react';
import { Assignment } from '@/types';
import { resolvePublicAsset } from '@/lib/utils';
import { CheckCircle2, FileText, ExternalLink, Download, Clock } from 'lucide-react';

interface AssignmentCardProps {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  const documentUrl = resolvePublicAsset(assignment.documentPath);

  return (
    <article className="p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-medium text-slate-900 text-sm md:text-base leading-snug">
          {assignment.title}
        </h3>
        {assignment.status === 'Handed in' ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            <CheckCircle2 className="w-3 h-3" />
            Handed in
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
            <Clock className="w-3 h-3" />
            {assignment.status || 'Recorded'}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mb-3">
        <span className="font-medium text-slate-700">{assignment.category}</span>
        {assignment.dateLabel && (
          <>
            <span>•</span>
            <span>{assignment.dateLabel}</span>
          </>
        )}
      </div>

      {assignment.tags && assignment.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {assignment.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-normal"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Document link handling: cleanly handles records with and without files */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        {documentUrl ? (
          <div className="flex items-center gap-3">
            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              View Document
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={documentUrl}
              download
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          </div>
        ) : (
          <span className="inline-flex items-center gap-1 text-slate-400 italic">
            <FileText className="w-3.5 h-3.5 opacity-60" />
            Document file pending upload
          </span>
        )}

        <span className="text-[11px] text-slate-400 font-mono">
          ID: {assignment.id}
        </span>
      </div>
    </article>
  );
}

