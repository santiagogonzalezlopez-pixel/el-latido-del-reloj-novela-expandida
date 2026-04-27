$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "store-assets\play\feature-graphic\feature-graphic-1024x500.png"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $out) | Out-Null

function New-StoreBitmap($width, $height) {
  $bitmap = New-Object System.Drawing.Bitmap $width, $height
  $bitmap.SetResolution(144, 144)
  return $bitmap
}

function Set-Quality($graphics) {
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
}

function Draw-CroppedImage($graphics, $image, $destRect, $focusX, $focusY) {
  $srcRatio = $image.Width / $image.Height
  $destRatio = $destRect.Width / $destRect.Height

  if ($srcRatio -gt $destRatio) {
    $srcHeight = $image.Height
    $srcWidth = [int]($srcHeight * $destRatio)
    $srcX = [int](($image.Width - $srcWidth) * $focusX)
    $srcY = 0
  } else {
    $srcWidth = $image.Width
    $srcHeight = [int]($srcWidth / $destRatio)
    $srcX = 0
    $srcY = [int](($image.Height - $srcHeight) * $focusY)
  }

  $srcX = [Math]::Max(0, [Math]::Min($srcX, $image.Width - $srcWidth))
  $srcY = [Math]::Max(0, [Math]::Min($srcY, $image.Height - $srcHeight))
  $graphics.DrawImage($image, $destRect, $srcX, $srcY, $srcWidth, $srcHeight, [System.Drawing.GraphicsUnit]::Pixel)
}

$canvas = New-StoreBitmap 1024 500
$g = [System.Drawing.Graphics]::FromImage($canvas)
Set-Quality $g

$background = New-Object System.Drawing.Drawing2D.LinearGradientBrush `
  ([System.Drawing.Rectangle]::new(0, 0, 1024, 500)), `
  ([System.Drawing.Color]::FromArgb(249, 244, 232)), `
  ([System.Drawing.Color]::FromArgb(222, 210, 184)), `
  0
$g.FillRectangle($background, 0, 0, 1024, 500)
$background.Dispose()

$clock = [System.Drawing.Image]::FromFile((Join-Path $root "assets\editorial\clock-portrait.jpg"))
Draw-CroppedImage $g $clock ([System.Drawing.Rectangle]::new(662, 0, 362, 500)) 0.5 0.42
$clock.Dispose()

$overlay = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(64, 24, 43, 55))
$g.FillRectangle($overlay, 662, 0, 362, 500)
$overlay.Dispose()

$paper = [System.Drawing.Color]::FromArgb(248, 241, 224)
$navy = [System.Drawing.Color]::FromArgb(24, 43, 55)
$sepia = [System.Drawing.Color]::FromArgb(119, 82, 52)
$gold = [System.Drawing.Color]::FromArgb(203, 176, 121)

$panel = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(240, $paper.R, $paper.G, $paper.B))
$g.FillRectangle($panel, 54, 58, 588, 384)
$panel.Dispose()

$border = New-Object System.Drawing.Pen $gold, 3
$g.DrawRectangle($border, 54, 58, 588, 384)
$border.Dispose()

$title1 = New-Object System.Drawing.Font "Georgia", 48, ([System.Drawing.FontStyle]::Regular)
$title2 = New-Object System.Drawing.Font "Georgia", 47, ([System.Drawing.FontStyle]::Regular)
$subtitle = New-Object System.Drawing.Font "Cambria", 25, ([System.Drawing.FontStyle]::Regular)
$small = New-Object System.Drawing.Font "Cambria", 18, ([System.Drawing.FontStyle]::Regular)
$navyBrush = New-Object System.Drawing.SolidBrush $navy
$sepiaBrush = New-Object System.Drawing.SolidBrush $sepia
$goldBrush = New-Object System.Drawing.SolidBrush $gold

$g.DrawString("El latido", $title1, $navyBrush, 94, 106)
$g.DrawString("del reloj", $title2, $navyBrush, 94, 168)
$g.DrawString("Novela expandida", $subtitle, $sepiaBrush, 98, 270)
$g.FillRectangle($goldBrush, 98, 321, 154, 3)
$g.DrawString("Memoria familiar - cartas - viaje", $small, $navyBrush, 98, 352)

$title1.Dispose()
$title2.Dispose()
$subtitle.Dispose()
$small.Dispose()
$navyBrush.Dispose()
$sepiaBrush.Dispose()
$goldBrush.Dispose()
$g.Dispose()

$canvas.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$canvas.Dispose()

Write-Output $out
