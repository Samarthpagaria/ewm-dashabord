'use client';

import React from 'react';
import { CourseworkItem, DeliverableFile } from '@/types';
import {
  X,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  FileCode,
  Image as ImageIcon,
  Presentation as PresentationIcon,
  HardDrive,
  Info,
} from 'lucide-react';

interface CourseworkDetailModalProps {
  coursework: CourseworkItem | null;
  onClose: () => void;
}

function getFileIcon(type: DeliverableFile['fileType']) {
  switch (type) {
    case 'pdf':
      return <FileText className="w-5 h-5 text-rose-500" />;
    case 'xlsx':
    case 'csv':
      return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
    case 'pptx':
      return <PresentationIcon className="w-5 h-5 text-amber-500" />;
    case 'html':
      return <FileCode className="w-5 h-5 text-blue-500" />;
    case 'jpg':
    case 'png':
      return <ImageIcon className="w-5 h-5 text-violet-500" />;
    default:
      return <FileText className="w-5 h-5 text-slate-500" />;
  }
}

function formatBytes(bytes?: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function CourseworkDetailModal({
  coursework,
  onClose,
}: CourseworkDetailModalProps) {
  if (!coursework) return null;

  const isHandedIn = coursework.status === 'Handed in';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F172A]/30 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-[32px] shadow-soft-lg border border-slate-200/50 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200 font-poppins">
        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                {coursework.category}
              </span>
              <span>•</span>
              <span className="text-xs text-slate-500 font-medium">
                {coursework.dateLabel}
              </span>
              {coursework.status && (
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                    isHandedIn
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-slate-100 text-slate-600 border border-slate-100'
                  }`}
                >
                  {isHandedIn ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  {coursework.status}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1E232A] tracking-tight leading-snug">
              {coursework.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-slate-200/60 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center shrink-0 transition-colors shadow-soft-sm"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-7 overflow-y-auto space-y-6">
          {/* Description */}
          {coursework.description && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Description &amp; Objective
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {coursework.description}
              </p>
            </div>
          )}

          {/* Tags */}
          {coursework.tags && coursework.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {coursework.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-lg bg-slate-100/70 text-slate-600 font-medium border border-slate-200/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Deliverable Files Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Deliverable Files ({coursework.deliverables.length})
              </h4>
              <span className="text-[11px] text-slate-400 font-mono">
                Source: EWM Assignments
              </span>
            </div>

            {coursework.deliverables.length > 0 ? (
              <div className="space-y-2.5">
                {coursework.deliverables.map((deliv) => (
                  <div
                    key={deliv.id}
                    className="p-4 rounded-2xl border border-slate-200/50 bg-white/90 hover:border-slate-300/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-soft-sm"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        {getFileIcon(deliv.fileType)}
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-[#1E232A] truncate">
                            {deliv.displayName}
                          </p>
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                            {deliv.confidence}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-mono truncate">
                          {deliv.fileName} {deliv.sizeBytes ? `• ${formatBytes(deliv.sizeBytes)}` : ''}
                        </p>
                        {deliv.notes && (
                          <p className="text-[11px] text-slate-500 italic">
                            {deliv.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <a
                        href={deliv.publicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1E232A] text-white text-xs font-medium hover:bg-black transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open
                      </a>
                      <a
                        href={deliv.publicUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200/70 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* No files attached state */
              <div className="p-6 rounded-2xl border border-dashed border-slate-200/60 bg-slate-50/50 text-center space-y-1.5">
                <Info className="w-5 h-5 text-slate-400 mx-auto" />
                <p className="text-sm font-semibold text-[#1E232A]">
                  No Digital Deliverables Attached
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  This task was tracked on Microsoft Teams (Status: {coursework.status || 'Recorded'}). No corresponding digital file was found in the local repository.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-7 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-slate-400" />
            Static public asset hosting
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white border border-slate-200/70 hover:bg-slate-100 text-[#1E232A] font-medium transition-colors shadow-2xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
