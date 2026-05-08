/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  GraduationCap, 
  Briefcase, 
  Award, 
  User,
  ExternalLink,
  ChevronRight,
  Anchor,
  Box,
  Bike,
  DollarSign
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'model' | 'trip' | 'ppt' | 'video'>('portfolio');

  return (
    <div className="min-h-screen pb-20">
      {/* Background Accent */}
      <div className="fixed top-0 right-0 w-1/3 h-full bg-brand-light -z-10 clip-path-diagonal hidden lg:block" />
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-center gap-4 md:gap-8">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`px-3 py-2 text-sm md:text-base font-display font-semibold transition-all relative ${activeTab === 'portfolio' ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
            id="tab-portfolio"
          >
            個人履歷
            {activeTab === 'portfolio' && (
              <motion.div layoutId="navLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('model')}
            className={`px-3 py-2 text-sm md:text-base font-display font-semibold transition-all relative ${activeTab === 'model' ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
            id="tab-model"
          >
            3D 模型
            {activeTab === 'model' && (
              <motion.div layoutId="navLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('trip')}
            className={`px-3 py-2 text-sm md:text-base font-display font-semibold transition-all relative ${activeTab === 'trip' ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
            id="tab-trip"
          >
            連假計畫
            {activeTab === 'trip' && (
              <motion.div layoutId="navLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('ppt')}
            className={`px-3 py-2 text-sm md:text-base font-display font-semibold transition-all relative ${activeTab === 'ppt' ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
            id="tab-ppt"
          >
            連假 PPT
            {activeTab === 'ppt' && (
              <motion.div layoutId="navLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`px-3 py-2 text-sm md:text-base font-display font-semibold transition-all relative ${activeTab === 'video' ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600'}`}
            id="tab-video"
          >
            AI 影片
            {activeTab === 'video' && (
              <motion.div layoutId="navLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {activeTab === 'portfolio' && (
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header / Hero */}
            <header className="container mx-auto px-6 pt-12 md:pt-20">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Profile Photo Placeholder */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-8 border-white shadow-xl overflow-hidden bg-slate-200">
                    <img 
                      src="https://drive.google.com/thumbnail?id=15CNS8dCfhqA8YNmTUm4hTmSJ0jlzD2Jv&sz=w800" 
                      alt="張嵃甯"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-primary p-3 rounded-full shadow-lg text-white">
                    <Anchor size={24} />
                  </div>
                </motion.div>

                {/* Intro Info */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div {...fadeIn}>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 flex flex-wrap justify-center md:justify-start items-baseline gap-x-4">
                      張嵃甯 
                      <span className="text-2xl md:text-4xl text-brand-primary font-medium">CHANG YAN NING</span>
                    </h1>
                  </motion.div>

                  <motion.div 
                    className="mt-6 flex flex-col items-center md:items-start gap-3 text-slate-500"
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>雙魚座 | B型 | 2007-03-12</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      <a href="mailto:A111182144@NKUST.EDU.TW" className="hover:text-brand-primary transition-colors">A111182144@NKUST.EDU.TW</a>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div 
                    className="mt-8 flex justify-center md:justify-start gap-4"
                    {...fadeIn}
                    transition={{ delay: 0.3 }}
                  >
                    {[
                      { icon: <Linkedin size={20} />, href: "#" },
                      { icon: <Instagram size={20} />, href: "#" },
                      { icon: <Youtube size={20} />, href: "#" },
                      { icon: <Facebook size={20} />, href: "#" },
                      { icon: <Twitter size={20} />, href: "#" }
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-brand-primary transition-all hover:scale-110"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </header>

            <main className="container mx-auto px-6 mt-16 md:mt-24 space-y-20">
              {/* Professional Summary */}
              <motion.section 
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-4xl glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary" />
                <p className="text-slate-700 leading-relaxed text-lg md:text-xl">
                  張嵃甯，就讀航運技術—航海科，具備良好的航海專業基礎與海洋相關知識。對海象、洋流與航行安全等議題有濃厚興趣，學習態度認真，能主動思考並解決問題。面對課業與實習挑戰時，積極負責，持續精進專業能力，為未來航海發展做好準備。
                </p>
              </motion.section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education & Experience */}
                <div className="space-y-16">
                  <motion.section viewport={{ once: true }} initial="initial" whileInView="animate" variants={staggerContainer}>
                    <h2 className="section-tag">實習經驗</h2>
                    <div className="space-y-8 ml-2 py-4">
                      <motion.div variants={fadeIn} className="relative pl-8 border-l-2 border-brand-primary/20">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-brand-primary" />
                        <div className="text-brand-primary font-bold tracking-wider mb-2">2025-05 ~ 2025-06</div>
                        <h3 className="text-xl font-bold text-slate-800">御風輪實習</h3>
                      </motion.div>
                    </div>
                  </motion.section>

                  <motion.section viewport={{ once: true }} initial="initial" whileInView="animate" variants={staggerContainer}>
                    <h2 className="section-tag">學歷</h2>
                    <div className="space-y-8 ml-2 py-4">
                      <motion.div variants={fadeIn} className="relative pl-8 border-l-2 border-brand-primary/20">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-brand-primary" />
                        <div className="text-brand-primary font-bold tracking-wider mb-2">2022-09 ~ 2027-06</div>
                        <h3 className="text-xl font-bold text-slate-800">高雄科技大學</h3>
                        <div className="text-slate-600 mt-1 flex items-center gap-2">
                          <GraduationCap size={16} /> 航海學系 : 在學中
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>
                </div>

                {/* Languages & Certificates */}
                <div className="space-y-16">
                  <motion.section viewport={{ once: true }} initial="initial" whileInView="animate" variants={staggerContainer}>
                    <h2 className="section-tag">專業證照</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {["基安證照", "醫療急救", "基礎滅火及進階滅火", "救生艇", "保全證照"].map((cert, i) => (
                        <motion.div 
                          key={i}
                          variants={fadeIn}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-brand-primary/30 transition-colors shadow-sm group"
                        >
                          <div className="p-2 rounded-lg bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <Award size={20} />
                          </div>
                          <span className="font-semibold text-slate-700">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  <motion.section viewport={{ once: true }} initial="initial" whileInView="animate" variants={staggerContainer}>
                    <h2 className="section-tag">語言能力</h2>
                    <div className="grid grid-cols-2 gap-6">
                      {[{ name: "英文", level: "精通" }, { name: "台語", level: "精通" }].map((lang, i) => (
                        <motion.div 
                          key={i}
                          variants={fadeIn}
                          className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:bg-brand-light/20 transition-colors"
                        >
                          <h3 className="text-2xl font-bold text-slate-800 mb-2">{lang.name}</h3>
                          <div className="bg-slate-200 text-slate-600 px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            {lang.level}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                </div>
              </div>

              {/* Autobiography */}
              <motion.section 
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                variants={staggerContainer}
                id="autobiography"
                className="mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="section-tag mb-0">自傳</h2>
                  <div className="h-px bg-slate-200 flex-1" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <motion.div variants={fadeIn} className="lg:col-span-2 space-y-6 text-slate-700 leading-relaxed text-lg">
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                      <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                        <User size={20} /> 中文自傳
                      </h3>
                      <div className="space-y-6">
                        <p>您好，我是張嵃甯，目前就讀國立高雄科技大學航運技術系。自入學以來，我對海運產業充滿熱忱，並透過課程學習與實作了解船舶運作、航行安全及航運管理等相關知識。</p>
                        <p>我的個性活潑開朗，喜歡挑戰與嘗試新事物，也熱愛各類戶外活動，例如露營及爬山。曾於餐飲業服務的經驗，使我學會傾聽顧客需求、維持良好溝通，並在團隊中發揮協助與支援的角色。</p>
                        <p>我期望能將所學應用於實務工作中，在貴公司學習更多專業知識與現場經驗，並為團隊貢獻心力。</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn} className="bg-brand-primary p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-4">追求卓越</h3>
                      <p className="text-brand-light/90 leading-relaxed">"航行不僅僅是從 A 點到 B 點，而是在浩瀚海洋中不斷尋找自我價值與專業極限的過程。"</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/20">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center"><span>專業技能</span><span className="font-mono">90%</span></div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-white" />
                        </div>
                        <div className="flex justify-between items-center mt-2"><span>團隊協作</span><span className="font-mono">95%</span></div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            </main>
          </motion.div>
        )}

        {activeTab === 'model' && (
          <motion.div 
            key="model"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-6 pt-12 md:pt-20"
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div>
                  <h2 className="section-tag mb-2">3D 模型展示</h2>
                  <h1 className="text-4xl font-display font-bold text-slate-900">互動式船舶模型</h1>
                  <p className="text-slate-500 mt-2">利用 Tripo AI 產生的 3D 模擬展示，提供全方位視覺細節。</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-brand-light text-brand-primary rounded-lg">
                      <Box size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">來源</div>
                      <div className="font-semibold text-slate-700">Tripo AI</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl aspect-video relative group">
                <iframe 
                  src="https://studio.tripo3d.ai/3d-model/789e7a7f-e59b-41b4-ba79-97e2169dc75e?invite_code=KRZP87" 
                  className="w-full h-full border-none"
                  title="3D Model Viewer"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md p-4 rounded-xl text-white text-sm flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="flex items-center gap-4">
                    <span>🖱️ 左鍵旋轉</span>
                    <span>🖐️ 右鍵平移</span>
                    <span>🔍 滾輪縮放</span>
                  </div>
                  <div className="hidden md:block opacity-70">Interactive Preview</div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "全方位視角", desc: "支援 360 度旋轉查看每個角落細節。" },
                  { title: "AI 生成技術", desc: "採用先進 AI 運算生成高精度模型。" },
                  { title: "即時互動", desc: "可隨時透過滑鼠操作模型視角與大小。" }
                ].map((feature, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'trip' && (
          <motion.div 
            key="trip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-6 pt-12 md:pt-20 pb-20"
          >
            <div className="max-w-5xl mx-auto">
              <header className="mb-16 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand-light text-brand-primary px-4 py-2 rounded-full font-bold text-sm tracking-widest mb-6">
                  <Bike size={16} /> 2026 清明連假特輯
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                  大漢溪水系「溯流而下」<br/><span className="text-brand-primary">生態野營之旅</span>
                </h1>
                <p className="mt-6 text-xl text-slate-500 max-w-2xl leading-relaxed">
                  騎乘機車探索水源地森林、人工濕地與感潮帶交界，深入了解自然與城市共存的河川故事。
                </p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-12">
                  {[
                    {
                      day: "Day 1",
                      date: "4/3 (五)",
                      title: "上游：水源地與森林秘境",
                      items: [
                        { time: "10:00 - 12:00", act: "石門水庫生態巡航", detail: "從「大坪管制站」進入，觀察攔截後的高山水庫生態。重點：溪洲公園，春季可見五色鳥與蝴蝶群。" },
                        { time: "12:30 - 14:00", act: "午餐：石門活魚小吃", detail: "推薦：湳仔溝客家麵或附近石門活魚街。" },
                        { time: "14:30 - 17:00", act: "溪口部落 (上游河階)", detail: "騎機車上羅馬公路，俯瞰大漢溪上游最美的河階台地。" },
                        { time: "18:00", act: "住宿：石門水庫溪洲營地", detail: "生態觀察：夜晚聽拉都希氏赤蛙「拉肚子」鳴叫聲。" }
                      ]
                    },
                    {
                      day: "Day 2",
                      date: "4/4 (六)",
                      title: "中游：人工濕地與河道變遷",
                      items: [
                        { time: "09:30 - 12:00", act: "山豬湖 & 中庄調整池", detail: "探訪廢棄礦區復育的山豬湖園區。觀察人與水循環關係。" },
                        { time: "12:30 - 14:30", act: "午餐：大溪老街豆干盛宴", detail: "名單：老阿伯現滷豆干、游記百年油飯、陳師兄素肉圓。" },
                        { time: "15:00 - 17:30", act: "月眉人工濕地", detail: "觀察 9 個池如何利用蘆葦、香蒲淨化廢水。" },
                        { time: "18:30", act: "野營：三峽/樹林露營區", detail: "建議選擇鶯歌/樹林河濱方便移動的營地。" }
                      ]
                    },
                    {
                      day: "Day 3",
                      date: "4/5 (日)",
                      title: "下游：感潮帶與鹹淡水交界",
                      items: [
                        { time: "10:00 - 13:00", act: "五股濕地", detail: "進入感潮帶。觀察黑面琵鷺候鳥北返中繼站。" },
                        { time: "13:30 - 15:00", act: "午餐：八里左岸風味", detail: "推薦：佘家孔雀蛤、兩相好雙胞胎小吃。" },
                        { time: "15:30 - 18:00", act: "挖子尾自然保留區", detail: "觀察水筆仔、招潮蟹與彈塗魚。退潮時螃蟹壯觀。" },
                        { time: "19:00", act: "住宿：八里文化公園露營區", detail: "遠眺淡水漁人碼頭燈火，享用炭烤海鮮。" }
                      ]
                    },
                    {
                      day: "Day 4",
                      date: "4/6 (一)",
                      title: "河海交界：沙丘生態與賦歸",
                      items: [
                        { time: "09:30 - 12:00", act: "十三行博物館 & 出海口", detail: "觀察大漢溪最終注入台灣海峽地點，海岸防風林與沙丘生態。" },
                        { time: "12:30 - 14:00", act: "最終補給：八里美食", detail: "推薦：吻仔魚粥或排骨酥麵。" },
                        { time: "14:30", act: "賦歸", detail: "沿西濱公路返家，避開清明當天市區車潮。" }
                      ]
                    }
                  ].map((dayInfo, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-12 pb-8 border-l-2 border-slate-100 last:border-0"
                    >
                      <div className="absolute top-0 left-[-13px] w-6 h-6 rounded-full bg-brand-primary border-4 border-white shadow-sm" />
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-brand-primary font-bold text-2xl font-display">{dayInfo.day}</span>
                        <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-md text-sm font-bold">{dayInfo.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-6">{dayInfo.title}</h3>
                      <div className="space-y-6">
                        {dayInfo.items.map((item, j) => (
                          <div key={j} className="glass-card p-6 rounded-2xl hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <span className="text-brand-primary font-mono text-sm font-medium">{item.time}</span>
                              <span className="text-lg font-bold text-slate-900">{item.act}</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="lg:col-span-4 space-y-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Briefcase size={20} className="text-brand-secondary" /> 行前 Checklist</h3>
                    <ul className="space-y-4">
                      {[
                        { title: "必備裝備", items: ["輕量化帳篷", "望遠鏡", "防水外套"] },
                        { title: "數位工具", items: ["潮汐表 App"] },
                        { title: "安全提醒", items: ["河濱強勁海風 (Day 3-4)"] }
                      ].map((grp, i) => (
                        <li key={i}>
                          <div className="text-brand-secondary text-sm font-bold uppercase tracking-wider mb-1">{grp.title}</div>
                          {grp.items.map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-slate-300"><ChevronRight size={14} className="text-brand-primary" /> {item}</div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><DollarSign size={20} className="text-brand-primary" /> 預算預估 (單人)</h3>
                    <div className="space-y-4">
                      {[
                        { label: "機車油錢", cost: "$400 - $600" },
                        { label: "營地費用", cost: "$2,400 - $3,000" },
                        { label: "餐飲費用", cost: "$2,500 - $3,500" },
                        { label: "雜支門票", cost: "$500 - $800" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                          <span className="text-slate-500">{item.label}</span>
                          <span className="font-bold text-slate-800 font-mono">{item.cost}</span>
                        </div>
                      ))}
                      <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                        <span className="font-bold text-slate-900">總計預算</span>
                        <span className="text-2xl font-bold text-brand-primary font-mono">~$7,000</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'ppt' && (
          <motion.div 
            key="ppt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-6 pt-12 md:pt-20"
          >
            <div className="max-w-6xl mx-auto">
              <header className="mb-12 text-center md:text-left">
                <h2 className="section-tag mb-2">簡報展示</h2>
                <h1 className="text-4xl font-display font-bold text-slate-900">連假行程簡報</h1>
                <p className="text-slate-500 mt-2">即時瀏覽 Google Slides 簡報，了解更多詳細行程規劃與設計。</p>
              </header>

              <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-slate-900 aspect-video group">
                <iframe 
                  src="https://docs.google.com/presentation/d/1tJwrnJ_cxkjuZr-7cz9tdFIUpOJaWNUO6Yv4Kq-83c4/embed?start=false&loop=false&delayms=3000" 
                  frameBorder="0" 
                  width="100%" 
                  height="100%" 
                  allowFullScreen={true}
                  id="google-slides-frame"
                ></iframe>
                
                {/* Visual Accent */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="mt-12 p-8 bg-brand-light/30 rounded-3xl border border-brand-light flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">在全螢幕中開啟</h4>
                    <p className="text-sm text-slate-500 text-pretty">點擊下方連結以獲得最佳的閱讀體驗以及簡報中的所有互動功能。</p>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/presentation/d/1tJwrnJ_cxkjuZr-7cz9tdFIUpOJaWNUO6Yv4Kq-83c4/pub?start=false&loop=false&delayms=3000" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  前往簡報 <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'video' && (
          <motion.div 
            key="video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-6 pt-12 md:pt-20"
          >
            <div className="max-w-4xl mx-auto">
              <header className="mb-12 text-center md:text-left">
                <h2 className="section-tag mb-2">影音展示</h2>
                <h1 className="text-4xl font-display font-bold text-slate-900">旅遊 AI 生成影片</h1>
                <p className="text-slate-500 mt-2">結合 AI 影像生成技術，呈現連假旅行的精彩動態預告。</p>
              </header>

              <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl relative bg-black aspect-video group">
                <iframe 
                  src="https://drive.google.com/file/d/1K1BFiGT2AhlH0qLl7awHHn2r4bHNGG11/preview" 
                  className="w-full h-full border-none"
                  allow="autoplay"
                  title="Travel AI Video"
                  id="google-drive-video"
                ></iframe>
              </div>

              <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="p-4 bg-brand-light text-brand-primary rounded-2xl">
                  <Youtube size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">關於此影片</h3>
                  <p className="text-slate-500 mt-1">此影片利用最新 AI 生成工具製作，將旅遊計畫中的景點與氛圍轉化為連貫的視覺畫面，為實際旅程先行預熱。</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-32 py-12 border-t border-slate-100 text-center text-slate-400">
        <div className="container mx-auto px-6">
          <p>© 2024 CHANG YAN NING. All rights reserved.</p>
          <p className="text-xs mt-2 uppercase tracking-widest">Designed for Maritime Excellence</p>
        </div>
      </footer>
    </div>
  );
}
