'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  FileQuestion,
  Sparkles,
  Recycle,
  FileText,
  Download,
  ExternalLink,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { courseworkItems, unmatchedFiles } from '@/data/courseworkManifest';
import { CourseworkFolderCard } from '@/components/CourseworkFolderCard';
import { CourseworkDetailModal } from '@/components/CourseworkDetailModal';
import { CourseworkItem } from '@/types';

export function DashboardShell() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCoursework, setSelectedCoursework] = useState<CourseworkItem | null>(null);
  const [activeFolderId, setActiveFolderId] = useState<string>(
    courseworkItems[0]?.id || ''
  );

  // Filtered coursework list based on user search query
  const filteredCoursework = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return courseworkItems;

    return courseworkItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.dateLabel.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        item.deliverables.some(
          (d) =>
            d.displayName.toLowerCase().includes(q) ||
            d.fileName.toLowerCase().includes(q)
        )
      );
    });
  }, [searchQuery]);

  // Statistics
  const totalDeliverablesCount = useMemo(() => {
    return courseworkItems.reduce((acc, curr) => acc + curr.deliverables.length, 0);
  }, []);

  return (
    <div className="min-h-screen ambient-gradient-mesh text-[#1E232A] antialiased font-poppins selection:bg-blue-100 selection:text-blue-900">
      {/* ========================================================
          1. HEADER / BRAND AREA (Soft, minimal, rounded)
      ======================================================== */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-[20px] bg-gradient-to-tr from-[#1E232A] to-[#334155] text-white flex items-center justify-center shadow-soft-sm">
            <Recycle className="w-6 h-6 text-[#A7E8D8]" />
          </div>
          <div>
            <span className="font-semibold text-[17px] tracking-tight text-[#1E232A] flex items-center gap-2">
              EWEM Dashboard
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-200/50 backdrop-blur-xs">
                TE CMPN C
              </span>
            </span>
            <p className="text-xs text-slate-500 font-normal">Academic Portfolio &amp; Coursework Deliverables</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 bg-white/80 backdrop-blur-md border border-slate-200/50 px-3.5 py-1.5 rounded-full shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            15 Coursework Tasks
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 bg-white/80 backdrop-blur-md border border-slate-200/50 px-3.5 py-1.5 rounded-full shadow-soft-sm">
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            {totalDeliverablesCount} Deliverables Mapped
          </span>
        </div>
      </header>

      {/* ========================================================
          2. MAIN CONTENT AREA (Unified Root View)
      ======================================================== */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 pb-24 space-y-8">
        {/* Title & Subtitle Banner */}
        <section className="space-y-1.5 pt-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E232A]">
            Environmental Waste &amp; E-Waste Management
          </h1>
          <p className="text-sm text-slate-500 max-w-3xl leading-relaxed font-normal">
            All 15 semester coursework entries, class activities, recovery diagrams, spreadsheets, presentation decks, and research papers mapped directly to verified submission files.
          </p>
        </section>

        {/* Search Bar */}
        <section>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search coursework, tasks, filenames, topics (e.g. 'Toxic Chemicals', 'Tracker', 'Patent', 'LEED')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[22px] text-[13px] text-[#1E232A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 shadow-soft-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

        {/* ========================================================
            3. UNIFIED COURSEWORK GRID (Physical Folder Cards)
        ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium">
              Showing {filteredCoursework.length} of {courseworkItems.length} coursework tasks
            </span>
            <span className="text-slate-400 italic">
              Click any folder card to view and download attached files
            </span>
          </div>

          {filteredCoursework.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoursework.map((coursework) => {
                const isSelected = activeFolderId === coursework.id;

                return (
                  <CourseworkFolderCard
                    key={coursework.id}
                    coursework={coursework}
                    isSelected={isSelected}
                    onClick={() => {
                      setActiveFolderId(coursework.id);
                      setSelectedCoursework(coursework);
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center rounded-[32px] border border-dashed border-slate-200/70 bg-white/80 backdrop-blur-sm max-w-md mx-auto my-12 shadow-soft-sm">
              <FileQuestion className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h3 className="text-sm font-semibold text-[#1E232A]">No matching coursework</h3>
              <p className="text-xs text-slate-500 mt-1">
                No coursework entries matched &ldquo;{searchQuery}&rdquo;. Clear your search query.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-1.5 bg-[#1E232A] text-white rounded-xl text-xs font-medium hover:bg-black transition-colors shadow-2xs"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        {/* ========================================================
            4. UNMATCHED FILES SECTION (Transparently displayed)
        ======================================================== */}
        {unmatchedFiles.length > 0 && (
          <section className="pt-8 border-t border-slate-200/50 space-y-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-semibold text-[#1E232A]">
                Additional Unassigned Files ({unmatchedFiles.length})
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Physical files found in the <code className="font-mono text-slate-700 bg-white/70 px-1 py-0.5 rounded border border-slate-200/40">EWM Assignments</code> folder that do not map directly to any of the 15 verified coursework syllabus tasks. Kept accessible here so no files are lost.
            </p>

            <div className="space-y-2.5">
              {unmatchedFiles.map((unmatched) => (
                <div
                  key={unmatched.id}
                  className="p-4 rounded-[22px] border border-amber-200/60 bg-amber-50/40 backdrop-blur-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-soft-sm"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-semibold text-slate-900 truncate">
                        {unmatched.displayName}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      {unmatched.reason}
                    </p>
                    <p className="text-slate-400 text-[10px] font-mono truncate">
                      Source: {unmatched.originalRelativePath}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <a
                      href={unmatched.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1E232A] text-white font-medium hover:bg-black transition-colors shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open
                    </a>
                    <a
                      href={unmatched.publicUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* ========================================================
          5. DETAILS MODAL / DRAWER (Clean modal without sidebar)
      ======================================================== */}
      <CourseworkDetailModal
        coursework={selectedCoursework}
        onClose={() => setSelectedCoursework(null)}
      />
    </div>
  );
}
