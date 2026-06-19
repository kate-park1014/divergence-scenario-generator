export const scenario_modern_rohan_3_03 = {
	"scenario_id": "modern_rohan_3_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "잿빛 먼지가 가득한 폐상가 뒷골목. 음침한 공기가 코를 찔렀다.",
						"english": "The back alley of an abandoned mall, thick with grey dust. The grim air stung my nose.",
						"japanese": "灰色の塵が満ちた廃商店街の裏路地。陰鬱な空気が鼻を突いた。",
						"chinese": "废弃商场的后巷，弥漫着灰尘。阴沉的空气刺痛了我的鼻子。",
						"french": "L'arrière-cour d'un centre commercial abandonné, pleine de poussière grise. L'air lugubre me piquait le nez.",
						"spanish": "El callejón trasero de un centro comercial abandonado, lleno de polvo gris. El aire lúgubre me picaba la nariz.",
						"vietnamese": "Hẻm sau của khu thương xá hoang phế, đầy bụi xám. Không khí u ám xộc vào mũi.",
						"thai": "ตรอกด้านหลังศูนย์การค้าที่ถูกทิ้งร้าง เต็มไปด้วยฝุ่นสีเทา อากาศที่อึมครึมทำให้แสบจมูก",
						"hindi": "एक परित्यक्त मॉल की पिछली गली, धूसर धूल से भरी हुई। उदास हवा ने मेरी नाक में चुभन पैदा की।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bex",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "사라진 이들의 마지막 행적은 여기였군.",
						"english": "So, this was the last trace of the lost ones.",
						"japanese": "消えた者たちの最後の足跡はここだったか。",
						"chinese": "原来，失踪者的最后行踪就在这里。",
						"french": "C'était donc la dernière trace des disparus.",
						"spanish": "Así que, este fue el último rastro de los desaparecidos.",
						"vietnamese": "Vậy ra đây là dấu vết cuối cùng của những người đã mất.",
						"thai": "ร่องรอยสุดท้ายของผู้หายสาบสูญอยู่ที่นี่เอง",
						"hindi": "तो, गुमशुदा लोगों का आखिरी निशान यहीं था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "으음… 냄새나. 기분 나쁜.",
						"english": "Ugh... what a foul smell.",
						"japanese": "うーん…臭うな。嫌な。",
						"chinese": "唔…好难闻。令人不适。",
						"french": "Beurk... Quelle odeur désagréable.",
						"spanish": "Ugh... huele mal. Es desagradable.",
						"vietnamese": "Ưm... có mùi. Khó chịu thật.",
						"thai": "อื้อ... มีกลิ่นเหม็น ไม่น่าอภิรมย์เลย",
						"hindi": "उफ़... बदबू आ रही है। बहुत अजीब।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "…이상해. 너무 깨끗해. 뭔가… 지워진 흔적 같아.",
						"english": "...Strange. It's too clean. Like... something was erased.",
						"japanese": "…おかしい。あまりにも綺麗だ。何か…消された痕跡のようだ。",
						"chinese": "…奇怪。太干净了。像是什么…被抹去过的痕迹。",
						"french": "...Étrange. C'est trop propre. Comme si... quelque chose avait été effacé.",
						"spanish": "...Extraño. Está demasiado limpio. Como si... algo hubiera sido borrado.",
						"vietnamese": "...Lạ thật. Quá sạch sẽ. Cứ như... có dấu vết gì đó đã bị xóa.",
						"thai": "...แปลกจัง สะอาดเกินไป เหมือนว่า... มีบางอย่างถูกลบออกไป",
						"hindi": "...अजीब है। यह बहुत साफ है। जैसे... कुछ मिटा दिया गया हो।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 압축기에서 나는 소리인가?",
						"english": "Is that sound coming from this compressor?",
						"japanese": "この圧縮機からする音か？",
						"chinese": "是这台压缩机发出的声音吗？",
						"french": "Ce bruit vient de ce compacteur ?",
						"spanish": "¿Es ese sonido de esta compactadora?",
						"vietnamese": "Tiếng này là từ cái máy nén này sao?",
						"thai": "เสียงนี้มาจากเครื่องอัดนี้หรือเปล่า",
						"hindi": "क्या यह आवाज़ इस कंप्रेसर से आ रही है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "낡아서 그런 거 아니야? 엄청 오래돼 보이는데.",
						"english": "Isn't it just old? It looks incredibly ancient.",
						"japanese": "古いからじゃないか？ものすごく年季が入っているように見える。",
						"chinese": "不就是因为它老旧吗？看起来非常旧了。",
						"french": "C'est pas juste parce qu'il est vieux ? Il a l'air incroyablement ancien.",
						"spanish": "No será solo porque es viejo? Parece increíblemente antiguo.",
						"vietnamese": "Chẳng phải là do nó cũ sao? Trông cũ lắm rồi.",
						"thai": "ไม่ใช่เพราะมันเก่าหรอกเหรอ? ดูเก่าแก่มากเลยนะ",
						"hindi": "क्या यह सिर्फ़ पुराना होने की वजह से नहीं है? यह बहुत पुराना लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 너무 불규칙적이야. 마치… 뭔가 갈아 넣는 소리 같아.",
						"english": "No. It's too irregular. Like... the sound of something being ground.",
						"japanese": "いや、不規則すぎる。まるで…何かをすり潰すような音だ。",
						"chinese": "不。太不规律了。就像……有什么东西在研磨的声音。",
						"french": "Non. C'est trop irrégulier. Comme... le bruit de quelque chose qui est broyé.",
						"spanish": "No. Es demasiado irregular. Como... el sonido de algo siendo triturado.",
						"vietnamese": "Không. Nó quá bất thường. Như thể... tiếng gì đó đang bị nghiền nát.",
						"thai": "ไม่สิ มันผิดปกติเกินไป ราวกับ... เสียงบดอะไรบางอย่าง.",
						"hindi": "नहीं। यह बहुत अनियमित है। जैसे... कुछ पीसे जाने की आवाज़।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 압축기에서 불쾌한 굉음이 불규칙적으로 울렸다. 불안감이 고조된다.",
						"english": "An unpleasant roar echoed irregularly from the old compressor. Anxiety rises.",
						"japanese": "古い圧縮機から不快な轟音が不規則に響き渡った。不安感が高まる。",
						"chinese": "破旧的压缩机发出阵阵刺耳的轰鸣，毫无规律。不安感愈发强烈。",
						"french": "Un rugissement désagréable résonna de manière irrégulière depuis le vieux compresseur. L'anxiété monte.",
						"spanish": "Un rugido desagradable resonó de forma irregular desde el viejo compresor. La ansiedad aumenta.",
						"vietnamese": "Một tiếng gầm khó chịu vang lên bất thường từ chiếc máy nén cũ. Cảm giác bất an dâng cao.",
						"thai": "เสียงคำรามอันไม่พึงประสงค์ดังขึ้นอย่างไม่สม่ำเสมอจากเครื่องอัดอากาศเก่า ความวิตกกังวลเพิ่มขึ้น",
						"hindi": "पुराने कंप्रेसर से एक अप्रिय गर्जना अनियमित रूप से गूंजी। चिंता बढ़ रही है।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "Ash No.7이 이 구역 담당이라고 했지?",
						"english": "Ash No.7 is in charge of this sector, right?",
						"japanese": "Ash No.7がこの区域の担当だと言ったよね？",
						"chinese": "你说Ash No.7负责这个区域，是吗？",
						"french": "Ash No.7 est responsable de ce secteur, c'est ça ?",
						"spanish": "Ash No.7 está a cargo de esta sección, ¿verdad?",
						"vietnamese": "Ash số 7 phụ trách khu vực này, đúng không?",
						"thai": "Ash หมายเลข 7 รับผิดชอบโซนนี้ใช่ไหม?",
						"hindi": "ऐश नंबर 7 इस क्षेत्र का प्रभारी है, है ना?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네. 그 평범한 환경미화원 말이에요?",
						"english": "Yes. You mean that ordinary sanitation worker?",
						"japanese": "ええ。あの普通の清掃員のことですか？",
						"chinese": "是。你是指那个普通的环卫工吗？",
						"french": "Oui. Vous voulez dire cet éboueur ordinaire ?",
						"spanish": "Sí. ¿Te refieres a ese trabajador de saneamiento ordinario?",
						"vietnamese": "Vâng. Anh ấy là người dọn vệ sinh bình thường ấy à?",
						"thai": "ครับ/ค่ะ คุณหมายถึงพนักงานทำความสะอาดธรรมดาคนนั้นเหรอ?",
						"hindi": "हाँ। क्या आपका मतलब उस साधारण सफाईकर्मी से है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "평범해 보였나? 내 눈엔 뭔가… 기계 같았어.",
						"english": "Did he seem ordinary? To me, he was... like a machine.",
						"japanese": "普通に見えたか？私には何か…機械のようだった。",
						"chinese": "他看起来很普通吗？在我看来，他有些……像机器。",
						"french": "Il semblait ordinaire ? À mes yeux, il était... comme une machine.",
						"spanish": "¿Parecía normal? Para mí, era... como una máquina.",
						"vietnamese": "Anh ta trông bình thường sao? Với tôi, anh ta cứ... như một cỗ máy vậy.",
						"thai": "เขาดูธรรมดาเหรอ? สำหรับฉัน เขาเหมือน... เครื่องจักรบางอย่าง.",
						"hindi": "क्या वह सामान्य लग रहा था? मेरी नज़र में, वह... एक मशीन जैसा था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…그럼 설마.",
						"english": "...Then, could it be.",
						"japanese": "…まさか。",
						"chinese": "……那么，难道说。",
						"french": "...Alors, ce serait.",
						"spanish": "...Entonces, ¿será?",
						"vietnamese": "...Vậy thì, chẳng lẽ.",
						"thai": "...ถ้าอย่างนั้น, อย่าบอกนะ.",
						"hindi": "...तो कहीं ऐसा न हो।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔으니… 이제 돌이킬 수 없어.",
						"english": "We've come this far... there's no turning back now.",
						"japanese": "ここまで来たからには…もう後戻りはできない。",
						"chinese": "既然已经走到这里……就无法回头了。",
						"french": "On est arrivés jusque-là... on ne peut plus reculer.",
						"spanish": "Hemos llegado hasta aquí... ya no hay vuelta atrás.",
						"vietnamese": "Đã đến nước này rồi... không thể quay đầu được nữa.",
						"thai": "เรามาถึงจุดนี้แล้ว... ไม่มีทางหวนคืนได้อีก.",
						"hindi": "हम इतनी दूर आ गए हैं... अब पीछे नहीं हट सकते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "놈이 우릴 기다리고 있을지도 몰라.",
						"english": "He might be waiting for us.",
						"japanese": "奴が俺たちを待っているかもしれない。",
						"chinese": "也许它正在等着我们。",
						"french": "Il nous attend peut-être.",
						"spanish": "Podría estar esperándonos.",
						"vietnamese": "Hắn có thể đang chờ chúng ta.",
						"thai": "เขาอาจจะกำลังรอเราอยู่.",
						"hindi": "वह हमारा इंतज़ार कर रहा होगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 분명히. 더 깊이 들어갈수록… 위험해.",
						"english": "Yes. Definitely. The deeper we go... the more dangerous it gets.",
						"japanese": "そうだ。間違いなく。深く進むほど…危険だ。",
						"chinese": "是的。毫无疑问。越深入……越危险。",
						"french": "Oui. Sûrement. Plus on va loin... plus c'est dangereux.",
						"spanish": "Sí. Definitivamente. Cuanto más profundo vamos... más peligroso es.",
						"vietnamese": "Phải. Chắc chắn rồi. Càng đi sâu... càng nguy hiểm.",
						"thai": "ใช่ แน่นอน ยิ่งเข้าไปลึกเท่าไหร่... ก็ยิ่งอันตราย.",
						"hindi": "हाँ। निश्चित रूप से। जितना गहरा जाएँगे... उतना ही खतरनाक होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "…침입자들. 이 구역은 청소 완료 구역이다.",
						"english": "...Intruders. This sector is a cleaned zone.",
						"japanese": "…侵入者たち。この区域は清掃完了区域だ。",
						"chinese": "……入侵者。这个区域已清扫完毕。",
						"french": "...Intrus. Ce secteur est une zone nettoyée.",
						"spanish": "...Intrusos. Esta zona es una zona limpia.",
						"vietnamese": "Những kẻ xâm nhập. Khu vực này đã được dọn dẹp xong.",
						"thai": "...ผู้บุกรุก. โซนนี้เป็นโซนที่ทำความสะอาดแล้ว.",
						"hindi": "...घुसपैठिए। यह क्षेत्र साफ किया हुआ क्षेत्र है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 사라진 사람들을…!",
						"english": "The people you made disappear...!",
						"japanese": "お前が消した者たちを…！",
						"chinese": "你让那些人消失了…！",
						"french": "Ces gens que tu as fait disparaître...!",
						"spanish": "¡A la gente que has hecho desaparecer...!",
						"vietnamese": "Những kẻ ngươi đã làm biến mất...!",
						"thai": "คนที่เจ้าทำให้หายไป…!",
						"hindi": "जिन लोगों को तुमने गायब कर दिया…!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "더러운 것들은 모두… 제거되어야 해.",
						"english": "All impurities... must be purged.",
						"japanese": "汚れたものどもは全て… 排除されねばならない。",
						"chinese": "所有污秽之物… 都必须清除。",
						"french": "Toutes les impuretés… doivent être éliminées.",
						"spanish": "Todas las inmundicias… deben ser purgadas.",
						"vietnamese": "Mọi thứ dơ bẩn… phải bị loại bỏ.",
						"thai": "สิ่งสกปรกทั้งหมด… ต้องถูกกำจัด.",
						"hindi": "सभी गंदी चीजें… खत्म कर देनी चाहिए।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "더러운 것들은… 흔적도 없이 사라져야 해.",
						"english": "The impurities... must vanish without a trace.",
						"japanese": "汚れたものどもは… 跡形もなく消え去るべきだ。",
						"chinese": "污秽之物… 必须消失得无影无踪。",
						"french": "Les impuretés… doivent disparaître sans laisser de trace.",
						"spanish": "Las inmundicias… deben desaparecer sin dejar rastro.",
						"vietnamese": "Những thứ dơ bẩn… phải biến mất không dấu vết.",
						"thai": "สิ่งสกปรก… ต้องหายไปอย่างไร้ร่องรอย.",
						"hindi": "गंदी चीजें… बिना किसी निशान के गायब हो जानी चाहिए।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh... It's not... over yet.",
						"japanese": "くっ… まだ… 終わってない。",
						"chinese": "呃… 还没… 结束。",
						"french": "Argh… Ce n'est pas… encore fini.",
						"spanish": "Ugh… Todavía… no ha terminado.",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu.",
						"thai": "อึก… ยัง… ไม่จบหรอก.",
						"hindi": "क्रर्र... अभी... खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "완벽한 청소를 위해… 다시 찾아오도록.",
						"english": "For a complete cleansing... I shall return.",
						"japanese": "完璧な清掃のため… また訪れよう。",
						"chinese": "为了彻底的清理… 我会再回来。",
						"french": "Pour un nettoyage parfait… je reviendrai.",
						"spanish": "Para una limpieza perfecta… regresaré.",
						"vietnamese": "Để hoàn thành cuộc thanh trừng… ta sẽ quay lại.",
						"thai": "เพื่อการทำความสะอาดที่สมบูรณ์แบบ… ข้าจะกลับมาอีกครั้ง.",
						"hindi": "पूरी तरह सफाई के लिए… मैं फिर आऊंगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…잠시 멈췄을 뿐. 진짜 청소는… 아직이다.",
						"english": "...Only a temporary halt. The real cleansing... has yet to begin.",
						"japanese": "…一時停止しただけだ。本当の清掃は…まだだ。",
						"chinese": "…只是暂时停止了。真正的清理… 尚未开始。",
						"french": "...Juste une pause. Le vrai nettoyage... est à venir.",
						"spanish": "...Solo una pausa. La verdadera limpieza... aún no ha comenzado.",
						"vietnamese": "…Chỉ là tạm dừng thôi. Cuộc thanh trừng thật sự… vẫn chưa bắt đầu.",
						"thai": "...แค่หยุดชั่วคราวเท่านั้น การทำความสะอาดที่แท้จริง... ยังไม่เริ่มขึ้น.",
						"hindi": "...बस एक अस्थायी ठहराव। असली सफाई... अभी बाकी है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 너희 대장은 누구야?",
						"english": "What are you talking about? Who's your leader?",
						"japanese": "何を言っているんだ？ お前たちの隊長は誰だ？",
						"chinese": "你在说什么？ 你们的头目是谁？",
						"french": "De quoi parles-tu ? Qui est votre chef ?",
						"spanish": "¿De qué hablas? ¿Quién es vuestro líder?",
						"vietnamese": "Ngươi đang nói gì vậy? Kẻ cầm đầu của các ngươi là ai?",
						"thai": "เจ้ากำลังพูดอะไร? หัวหน้าของพวกเจ้าคือใคร?",
						"hindi": "तुम क्या कह रहे हो? तुम्हारा सरदार कौन है?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "놈은 진짜가 아니야. 어쩌면… 시작에 불과해.",
						"english": "He's not the real deal. Perhaps... merely the beginning.",
						"japanese": "奴は本物じゃない。おそらく…始まりに過ぎない。",
						"chinese": "他不是真的。或许… 这只是个开始。",
						"french": "Ce n'est pas le vrai. Peut-être… que ce n'est que le début.",
						"spanish": "Él no es el verdadero. Quizás… es solo el principio.",
						"vietnamese": "Hắn không phải kẻ thật sự. Có lẽ… chỉ là khởi đầu thôi.",
						"thai": "มันไม่ใช่ของจริง บางที… นี่อาจเป็นแค่จุดเริ่มต้น.",
						"hindi": "वह असली नहीं है। शायद… यह बस शुरुआत है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰레기 압축기에서 나던 불길한 소음은 멈췄다. 하지만 뒤이은 침묵은 더 큰 불안감을 몰고 왔다.",
						"english": "The ominous noise from the trash compactor ceased. But the ensuing silence brought an even greater unease.",
						"japanese": "ゴミ圧縮機から聞こえていた不吉な騒音は止まった。しかし、その後の沈黙は、さらに大きな不安感を伴った。",
						"chinese": "垃圾压缩机发出的不祥噪音停止了。然而，随之而来的寂静却带来了更大的不安。",
						"french": "Le bruit inquiétant du compacteur à déchets cessa. Mais le silence qui suivit apporta une anxiété encore plus grande.",
						"spanish": "El ominoso ruido del compactador de basura cesó. Pero el silencio resultante trajo una inquietud aún mayor.",
						"vietnamese": "Tiếng ồn đáng ngại từ máy nén rác đã ngừng. Nhưng sự im lặng tiếp theo lại mang đến cảm giác bất an lớn hơn.",
						"thai": "เสียงอันน่าขนลุกจากเครื่องอัดขยะหยุดลง แต่ความเงียบที่ตามมากลับนำมาซึ่งความไม่สบายใจที่ยิ่งใหญ่กว่าเดิม.",
						"hindi": "कचरा कम्पेक्टर से आ रही अशुभ आवाज बंद हो गई। लेकिन उसके बाद की खामोशी और भी बड़ी बेचैनी लेकर आई।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사라진 이들의 흔적을 쫓아, 뒷골목 깊숙이.",
			"잿빛 먼지가 눈처럼 쌓인 폐상가 거리.",
			"낡은 압축기의 불규칙적인 소음이 불길하게 들려온다.",
			"이 모든 것이… 그저 사고일 리 없어."
		],
		"english": [
			"Following the lost ones' traces, deep into the back alleys.",
			"A street of abandoned shops, covered in ash-like dust.",
			"The ominous, irregular hum of an old compressor echoes.",
			"All of this... it can't just be an accident."
		],
		"japanese": [
			"失われた者たちの痕跡を追い、裏路地の奥深くへ。",
			"灰色の塵が雪のように積もる廃商店街。",
			"古い圧縮機の不規則な騒音が不吉に響く。",
			"この全てが…ただの事故であるはずがない。"
		],
		"chinese": [
			"追寻失踪者的痕迹，深入后巷。",
			"废弃商店街上，灰尘如雪般堆积。",
			"老旧压缩机不规则的噪音，听起来很不详。",
			"这所有的一切…不可能是单纯的事故。"
		],
		"french": [
			"Suivant les traces des disparus, au fond des ruelles.",
			"Une rue de magasins abandonnés, couverte de poussière cendrée.",
			"Le bruit irrégulier et inquiétant d'un vieux compacteur résonne.",
			"Tout ça... ça ne peut pas être un simple accident."
		],
		"spanish": [
			"Siguiendo las huellas de los desaparecidos, callejón adentro.",
			"Una calle de centros comerciales abandonados, cubierta de polvo grisáceo como nieve.",
			"El ruido irregular y ominoso de una vieja compactadora resuena.",
			"Todo esto... no puede ser solo un accidente."
		],
		"vietnamese": [
			"Theo dấu những người đã mất, sâu vào hẻm tối.",
			"Con phố thương xá hoang phế, bụi xám phủ dày như tuyết.",
			"Tiếng ồn bất thường, đáng ngại từ chiếc máy nén cũ vọng lại.",
			"Tất cả những điều này... không thể chỉ là một tai nạn."
		],
		"thai": [
			"ตามรอยผู้หายสาบสูญ ลึกเข้าไปในตรอกซอย",
			"ถนนย่านการค้าที่ถูกทิ้งร้าง ปกคลุมไปด้วยฝุ่นสีเทาเหมือนหิมะ",
			"เสียงรบกวนที่ไม่สม่ำเสมอของเครื่องอัดเก่าดังขึ้นอย่างเป็นลางไม่ดี",
			"ทั้งหมดนี้... ไม่น่าจะเป็นแค่อุบัติเหตุ"
		],
		"hindi": [
			"गुमशुदा लोगों के निशानों का पीछा करते हुए, गलियों की गहराई में।",
			"एक परित्यक्त दुकानों वाली गली, राख जैसी धूल से ढकी हुई।",
			"एक पुराने कंप्रेसर का अनियमित और अशुभ शोर सुनाई देता है।",
			"यह सब... महज़ एक हादसा नहीं हो सकता।"
		]
	}
} as const;
