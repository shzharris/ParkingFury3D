"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, Share2, Maximize, MessageCircle, Users, Lightbulb, ExternalLink } from 'lucide-react';

export default function App() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Alex', content: 'So thrilling! The night scenery is amazing!', time: '2 hours ago' },
    { id: 2, author: 'ParkingKing', content: 'Physics engine is very realistic, great crash sounds!', time: '5 hours ago' },
    { id: 3, author: 'NightOwl', content: 'Neon light effects are perfect, so immersive', time: '1 day ago' }
  ]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // 模拟游戏加载
    const timer = setTimeout(() => {
      setIsGameLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToIframe = () => {
    document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showRules = () => {
    alert('Game Rules:\nArrow keys to drive and balance. Press CRTL to enter cars. Follow the arrows from the mini-map to the destination.');
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

  const shareTwitter = () => {
    const text = 'Playing Parking Fury 3D: Night City! Night city parking challenge, so thrilling!';
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const addComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: 'Anonymous Player',
        content: comment,
        time: 'just now'
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  const submitFeedback = () => {
    if (feedback.trim()) {
      alert('Thank you for your feedback! We will carefully consider your suggestions.');
      setFeedback('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* SEO Head Optimization */}
      <title>Parking Fury 3D: Night City - Free Online Parking Game | parkingfury3d.win</title>
      <meta name="description" content="Drive and park vehicles in the big night city! No download required, challenge Parking Fury 3D's extreme controls now." />
      
      {/* Header - Mobile Optimized */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)'
                }}>
              <span className="hidden sm:inline">Parking Fury 3D: Night City</span>
              <span className="sm:hidden">Parking Fury 3D</span>
            </h1>
            <nav className="flex space-x-3 lg:space-x-6">
              <a href="#home" className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Home</a>
              <a href="#about" className="text-blue-300 hover:text-blue-100 transition-colors text-sm lg:text-base touch-target">Game</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 100, 0.8)), url('/image3.jpg')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center"
                style={{
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)'
                }}>
              Parking Fury 3D: Night City Challenge
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 lg:mb-8 leading-relaxed text-center px-2">
              Welcome to the adrenaline-filled world of Parking Fury 3D, where you'll be at the wheel of various vehicles navigating the bustling streets of a massive city.
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
              <Button 
                onClick={showRules}
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-500/10 px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-lg w-full sm:w-auto touch-target"
              >
                📋 Game Rules
              </Button>
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
                    src="https://html5.gamedistribution.com/13d99dac275842e1a64a13332962fbd1/?gd_sdk_referrer_url=https://www.parkingfury3d.win"
                    width="100%"
                    height="400"
                    className="border-0 lg:h-[600px]"
                    loading="lazy"
                    title="Parking Fury 3D: Night City Game"
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
                    🚗 About Parking Fury 3D: Night City
                  </h2>
                  
                  <div className="space-y-4 lg:space-y-6">
                    {/* Game Overview */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 lg:p-6 border border-blue-500/20">
                      <h3 className="text-lg lg:text-xl text-blue-200 mb-3 flex items-center gap-2">
                        🌃 Game Overview
                      </h3>
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Welcome to the adrenaline-filled world of Parking Fury 3D, where you'll be at the wheel of various vehicles navigating the bustling streets of a massive city. Whether you're behind the wheel of a taxi or driving an ambulance through traffic to save lives, each mission presents its own challenges and rewards. For those who dare, there is the exciting world of car theft missions. Take on the role of a skilled driver tasked with procuring specific vehicles under the cover of darkness.
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
                    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 lg:p-6 border border-yellow-500/20">
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
                            <li><span className="text-yellow-400">Space:</span> Handbrake</li>
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
                          <li>• Practice makes perfect - don't rush the first attempts</li>
                          <li>• Watch for pedestrians and moving traffic</li>
                          <li>• Different vehicles have different turning radiuses</li>
                        </ul>
                      </div>
                    </div>

                    {/* System Requirements - Mobile Friendly */}
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 lg:p-6 border border-gray-500/20">
                      <h3 className="text-lg lg:text-xl text-gray-200 mb-3 flex items-center gap-2">
                        💻 System Requirements
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-blue-300 font-semibold mb-2">Desktop:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Modern web browser (Chrome, Firefox, Safari)</li>
                            <li>• Stable internet connection</li>
                            <li>• Hardware acceleration enabled</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-green-300 font-semibold mb-2">Mobile:</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• iOS 12+ or Android 8+</li>
                            <li>• Modern mobile browser</li>
                            <li>• Touch screen support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar - Mobile Optimized */}
            <div className="space-y-4 lg:space-y-6">
              {/* Comments */}
              <Card className="bg-gray-800/50 border-purple-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6">
                  <h3 className="flex items-center gap-2 text-purple-200 mb-3 lg:mb-4 text-sm lg:text-base">
                    <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                    Player Comments
                  </h3>
                  <div className="space-y-3 lg:space-y-4 mb-3 lg:mb-4">
                    <Textarea
                      placeholder="Share your parking skills!"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400 text-sm lg:text-base min-h-[80px] lg:min-h-[100px]"
                    />
                    <Button 
                      onClick={addComment}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-sm lg:text-base py-2 lg:py-3 touch-target"
                    >
                      Send
                    </Button>
                  </div>
                  <Separator className="bg-purple-500/30 mb-3 lg:mb-4" />
                  <div className="space-y-2 lg:space-y-3 max-h-40 lg:max-h-48 overflow-y-auto">
                    {comments.map((comment) => (
                      <div key={comment.id} className="text-xs lg:text-sm">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-purple-300 font-medium">{comment.author}</span>
                          <span className="text-gray-500 text-xs">{comment.time}</span>
                        </div>
                        <p className="text-gray-300">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Share */}
              <Card className="bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6">
                  <h3 className="flex items-center gap-2 text-cyan-200 mb-3 lg:mb-4 text-sm lg:text-base">
                    <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
                    Share with Friends
                  </h3>
                  <div className="flex gap-2">
                    <Button 
                      onClick={shareTwitter}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs lg:text-sm py-2 lg:py-3 touch-target"
                    >
                      Twitter
                    </Button>
                    <Button 
                      onClick={shareFacebook}
                      className="flex-1 bg-blue-800 hover:bg-blue-900 text-xs lg:text-sm py-2 lg:py-3 touch-target"
                    >
                      Facebook
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Tips */}
              <Card className="bg-gray-800/50 border-yellow-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6">
                  <h3 className="flex items-center gap-2 text-yellow-200 mb-3 lg:mb-4 text-sm lg:text-base">
                    <Lightbulb className="w-4 h-4 lg:w-5 lg:h-5" />
                    Beginner Tips
                  </h3>
                  <div className="space-y-2 text-xs lg:text-sm text-gray-300">
                    <p><strong>Controls:</strong> Use W/A/S/D to drive, spacebar to park</p>
                    <p><strong>Safety:</strong> Press CRTL to enter cars. </p>
                  </div>
                </div>
              </Card>

              {/* Ad Space */}
              <Card className="bg-gradient-to-br from-green-800/30 to-blue-800/30 border-green-500/30 backdrop-blur-sm">
                <div className="p-4 lg:p-6 text-center">
                  <div className="text-green-400 mb-2 text-lg lg:text-xl">💰</div>
                  <div className="text-green-400 mb-1 text-sm lg:text-base">Ad Partnership</div>
                  <p className="text-xs lg:text-sm text-gray-400">Contact us for advertising</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Section - Mobile Optimized */}
      <section id="about" className="py-8 lg:py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="bg-gray-800/50 border-blue-500/30 backdrop-blur-sm">
            <div className="p-4 lg:p-8">
              <h3 className="text-lg lg:text-2xl text-blue-200 mb-3 lg:mb-4 flex items-center justify-center gap-2">
                <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                More Games Coming Soon!
              </h3>
              <p className="text-gray-300 mb-4 lg:mb-6 text-sm lg:text-base">
                Parking Fury 3D is our debut game. Stay tuned for new action/racing games.
              </p>
              <div className="flex flex-col gap-3 lg:gap-4 justify-center mb-4 lg:mb-6">
                <Input
                  placeholder="What type of games would you like to play?"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="bg-gray-700/50 border-blue-500/30 text-white placeholder-gray-400 text-sm lg:text-base py-2 lg:py-3"
                />
                <Button 
                  onClick={submitFeedback}
                  className="bg-blue-600 hover:bg-blue-700 text-sm lg:text-base py-2 lg:py-3 touch-target"
                >
                  Submit
                </Button>
              </div>
            
            </div>
          </Card>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-gray-900 border-t border-blue-500/30 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center text-center">
            <div>
              <p className="text-gray-400 text-xs lg:text-sm">© 2025 FunPark Games. Game copyright belongs to third parties.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              <a href="#privacy" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Privacy Policy</a>
              <a href="#partnership" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Partnership</a>
              <a href="#contact" className="text-blue-300 hover:text-blue-100 transition-colors text-xs lg:text-sm touch-target">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}