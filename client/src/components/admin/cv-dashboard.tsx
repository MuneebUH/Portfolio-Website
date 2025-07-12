import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, TrendingUp, Users } from "lucide-react";
import { getCVStats } from "@/lib/cvTracker";

interface CVStats {
  views: number;
  downloads: number;
  total: number;
}

interface CVInteraction {
  id: number;
  action: 'view' | 'download';
  userAgent: string;
  ipAddress: string;
  referrer: string;
  source: string;
  timestamp: string;
}

export default function CVDashboard() {
  const [stats, setStats] = useState<CVStats | null>(null);
  const [interactions, setInteractions] = useState<CVInteraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stats
        const statsResponse = await getCVStats();
        if (statsResponse?.success) {
          setStats(statsResponse.data);
        }

        // Fetch interactions
        const interactionsResponse = await fetch('/api/cv/interactions');
        if (interactionsResponse.ok) {
          const data = await interactionsResponse.json();
          if (data.success) {
            setInteractions(data.data);
          }
        }
      } catch (error) {
        console.error('Error fetching CV data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getSourceIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case 'linkedin': return '💼';
      case 'github': return '🐙';
      case 'twitter': return '🐦';
      case 'google': return '🔍';
      case 'facebook': return '📘';
      case 'instagram': return '📷';
      case 'youtube': return '📺';
      default: return '🌐';
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CV Analytics Dashboard</h1>
        <p className="text-gray-600">Track your CV views and downloads across different platforms</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.views || 0}</div>
            <p className="text-xs text-muted-foreground">
              People who viewed your CV
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.downloads || 0}</div>
            <p className="text-xs text-muted-foreground">
              People who downloaded your CV
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              All CV-related activities
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.views ? Math.round((stats.downloads / stats.views) * 100) : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              Views to downloads ratio
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Interactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent CV Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interactions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No interactions recorded yet</p>
            ) : (
              interactions.slice(0, 10).map((interaction) => (
                <div key={interaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {interaction.action === 'view' ? (
                        <Eye className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Download className="h-4 w-4 text-green-500" />
                      )}
                      <Badge variant={interaction.action === 'view' ? 'secondary' : 'default'}>
                        {interaction.action}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {getSourceIcon(interaction.source)} {interaction.source}
                      </p>
                      <p className="text-xs text-gray-500">
                        {interaction.referrer || 'Direct visit'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {formatDate(interaction.timestamp)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 