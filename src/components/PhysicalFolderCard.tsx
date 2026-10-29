'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FolderCardData {
  id: string;
  title: string;
  countLabel: string;
  subLabel: string;
  hasItems: boolean;
  notesPreview?: string[];
}

interface PhysicalFolderCardProps {
  data: FolderCardData;
  isSelected?: boolean;
  onClick?: () => void;
}

export function PhysicalFolderCard({
  data,
  isSelected = false,
  onClick,
}: PhysicalFolderCardProps) {
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
        'group relative w-full h-[270px] rounded-[26px] p-6 text-left cursor-pointer select-none',
        'folder-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
        'flex flex-col justify-between overflow-hidden',
        isSelected
          ? 'bg-[#5B93FF] text-white shadow-[0_16px_36px_-10px_rgba(91,147,255,0.4)]'
          : 'bg-white text-[#202124] border border-[#ECEEEF] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.06)] hover:border-[#DFE2E4] hover:-translate-y-1'
      )}
    >
      {/* 1. Back Wall / Pocket Interior */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-24 pointer-events-none transition-colors',
          isSelected ? 'bg-[#4B81F2]' : 'bg-[#EAECEE]'
        )}
      />

      {/* 2. Documents / Sheets Peeking Out */}
      <div className="absolute top-3 left-6 right-6 h-20 rounded-xl pointer-events-none overflow-hidden transition-transform duration-200 group-hover:-translate-y-1">
        {/* Back sheet */}
        <div
          className={cn(
            'absolute inset-x-2 top-0 h-16 rounded-t-xl border transition-colors',
            isSelected
              ? 'bg-white/25 border-white/20'
              : 'bg-white/90 border-slate-200/70'
          )}
        />
        {/* Front sheet with faux notes */}
        <div
          className={cn(
            'absolute inset-x-0 top-1.5 h-20 rounded-t-xl px-4 pt-2.5 border text-[9.5px] leading-relaxed transition-colors shadow-2xs',
            isSelected
              ? 'bg-white text-[#202124] border-white/60'
              : 'bg-white text-[#5F6368] border-slate-200/80'
          )}
        >
          <div className="space-y-0.5">
            <div className="font-medium text-[10px] truncate text-slate-800">
              {data.notesPreview?.[0] || 'The team can add'}
            </div>
            <div className="truncate text-slate-400 text-[9px]">
              {data.notesPreview?.[1] || 'texts and notes'}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Front Pocket with Tab */}
      {/* Tab on the left */}
      <div
        className={cn(
          'absolute top-12 left-0 w-[52%] h-7 rounded-t-[14px] pointer-events-none transition-colors',
          isSelected ? 'bg-[#5B93FF]' : 'bg-white'
        )}
      />
      {/* Main pocket body covering the bottom */}
      <div
        className={cn(
          'absolute top-[70px] left-0 right-0 bottom-0 pointer-events-none transition-colors',
          isSelected ? 'bg-[#5B93FF]' : 'bg-white'
        )}
      />
      {/* Subtle border highlight line between tab and recessed area */}
      <div
        className={cn(
          'absolute top-[70px] left-[50%] right-0 h-px pointer-events-none',
          isSelected ? 'bg-white/20' : 'bg-[#ECEEEF]'
        )}
      />

      {/* 4. Top spacing spacer */}
      <div className="relative z-10 h-20 pointer-events-none" />

      {/* 5. Folder Labels */}
      <div className="relative z-10 space-y-1">
        <h3
          className={cn(
            'text-[17px] font-semibold tracking-tight transition-colors line-clamp-1',
            isSelected ? 'text-white' : 'text-[#202124]'
          )}
        >
          {data.title}
        </h3>
        <p
          className={cn(
            'text-[13px] font-normal transition-colors',
            isSelected ? 'text-white/80' : 'text-[#7B8188]'
          )}
        >
          {data.countLabel}
        </p>
      </div>

      {/* 6. Bottom Metadata line */}
      <div className="relative z-10 pt-2 flex items-center justify-between">
        <span
          className={cn(
            'text-[12px] font-medium transition-colors truncate',
            isSelected ? 'text-white/70' : 'text-[#7B8188]'
          )}
        >
          {data.subLabel}
        </span>

        {isSelected && (
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full text-white">
            Active
          </span>
        )}
      </div>
    </div>
  );
}
