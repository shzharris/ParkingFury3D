"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import { Comments } from '../../components/common/Comments';
import { Star, Maximize, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { ShareWithFriends } from '../../components/common/ShareWithFriends';
import { SystemRequirements } from '../../components/common/SystemRequirements';
import { SimilarGames } from '../../components/common/SimilarGames';


export default function App() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Array<{ id: string; author: string; content: string; time: string }>>([]);
  const [feedback, setFeedback] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [cooldownUntil, setCooldownUntil] = useState<number>(0);

  useEffect(() => {
    // 模拟游戏加载
    const timer = setTimeout(() => {
      setIsGameLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const formatRelativeTime = (iso: string): string => {
    const then = new Date(iso).getTime();
    const now = Date.now();
    const diffSec = Math.max(0, Math.floor((now - then) / 1000));
    if (diffSec < 10) return 'just now';
    if (diffSec < 60) return `${diffSec}s ago`;
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}h ago`;
    const diffDay = Math.floor(diffHr / 24);
    return `${diffDay}d ago`;
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('game_comment')
      .select('*')
      .eq('game_name', 'Parking Fury 3D: Beach City')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      console.error('Failed to fetch comments:', error);
      return;
    }
    const mapped = (data || []).map((row) => ({
      id: `db-${String(row.id)}`,
      author: 'Anonymous Player',
      content: String(row.content ?? ''),
      time: formatRelativeTime(String(row.created_at)),
    }));
    setComments(mapped);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const scrollToIframe = () => {
    document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframe.requestFullscreen();
      }
    }
  };


  const sanitizeComment = (input: string): string => {
    // Normalize, remove control chars, strip angle brackets, collapse whitespace, limit length
    const normalized = input.normalize('NFKC');
    const withoutControls = normalized.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    const withoutAngles = withoutControls.replace(/[<>]/g, '');
    const collapsed = withoutAngles.replace(/\s+/g, ' ').trim();
    return collapsed.slice(0, 500);
  };

  const addComment = async () => {
    if (!comment.trim()) return;
    const safe = sanitizeComment(comment);
    if (!safe) return;

    const now = Date.now();
    if (now < cooldownUntil || isSending) return;
    setIsSending(true);

    // Optimistic UI update
    const optimistic = {
      id: `temp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      author: 'Anonymous Player',
      content: safe,
      time: 'just now',
    };
    setComments([optimistic, ...comments]);

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: safe }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.error || `HTTP ${res.status}`;
        console.error('API insert error:', msg);
        alert(`Failed to save comment: ${msg}`);
      }
      // refresh from server to reflect canonical order/timestamps
      fetchComments();
    } catch (e) {
      console.error('Failed to save comment to Supabase:', e);
      alert('Failed to save comment. Please try again later.');
    } finally {
      setComment('');
      setIsSending(false);
      setCooldownUntil(Date.now() + 4_000); // 10s cooldown
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* SEO Head Optimization */}
      <title>Parking Fury 3D: Beach City - Free Online Parking Game</title>
      <meta name="description" content="Get ready to drive through narrow streets, park in difficult places, and steal cars while you avoid the police. There's plenty to do and see in Parking Fury 3D: Beach City" />
      
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 100, 0.8)), url('/betch-city-image3.jpg')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center"
                style={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)'
                }}>
              Parking Fury 3D: Beach City Challenge
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 lg:mb-8 leading-relaxed text-center px-2">
            Parking Fury 3D: Beach City takes you to a vibrant town by the beach where you can test your driving and parking skills in a variety of supercars.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-8 lg:my-12">
              <Card className="bg-gray-800/50 border-blue-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6 text-center">
                  <div className="text-cyan-400 mb-3 text-2xl lg:text-3xl">🚗</div>
                  <h3 className="text-blue-200 mb-2 text-sm lg:text-base">Precise Control</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Choose vehicles, avoid traffic, park precisely</p>
                </div>
              </Card>
              <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6 text-center">
                  <div className="text-purple-400 mb-3 text-2xl lg:text-3xl">🌃</div>
                  <h3 className="text-purple-200 mb-2 text-sm lg:text-base">Night Effects</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Night neon lighting effects, realistic physics collision</p>
                </div>
              </Card>
              <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <div className="p-4 lg:p-6 text-center">
                  <div className="text-cyan-400 mb-3 text-2xl lg:text-3xl">⏱️</div>
                  <h3 className="text-cyan-200 mb-2 text-sm lg:text-base">Quick Sessions</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">2-5 minutes per level, perfect for quick breaks</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 justify-center items-center">
              <Button 
                onClick={scrollToIframe}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-lg shadow-lg shadow-red-500/25 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto touch-target"
              >
                🎮 Play Now!
              </Button>
              <Link 
                href="#game-rules"
                className="bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 text-blue-300 hover:bg-blue-500/10 px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg w-full sm:w-auto touch-target"
              >
                📋 Game Rules
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 lg:mt-8">
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                <Star className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <span className="text-blue-200 text-sm lg:text-base text-center">4.5/5 (Based on player feedback)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="game-section" className="py-8 lg:py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Game iframe */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-800/50 border-blue-500/30 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  {!isGameLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-10">
                      <div className="text-center px-4">
                        <div className="animate-spin rounded-full h-8 w-8 lg:h-12 lg:w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                        <p className="text-blue-300 text-sm lg:text-lg">Game loading... Get ready for night city racing!</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    id="game-iframe"
                    src="https://html5.gamedistribution.com/a0307d115a204901aa768ff1ca4145e6/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d-beach-city/"
                    width="100%"
                    height="400"
                    className="border-0 lg:h-[600px]"
                    loading="lazy"
                    title="Parking Fury 3D: Beach City Game"
                  />
                  <div className="absolute top-2 right-2 lg:top-4 lg:right-4">
                    <Button 
                      onClick={toggleFullscreen}
                      variant="outline"
                      size="sm"
                      className="bg-gray-900/80 border-blue-400 text-blue-300 hover:bg-blue-500/10 text-xs lg:text-sm px-2 lg:px-3"
                    >
                      <Maximize className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                      <span className="hidden sm:inline">Fullscreen</span>
                      <span className="sm:hidden">Full</span>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Game Introduction Section - Mobile First */}
              <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm mt-6 lg:mt-8">
                <div className="p-4 lg:p-8">
                  <h2 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 lg:mb-6"
                      style={{
                        textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)'
                      }}>
                    🚗 About Parking Fury 3D: Beach City
                  </h2>
                  
                  <div className="space-y-4 lg:space-y-6">
                    {/* Game Overview */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 lg:p-6 border border-blue-500/20">
                      <h3 className="text-lg lg:text-xl text-blue-200 mb-3 flex items-center gap-2">
                        🌃 Game Overview
                      </h3>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Get ready to drive through narrow streets, park in difficult places, and steal cars while you avoid the police. There's plenty to do and see in Parking Fury 3D: Beach City
                      </p>
                    
                    </div>

                    {/* Features Grid - Mobile Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-4 lg:p-5 border border-purple-500/20">
                        <h4 className="text-purple-200 font-semibold mb-2 flex items-center gap-2">
                          🎮 Realistic Physics
                        </h4>
                        <p className="text-gray-300 text-sm">Advanced collision detection, realistic vehicle handling, and authentic parking mechanics that challenge even experienced drivers.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg p-4 lg:p-5 border border-cyan-500/20">
                        <h4 className="text-cyan-200 font-semibold mb-2 flex items-center gap-2">
                          🌆 Dynamic Night City
                        </h4>
                        <p className="text-gray-300 text-sm">Immersive neon-lit environment with dynamic lighting, bustling traffic, and atmospheric sound effects.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-lg p-4 lg:p-5 border border-green-500/20">
                        <h4 className="text-green-200 font-semibold mb-2 flex items-center gap-2">
                          🚙 Multiple Vehicles
                        </h4>
                        <p className="text-gray-300 text-sm">Drive various vehicles including sports cars, SUVs, and trucks, each with unique handling and parking challenges.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg p-4 lg:p-5 border border-orange-500/20">
                        <h4 className="text-orange-200 font-semibold mb-2 flex items-center gap-2">
                          ⏰ Time Challenges
                        </h4>
                        <p className="text-gray-300 text-sm">Race against time in increasingly difficult levels. Master each parking scenario to unlock new challenges.</p>
                      </div>
                    </div>

                    {/* Controls & Tips - Mobile Optimized */}
                    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 lg:p-6 border border-yellow-500/20" id="game-rules">
                      <h3 className="text-lg lg:text-xl text-yellow-200 mb-3 flex items-center gap-2">
                        🕹️ Controls & Pro Tips
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-yellow-300 font-semibold mb-2">Desktop Controls:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li><span className="text-yellow-400">W/↑:</span> Accelerate forward</li>
                            <li><span className="text-yellow-400">S/↓:</span> Reverse/Brake</li>
                            <li><span className="text-yellow-400">A/←:</span> Turn left</li>
                            <li><span className="text-yellow-400">D/→:</span> Turn right</li>
                            <li><span className="text-yellow-400">C:</span> Switch Camera</li>
                            <li><span className="text-yellow-400">Space:</span> Brake</li>
                            <li><span className="text-yellow-400">Shift:</span> Enter Car</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-yellow-300 font-semibold mb-2">Mobile Controls:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li><span className="text-yellow-400">Touch:</span> On-screen controls</li>
                            <li><span className="text-yellow-400">Swipe:</span> Camera rotation</li>
                            <li><span className="text-yellow-400">Tap:</span> Action buttons</li>
                            <li><span className="text-yellow-400">Hold:</span> Continuous acceleration</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                        <h4 className="text-yellow-300 font-semibold mb-2">💡 Pro Tips:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Use neon street lights as parking guides</li>
                          <li>• Practice makes perfect - don&apos;t rush the first attempts</li>
                          <li>• Watch for pedestrians and moving traffic</li>
                          <li>• Different vehicles have different turning radiuses</li>
                        </ul>
                      </div>
                    </div>

                    {/* System Requirements - Mobile Friendly */}
                    <SystemRequirements />
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar - Mobile Optimized */}
            <div className="space-y-4 lg:space-y-6">
            <SimilarGames />

              <Comments gameName="Parking Fury 3D: Beach City" />

              <ShareWithFriends />

            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}