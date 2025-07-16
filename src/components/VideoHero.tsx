'use client';

import React, { useState, useRef } from 'react';

export default function VideoHero() {


  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const isVideoPlaying = false;
  const videoRef = useRef(null)
  //
  // const handleVideoPlay = () => {
  //   setIsVideoPlaying(true)
  //   if (videoRef.current) {
  //     videoRef.current.play()
  //   }
  // }
  //
  // const handleVideoPause = () => {
  //   setIsVideoPlaying(false)
  //   if (videoRef.current) {
  //     videoRef.current.pause()
  //   }
  // }

  return (
    <>

      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Steel+Building+Construction+Site')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full items-center pt-16 sm:pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div
              className={`grid gap-8 items-center transition-all duration-700 ${isVideoPlaying ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"
                }`}
            >
              <div
                className={`text-center lg:text-left transition-all duration-700 ${isVideoPlaying ? "lg:col-span-1 max-w-lg" : "lg:col-span-1 max-w-2xl"
                  }`}
              >
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 mb-6 transition-all duration-500 ${isVideoPlaying ? "opacity-0 scale-95 mb-2" : "opacity-100 scale-100"
                    }`}
                >
                  <span className="text-blue-300 text-sm font-medium">🏆 Industry Leader Since 1998</span>
                </div>
                <h1
                  className={`font-bold tracking-tight text-white leading-tight transition-all duration-700 ${isVideoPlaying
                    ? "mb-3 text-2xl sm:text-3xl lg:text-4xl"
                    : "mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
                    }`}
                >
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Gatih</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Steel Buildings
                  </span>
                </h1>
                <div
                  className={`transition-all duration-500 overflow-hidden ${isVideoPlaying ? "max-h-0 opacity-0 mb-0" : "max-h-96 opacity-100 mb-8 sm:mb-10"
                    }`}
                >
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl">
                    Leading the industry in premium steel construction solutions. We deliver durable, innovative, and
                    cost-effective building systems for commercial, industrial, and residential projects.
                  </p>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 transition-all duration-500 overflow-hidden ${isVideoPlaying ? "max-h-0 opacity-0 mb-0" : "max-h-96 opacity-100 mb-10 sm:mb-12"
                    }`}
                >
                  <div className="flex items-center justify-center lg:justify-start xl:justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 animate-pulse" />
                    <span className="text-white font-medium text-sm sm:text-base">25+ Years</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start xl:justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <span className="text-white font-medium text-sm sm:text-base">Premium Quality</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start xl:justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div
                      className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <span className="text-white font-medium text-sm sm:text-base">Custom Solutions</span>
                  </div>
                </div>
                <div
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start transition-all duration-500 ${isVideoPlaying ? "scale-90" : "scale-100"
                    }`}
                >
                  <button className="group relative inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 sm:px-10 text-base sm:text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="group inline-flex h-12 sm:h-14 items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 backdrop-blur-sm px-8 sm:px-10 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                    <svg
                      className="mr-2 h-5 w-5 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Our Projects
                  </button>
                </div>
                <div
                  className={`grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 transition-all duration-500 overflow-hidden ${isVideoPlaying ? "max-h-0 opacity-0 mt-0" : "max-h-96 opacity-100 mt-12 sm:mt-16"
                    }`}
                >
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white">25+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div
                className={`flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-700 ${isVideoPlaying ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
              >
                <div className="relative group w-full max-w-2xl">
                  {!isVideoPlaying ? (
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-72 h-56 sm:w-80 sm:h-60 lg:w-80 lg:h-60 xl:w-96 xl:h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm mx-auto">
                        <img
                          src="/placeholder.svg?height=288&width=384&text=Steel+Building+Demo"
                          alt="Steel Building Demo"
                          className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center">
                          <button
                            className="group-hover:scale-110 transition-all duration-300 relative"
                          >
                            <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-xl animate-pulse" />
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                              <svg
                                className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50">
                          <div className="absolute inset-0 rounded-2xl border-2 border-blue-300/30 animate-ping" />
                        </div>
                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
                          <span className="text-blue-900 font-semibold text-sm sm:text-base">🎬 Watch Our Process</span>
                        </div>
                      </div>
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce opacity-80" />
                      <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-white to-blue-200 rounded-full animate-pulse opacity-80" />
                      <div className="absolute top-1/2 -right-6 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-60" />
                    </div>
                  ) : (
                    <div className="relative w-full">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                        // onPause={handleVideoPause}
                        // onEnded={handleVideoPause}
                        >
                          <source src="/demo-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <button
                        // onClick={handleVideoPause}
                        className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transform hidden sm:block transition-all duration-500 ${isVideoPlaying ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs sm:text-sm text-white/90 font-medium">Discover More</span>
            <div className="relative">
              <div className="h-8 w-5 sm:h-10 sm:w-6 rounded-full border-2 border-white/70 flex justify-center">
                <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white/90 rounded-full mt-2 animate-bounce" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse" />
            </div>
          </div>
        </div>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-full max-w-5xl aspect-video">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-12 sm:-top-16 right-0 text-white hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video className="w-full h-full rounded-xl shadow-2xl" controls autoPlay src="/demo-video.mp4">
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>
    </>
  )
}
