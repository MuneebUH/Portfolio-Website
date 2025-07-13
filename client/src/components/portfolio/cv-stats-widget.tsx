import React, { useEffect, useState } from "react";
import { Eye, Download } from "lucide-react";
import { getCVStats } from "@/lib/cvTracker";

interface CVStats {
  views: number;
  downloads: number;
  total: number;
}

export default function CVStatsWidget() {
  const [stats, setStats] = useState<CVStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Commented out until backend is deployed
        // const response = await getCVStats();
        // if (response?.success) {
        //   setStats(response.data);
        // }
        
        // Show placeholder data for now
        setStats({ views: 0, downloads: 0, total: 0 });
      } catch (error) {
        console.error('Error fetching CV stats:', error);
        setStats({ views: 0, downloads: 0, total: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">CV Analytics</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Eye className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-lg font-bold text-blue-600">{stats.views}</span>
          </div>
          <p className="text-xs text-gray-600">Views</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Download className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-lg font-bold text-green-600">{stats.downloads}</span>
          </div>
          <p className="text-xs text-gray-600">Downloads</p>
        </div>
      </div>
      {stats.views > 0 && (
        <div className="mt-3 pt-3 border-t border-blue-200">
          <p className="text-xs text-gray-600 text-center">
            Conversion: {Math.round((stats.downloads / stats.views) * 100)}%
          </p>
        </div>
      )}
    </div>
  );
} 