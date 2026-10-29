'use client';

import React from 'react';
import { CourseworkItem } from '@/types';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock } from 'lucide-react';

interface CourseworkFolderCardProps {
  coursework: CourseworkItem;
  isSelected?: boolean;
  onClick?: () => void;
}

export function CourseworkFolderCard({
  coursework,
  isSelected = false,
  onClick,
}: CourseworkFolderCardProps) {
  const isHandedIn = coursework.status === 'Handed in';
  const deliverableCount = coursework.deliverables.length;
  const countLabel =
    deliverableCount === 1
      ? '1 deliverable'
      : deliverableCount > 1
      ? `${deliverableCount} deliverables`
      : 'No files attached';

  // Preview titles for the layered paper sheets
  const previewSheet1 =
    coursework.deliverables[0]?.displayName || coursework.title;
  const previewSheet2 =
    coursework.deliverables[1]?.displayName || coursework.category;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={cn(
        'group relative w-full h-[280px] rounded-[30px] p-6 text-left cursor-pointer select-none',
        'folder-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
        'flex flex-col justify-between overflow-hidden',
        isSelected
          ? 'bg-gradient-to-br from-[#4F8BFF] to-[#3B7AF2] text-white shadow-folder-glow border border-blue-400/30'
          : 'bg-white/95 backdrop-blur-xs text-[#1E232A] border border-slate-200/50 shadow-soft-sm hover:shadow-soft-md hover:border-slate-300/60 hover:-translate-y-1'
      )}
    >
      {/* ========================================================
          1. BACK WALL (Folder interior)
      ======================================================== */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-24 pointer-events-none transition-colors duration-200',
          isSelected ? 'bg-[#356ED9]' : 'bg-slate-100/80'
        )}
      />

      {/* ========================================================
          2. DOCUMENTS / SHEETS PEEKING OUT (Tactile paper effect)
      ======================================================== */}
      <div className="absolute top-3 left-6 right-6 h-20 rounded-2xl pointer-events-none overflow-hidden transition-transform duration-200 group-hover:-translate-y-1.5">
        {/* Back layered sheet */}
        <div
          className={cn(
            'absolute inset-x-2 top-0 h-16 rounded-t-xl border transition-colors',
            isSelected
              ? 'bg-white/20 border-white/20'
              : 'bg-white/70 border-slate-200/50'
          )}
        />
        {/* Front layered sheet with note lines */}
        <div
          className={cn(
            'absolute inset-x-0 top-1.5 h-20 rounded-t-xl px-4 pt-2.5 border text-[9.5px] leading-relaxed transition-colors shadow-2xs font-poppins',
            isSelected
              ? 'bg-white text-[#1E232A] border-white/60'
              : 'bg-white text-slate-600 border-slate-200/60'
          )}
        >
          <div className="space-y-0.5">
            <div className="font-semibold text-[10px] truncate text-slate-900">
              {previewSheet1}
            </div>
            <div className="truncate text-slate-400 text-[9px] font-normal">
              {previewSheet2}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. FRONT POCKET WITH SOFT ASYMMETRIC TAB NOTCH
      ======================================================== */}
      {/* Raised tab on the left */}
      <div
        className={cn(
          'absolute top-12 left-0 w-[54%] h-7 rounded-t-[16px] pointer-events-none transition-colors duration-200',
          isSelected ? 'bg-[#4B84F7]' : 'bg-white/95'
        )}
      />
      {/* Main pocket body covering bottom */}
      <div
        className={cn(
          'absolute top-[70px] left-0 right-0 bottom-0 pointer-events-none transition-colors duration-200',
          isSelected ? 'bg-gradient-to-b from-[#4F8BFF] to-[#3B7AF2]' : 'bg-white/95'
        )}
      />
      {/* Soft divider line */}
      <div
        className={cn(
          'absolute top-[70px] left-[52%] right-0 h-px pointer-events-none',
          isSelected ? 'bg-white/20' : 'bg-slate-100/80'
        )}
      />

      {/* Top spacer */}
      <div className="relative z-10 h-20 pointer-events-none" />

      {/* ========================================================
          4. CARD TEXT: CATEGORY, TITLE & STATUS
      ======================================================== */}
      <div className="relative z-10 space-y-1.5 my-auto">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              'text-[11px] font-medium tracking-tight truncate uppercase font-poppins',
              isSelected ? 'text-white/80' : 'text-slate-500'
            )}
          >
            {coursework.category}
          </span>

          {coursework.status && (
            <span
              className={cn(
                'inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full shrink-0 font-poppins',
                isSelected
                  ? 'bg-white/20 text-white'
                  : isHandedIn
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  : 'bg-slate-50 text-slate-600 border border-slate-100'
              )}
            >
              {isHandedIn ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              ) : (
                <Clock className="w-3 h-3 text-slate-400" />
              )}
              {coursework.status}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'text-[15px] font-semibold leading-snug line-clamp-2 transition-colors font-poppins',
            isSelected ? 'text-white' : 'text-[#1E232A]'
          )}
        >
          {coursework.title}
        </h3>

        <p
          className={cn(
            'text-[12.5px] font-normal transition-colors font-poppins',
            isSelected ? 'text-white/85' : 'text-slate-500'
          )}
        >
          {countLabel}
        </p>
      </div>

      {/* ========================================================
          5. FOOTER METADATA
      ======================================================== */}
      <div
        className={cn(
          'relative z-10 pt-2.5 flex items-center justify-between text-[11px] font-medium border-t transition-colors font-poppins',
          isSelected ? 'border-white/20 text-white/75' : 'border-slate-100/90 text-slate-500'
        )}
      >
        <span>{coursework.dateLabel}</span>

        <span className="font-mono text-[10px]">
          {deliverableCount > 0 ? (
            <span
              className={cn(
                'px-2 py-0.5 rounded-md font-medium',
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
              )}
            >
              {deliverableCount} {deliverableCount === 1 ? 'file' : 'files'}
            </span>
          ) : (
            <span className={isSelected ? 'text-white/60' : 'text-slate-400'}>
              No files
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
