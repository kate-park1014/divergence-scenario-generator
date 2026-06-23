export const scenario_forest_vespera_23_04 = {
	"scenario_id": "forest_vespera_23_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기억의 샘. 숲의 모든 슬픔이 모인 곳.",
			"그곳에는 잊혀진 과거의 잔혹한 기록이 잠들어 있었다.",
			"누군가 필사적으로 감추려 했던 진실. 이제 그 절규가 되살아난다."
		],
		"english": [
			"Spring of Memories. Where all the forest's sorrow gathers.",
			"There, cruel records of a forgotten past lay dormant.",
			"A truth someone desperately tried to hide. Now, its screams reawaken."
		],
		"japanese": [
			"記憶の泉。森の全ての悲しみが集う場所。",
			"そこには、忘れ去られた過去の残酷な記録が眠っていた。",
			"誰かが必死に隠そうとした真実。今、その絶叫が蘇る。"
		],
		"chinese": [
			"记忆之泉。森林所有悲伤汇聚之地。",
			"在那里，遗忘的过去残酷的记录沉睡着。",
			"某人拼命隐藏的真相。现在，那绝望的呼喊重新响起。"
		],
		"french": [
			"La Source des Souvenirs. Là où toute la tristesse de la forêt se rassemble.",
			"Là, des récits cruels d'un passé oublié sommeillaient.",
			"Une vérité que quelqu'un a désespérément tenté de cacher. Maintenant, ses cris se réveillent."
		],
		"spanish": [
			"El Manantial de los Recuerdos. Donde toda la tristeza del bosque se reúne.",
			"Allí, yacían dormidos los crueles registros de un pasado olvidado.",
			"Una verdad que alguien trató desesperadamente de ocultar. Ahora, sus gritos renacen."
		],
		"vietnamese": [
			"Suối Ký Ức. Nơi tập hợp mọi nỗi buồn của khu rừng.",
			"Tại đó, những ghi chép tàn khốc về quá khứ bị lãng quên đang ngủ yên.",
			"Một sự thật mà ai đó đã cố gắng che giấu tuyệt vọng. Giờ đây, tiếng kêu gào đó sống lại."
		],
		"thai": [
			"บ่อน้ำแห่งความทรงจำ. ที่ซึ่งความเศร้าทั้งหมดของป่ามารวมกัน.",
			"ที่นั่น บันทึกอันโหดร้ายของอดีตที่ถูกลืมเลือนได้หลับใหลอยู่.",
			"ความจริงที่ใครบางคนพยายามซ่อนไว้สุดชีวิต. บัดนี้ เสียงกรีดร้องนั้นฟื้นคืนชีพ."
		],
		"hindi": [
			"स्मृति का झरना। जहाँ जंगल का सारा दुख इकट्ठा होता है।",
			"वहाँ, एक भूले हुए अतीत के क्रूर रिकॉर्ड निष्क्रिय पड़े थे।",
			"एक सच्चाई जिसे किसी ने छिपाने की बेताबी से कोशिश की थी। अब, उसकी चीखें फिर से जीवित हो उठती हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "기억의 샘. 숲 가장 깊은 곳, 거대한 물웅덩이가 신비롭게 빛났다.",
						"english": "Spring of Memories. Deepest in the forest, a colossal pool of water glowed mysteriously.",
						"japanese": "記憶の泉。森の最も深い場所で、巨大な水たまりが神秘的に輝いていた。",
						"chinese": "记忆之泉。森林最深处，巨大的水池神秘地发着光。",
						"french": "La Source des Souvenirs. Au plus profond de la forêt, une immense étendue d'eau brillait mystérieusement.",
						"spanish": "Manantial de los Recuerdos. En lo más profundo del bosque, un colosal estanque de agua brillaba misteriosamente.",
						"vietnamese": "Suối Ký Ức. Sâu nhất trong rừng, một vũng nước khổng lồ phát sáng một cách bí ẩn.",
						"thai": "บ่อน้ำแห่งความทรงจำ. ลึกที่สุดในป่า บ่อน้ำขนาดมหึมากำลังเปล่งประกายอย่างลึกลับ.",
						"hindi": "स्मृति का झरना। जंगल के सबसे गहरे हिस्से में, पानी का एक विशाल कुंड रहस्यमय ढंग से चमक रहा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 기억의 샘?",
						"english": "This is... the Spring of Memories?",
						"japanese": "ここが…記憶の泉？",
						"chinese": "这里是…记忆之泉吗？",
						"french": "C'est... la Source des Souvenirs ?",
						"spanish": "¿Aquí es... el Manantial de los Recuerdos?",
						"vietnamese": "Đây là... Suối Ký Ức?",
						"thai": "ที่นี่คือ... บ่อน้ำแห่งความทรงจำ?",
						"hindi": "यह है... स्मृति का झरना?"
					}
				},
				{
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 숲의 진실을 찾는 자들.",
						"english": "...You've come. Seekers of the forest's truth.",
						"japanese": "…来たか。森の真実を求める者たちよ。",
						"chinese": "…你们来了。探寻森林真相的人。",
						"french": "...Vous êtes venus. Chercheurs de la vérité de la forêt.",
						"spanish": "...Habéis venido. Buscadores de la verdad del bosque.",
						"vietnamese": "...Các ngươi đã đến. Những người tìm kiếm sự thật của khu rừng.",
						"thai": "...เจ้ามาแล้ว. ผู้แสวงหาความจริงแห่งป่า.",
						"hindi": "...तुम आ गए। जंगल की सच्चाई के खोजकर्ता।"
					},
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "이곳은 모든 기억이 흐르는 곳. 잔혹한 진실도 함께.",
						"english": "This is where all memories flow. And cruel truths, too.",
						"japanese": "ここは全ての記憶が流れる場所。残酷な真実も共に。",
						"chinese": "这里是所有记忆流淌之地。也包括残酷的真相。",
						"french": "C'est là où toutes les mémoires s'écoulent. Et les vérités cruelles, aussi.",
						"spanish": "Aquí es donde fluyen todos los recuerdos. Y también las verdades crueles.",
						"vietnamese": "Đây là nơi mọi ký ức chảy về. Cả những sự thật tàn khốc cũng vậy.",
						"thai": "ที่นี่คือที่ที่ความทรงจำทั้งหมดไหลเวียน. รวมถึงความจริงอันโหดร้ายด้วย.",
						"hindi": "यह वह जगह है जहाँ सभी यादें बहती हैं। और क्रूर सत्य भी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "이게 뭐야? 샘 주변에 새겨진 그림들…",
						"english": "What's this? The carvings around the spring...",
						"japanese": "これは何だ？泉の周りに刻まれた絵が…",
						"chinese": "这是什么？泉水周围刻着的画…",
						"french": "Qu'est-ce que c'est ? Les gravures autour de la source...",
						"spanish": "¿Qué es esto? Los grabados alrededor del manantial...",
						"vietnamese": "Cái gì đây? Những hình khắc xung quanh suối...",
						"thai": "นี่อะไร? ภาพแกะสลักรอบบ่อน้ำ...",
						"hindi": "यह क्या है? झरने के चारों ओर की नक्काशी..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "전부 피와 절규뿐인데?",
						"english": "All of it is just blood and screams?",
						"japanese": "全部、血と絶叫だけじゃないか？",
						"chinese": "全是鲜血和绝望的呼喊吗？",
						"french": "Tout n'est que sang et cris ?",
						"spanish": "¿Todo es solo sangre y gritos?",
						"vietnamese": "Toàn là máu và tiếng kêu gào thôi sao?",
						"thai": "ทั้งหมดมีแต่เลือดและเสียงกรีดร้องหรือ?",
						"hindi": "यह सब सिर्फ खून और चीखें हैं?"
					}
				},
				{
					"content": {
						"korean": "고대 부족의 학살 기록이야. 숲의 진짜 슬픔이지.",
						"english": "Records of an ancient tribe's massacre. The forest's true sorrow.",
						"japanese": "古代部族の虐殺記録だ。森の本当の悲しみだよ。",
						"chinese": "是古代部落的屠杀记录。森林真正的悲伤。",
						"french": "Des registres du massacre d'une ancienne tribu. La véritable tristesse de la forêt.",
						"spanish": "Registros de la masacre de una antigua tribu. La verdadera tristeza del bosque.",
						"vietnamese": "Ghi chép về cuộc thảm sát của một bộ tộc cổ đại. Nỗi buồn thật sự của khu rừng.",
						"thai": "บันทึกการสังหารหมู่ของชนเผ่าโบราณ. ความเศร้าที่แท้จริงของป่า.",
						"hindi": "एक प्राचीन जनजाति के नरसंहार के रिकॉर्ड। जंगल का असली दुख।"
					},
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 샘을 통해, 고통받는 영혼들의 절규가 들려.",
						"english": "Through this spring, I hear the screams of tormented souls.",
						"japanese": "この泉を通して、苦しむ魂の叫びが聞こえる。",
						"chinese": "通过这口泉，我听到了受苦灵魂的尖叫。",
						"french": "À travers cette source, j'entends les cris des âmes tourmentées.",
						"spanish": "A través de este manantial, escucho los gritos de almas atormentadas.",
						"vietnamese": "Qua suối nguồn này, ta nghe thấy tiếng thét của những linh hồn thống khổ.",
						"thai": "ผ่านธารน้ำนี้ ฉันได้ยินเสียงกรีดร้องของวิญญาณที่ทุกข์ทรมาน",
						"hindi": "इस झरने से, मुझे पीड़ित आत्माओं की चीखें सुनाई देती हैं।"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "영혼의 절규라니…",
						"english": "Screams of souls...?",
						"japanese": "魂の叫び…だと？",
						"chinese": "灵魂的尖叫…？",
						"french": "Des cris d'âmes...?",
						"spanish": "¿Gritos de almas...?",
						"vietnamese": "Tiếng thét của linh hồn sao...?",
						"thai": "เสียงกรีดร้องของวิญญาณหรือ...",
						"hindi": "आत्माओं की चीखें...?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "이 기록이 숲의 영혼을 잠식하고 있어.",
						"english": "This record is eroding the forest's soul.",
						"japanese": "この記録が森の魂を蝕んでいる。",
						"chinese": "这份记录正在侵蚀森林的灵魂。",
						"french": "Cet écrit ronge l'âme de la forêt.",
						"spanish": "Este registro está erosionando el alma del bosque.",
						"vietnamese": "Ký ức này đang ăn mòn linh hồn của khu rừng.",
						"thai": "บันทึกนี้กำลังกัดกินจิตวิญญาณของป่า",
						"hindi": "यह अभिलेख जंगल की आत्मा को नष्ट कर रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 여기… 누군가 지우려고 한 흔적이 있어!",
						"english": "Wait, here... someone tried to erase something!",
						"japanese": "待て、ここ… 誰かが消そうとした痕跡が！",
						"chinese": "等等，这里… 有人试图抹去的痕迹！",
						"french": "Attends, ici... quelqu'un a essayé d'effacer quelque chose !",
						"spanish": "Espera, aquí... ¡alguien intentó borrar algo!",
						"vietnamese": "Khoan đã, ở đây… có dấu vết ai đó đã cố gắng xóa bỏ!",
						"thai": "เดี๋ยวก่อน, ตรงนี้... มีร่องรอยว่ามีใครบางคนพยายามจะลบมัน!",
						"hindi": "रुको, यहाँ... किसी ने मिटाने की कोशिश की है!"
					},
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "angry",
					"content": {
						"korean": "…맞아. 누군가 이 진실을 필사적으로 감추려 했지.",
						"english": "...Right. Someone desperately tried to hide this truth.",
						"japanese": "…そうだ。誰かがこの真実を必死に隠そうとしたんだ。",
						"chinese": "……没错。有人拼命想掩盖这个真相。",
						"french": "...Oui. Quelqu'un a désespérément essayé de cacher cette vérité.",
						"spanish": "...Exacto. Alguien intentó desesperadamente ocultar esta verdad.",
						"vietnamese": "…Đúng vậy. Ai đó đã tuyệt vọng che giấu sự thật này.",
						"thai": "...ใช่แล้ว มีใครบางคนพยายามซ่อนความจริงนี้อย่างสิ้นหวัง",
						"hindi": "...सही। किसी ने इस सच को छिपाने की जानबूझकर कोशिश की थी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "진실을 지우려 한다니… 누가?",
						"english": "Tried to erase the truth...? Who?",
						"japanese": "真実を消そうと？…誰が？",
						"chinese": "试图抹去真相… 谁？",
						"french": "Essayer d'effacer la vérité...? Qui ?",
						"spanish": "¿Intentar borrar la verdad...? ¿Quién?",
						"vietnamese": "Cố gắng xóa bỏ sự thật sao…? Ai cơ?",
						"thai": "พยายามจะลบความจริงหรือ... ใคร?",
						"hindi": "सच को मिटाने की कोशिश... किसने?"
					}
				},
				{
					"content": {
						"korean": "이 숲의 질서를 지키려는 자. 혹은… 새로운 질서를 만들려는 자.",
						"english": "Those who protect this forest's order. Or... those who seek to create a new one.",
						"japanese": "この森の秩序を守る者。あるいは…新たな秩序を創り出す者。",
						"chinese": "维护这片森林秩序的人。或者… 试图创造新秩序的人。",
						"french": "Ceux qui protègent l'ordre de cette forêt. Ou... ceux qui cherchent à en créer un nouveau.",
						"spanish": "Quienes protegen el orden de este bosque. O... quienes buscan crear uno nuevo.",
						"vietnamese": "Kẻ bảo vệ trật tự của khu rừng này. Hoặc… kẻ muốn tạo ra một trật tự mới.",
						"thai": "ผู้พิทักษ์ความสงบเรียบร้อยของป่านี้ หรือ... ผู้ที่พยายามสร้างความสงบเรียบร้อยใหม่",
						"hindi": "वे जो इस जंगल की व्यवस्था की रक्षा करते हैं। या... वे जो एक नई व्यवस्था बनाना चाहते हैं।"
					},
					"emotion": "base",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 기록을 더 파헤치면 위험해질 거야.",
						"english": "Digging deeper into this record will be dangerous.",
						"japanese": "この記録をさらに探れば、危険になるだろう。",
						"chinese": "深入挖掘这份记录会很危险。",
						"french": "Approfondir cet écrit sera dangereux.",
						"spanish": "Indagar más en este registro será peligroso.",
						"vietnamese": "Nếu đào sâu hơn vào ký ức này, sẽ rất nguy hiểm.",
						"thai": "การขุดคุ้ยบันทึกนี้ให้ลึกกว่านี้จะอันตราย",
						"hindi": "इस अभिलेख को और खोदना खतरनाक होगा।"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 숲의 슬픔을 외면할 순 없지.",
						"english": "I can't stop. I can't ignore the forest's sorrow.",
						"japanese": "止まれない。森の悲しみに目を背けることはできない。",
						"chinese": "我不能停。我无法对森林的悲伤视而不见。",
						"french": "Je ne peux pas m'arrêter. Je ne peux ignorer la peine de la forêt.",
						"spanish": "No puedo detenerme. No puedo ignorar la tristeza del bosque.",
						"vietnamese": "Ta không thể dừng lại. Không thể ngoảnh mặt làm ngơ trước nỗi buồn của khu rừng.",
						"thai": "ฉันหยุดไม่ได้ ฉันไม่สามารถเมินเฉยต่อความเศร้าโศกของป่าได้",
						"hindi": "मैं रुक नहीं सकता। मैं जंगल के दुख को नज़रअंदाज़ नहीं कर सकता।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "기억의 샘의 가장 깊은 곳. 섬뜩한 기운이 맴돌았다.",
						"english": "The deepest part of the Spring of Memories. An eerie aura lingered.",
						"japanese": "記憶の泉の最深部。不気味な気配が漂っていた。",
						"chinese": "记忆之泉的最深处。一股诡异的气息萦绕着。",
						"french": "Le plus profond de la Source des Souvenirs. Une aura étrange y persistait.",
						"spanish": "La parte más profunda del Manantial de los Recuerdos. Una aura espeluznante persistía.",
						"vietnamese": "Nơi sâu nhất của Suối Ký Ức. Một luồng khí rợn người bao trùm.",
						"thai": "ส่วนที่ลึกที่สุดของธารน้ำแห่งความทรงจำ มีกลิ่นอายที่น่าขนลุกแผ่ซ่าน",
						"hindi": "यादों के झरने का सबसे गहरा हिस्सा। एक भयानक आभा मंडरा रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 잊혀진 것을 들추려 하는가.",
						"english": "How dare you… seek what's been forgotten?",
						"japanese": "よくも… 忘れられたものを暴こうとするか。",
						"chinese": "竟敢… 揭露被遗忘之物。",
						"french": "Comment oses-tu… déterrer ce qui a été oublié ?",
						"spanish": "¿Cómo te atreves… a desenterrar lo olvidado?",
						"vietnamese": "Dám… khơi lại những gì đã bị lãng quên sao?",
						"thai": "กล้าดียังไง… มาคุ้ยเขี่ยสิ่งที่ถูกลืมเลือนไปแล้ว?",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… भूली हुई चीज़ों को उजागर करने की।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 진실을 지우려 한 자냐?",
						"english": "Were you the one who tried to erase the truth?",
						"japanese": "お前が真実を消そうとした者か？",
						"chinese": "是你试图抹去真相吗？",
						"french": "Étais-tu celui qui a tenté d'effacer la vérité ?",
						"spanish": "¿Fuiste tú quien intentó borrar la verdad?",
						"vietnamese": "Ngươi là kẻ đã cố gắng xóa bỏ sự thật sao?",
						"thai": "เจ้าคือผู้ที่พยายามลบเลือนความจริงหรือ?",
						"hindi": "क्या तुम वही हो जिसने सच मिटाने की कोशिश की?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 슬픔은 잠재워야 해. 그것이 곧 평화.",
						"english": "The forest's sorrow must be laid to rest. That is peace.",
						"japanese": "森の悲しみは鎮めねばならぬ。それが平和だ。",
						"chinese": "森林的悲伤必须平息。那才是和平。",
						"french": "La tristesse de la forêt doit être apaisée. C'est ça, la paix.",
						"spanish": "La tristeza del bosque debe ser silenciada. Esa es la paz.",
						"vietnamese": "Nỗi buồn của rừng phải được xoa dịu. Đó mới là hòa bình.",
						"thai": "ความโศกเศร้าของป่าจะต้องถูกระงับ นั่นคือสันติภาพ",
						"hindi": "जंगल के दुख को शांत करना होगा। वही शांति है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건 위선일 뿐이야!",
						"english": "That's just hypocrisy!",
						"japanese": "それは偽善に過ぎない！",
						"chinese": "那不过是伪善！",
						"french": "Ce n'est que de l'hypocrisie !",
						"spanish": "¡Eso es pura hipocresía!",
						"vietnamese": "Đó chỉ là sự đạo đức giả thôi!",
						"thai": "นั่นมันแค่ความหน้าซื่อใจคด!",
						"hindi": "वह केवल पाखंड है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "…하찮은 노력. 너희의 진실은… 이대로 잊혀질 것이다.",
						"english": "…Worthless effort. Your truth… will be forgotten like this.",
						"japanese": "…くだらない努力だ。お前たちの真実は… このまま忘れ去られるだろう。",
						"chinese": "…微不足道的努力。你们的真相… 将就这样被遗忘。",
						"french": "…Effort insignifiant. Votre vérité… sera ainsi oubliée.",
						"spanish": "…Esfuerzo inútil. Vuestra verdad… será olvidada así.",
						"vietnamese": "…Nỗ lực vô ích. Sự thật của các ngươi… sẽ cứ thế bị lãng quên.",
						"thai": "…ความพยายามไร้ค่า ความจริงของพวกเจ้า… จะถูกลืมไปแบบนี้แหละ",
						"hindi": "…तुच्छ प्रयास। तुम्हारा सच… इसी तरह भुला दिया जाएगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 포기하지 않아! 반드시 진실을 밝힐 거야.",
						"english": "Ugh... I won't give up! I'll definitely uncover the truth.",
						"japanese": "くっ…諦めない！必ず真実を明らかにする。",
						"chinese": "咳…我不会放弃的！我一定要揭露真相。",
						"french": "Ugh... Je n'abandonnerai pas ! Je découvrirai la vérité, c'est certain.",
						"spanish": "Ugh... ¡No me rendiré! Descubriré la verdad, cueste lo que cueste.",
						"vietnamese": "Khụ... Ta sẽ không từ bỏ! Ta nhất định sẽ phơi bày sự thật.",
						"thai": "อึก... ฉันไม่ยอมแพ้หรอก! ฉันจะเปิดเผยความจริงให้ได้แน่นอน",
						"hindi": "उफ़... मैं हार नहीं मानूँगा! मैं सच का पता ज़रूर लगाऊँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 슬픔이 다시 한번 탐험가들을 덮쳤다.",
						"english": "The sorrow of the forest has once again enveloped the explorers.",
						"japanese": "森の悲しみが再び探検家たちを襲った。",
						"chinese": "森林的悲伤再次笼罩了探险家们。",
						"french": "La tristesse de la forêt a de nouveau envahi les explorateurs.",
						"spanish": "La pena del bosque ha vuelto a abrumar a los exploradores.",
						"vietnamese": "Nỗi buồn của khu rừng một lần nữa bao trùm những nhà thám hiểm.",
						"thai": "ความเศร้าโศกของป่าได้ปกคลุมเหล่านักสำรวจอีกครั้ง",
						"hindi": "वन का दुःख एक बार फिर खोजकर्ताओं को घेर लिया है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 자들. 진실은… 더 깊이 잠들어 있다.",
						"english": "…Fools. The truth… lies deeper still.",
						"japanese": "…愚かな者たちめ。真実は… もっと深く眠っている。",
						"chinese": "…愚蠢之人。真相… 沉睡得更深。",
						"french": "…Fous. La vérité… dort encore plus profondément.",
						"spanish": "…Necios. La verdad… yace aún más profunda.",
						"vietnamese": "…Những kẻ ngu ngốc. Sự thật… vẫn còn ngủ sâu hơn nữa.",
						"thai": "…พวกโง่เขลา ความจริง… หลับใหลลึกกว่านั้นอีก",
						"hindi": "…मूर्ख। सच… और गहराई में सोया है।"
					}
				},
				{
					"content": {
						"korean": "누군가… 널 기다리고 있다.",
						"english": "Someone… is waiting for you.",
						"japanese": "誰か… お前を待っている。",
						"chinese": "有人… 在等你。",
						"french": "Quelqu'un… t'attend.",
						"spanish": "Alguien… te está esperando.",
						"vietnamese": "Có ai đó… đang chờ ngươi.",
						"thai": "มีใครบางคน… กำลังรอเจ้าอยู่",
						"hindi": "कोई… तुम्हारा इंतज़ार कर रहा है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 누가 우릴 기다려?",
						"english": "What are you talking about? Who's waiting for us?",
						"japanese": "何を言っている？誰が俺たちを待っているんだ？",
						"chinese": "你说什么？谁在等我们？",
						"french": "De quoi parles-tu ? Qui nous attend ?",
						"spanish": "¿De qué hablas? ¿Quién nos espera?",
						"vietnamese": "Ngươi nói gì vậy? Ai đang chờ chúng ta?",
						"thai": "เจ้าพูดอะไร? ใครกำลังรอเราอยู่?",
						"hindi": "क्या कह रहे हो? कौन हमारा इंतज़ार कर रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…아직, 끝이 아니야.",
						"english": "…It's not over yet.",
						"japanese": "…まだ、終わりではない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc đâu.",
						"thai": "…ยังไม่จบแค่นี้",
						"hindi": "…अभी, यह खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "기억의 샘의 물결이 잔잔해졌다. 그러나 숲의 슬픔은 여전히 깊었다.",
						"english": "The ripples of the Spring of Memory calmed. Yet the forest's sorrow remained deep.",
						"japanese": "記憶の泉の波紋は穏やかになった。しかし、森の悲しみはまだ深かった。",
						"chinese": "记忆之泉的波纹平静了。然而，森林的悲伤依然深重。",
						"french": "Les vagues de la Source du Souvenir se sont apaisées. Mais la tristesse de la forêt restait profonde.",
						"spanish": "Las olas del Manantial del Recuerdo se calmaron. Pero la tristeza del bosque seguía siendo profunda.",
						"vietnamese": "Làn nước của Suối Ký Ức đã lặng đi. Nhưng nỗi buồn của rừng vẫn còn sâu thẳm.",
						"thai": "คลื่นน้ำของบ่อน้ำแห่งความทรงจำสงบลงแล้ว แต่ความโศกเศร้าของป่ายังคงลึกซึ้ง",
						"hindi": "स्मृति के झरने की लहरें शांत हो गईं। फिर भी जंगल का दुख गहरा बना रहा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
