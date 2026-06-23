export const scenario_forest_veridianblight_47_02 = {
	"scenario_id": "forest_veridianblight_47_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 안개가 짙고, 길은 보이지 않았다.",
						"english": "The forest grew deeper. The fog was thick, and the path was unseen.",
						"japanese": "森はさらに深まった。霧が濃く、道は見えなかった。",
						"chinese": "森林愈发深邃。浓雾弥漫，不见道路。",
						"french": "La forêt s'épaississait. Le brouillard était dense, et le chemin était invisible.",
						"spanish": "El bosque se hizo más profundo. La niebla era densa y el camino no se veía.",
						"vietnamese": "Rừng càng thêm sâu. Sương mù dày đặc, đường đi không thấy.",
						"thai": "ป่าลึกขึ้น หมอกหนาและมองไม่เห็นทาง",
						"hindi": "जंगल और गहरा होता गया। कोहरा घना था और रास्ता दिखाई नहीं दे रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너무 깊이 들어온 거 아니야?",
						"english": "Haven't we come too deep?",
						"japanese": "深く入りすぎたのではないか？",
						"chinese": "我们是不是走得太深了？",
						"french": "Ne sommes-nous pas allés trop loin ?",
						"spanish": "¿No hemos entrado demasiado profundo?",
						"vietnamese": "Chúng ta đã đi quá sâu rồi phải không?",
						"thai": "เราเข้ามาลึกเกินไปหรือเปล่า?",
						"hindi": "क्या हम बहुत गहरे नहीं आ गए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저기 누가 있어!",
						"english": "Someone's there!",
						"japanese": "誰かいる！",
						"chinese": "那里有人！",
						"french": "Il y a quelqu'un là-bas !",
						"spanish": "¡Hay alguien ahí!",
						"vietnamese": "Có ai đó!",
						"thai": "มีใครบางคนอยู่ตรงนั้น!",
						"hindi": "वहाँ कोई है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "briar"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "놀라워! 생명 에너지가 고도로 응축된 곳이야!",
						"english": "Amazing! This place is highly condensed with life energy!",
						"japanese": "驚きだ！ここは生命エネルギーが高度に凝縮されている場所だ！",
						"chinese": "真是惊人！这里是生命能量高度凝聚之地！",
						"french": "Incroyable ! Cet endroit est hautement condensé en énergie vitale !",
						"spanish": "¡Asombroso! ¡Este lugar está altamente condensado con energía vital!",
						"vietnamese": "Tuyệt vời! Nơi này là nơi năng lượng sống được cô đọng cao độ!",
						"thai": "น่าทึ่ง! ที่นี่คือที่ที่พลังงานชีวิตถูกอัดแน่นอย่างเข้มข้น!",
						"hindi": "अद्भुत! यह जगह जीवन ऊर्जा से अत्यधिक संघनित है!"
					}
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "이 숲은… 살아있어. 노래하고 있어.",
						"english": "This forest... it's alive. It's singing.",
						"japanese": "この森は…生きている。歌っている。",
						"chinese": "这片森林…它活着。它在歌唱。",
						"french": "Cette forêt… elle est vivante. Elle chante.",
						"spanish": "Este bosque... está vivo. Está cantando.",
						"vietnamese": "Khu rừng này... nó đang sống. Nó đang hát.",
						"thai": "ป่านี้...มีชีวิต มันกำลังร้องเพลง",
						"hindi": "यह जंगल... जीवित है। यह गा रहा है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "멀리서 신비로운 빛이 반짝였다. 숲은 그 빛에 이끌리는 듯했다.",
						"english": "A mysterious light flickered in the distance. The forest seemed drawn to it.",
						"japanese": "遠くで神秘的な光が瞬いた。森はその光に誘われるようだった。",
						"chinese": "远处闪烁着神秘的光芒。森林似乎被那光芒所吸引。",
						"french": "Au loin, une lumière mystérieuse scintilla. La forêt semblait attirée par elle.",
						"spanish": "A lo lejos, una luz misteriosa parpadeó. El bosque parecía atraído por ella.",
						"vietnamese": "Từ xa, một ánh sáng huyền bí lấp lánh. Rừng dường như bị ánh sáng đó thu hút.",
						"thai": "แสงลึกลับส่องประกายอยู่ไกลๆ ป่าดูเหมือนจะถูกดึงดูดด้วยแสงนั้น",
						"hindi": "दूर से एक रहस्यमय प्रकाश टिमटिमा रहा था। जंगल उसकी ओर आकर्षित लग रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "들려? 이 아름다운 소리…",
						"english": "Hear it? This beautiful sound...",
						"japanese": "聞こえる？この美しい音が…",
						"chinese": "听到了吗？这美妙的声音……",
						"french": "Tu entends ? Ce son magnifique…",
						"spanish": "¿Lo oyes? Este sonido hermoso...",
						"vietnamese": "Nghe thấy không? Âm thanh tuyệt đẹp này...",
						"thai": "ได้ยินไหม? เสียงที่ไพเราะนี้...",
						"hindi": "सुन रहे हो? यह मधुर ध्वनि..."
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "브라이어! 정신 차려!",
						"english": "Briar! Snap out of it!",
						"japanese": "ブライア！しっかりして！",
						"chinese": "布莱尔！清醒过来！",
						"french": "Briar ! Reprends-toi !",
						"spanish": "¡Briar! ¡Reacciona!",
						"vietnamese": "Briar! Tỉnh táo lại đi!",
						"thai": "ไบรอา! ตั้งสติหน่อย!",
						"hindi": "ब्रायलर! होश में आओ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "모든 죄책감이 사라지는 기분이야…",
						"english": "All the guilt just melts away...",
						"japanese": "全ての罪悪感が消えていくようだ…",
						"chinese": "所有的罪恶感都消失了……",
						"french": "Toute la culpabilité s'envole…",
						"spanish": "Siento que toda la culpa desaparece...",
						"vietnamese": "Cảm giác mọi tội lỗi đều tan biến...",
						"thai": "ความรู้สึกผิดทั้งหมดหายไป...",
						"hindi": "सारा अपराध-बोध मिटता जा रहा है..."
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 노래에 홀리면 안 돼!",
						"english": "Don't be enchanted by that song!",
						"japanese": "その歌に惑わされてはいけない！",
						"chinese": "别被那首歌迷惑了！",
						"french": "Ne te laisse pas envoûter par cette chanson !",
						"spanish": "¡No te dejes hipnotizar por esa canción!",
						"vietnamese": "Đừng để bị bài hát đó mê hoặc!",
						"thai": "อย่าหลงเสน่ห์เพลงนั้น!",
						"hindi": "उस गीत से मोहित मत हो!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "노랫소리가 숲을 감싸고, 마음 깊은 곳의 후회를 자극하는 듯했다.",
						"english": "The song enveloped the forest, seemingly stirring up deep-seated regrets.",
						"japanese": "その歌声は森を包み込み、心の奥底の後悔を刺激するように感じられた。",
						"chinese": "歌声弥漫在森林中，仿佛激起了内心深处的悔恨。",
						"french": "Le chant enveloppa la forêt, semblant remuer des regrets enfouis au plus profond de l'âme.",
						"spanish": "El canto envolvió el bosque, pareciendo despertar arrepentimientos profundos.",
						"vietnamese": "Tiếng hát bao trùm khu rừng, dường như khơi dậy những hối tiếc sâu thẳm trong lòng.",
						"thai": "เสียงเพลงโอบล้อมป่า ราวกับกระตุ้นความรู้สึกผิดที่ฝังลึกในใจ",
						"hindi": "गाने की आवाज़ जंगल को घेरे हुए थी, मानो दिल की गहराइयों में दबे पछतावे को जगा रही हो।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "briar",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "빛… 빛이 나를 부르고 있어.",
						"english": "Light... the light is calling me.",
						"japanese": "光… 光が私を呼んでいる。",
						"chinese": "光……光在呼唤我。",
						"french": "La lumière… la lumière m'appelle.",
						"spanish": "Luz... la luz me está llamando.",
						"vietnamese": "Ánh sáng... ánh sáng đang gọi tôi.",
						"thai": "แสง... แสงกำลังเรียกฉัน",
						"hindi": "रोशनी... रोशनी मुझे बुला रही है।"
					}
				},
				{
					"content": {
						"korean": "빛은 더욱 강렬해졌고, 숲의 나무들 사이로 기묘한 형체들이 어른거렸다.",
						"english": "The light intensified, and strange figures flickered among the trees in the forest.",
						"japanese": "光はさらに強くなり、森の木々の間から奇妙な影がちらついていた。",
						"chinese": "光线变得更加强烈，奇特的形体在森林的树木间若隐若现。",
						"french": "La lumière s'intensifia, et d'étranges silhouettes vacillèrent parmi les arbres de la forêt.",
						"spanish": "La luz se hizo más intensa, y figuras extrañas parpadearon entre los árboles del bosque.",
						"vietnamese": "Ánh sáng càng trở nên mãnh liệt, và những hình thù kỳ lạ thấp thoáng giữa những cái cây trong rừng.",
						"thai": "แสงยิ่งรุนแรงขึ้น และร่างแปลกประหลาดก็ปรากฏขึ้นมาระหว่างต้นไม้ในป่า",
						"hindi": "रोशनी और तेज़ हो गई, और जंगल के पेड़ों के बीच अजीब आकृतियाँ मँडरा रही थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저건 뭐야…? 환상인가?",
						"english": "What's that...? Is it an illusion?",
						"japanese": "あれは何だ…？幻なのか？",
						"chinese": "那是什么……？是幻觉吗？",
						"french": "Qu'est-ce que c'est…? Une illusion ?",
						"spanish": "¿Qué es eso...? ¿Es una ilusión?",
						"vietnamese": "Cái gì thế kia...? Là ảo ảnh sao?",
						"thai": "นั่นอะไร...? เป็นภาพลวงตาเหรอ?",
						"hindi": "वह क्या है...? क्या यह भ्रम है?"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "보여? 나의 구원이야…",
						"english": "See? It's my salvation...",
						"japanese": "見える？私の救いだよ…",
						"chinese": "看到了吗？这是我的救赎……",
						"french": "Tu vois ? C'est mon salut…",
						"spanish": "¿Ves? Es mi salvación...",
						"vietnamese": "Thấy không? Đó là sự cứu rỗi của tôi...",
						"thai": "เห็นไหม? นั่นคือความรอดของฉัน...",
						"hindi": "देखा? यह मेरी मुक्ति है..."
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "브라이어는 이미 너무 깊이 빠졌어…",
						"english": "Briar has already fallen too deep...",
						"japanese": "ブライアはもう深みに堕ちてしまった…",
						"chinese": "布莱尔已经陷得太深了……",
						"french": "Briar est déjà tombée trop loin…",
						"spanish": "Briar ya ha caído demasiado profundo...",
						"vietnamese": "Briar đã lún quá sâu rồi...",
						"thai": "ไบรอาหลงเข้าไปลึกเกินไปแล้ว...",
						"hindi": "ब्रायलर पहले ही बहुत गहरे डूब चुका है..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "브라이어는 완전히 이성을 잃고 숲의 빛을 향해 몸을 던졌다.",
						"english": "Briar completely lost her mind and threw herself towards the forest's light.",
						"japanese": "ブライアは完全に理性を失い、森の光へと身を投げた。",
						"chinese": "布莱尔彻底失去了理智，将自己投向了森林之光。",
						"french": "Briar a complètement perdu la raison et s'est jetée vers la lumière de la forêt.",
						"spanish": "Briar perdió completamente la cabeza y se lanzó hacia la luz del bosque.",
						"vietnamese": "Briar đã hoàn toàn mất trí và lao mình về phía ánh sáng của khu rừng.",
						"thai": "ไบรอาเสียสติไปโดยสิ้นเชิงและพุ่งเข้าหาแสงสว่างของป่า",
						"hindi": "ब्रायर ने पूरी तरह से अपना होश खो दिया और खुद को जंगल की रोशनी की ओर फेंक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영원히… 영원히…",
						"english": "Forever... Forever...",
						"japanese": "永遠に… 永遠に…",
						"chinese": "永远… 永远…",
						"french": "Pour toujours... Pour toujours...",
						"spanish": "Para siempre... Para siempre...",
						"vietnamese": "Mãi mãi... Mãi mãi...",
						"thai": "ตลอดไป... ตลอดไป...",
						"hindi": "हमेशा के लिए… हमेशा के लिए…"
					},
					"type": "speech",
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "우리가 도우려 한 게… 이 결과를 만든 건가?",
						"english": "Did our attempt to help... lead to this outcome?",
						"japanese": "我々が助けようとしたことが… この結果を生んだのか？",
						"chinese": "我们试图帮助的… 却造成了这个结果吗？",
						"french": "Ce que nous avons tenté d'aider... a-t-il conduit à ce résultat ?",
						"spanish": "¿Nuestra intención de ayudar... ha provocado este resultado?",
						"vietnamese": "Liệu việc chúng ta cố gắng giúp đỡ… lại dẫn đến kết quả này ư?",
						"thai": "สิ่งที่เราพยายามช่วย... ได้สร้างผลลัพธ์นี้ขึ้นมาหรือ?",
						"hindi": "क्या हमारी मदद करने की कोशिश… इस परिणाम का कारण बनी?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈춰야 해!",
						"english": "Stop her!",
						"japanese": "止めなければ！",
						"chinese": "必须阻止她！",
						"french": "Il faut l'arrêter !",
						"spanish": "¡Tenemos que detenerla!",
						"vietnamese": "Phải ngăn cô ấy lại!",
						"thai": "ต้องหยุด!",
						"hindi": "उसे रोकना होगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "너희도… 함께 가자…",
						"english": "You too... come with me...",
						"japanese": "お前たちも… 一緒に来い…",
						"chinese": "你们也… 一起来吧…",
						"french": "Vous aussi... venez avec moi...",
						"spanish": "Vosotros también... venid conmigo...",
						"vietnamese": "Các ngươi cũng… đi cùng ta…",
						"thai": "พวกเจ้าก็... มากับข้าเถอะ...",
						"hindi": "तुम भी… मेरे साथ आओ…"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 생명의 근원이라 불리던 거대한 제단이 눈앞에 나타났다.",
						"english": "The deepest part of the forest. A gigantic altar, once called the source of life, appeared before their eyes.",
						"japanese": "森の最も深い場所。命の源と呼ばれた巨大な祭壇が目の前に現れた。",
						"chinese": "森林最深处。一个曾被称为生命之源的巨大祭坛出现在眼前。",
						"french": "La partie la plus profonde de la forêt. Un autel gigantesque, autrefois appelé la source de vie, apparut devant leurs yeux.",
						"spanish": "La parte más profunda del bosque. Un altar gigantesco, antaño llamado la fuente de la vida, apareció ante sus ojos.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một bàn thờ khổng lồ, từng được gọi là nguồn sống, đã xuất hiện trước mắt.",
						"thai": "ส่วนที่ลึกที่สุดของป่า แท่นบูชาขนาดมหึมาที่เคยถูกเรียกว่าแหล่งกำเนิดชีวิต ปรากฏขึ้นตรงหน้า",
						"hindi": "जंगल का सबसे गहरा हिस्सा। जीवन का स्रोत कही जाने वाली एक विशाल वेदी उनकी आँखों के सामने प्रकट हुई।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브라이어는 그곳에 있었다. 이젠… 사람의 모습이 아니었다.",
						"english": "Briar was there. She was no longer... in human form.",
						"japanese": "ブライアはそこにいた。もう… 人の姿ではなかった。",
						"chinese": "布莱尔就在那里。她已经… 不再是人类的模样了。",
						"french": "Briar était là. Elle n'était plus... sous forme humaine.",
						"spanish": "Briar estaba allí. Ya no... tenía forma humana.",
						"vietnamese": "Briar đã ở đó. Giờ đây… không còn hình dáng con người nữa.",
						"thai": "ไบรอาอยู่ที่นั่น ตอนนี้... เธอไม่ใช่ร่างมนุษย์อีกต่อไป",
						"hindi": "ब्रायर वहीं थी। अब वह… इंसानी रूप में नहीं थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들… 이분을 구원하려 했나?",
						"english": "Foolish humans... Did you try to save her?",
						"japanese": "愚かな人間たちよ… この方を救おうとしたのか？",
						"chinese": "愚蠢的人类啊… 你们试图拯救这位吗？",
						"french": "Humains stupides... Avez-vous tenté de la sauver ?",
						"spanish": "Humanos estúpidos... ¿Intentasteis salvarla?",
						"vietnamese": "Loài người ngu xuẩn… Các ngươi đã định cứu cô ấy sao?",
						"thai": "มนุษย์ที่โง่เขลา... พวกเจ้าพยายามจะช่วยนางหรือ?",
						"hindi": "मूर्ख मनुष्यो… क्या तुमने इसे बचाने की कोशिश की?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "브라이어… 어떻게 된 거야?",
						"english": "Briar... What happened to you?",
						"japanese": "ブライア… どうしたんだ？",
						"chinese": "布莱尔… 你怎么了？",
						"french": "Briar... Que t'est-il arrivé ?",
						"spanish": "Briar... ¿Qué te ha pasado?",
						"vietnamese": "Briar… chuyện gì đã xảy ra với cô vậy?",
						"thai": "ไบรอา... เกิดอะไรขึ้นกับเธอ?",
						"hindi": "ब्रायर… तुम्हें क्या हुआ?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 이분은 숲의 일부… 영원히 행복할 거다.",
						"english": "Now she is part of the forest... She will be happy forever.",
						"japanese": "今、この方は森の一部… 永遠に幸せだろう。",
						"chinese": "现在她已是森林的一部分… 将永远幸福。",
						"french": "Maintenant, elle fait partie de la forêt... Elle sera heureuse pour toujours.",
						"spanish": "Ahora ella es parte del bosque... Será feliz para siempre.",
						"vietnamese": "Giờ cô ấy là một phần của khu rừng… Sẽ hạnh phúc mãi mãi.",
						"thai": "ตอนนี้นางเป็นส่วนหนึ่งของป่า... นางจะมีความสุขตลอดไป",
						"hindi": "अब यह जंगल का हिस्सा है… यह हमेशा खुश रहेगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게… 구원이라고?",
						"english": "This... is salvation?",
						"japanese": "これが…救済だと？",
						"chinese": "这…就是救赎吗？",
						"french": "Ceci... est le salut ?",
						"spanish": "¿Esto... es la salvación?",
						"vietnamese": "Đây... là sự cứu rỗi sao?",
						"thai": "นี่...คือความรอดหรือ?",
						"hindi": "यह...मोक्ष है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "저항은 무의미하다. 너희도… 숲의 일부가 될지니.",
						"english": "Resistance is futile. You too... shall become one with the forest.",
						"japanese": "抵抗は無意味だ。お前たちも…森の一部となるだろう。",
						"chinese": "抵抗毫无意义。你们也…将成为森林的一部分。",
						"french": "La résistance est futile. Vous aussi... ferez partie de la forêt.",
						"spanish": "La resistencia es inútil. Vosotros también... os convertiréis en parte del bosque.",
						"vietnamese": "Kháng cự là vô ích. Các ngươi cũng… sẽ trở thành một phần của khu rừng.",
						"thai": "การต่อต้านไร้ความหมาย เจ้าเองก็...จะกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "प्रतिरोध व्यर्थ है। तुम भी... वन का हिस्सा बन जाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 사라지자, 브라이어는 쓰러져 있었다.",
						"english": "As the colossal shadow vanished, Briar lay fallen.",
						"japanese": "巨大な影が消え去ると、ブライアーは倒れていた。",
						"chinese": "随着巨大的阴影消散，布莱尔倒下了。",
						"french": "Alors que l'ombre colossale disparaissait, Briar gisait à terre.",
						"spanish": "Cuando la sombra colosal se desvaneció, Briar yacía caído.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, Briar nằm gục xuống.",
						"thai": "เมื่อเงามหึมาหายไป ไบรเออร์ก็ล้มลง",
						"hindi": "जैसे ही विशाल छाया गायब हुई, ब्रायर गिर पड़ा था।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "…고마워… 이제… 쉴 수 있어…",
						"english": "...Thank you... Now... I can rest...",
						"japanese": "…ありがとう…これで…休める…",
						"chinese": "…谢谢你…现在…我可以休息了…",
						"french": "...Merci... Maintenant... je peux me reposer...",
						"spanish": "...Gracias... Ahora... puedo descansar...",
						"vietnamese": "...Cảm ơn... Giờ thì... ta có thể nghỉ ngơi...",
						"thai": "...ขอบคุณ... ตอนนี้... ข้าได้พักแล้ว...",
						"hindi": "...धन्यवाद... अब... मैं आराम कर सकता हूँ..."
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "브라이어…!",
						"english": "Briar...!",
						"japanese": "ブライアー…！",
						"chinese": "布莱尔…！",
						"french": "Briar... !",
						"spanish": "¡Briar...!",
						"vietnamese": "Briar...!",
						"thai": "ไบรเออร์...!",
						"hindi": "ब्रायर...!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그의 얼굴에는 알 수 없는 평온함과 함께 깊은 슬픔이 서려 있었다.",
						"english": "On his face, a deep sorrow mingled with an unknown serenity.",
						"japanese": "彼の顔には、計り知れない平穏と深い悲しみが入り混じっていた。",
						"chinese": "他的脸上，深沉的悲伤与一种莫名的平静交织在一起。",
						"french": "Sur son visage, une profonde tristesse se mêlait à une sérénité inconnue.",
						"spanish": "En su rostro, una profunda tristeza se mezclaba con una serenidad desconocida.",
						"vietnamese": "Trên gương mặt hắn, nỗi buồn sâu thẳm xen lẫn sự bình yên khó tả.",
						"thai": "บนใบหน้าของเขา มีความโศกเศร้าลึกซึ้งปะปนกับความสงบที่ไม่อาจเข้าใจได้",
						"hindi": "उसके चेहरे पर, एक अज्ञात शांति के साथ गहरा दुख व्याप्त था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "구원은… 때로 파멸의 다른 이름이었다.",
						"english": "Salvation... was sometimes another name for ruin.",
						"japanese": "救済は…時として破滅の別名だった。",
						"chinese": "救赎…有时是毁灭的另一个名字。",
						"french": "Le salut... était parfois un autre nom pour la ruine.",
						"spanish": "La salvación... a veces era otro nombre para la ruina.",
						"vietnamese": "Cứu rỗi... đôi khi là một tên gọi khác của sự hủy diệt.",
						"thai": "ความรอด...บางครั้งก็เป็นอีกชื่อหนึ่งของความพินาศ",
						"hindi": "मोक्ष... कभी-कभी विनाश का दूसरा नाम था।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲은 더욱 깊은 곳으로 이들을 이끌었다.",
						"english": "The forest led them deeper.",
						"japanese": "森は彼らをさらに奥へと導いた。",
						"chinese": "森林将他们引向更深处。",
						"french": "La forêt les entraîna plus profondément.",
						"spanish": "El bosque los condujo más adentro.",
						"vietnamese": "Khu rừng dẫn họ vào sâu hơn nữa.",
						"thai": "ป่านำพาพวกเขาเข้าไปลึกยิ่งขึ้น",
						"hindi": "वन ने उन्हें और गहराई में पहुँचाया।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "숲의 힘은 거대했다. 몸이… 마음이… 모두 숲에 흡수되는 듯했다.",
						"english": "The forest's power was immense. My body... my mind... all seemed to be absorbed by the forest.",
						"japanese": "森の力は強大だった。体も…心も…すべて森に吸収されるようだった。",
						"chinese": "森林的力量是巨大的。我的身体…我的心…似乎都被森林吞噬了。",
						"french": "La puissance de la forêt était immense. Mon corps... mon esprit... tout semblait être absorbé par la forêt.",
						"spanish": "El poder del bosque era inmenso. Mi cuerpo... mi mente... todo parecía ser absorbido por el bosque.",
						"vietnamese": "Sức mạnh của khu rừng thật khổng lồ. Cơ thể… tâm trí ta… dường như đều bị khu rừng hấp thụ.",
						"thai": "พลังของป่านั้นมหาศาล ร่างกาย...จิตใจ...ทั้งหมดดูเหมือนจะถูกป่ากลืนกิน",
						"hindi": "वन की शक्ति विशाल थी। मेरा शरीर... मेरा मन... सब कुछ वन में समाहित होता दिख रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 구원은… 이리도 연약하구나.",
						"english": "Your salvation... is truly so fragile.",
						"japanese": "お前たちの救済は…これほどまでに脆いのか。",
						"chinese": "你们的救赎…竟是如此脆弱。",
						"french": "Votre salut... est si fragile.",
						"spanish": "Vuestra salvación... es realmente tan frágil.",
						"vietnamese": "Sự cứu rỗi của các ngươi… thật yếu ớt làm sao.",
						"thai": "ความรอดของพวกเจ้า...ช่างอ่อนแอเช่นนี้หรือ",
						"hindi": "तुम्हारी मुक्ति... इतनी कमज़ोर है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 끝나지 않았어…",
						"english": "...It's not... over yet...",
						"japanese": "…まだ…終わってない…",
						"chinese": "…还没…结束…",
						"french": "...Ce n'est... pas encore fini...",
						"spanish": "...Todavía no... ha terminado...",
						"vietnamese": "...Chưa... kết thúc đâu...",
						"thai": "...ยัง...ไม่จบแค่นี้...",
						"hindi": "...अभी... ख़त्म नहीं हुआ..."
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "영원히 잠들어라. 이곳에서.",
						"english": "Sleep forever. Here.",
						"japanese": "永遠に眠れ。ここで。",
						"chinese": "在此处，永远长眠吧。",
						"french": "Dors pour l'éternité. Ici.",
						"spanish": "Duerme eternamente. Aquí.",
						"vietnamese": "Ngủ yên vĩnh viễn đi. Tại nơi đây.",
						"thai": "จงหลับใหลชั่วนิรันดร์ ที่นี่แหละ.",
						"hindi": "यहाँ, हमेशा के लिए सो जाओ।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더욱 깊어졌다. 안개가 짙어지고, 길이 사라졌다.",
			"하지만 아름다운 노랫소리가 발길을 멈출 수 없게 했다.",
			"그 소리에 홀린 학자는 이미 숲의 일부가 되어가고 있었다.",
			"구원이 파멸이 되는 순간이었다."
		],
		"english": [
			"The forest deepened. The fog grew thick, and the path vanished.",
			"But a beautiful song compelled my steps forward.",
			"Entranced by the sound, the scholar was already becoming part of the forest.",
			"It was the moment salvation became destruction."
		],
		"japanese": [
			"森はさらに深く。霧が濃くなり、道は消えた。",
			"しかし、美しい歌声が足を止めさせなかった。",
			"その音に魅せられた学者は、すでに森の一部となりつつあった。",
			"それは救いが破滅となる瞬間だった。"
		],
		"chinese": [
			"森林愈发幽深。浓雾弥漫，道路消失。",
			"然而，那美妙的歌声令我无法止步。",
			"被那声音蛊惑的学者，已渐渐成为森林的一部分。",
			"救赎化为毁灭的瞬间。"
		],
		"french": [
			"La forêt s'épaississait. Le brouillard s'intensifia, et le chemin disparaissait.",
			"Mais un chant magnifique rendait mes pas inarrêtables.",
			"Ensorcelé par ce son, l'érudit devenait déjà une partie de la forêt.",
			"C'était le moment où le salut devenait la destruction."
		],
		"spanish": [
			"El bosque se hizo más profundo. La niebla se espesó y el camino desapareció.",
			"Pero un hermoso canto hizo que mis pasos no pudieran detenerse.",
			"Fascinado por ese sonido, el erudito ya se estaba convirtiendo en parte del bosque.",
			"Fue el momento en que la salvación se convirtió en perdición."
		],
		"vietnamese": [
			"Rừng càng thêm sâu. Sương mù dày đặc, lối đi biến mất.",
			"Nhưng một khúc ca tuyệt đẹp đã khiến bước chân tôi không thể dừng lại.",
			"Bị âm thanh đó mê hoặc, học giả đã dần trở thành một phần của khu rừng.",
			"Đó là khoảnh khắc sự cứu rỗi biến thành sự hủy diệt."
		],
		"thai": [
			"ป่าลึกเข้าไปอีก หมอกลงจัด และเส้นทางหายไป",
			"แต่เสียงเพลงที่ไพเราะทำให้ก้าวเดินไม่หยุด",
			"นักปราชญ์ที่หลงใหลในเสียงนั้นกำลังกลายเป็นส่วนหนึ่งของป่า",
			"เป็นช่วงเวลาที่ความรอดกลายเป็นหายนะ"
		],
		"hindi": [
			"जंगल और गहरा होता गया। कोहरा घना हो गया और रास्ता गायब हो गया।",
			"लेकिन एक खूबसूरत गीत ने मेरे कदमों को रुकने नहीं दिया।",
			"उस ध्वनि से मंत्रमुग्ध होकर, विद्वान पहले ही जंगल का हिस्सा बनता जा रहा था।",
			"यह वह क्षण था जब मोक्ष विनाश में बदल गया।"
		]
	}
} as const;
