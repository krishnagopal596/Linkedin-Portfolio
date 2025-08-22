'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Palette, Type, Image, Settings, Linkedin, Copy, Check } from 'lucide-react'

interface CoverTemplate {
  id: string
  name: string
  preview: string
  colors: string[]
  layout: 'minimal' | 'gradient' | 'geometric' | 'professional'
}

const templates: CoverTemplate[] = [
  {
    id: 'minimal-blue',
    name: 'Minimal Blue',
    preview: 'bg-gradient-to-r from-blue-500 to-blue-700',
    colors: ['#3B82F6', '#1D4ED8', '#1E40AF'],
    layout: 'minimal'
  },
  {
    id: 'linkedin-gradient',
    name: 'LinkedIn Gradient',
    preview: 'bg-gradient-to-r from-linkedin to-blue-600',
    colors: ['#0077B5', '#00A0DC', '#0A66C2'],
    layout: 'gradient'
  },
  {
    id: 'professional-dark',
    name: 'Professional Dark',
    preview: 'bg-gradient-to-r from-gray-800 to-gray-900',
    colors: ['#1F2937', '#111827', '#374151'],
    layout: 'professional'
  },
  {
    id: 'geometric-purple',
    name: 'Geometric Purple',
    preview: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
    colors: ['#8B5CF6', '#EC4899', '#EF4444'],
    layout: 'geometric'
  },
  {
    id: 'tech-green',
    name: 'Tech Green',
    preview: 'bg-gradient-to-r from-green-500 to-emerald-600',
    colors: ['#10B981', '#059669', '#047857'],
    layout: 'minimal'
  },
  {
    id: 'creative-orange',
    name: 'Creative Orange',
    preview: 'bg-gradient-to-r from-orange-500 to-red-500',
    colors: ['#F97316', '#EF4444', '#DC2626'],
    layout: 'gradient'
  }
]

export default function LinkedInCoverGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<CoverTemplate>(templates[0])
  const [customText, setCustomText] = useState('Your Name')
  const [subtitle, setSubtitle] = useState('Full-Stack Developer')
  const [tagline, setTagline] = useState('Building innovative digital experiences')
  const [fontSize, setFontSize] = useState(48)
  const [textColor, setTextColor] = useState('#FFFFFF')
  const [showSettings, setShowSettings] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateCover = async () => {
    if (!canvasRef.current) return
    
    setIsGenerating(true)
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // LinkedIn cover dimensions (1584x396 pixels)
    canvas.width = 1584
    canvas.height = 396

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    selectedTemplate.colors.forEach((color, index) => {
      gradient.addColorStop(index / (selectedTemplate.colors.length - 1), color)
    })
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add geometric patterns for geometric layout
    if (selectedTemplate.layout === 'geometric') {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 100 + 50,
          0,
          2 * Math.PI
        )
        ctx.fill()
      }
    }

    // Add text
    ctx.fillStyle = textColor
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // Main title
    ctx.font = `bold ${fontSize}px Inter, sans-serif`
    ctx.fillText(customText, canvas.width / 2, canvas.height / 2 - 30)

    // Subtitle
    ctx.font = `${fontSize * 0.4}px Inter, sans-serif`
    ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 20)

    // Tagline
    ctx.font = `${fontSize * 0.3}px Inter, sans-serif`
    ctx.fillText(tagline, canvas.width / 2, canvas.height / 2 + 60)

    // Add LinkedIn logo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.font = '24px Inter, sans-serif'
    ctx.fillText('LinkedIn', canvas.width - 100, canvas.height - 30)

    setIsGenerating(false)
  }

  const downloadCover = () => {
    if (!canvasRef.current) return
    
    const link = document.createElement('a')
    link.download = 'linkedin-cover.png'
    link.href = canvasRef.current.toDataURL()
    link.click()
  }

  const copyToClipboard = async () => {
    if (!canvasRef.current) return
    
    try {
      const blob = await new Promise<Blob>((resolve) => {
        canvasRef.current!.toBlob((blob) => {
          resolve(blob!)
        })
      })
      
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob
        })
      ])
      
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
    }
  }

  useEffect(() => {
    generateCover()
  }, [selectedTemplate, customText, subtitle, tagline, fontSize, textColor])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cover Preview</h3>
            
            {/* LinkedIn Cover Preview */}
            <div className="relative mb-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Cover Preview</span>
                </div>
                <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '4/1' }}>
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '200px' }}
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={downloadCover}
                  disabled={isGenerating}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button
                  onClick={copyToClipboard}
                  disabled={isGenerating}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Choose Template</h4>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedTemplate.id === template.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-full h-16 rounded ${template.preview} mb-2`}></div>
                    <p className="text-sm font-medium text-gray-900">{template.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customization Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Customize Cover</h3>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Text Inputs */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Type className="w-4 h-4 inline mr-2" />
                  Main Text
                </label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Full-Stack Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Building innovative digital experiences"
                />
              </div>

              {/* Advanced Settings */}
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 pt-4 border-t border-gray-200"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Font Size
                    </label>
                    <input
                      type="range"
                      min="24"
                      max="72"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Small</span>
                      <span>Large</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Palette className="w-4 h-4 inline mr-2" />
                      Text Color
                    </label>
                    <div className="flex space-x-2">
                      {['#FFFFFF', '#000000', '#F3F4F6', '#1F2937'].map((color) => (
                        <button
                          key={color}
                          onClick={() => setTextColor(color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            textColor === color ? 'border-primary-600' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-8 h-8 rounded border border-gray-300"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* LinkedIn Integration Tips */}
          <div className="bg-gradient-to-r from-linkedin/10 to-primary-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Linkedin className="w-5 h-5 mr-2 text-linkedin" />
              LinkedIn Cover Tips
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use high contrast colors for better visibility</li>
              <li>• Keep text concise and professional</li>
              <li>• Include your key skills or value proposition</li>
              <li>• Test how it looks on mobile devices</li>
              <li>• Update your cover regularly to stay current</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 