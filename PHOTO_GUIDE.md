# Photo Management Guide
## Adding Images to Your BenBuildsBiz Website

---

## 📁 Folder Structure

All images go in `/public/images/` organized by category:

```
public/images/
├── hero/          # Hero section images (homepage, page banners)
├── team/          # Personal photos, headshots
├── blog/          # Blog post images
└── clients/       # Client logos, testimonials
```

---

## 🚀 How to Add Photos

### Method 1: Direct Upload (Easiest)

1. **Save your image** to your computer
2. **Drag and drop** the file into the appropriate folder in `/public/images/`
3. **Use it in your code:**

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/mountain.jpg"
  alt="Description"
  width={1200}
  height={600}
  className="w-full h-auto"
/>
```

### Method 2: Via Terminal

```bash
# Navigate to your project
cd "/Users/benjibushes/Sales Dashboard and Demo BenBuildBiz"

# Copy an image from Downloads
cp ~/Downloads/your-photo.jpg public/images/hero/

# Or create from URL
curl -o public/images/hero/mountain.jpg https://example.com/photo.jpg
```

---

## 📐 Image Specifications

### Recommended Sizes

| Location | Dimensions | Format | Max Size |
|----------|------------|--------|----------|
| Hero Images | 1920x1080 | JPG/WebP | 500KB |
| Headshots | 800x800 | JPG/WebP | 200KB |
| Blog Images | 1200x630 | JPG/WebP | 300KB |
| Client Logos | 400x200 | PNG | 100KB |

### Optimization Tips

1. **Use WebP format** for best compression
2. **Resize before uploading** - don't use 4K images
3. **Compress at 80% quality** using tools like:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)

---

## 🎨 Adding Photos to Pages

### Homepage Hero

Edit `/app/page.tsx`:

```tsx
<section className="section-padding border-b-4 border-steel relative">
  <div className="absolute inset-0 opacity-20">
    <Image
      src="/images/hero/mountain.jpg"
      alt="Mountains"
      fill
      className="object-cover"
      priority
    />
  </div>
  <div className="container-custom relative z-10">
    {/* Your hero content */}
  </div>
</section>
```

### About Page Photo

Edit `/app/about/page.tsx`:

```tsx
<div className="grid md:grid-cols-2 gap-8">
  <div>
    <Image
      src="/images/team/ben-headshot.jpg"
      alt="Ben"
      width={600}
      height={600}
      className="border-4 border-steel"
    />
  </div>
  <div>
    {/* Your bio content */}
  </div>
</div>
```

### Blog Post Images

Edit `/app/journal/[slug]/page.tsx`:

```tsx
<article>
  <div className="mb-12">
    <Image
      src="/images/blog/post-title.jpg"
      alt="Post title"
      width={1200}
      height={630}
      className="w-full h-auto border-4 border-steel"
    />
  </div>
  {/* Post content */}
</article>
```

---

## 🎯 Quick Examples

### Background Image with Overlay

```tsx
<div className="relative min-h-[600px]">
  {/* Background */}
  <div className="absolute inset-0 bg-true-black">
    <Image
      src="/images/hero/workout.jpg"
      alt="Training"
      fill
      className="object-cover opacity-30"
    />
  </div>
  
  {/* Content */}
  <div className="relative z-10 container-custom py-24">
    <h1>Your Content Here</h1>
  </div>
</div>
```

### Side-by-Side Images

```tsx
<div className="grid grid-cols-2 gap-4">
  <Image
    src="/images/hero/before.jpg"
    alt="Before"
    width={600}
    height={400}
    className="border-4 border-steel"
  />
  <Image
    src="/images/hero/after.jpg"
    alt="After"
    width={600}
    height={400}
    className="border-4 border-steel"
  />
</div>
```

### Full-Width Banner

```tsx
<div className="w-full border-y-4 border-steel">
  <Image
    src="/images/hero/banner.jpg"
    alt="Banner"
    width={1920}
    height={400}
    className="w-full h-auto"
  />
</div>
```

---

## 🔧 Photo Component (Reusable)

Create `/components/Photo.tsx`:

```tsx
import Image from 'next/image';

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  border?: boolean;
}

export default function Photo({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  border = true 
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${border ? 'border-4 border-steel' : ''} ${className}`}
    />
  );
}
```

Use it:

```tsx
<Photo 
  src="/images/team/ben.jpg" 
  alt="Ben" 
  width={800} 
  height={800} 
/>
```

---

## 📝 Image Naming Convention

Use descriptive, lowercase names with hyphens:

✅ **Good:**
- `ben-headshot-2024.jpg`
- `gym-training-session.jpg`
- `colorado-mountains-hero.jpg`

❌ **Bad:**
- `IMG_1234.jpg`
- `DSC00045.jpg`
- `photo final FINAL (1).jpg`

---

## 🎨 Placeholder Images

Until you have real photos, use:

1. **Unsplash** - https://unsplash.com/
   - Free high-quality photos
   - Search: "mountain", "gym", "workspace"

2. **Pexels** - https://pexels.com/
   - Free stock photos
   - Good fitness/business imagery

3. **Placeholder Services:**
   ```tsx
   <Image 
     src="https://placehold.co/1200x600/000000/FFFFFF?text=Coming+Soon"
     alt="Placeholder"
     width={1200}
     height={600}
   />
   ```

---

## ⚡ Performance Tips

### 1. Always Use `next/image`

✅ **Good:**
```tsx
import Image from 'next/image';
<Image src="/images/hero.jpg" width={1200} height={600} alt="Hero" />
```

❌ **Bad:**
```tsx
<img src="/images/hero.jpg" />  // No optimization!
```

### 2. Add Priority to Above-the-Fold Images

```tsx
<Image 
  src="/images/hero/main.jpg"
  priority  // Loads immediately
  width={1920}
  height={1080}
  alt="Hero"
/>
```

### 3. Use Lazy Loading for Below-the-Fold

```tsx
<Image 
  src="/images/blog/post.jpg"
  loading="lazy"  // Default behavior
  width={1200}
  height={630}
  alt="Blog post"
/>
```

---

## 🚀 Quick Start Checklist

- [ ] Add your headshot to `/public/images/team/`
- [ ] Add 1-2 hero images to `/public/images/hero/`
- [ ] Optimize all images (compress to <500KB)
- [ ] Update About page with your photo
- [ ] Add background image to homepage hero (optional)
- [ ] Test on mobile to ensure images look good

---

## 📧 Need Help?

If you're stuck adding photos:
1. Make sure file is in `/public/images/` folder
2. Check the path starts with `/images/` (not `/public/images/`)
3. Verify the file extension matches (`.jpg` vs `.jpeg`)
4. Clear browser cache if image doesn't show

---

**Last Updated:** Dec 25, 2024  
**Status:** Production Ready

