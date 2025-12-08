// ========== GOOGLE APPS SCRIPT CONFIGURATION ==========
 const GOOGLE_SCRIPT_PHOTO = 'https://script.google.com/macros/s/AKfycbw-w98RmV3_xnaX_Ok9lMUq6D9QmjCnXImVv_KLIFxgm0itVLtjKVp3gigzChdoJOCjhA/exec';
 const GOOGLE_SCRIPT_ART ='https://script.google.com/macros/s/AKfycbxJPv9VLb_4Nqyv4_ViB3EEbcAvNJ-xf4OnezVddI-Uq73hDbOSqNEJel2EE6NmfFem/exec';
// ========== TRANSLATIONS ==========
const translations = {
    en: {
        coupleNames: "MAHMOUD & SARA",
        saveTheDate: "SAVE THE DATE",
        invitedText: "YOU ARE INVITED",
        countdownTitle: "Counting every moment until we celebrate too",
        countdownSubtitle: "Join us at our engagement celebration",
        daysLabel: "DAYS",
        hoursLabel: "HOURS",
        minutesLabel: "MINUTES",
        secondsLabel: "SECONDS",
        detailsTitle: "Event Details",
        dateTimeTitle: "Date & Time",
        dateText: "Saturday, June 7, 2026",
        timeText: "07:00 PM",
        arrivalText: "Please arrive 30 minutes early",
        locationTitle: "Location",
        venueText: "Diva Garden Hall",
        cityText: "Talaha City",
        loveJourneyText: "Join us as we begin our journey of love together",
        mapBtnText: "View on Map",
        messageTitle: "Our Love Story",
        messageText1: "From the moment we met, we knew our lives would never be the same. Every smile, every laugh, and every moment shared has brought us closer to this beautiful day. We are so excited to begin this new chapter together and we can't wait to celebrate with all of you, our dear family and friends.",
        messageText2: "Your presence is the greatest gift we could ask for as we embark on this journey of love and togetherness. This day marks the beginning of forever, and we are thrilled to share it with those who mean the most to us.",
        uploadTitle: "Share Your Photos From The Day",
        uploadSubtitle: "Scan the QR code or click the button below to upload your photos directly",
        qrLabel: "Scan to upload photos",
        uploadBtnText: "Upload Your Photos",
        uploadNote: "Photos will be added to our shared gallery",
        artdrawTitle: "Leave Your Creative Mark",
        artdrawSubtitle: "Draw something special, write a message, or create art to celebrate our love story",
        brushSizeLabel: "Brush Size:",
        colorLabel: "Color:",
        artistNameLabel: "Your name:",
        clearBtnText: "Clear Canvas",
        saveBtnText: "Save & Share",
        canvasInstructions: "Click and drag to draw",
        galleryTitle: "Guest Creations",
        sampleMessage: "Be the first to leave your creative mark! ✨",
        refreshBtnText: "Refresh Drawings",
        footerWithLove: "With love and gratitude,",
        footerMadeWith: "Made with ❤ for our special day",
        footerDetails: "June 7, 2026 • Diva Garden Hall • Talaha City",
        driveBtnText: "Open Drive Folder"
    },
    ar: {
        coupleNames: "محمود و ساره",
        saveTheDate: "احفظ التاريخ",
        invitedText: "أنت مدعو",
        countdownTitle: "بنعد كل لحظه بتعدي لحد ما نحتفل سوا",
        countdownSubtitle: "انضم إلينا في احتفال خطوبتنا",
        daysLabel: "يوم",
        hoursLabel: "ساعة",
        minutesLabel: "دقيقة",
        secondsLabel: "ثانية",
        detailsTitle: "تفاصيل خطوبتنا",
        dateTimeTitle: "التاريخ والوقت",
        dateText: "السبت، 7 يونيو 2026",
        timeText: "07:00 مساءً",
        arrivalText: "حاولوا توصلوا قبل 30 دقيقة",
        locationTitle: "المكان",
        venueText: "بيت العيلة",
        cityText: "القومية - امبابة",
        loveJourneyText: "شاركونا واحنا بنبقي رحلة حبنا سوا",
        mapBtnText: "عرض على الخريطة",
        messageTitle: "قصة حبنا",
        messageText1: "من اول لحظه شوفنا فيها بعض واتقابلنا ، عرفنا وقتها ان حياتنا مش هتكون زي ما كانت قبل كدا. كل ابتسامة، وكل ضحكة، وكل لحظة شاركناها سوا كانت بتقربنا لليوم دا. احنا متحمسين جدا نبدأ رحلتنا الجديدة مع بعض و متحمسين اننا نحتفل معاكم كلكم،علشان انتم عيلتنا واصحابنا الغالين علينا أوي",
        messageText2: "حضوركم لليوم دا اكبر هدية هنطلبها منكم واحنا بنبدأ رحلتنا من الحب، اليوم دا بيمثل بدابة للأبد، احنا مبسوطين من قلبنا علشان بنشارك اليوم دا معاكم",
        uploadTitle: "متنسوش تشاركونا صوركم في يومنا",
        uploadSubtitle: "امسح رمز QR أو انقر على الزر أدناه لتحميل صورك مباشرة",
        qrLabel: "امسح لتحميل الصور",
        uploadBtnText: "حمّل صورك",
        uploadNote: "ستتم إضافة الصور إلى معرضنا المشترك",
        artdrawTitle: "سيب لنا رساله او بصمه تفرحنا ",
        artdrawSubtitle: "ارسم شيئًا مميزًا، اكتب رسالة، أو أنشئ فنًا للاحتفال بقصة حبنا",
        brushSizeLabel: "حجم الفرشة:",
        colorLabel: "اللون:",
        artistNameLabel: "اسمك:",
        clearBtnText: "مسح اللوحة",
        saveBtnText: "حفظ ومشاركة",
        canvasInstructions: "انقر واسحب للرسم",
        galleryTitle: "إبداعات الضيوف",
        sampleMessage: "كن أول من يترك بصمته الإبداعية! ✨",
        refreshBtnText: "تحديث الرسومات",
        footerWithLove: "مع كل الحب والامتنان،",
        footerMadeWith: "صنع بكل ❤ ليومنا الخاص",
        footerDetails: "٢٦ يونيو ٢٠٢٦ • بيت العيلة - القومية - امبابة",
        driveBtnText: "فتح مجلد Drive"
    }
};

// ========== GLOBAL VARIABLES ==========
let currentLang = 'en';
let currentColor = '#2c3e50';
let currentBrushSize = 3;
let isDrawing = false;

// ========== LANGUAGE MANAGEMENT ==========
function toggleLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    
    const elements = translations[lang] || {};
    for (const key in elements) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = elements[key];
            } else {
                element.textContent = elements[key];
            }
        }
    }
    
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = (lang === 'en') ? 'عربي' : 'EN';
    
    // Update footer
    const footerCouple = document.getElementById('coupleNamesFooter');
    if (footerCouple) footerCouple.textContent = translations[lang].coupleNames || '';
}

document.getElementById('langToggleBtn').addEventListener('click', function() {
    const next = (currentLang === 'en') ? 'ar' : 'en';
    toggleLanguage(next);
});

// Initialize with English
toggleLanguage('en');

// ========== COUNTDOWN ==========
function updateCountdown() {
    const eventDate = new Date('June 7, 2026 19:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ========== GOOGLE DRIVE UPLOAD FUNCTIONS ==========
async function uploadToGoogleDrive(dataURL, fileName, artistName, type = 'drawing') {
    try {
        const base64Data = dataURL.split(',')[1];
        
        const formData = new FormData();
        formData.append('data', base64Data);
        formData.append('filename', fileName);
        formData.append('mimeType', 'image/png');
        formData.append('type', type); // 'drawing' للرسومات
        formData.append('artist', artistName);
        
        const response = await fetch(GOOGLE_SCRIPT_ART, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.result === 'success') {
            return {
                success: true,
                fileUrl: result.fileUrl,
                fileName: result.fileName,
                fileId: result.fileId,
                folderId: result.folderId,
                type: result.type,
                artist: result.artist,
                message: currentLang === 'en' 
                    ? 'Drawing uploaded successfully to Google Drive!' 
                    : 'تم رفع الرسمة بنجاح إلى Google Drive!'
            };
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Google Drive upload error:', error);
        throw error;
    }
}

async function uploadPhotoToGoogleDrive(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = async function(e) {
            try {
                const base64Data = e.target.result.split(',')[1];
                
                const formData = new FormData();
                formData.append('data', base64Data);
                formData.append('filename', file.name);
                formData.append('mimeType', file.type);
                formData.append('type', 'photo'); // 'photo' للصور
                formData.append('artist', 'Photo Upload');
                
                const response = await fetch(GOOGLE_SCRIPT_PHOTO, {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.result === 'success') {
                    resolve({
                        success: true,
                        fileUrl: result.fileUrl,
                        fileName: result.fileName,
                        fileId: result.fileId,
                        folderId: result.folderId,
                        type: result.type,
                        message: currentLang === 'en' 
                            ? 'Photo uploaded successfully!' 
                            : 'تم رفع الصورة بنجاح!'
                    });
                } else {
                    reject(new Error(result.error));
                }
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}


// ========== SIMPLE AND BEAUTIFUL VERSION ==========
function showSimpleBeautifulModal(uploadedCount, totalCount) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    modal.innerHTML = `
        <div style="
            max-width: 400px;
            width: 90%;
            background: white;
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            z-index: 10000;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        ">
            <!-- خط علوي -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ff3860, #3498db);
                border-radius: 20px 20px 0 0;
            "></div>
            
            <!-- القلب -->
            <div style="
                position: relative;
                width: 120px;
                height: 120px;
                margin: 20px auto 30px;
            ">
                <!-- القلب المرسوم -->
                <div style="
                    position: absolute;
                    width: 60px;
                    height: 100px;
                    background: #ff3860;
                    border-radius: 50px 50px 0 0;
                    left: 45px;
                    top: 10px;
                    transform: rotate(-45deg);
                    transform-origin: bottom right;
                    box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
                "></div>

                <div style="
                    position: absolute;
                    width: 60px;
                    height: 100px;
                    background: #ff3860;
                    border-radius: 50px 50px 0 0;
                    right: 40px;
                    top: 10px;
                    transform: rotate(45deg);
                    transform-origin: bottom left;
                    box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
                "></div>

                <!-- علامة ✓ -->
                <div style="
                    position: absolute;
                    top: 72%;
                    left: 55%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    width: 25px;
                    height: 45px;
                    border-bottom: 5px solid white;
                    border-right: 5px solid white;
                    z-index: 10;
                "></div>
            </div>
            
            <!-- العنوان -->
            <h3 style="
                color: #ff3860;
                margin-bottom: 10px;
                font-size: 1.6rem;
            ">
                ${currentLang === 'en' ? '✓ Upload Complete!' : '✓ اكتمل الرفع!'}
            </h3>
            
            <!-- الإحصائيات -->
            <div style="margin: 20px 0;">
                <div style="
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #ff3860;
                    line-height: 1;
                    margin-bottom: 5px;
                ">
                    ${uploadedCount}<span style="font-size: 1.5rem; color: #999;">/${totalCount}</span>
                </div>
                <div style="color: #666; font-size: 0.9rem;">
                    ${currentLang === 'en' ? 'photos uploaded' : 'صورة مرفوعة'}
                </div>
            </div>
            
            <!-- رسالة صغيرة -->
            <p style="color: #555; margin-bottom: 25px; font-size: 0.95rem;">
                ${currentLang === 'en' 
                    ? 'Thank you for sharing your special moments with us! Your photos are now safely stored and will be part of our beautiful memories.' 
                    : 'شكراً لمشاركتكم لحظاتكم الخاصة معنا! تم الآن تخزين صوركم بأمان وستكون جزءًا من ذكرياتنا الجميلة.'}
            </p>
            
            <!-- زر واحد فقط -->
            <button id="closeSimpleModal" style="
                background: #ff3860;
                color: white;
                border: none;
                padding: 12px 35px;
                border-radius: 25px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            ">
                ${currentLang === 'en' ? 'Continue' : 'متابعة'}
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إنشاء القلوب الطائرة
    createFlyingHearts();
    
    // إضافة الأنماط
    const heartStyles = document.createElement('style');
    heartStyles.textContent = `
        /* تأثير نبض القلب */
        @keyframes heartBeat {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            70% { transform: scale(1); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes floatHeart {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .modal > div > div:first-child + div {
            animation: heartBeat 1.5s ease-in-out, floatHeart 3s ease-in-out infinite 1.5s;
        }
        
        /* أنماط القلوب الطائرة */
        .flying-heart {
            position: fixed;
            font-size: 24px;
            z-index: 10001;
            pointer-events: none;
            opacity: 0.9;
            animation: flyHeart 3s linear forwards;
        }
        
        @keyframes flyHeart {
            0% {
                transform: translate(0, 0) rotate(0deg) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translate(var(--endX, 0), var(--endY, -100px)) rotate(360deg) scale(1);
                opacity: 0;
            }
        }
        
        #closeSimpleModal:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
        }
    `;
    document.head.appendChild(heartStyles);
    
    // أحداث الإغلاق
    const closeBtn = modal.querySelector('#closeSimpleModal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        heartStyles.remove();
        // إزالة القلوب الطائرة
        document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
    });
    
    // إغلاق عند النقر خارج الموديل
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            heartStyles.remove();
            document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
        }
    });
    
    // إغلاق تلقائي بعد 5 ثوان
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.remove();
            heartStyles.remove();
            document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
        }
    }, 50000);
}

// دالة لإنشاء القلوب الطائرة
function createFlyingHearts() {
    const heartSymbols = ['❤', '🧡', '💛', '💚', '💙', '💜', '🖤', '💖', '💗', '💓', '💞', '💕'];
    const colors = ['#ff3860', '#ff6b9d', '#ff8fab', '#ff5252', '#ff4081', '#e91e63', '#c2185b'];
    
    // إنشاء 50 قلب يطير
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'flying-heart';
            
            // اختيار رمز قلب عشوائي
            const heartSymbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.innerHTML = heartSymbol;
            
            // خصائص عشوائية
            const size = Math.random() * 30 + 20;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const startX = Math.random() * window.innerWidth;
            const startY = window.innerHeight + 50;
            const endX = (Math.random() - 0.5) * 200;
            const endY = -Math.random() * 200 - 100;
            
            // تطبيق الأنماط
            heart.style.cssText = `
                font-size: ${size}px;
                color: ${color};
                left: ${startX}px;
                top: ${startY}px;
                --endX: ${endX}px;
                --endY: ${endY}px;
                filter: drop-shadow(0 0 5px ${color}80);
                animation-duration: ${Math.random() * 2 + 2}s;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            
            document.body.appendChild(heart);
            
            // إزالة القلب بعد انتهاء الرسوم المتحركة
            setTimeout(() => {
                if (heart.parentElement) heart.remove();
            }, 30000);
            
        }, i * 150);
    }
}

// ========== PHOTO UPLOAD SECTION ==========
function setupPhotoUpload() {
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*,.heic,.heif';
    fileInput.multiple = true;
    fileInput.style.display = 'none';
    
    document.body.appendChild(fileInput);
    
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length === 0) return;
        
        // تحقق من حجم الملفات
        const maxSize = 10 * 1024 * 1024; // 10MB
        const oversizedFiles = files.filter(file => file.size > maxSize);
        
        if (oversizedFiles.length > 0) {
            const message = currentLang === 'en'
                ? `Some files exceed the 10MB limit. Please select smaller files.`
                : `بعض الملفات تتجاوز حد 10 ميغابايت. الرجاء اختيار ملفات أصغر.`;
            alert(message);
            return;
        }
        
        // إظهار نافذة التحميل
        const uploadModal = createUploadModal();
        const progressContainer = uploadModal.querySelector('.upload-progress-container');
        
        let uploadedCount = 0;
        const totalCount = files.length;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            try {
                // إنشاء عنصر تقدم لكل ملف
                const progressItem = createProgressItem(file.name, i + 1, totalCount);
                progressContainer.appendChild(progressItem);
                
                // رفع الملف (التحقق من وجود الدالة)
                if (typeof uploadPhotoToGoogleDrive === 'function') {
                    await uploadPhotoToGoogleDrive(file);
                }
                
                // تحديث التقدم
                uploadedCount++;
                updateProgressItem(progressItem, 100, true);
                
            } catch (error) {
                console.error('Upload error:', error);
                showErrorMessage(currentLang === 'en'
                    ? `Failed to upload ${file.name}`
                    : `فشل رفع الملف ${file.name}`);
            }
        }
        
        // إظهار رسالة النجاح
        setTimeout(() => {
            uploadModal.remove();
            showSimpleBeautifulModal(uploadedCount, totalCount);
        }, 1500);
        
        // إعادة تعيين حقل الإدخال
        fileInput.value = '';
    });
}








// ========== DRAWING SECTION FUNCTIONS ==========
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 500;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Set initial background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentBrushSize;
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

// Brush size control
const brushSize = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');
brushSize.addEventListener('input', function() {
    currentBrushSize = this.value;
    brushSizeValue.textContent = this.value + 'px';
});

// Color selection
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        colorOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        currentColor = this.dataset.color;
    });
});

// Clear canvas
document.getElementById('clearCanvas').addEventListener('click', function() {
    const message = currentLang === 'en'
        ? 'Are you sure you want to clear your drawing?'
        : 'هل أنت متأكد أنك تريد مسح رسمتك؟';
    
    if (confirm(message)) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});

// ========== LOCAL STORAGE FUNCTIONS ==========
function saveToLocalStorage(drawingData) {
    const drawings = JSON.parse(localStorage.getItem('guestDrawings') || '[]');
    drawings.unshift(drawingData);
    
    // Keep only 100 drawings
    if (drawings.length > 100) {
        drawings.length = 100;
    }
    
    localStorage.setItem('guestDrawings', JSON.stringify(drawings));
}

function getLocalDrawings() {
    return JSON.parse(localStorage.getItem('guestDrawings') || '[]');
}

// ========== SAVE DRAWING BUTTON ==========
document.getElementById('saveDrawing').addEventListener('click', async function() {
    const artistName = document.getElementById('artistName').value.trim();
    
    if (!artistName) {
        const message = currentLang === 'en'
            ? 'Please enter your name before saving the drawing.'
            : 'الرجاء إدخال اسمك قبل حفظ الرسمة.';
        alert(message);
        document.getElementById('artistName').focus();
        return;
    }
    
    // Create unique filename
    const fileName = `drawing_${artistName.replace(/\s+/g, '_')}_${Date.now()}.png`;
    
    // Get canvas image
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    
    tempCtx.fillStyle = 'white';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);
    
    const dataURL = tempCanvas.toDataURL('image/png');
    
    // Show saving indicator
    const saveBtn = this;
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = currentLang === 'en' 
        ? '<i class="fas fa-spinner fa-spin"></i> <span id="saveBtnText">Uploading to Google Drive...</span>'
        : '<i class="fas fa-spinner fa-spin"></i> <span id="saveBtnText">جاري الرفع إلى Google Drive...</span>';
    saveBtn.disabled = true;
    
    try {
        // Upload to Google Drive - تأكد من إرسال type = 'drawing'
        const result = await uploadToGoogleDrive(dataURL, fileName, artistName, 'drawing');
        
        if (result.success) {
            console.log('Uploaded to folder:', result.folderId);
            console.log('Type:', result.type);
            
            // Add to local storage and gallery
            const drawingData = {
                id: 'drive_' + Date.now(),
                artist: artistName,
                fileName: result.fileName,
                downloadURL: result.fileUrl,
                thumbnailURL: dataURL,
                fullUrl: dataURL,
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                drive: true,
                folderId: result.folderId,
                type: result.type
            };
            
            saveToLocalStorage(drawingData);
            addDrawingToGallery(drawingData);
            
            // Show success message with folder info
            const folderName = result.folderId === '19ho9T8-nQz2NPFE9-H9E5l8s5uU4bP-Z' 
                ? 'Drawings' 
                : 'Photos';
            
            showSuccessModal(artistName, result.fileUrl, folderName);
            
            // Clear canvas and name
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            document.getElementById('artistName').value = '';
        }
    } catch (error) {
        console.error('Error:', error);
        
        // Fallback to local storage
        const localData = {
            id: 'local_' + Date.now(),
            artist: artistName,
            fileName: fileName,
            thumbnailUrl: dataURL,
            fullUrl: dataURL,
            timestamp: new Date().toISOString(),
            local: true
        };
        
        addDrawingToGallery(localData);
        
        showMessage(
            currentLang === 'en' 
                ? 'Drawing saved locally. Thank you for your contribution!' 
                : 'تم حفظ الرسمة محلياً. شكراً لمساهمتك!',
            'success'
        );
        
        // Clear canvas and name
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        document.getElementById('artistName').value = '';
    } finally {
        saveBtn.innerHTML = originalText;
        toggleLanguage(currentLang);
        saveBtn.disabled = false;
    }
});

// ========== REFRESH DRAWINGS BUTTON ==========
document.getElementById('refreshDrawings').addEventListener('click', function() {
    const btn = this;
    const originalText = btn.innerHTML;
    btn.innerHTML = currentLang === 'en'
        ? '<i class="fas fa-spinner fa-spin"></i> <span id="refreshBtnText">Loading...</span>'
        : '<i class="fas fa-spinner fa-spin"></i> <span id="refreshBtnText">جاري التحميل...</span>';
    btn.disabled = true;
    
    try {
        const drawings = getLocalDrawings();
        
        if (drawings.length > 0) {
            updateGallery(drawings);
            
            const message = currentLang === 'en'
                ? `Loaded ${drawings.length} drawings.`
                : `تم تحميل ${drawings.length} رسمة.`;
            
            showMessage(message, 'success');
        } else {
            const message = currentLang === 'en'
                ? 'No drawings found. Be the first to create one!'
                : 'لم يتم العثور على رسومات. كن أول من ينشئ رسمة!';
            
            showMessage(message, 'info');
        }
    } catch (error) {
        console.error('Error loading drawings:', error);
        const message = currentLang === 'en'
            ? 'Could not load drawings.'
            : 'تعذر تحميل الرسومات.';
        
        showMessage(message, 'warning');
    } finally {
        btn.innerHTML = originalText;
        toggleLanguage(currentLang);
        btn.disabled = false;
    }
});

// ========== GALLERY FUNCTIONS ==========
function addDrawingToGallery(drawing) {
    const gallery = document.getElementById('drawingsGallery');
    const sampleMessage = gallery.querySelector('.sample-message');
    if (sampleMessage) sampleMessage.remove();
    
    const drawingItem = createDrawingItem(drawing);
    gallery.insertBefore(drawingItem, gallery.firstChild);
}

function updateGallery(drawings) {
    const gallery = document.getElementById('drawingsGallery');
    gallery.innerHTML = '';
    
    if (!drawings || drawings.length === 0) {
        const sampleMessage = document.createElement('div');
        sampleMessage.className = 'sample-message';
        sampleMessage.id = 'sampleMessage';
        sampleMessage.textContent = translations[currentLang].sampleMessage;
        gallery.appendChild(sampleMessage);
        return;
    }
    
    // Sort by date (newest first)
    drawings.sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date));
    
    // Show only first 24 drawings
    const displayDrawings = drawings.slice(0, 24);
    
    displayDrawings.forEach(drawing => {
        const drawingItem = createDrawingItem(drawing);
        gallery.appendChild(drawingItem);
    });
    
    // Show count
    const countDiv = document.createElement('div');
    countDiv.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 15px; color: var(--accent-blue); font-weight: 600;';
    
    const driveCount = drawings.filter(d => d.drive).length;
    if (driveCount > 0) {
        countDiv.innerHTML = currentLang === 'en' 
            ? `Showing ${displayDrawings.length} drawings (${driveCount} on Google Drive)` 
            : `عرض ${displayDrawings.length} رسمة (${driveCount} على Google Drive)`;
    } else {
        countDiv.textContent = currentLang === 'en' 
            ? `Showing ${displayDrawings.length} drawings` 
            : `عرض ${displayDrawings.length} رسمة`;
    }
    
    gallery.appendChild(countDiv);
}

function createDrawingItem(drawing) {
    const drawingItem = document.createElement('div');
    drawingItem.className = 'drawing-item';
    
    // Create thumbnail
    const img = document.createElement('img');
    img.src = drawing.thumbnailURL || drawing.thumbnailUrl || drawing.fullUrl || 
              `https://via.placeholder.com/200x150?text=Drawing+by+${drawing.artist}`;
    img.alt = `Drawing by ${drawing.artist}`;
    img.loading = 'lazy';
    img.onerror = function() {
        this.src = `https://via.placeholder.com/200x150?text=Drawing+by+${drawing.artist}`;
    };
    
    // Create artist info display
    const infoDiv = document.createElement('div');
    infoDiv.className = 'artist-name';
    infoDiv.innerHTML = `
        <div><i class="fas fa-user"></i> ${drawing.artist || 'Guest'}</div>
        <div style="font-size: 0.8rem; color: #666; margin-top: 4px;">
            <i class="far fa-calendar"></i> ${drawing.date ? new Date(drawing.date).toLocaleDateString() : 'Unknown date'}
        </div>
        ${drawing.drive ? '<div style="font-size: 0.7rem; color: #4285F4; margin-top: 4px;"><i class="fab fa-google-drive"></i> Google Drive</div>' : ''}
    `;
    
    drawingItem.appendChild(img);
    drawingItem.appendChild(infoDiv);
    
    // Add click event to enlarge
    drawingItem.addEventListener('click', function() {
        showDrawingModal(drawing);
    });
    
    return drawingItem;
}

// ========== MODAL FUNCTIONS ==========
function showDrawingModal(drawing) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => document.body.removeChild(modal));
    
    // Image
    const img = document.createElement('img');
    img.src = drawing.fullUrl || drawing.thumbnailURL || drawing.thumbnailUrl;
    img.style.width = '100%';
    img.style.borderRadius = '10px';
    img.style.marginBottom = '15px';
    img.onerror = function() {
        this.src = `https://via.placeholder.com/400x300?text=Drawing+by+${drawing.artist}`;
    };
    
    // Artist info
    const artistInfo = document.createElement('p');
    artistInfo.style.color = 'var(--primary-blue)';
    artistInfo.style.fontWeight = '600';
    artistInfo.innerHTML = `<i class="fas fa-user"></i> Drawn by: ${drawing.artist || 'Guest'}`;
    
    // Date
    const dateInfo = document.createElement('p');
    dateInfo.style.color = '#666';
    dateInfo.style.fontSize = '0.9rem';
    dateInfo.style.marginTop = '5px';
    const date = drawing.timestamp || drawing.date;
    dateInfo.textContent = date ? new Date(date).toLocaleDateString() : 'Unknown date';
    
    // Storage info
    if (drawing.drive) {
        const storageInfo = document.createElement('p');
        storageInfo.style.color = '#4285F4';
        storageInfo.style.fontSize = '0.8rem';
        storageInfo.style.marginTop = '5px';
        storageInfo.innerHTML = '<i class="fab fa-google-drive"></i> Stored in Google Drive';
        modalContent.appendChild(storageInfo);
    }
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);
    modalContent.appendChild(artistInfo);
    modalContent.appendChild(dateInfo);
    modal.appendChild(modalContent);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
}







function showSuccessModal(artistName, fileUrl, folderName = 'Drawings') {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    modal.innerHTML = `
        <div style="
            max-width: 400px;
            width: 90%;
            background: white;
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            z-index: 10000;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        ">
            <!-- خط علوي -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ff3860, #3498db);
                border-radius: 20px 20px 0 0;
            "></div>
            
            <!-- القلب -->
            <div style="
                position: relative;
                width: 120px;
                height: 120px;
                margin: 20px auto 30px;
            ">
                <!-- القلب المرسوم -->
                <div style="
                    position: absolute;
                    width: 60px;
                    height: 100px;
                    background: #ff3860;
                    border-radius: 50px 50px 0 0;
                    left: 45px;
                    top: 10px;
                    transform: rotate(-45deg);
                    transform-origin: bottom right;
                    box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
                "></div>

                <div style="
                    position: absolute;
                    width: 60px;
                    height: 100px;
                    background: #ff3860;
                    border-radius: 50px 50px 0 0;
                    right: 40px;
                    top: 10px;
                    transform: rotate(45deg);
                    transform-origin: bottom left;
                    box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
                "></div>

                <!-- علامة ✓ -->
                <div style="
                    position: absolute;
                    top: 72%;
                    left: 55%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    width: 25px;
                    height: 45px;
                    border-bottom: 5px solid white;
                    border-right: 5px solid white;
                    z-index: 10;
                "></div>
            </div>
            
            <!-- العنوان -->
            <h3 style="
                color: #ff3860;
                margin-bottom: 10px;
                font-size: 1.6rem;
            ">
                ${currentLang === 'en' ? '✓ Drawing Saved!' : '✓ تم حفظ الرسمة!'}
            </h3>
            
            <!-- الإحصائيات -->
            <div style="margin: 20px 0;">
                <div style="
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #ff3860;
                    line-height: 1;
                    margin-bottom: 5px;
                ">
                    1<span style="font-size: 1.5rem; color: #999;">/1</span>
                </div>
                <div style="color: #666; font-size: 0.9rem;">
                    ${currentLang === 'en' ? 'drawing uploaded' : 'رسمة مرفوعة'}
                </div>
            </div>
            
            <!-- رسالة صغيرة -->
            <p style="color: #555; margin-bottom: 25px; font-size: 0.95rem;">
                ${currentLang === 'en' 
                    ? `Thank you ${artistName} for sharing your creativity with us! Your drawing has been saved to our engagment memories.` 
                    : `شكراً ${artistName} لمشاركة إبداعك معنا! تم حفظ رسمتك في ذاكرة خطوبتنا.`}
            </p>
            
            <!-- زر واحد فقط -->
            <button id="closeDrawingModal" style="
                background: #ff3860;
                color: white;
                border: none;
                padding: 12px 35px;
                border-radius: 25px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            ">
                ${currentLang === 'en' ? 'Continue' : 'متابعة'}
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إنشاء القلوب الطائرة - نفس الدالة بالضبط
    createFlyingHearts();
    
    // إضافة الأنماط - نفس الأنماط بالضبط
    const heartStyles = document.createElement('style');
    heartStyles.textContent = `
        /* تأثير نبض القلب */
        @keyframes heartBeat {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.1); }
            70% { transform: scale(1); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes floatHeart {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .modal > div > div:first-child + div {
            animation: heartBeat 1.5s ease-in-out, floatHeart 3s ease-in-out infinite 1.5s;
        }
        
        /* أنماط القلوب الطائرة */
        .flying-heart {
            position: fixed;
            font-size: 24px;
            z-index: 10001;
            pointer-events: none;
            opacity: 0.9;
            animation: flyHeart 3s linear forwards;
        }
        
        @keyframes flyHeart {
            0% {
                transform: translate(0, 0) rotate(0deg) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translate(var(--endX, 0), var(--endY, -100px)) rotate(360deg) scale(1);
                opacity: 0;
            }
        }
        
        #closeDrawingModal:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 56, 96, 0.3);
        }
    `;
    document.head.appendChild(heartStyles);
    
    // أحداث الإغلاق
    const closeBtn = modal.querySelector('#closeDrawingModal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        heartStyles.remove();
        // إزالة القلوب الطائرة
        document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
    });
    
    // إغلاق عند النقر خارج الموديل
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            heartStyles.remove();
            document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
        }
    });
    
    // إغلاق تلقائي بعد 5 ثوان
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.remove();
            heartStyles.remove();
            document.querySelectorAll('.flying-heart').forEach(heart => heart.remove());
        }
    }, 50000);
}







function showMessage(message, type = 'info') {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Icon based on type
    let icon = 'fa-info-circle';
    let color = 'var(--accent-blue)';
    
    if (type === 'success') {
        icon = 'fa-check-circle';
        color = '#2ecc71';
    } else if (type === 'error') {
        icon = 'fa-exclamation-circle';
        color = '#e74c3c';
    } else if (type === 'warning') {
        icon = 'fa-exclamation-triangle';
        color = '#f39c12';
    }
    
    modalContent.innerHTML = `
        <button class="modal-close">&times;</button>
        <i class="fas ${icon}" style="font-size: 4rem; color: ${color}; margin-bottom: 20px;"></i>
        <h3 style="color: var(--primary-blue); margin-bottom: 15px;">${type === 'success' ? 'Success!' : type === 'error' ? 'Error' : type === 'warning' ? 'Notice' : 'Info'}</h3>
        <p style="color: #666; margin-bottom: 20px;">${message}</p>
        <button class="canvas-btn primary" id="closeMessageBtn">OK</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close events
    modal.querySelector('.modal-close').addEventListener('click', () => document.body.removeChild(modal));
    modal.querySelector('#closeMessageBtn').addEventListener('click', () => document.body.removeChild(modal));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ========== HELPER FUNCTIONS ==========
function createUploadModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <button class="modal-close">&times;</button>
            <h3 style="color: var(--primary-blue); margin-bottom: 20px;">
                <i class="fas fa-cloud-upload-alt"></i> 
                ${currentLang === 'en' ? 'Uploading Photos' : 'جاري رفع الصور'}
            </h3>
            <div class="upload-progress-container" style="margin-top: 20px;"></div>
            <div style="margin-top: 30px; text-align: center;">
                <div class="loading-spinner"></div>
                <p style="color: #666; margin-top: 10px;">
                    ${currentLang === 'en' 
                        ? 'Please wait while your photos are being uploaded...' 
                        : 'الرجاء الانتظار أثناء رفع الصور...'}
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إضافة حدث الإغلاق
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    return modal;
}

function createProgressItem(fileName, current, total) {
    const div = document.createElement('div');
    div.className = 'progress-item';
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span style="font-size: 0.9rem; color: var(--primary-blue);">${fileName}</span>
            <span style="font-size: 0.8rem; color: #666;">${current}/${total}</span>
        </div>
        <div class="progress-bar" style="height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
            <div class="progress-fill" style="height: 100%; width: 0%; background: linear-gradient(to right, var(--accent-blue), var(--light-blue)); transition: width 0.3s;"></div>
        </div>
    `;
    return div;
}

function updateProgressItem(progressItem, percentage, complete = false) {
    const fill = progressItem.querySelector('.progress-fill');
    fill.style.width = `${percentage}%`;
    
    if (complete) {
        progressItem.querySelector('.progress-fill').style.background = '#2ecc71';
    }
}

function showSuccessMessage(message) {
    alert(message);
}

function showErrorMessage(message) {
    alert(message);
}

// ========== BUTTON HANDLERS ==========
document.getElementById('mapBtn').addEventListener('click', function() {
    const message = currentLang === 'en'
        ? 'Map feature would open here showing directions to Diva Garden Hall, Talaha City.'
        : 'ستفتح ميزة الخريطة هنا لعرض الاتجاهات إلى قاعة ديفا جاردن، مدينة طلحة.';
    alert(message);
});

// ========== FLOATING HEARTS ==========
function createHearts() {
    const container = document.getElementById('hearts-container');
    const colors = ['#f1c40f', '#3498db', '#5dade2', '#aed6f1'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        heart.style.cssText = `width: ${size}px; height: ${size}px; left: ${posX}%; top: ${posY}%; background: ${color}; opacity: ${Math.random() * 0.5 + 0.2}; animation: float ${duration}s ease-in-out ${delay}s infinite;`;
        heart.style.setProperty('--heart-color', color);
        heart.style.setProperty('--size', `${size}px`);
        container.appendChild(heart);
    }
    
    const style = document.createElement('style');
    style.textContent = `@keyframes float { 0% { transform: translateY(0) rotate(45deg) scale(1); opacity: 0.7; } 50% { transform: translateY(-100px) rotate(45deg) scale(1.1); opacity: 0.3; } 100% { transform: translateY(-200px) rotate(45deg) scale(1); opacity: 0; } } .heart:before, .heart:after { width: var(--size); height: var(--size); background: var(--heart-color); }`;
    document.head.appendChild(style);
}

createHearts();

// ========== INITIAL LOAD ==========
window.addEventListener('load', function() {
    // Setup photo upload
    setupPhotoUpload();
    
    // Load drawings from local storage
    const drawings = getLocalDrawings();
    if (drawings.length > 0) {
        updateGallery(drawings);
    }
    
    // Add event listener for Enter key in artist name field
    document.getElementById('artistName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('saveDrawing').click();
        }
    });
});

// Add styles for progress items
const additionalStyles = `
    .progress-item {
        margin-bottom: 15px;
        padding: 10px;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--accent-blue);
    }
    
    .upload-progress-container {
        max-height: 300px;
        overflow-y: auto;
        padding: 10px;
    }
    
    .drive-badge {
        display: inline-block;
        background: #4285F4;
        color: white;
        padding: 2px 6px;
        border-radius: 10px;
        font-size: 0.7rem;
        margin-left: 5px;
    }
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);






