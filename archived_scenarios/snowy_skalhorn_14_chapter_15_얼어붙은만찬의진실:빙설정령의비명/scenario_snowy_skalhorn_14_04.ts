export const scenario_snowy_skalhorn_14_04 = {
	"scenario_id": "snowy_skalhorn_14_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고원 깊숙한 곳. 차가운 바람이 모든 소리를 삼켰다.",
						"english": "Deep in the plateau. Cold winds swallowed every sound.",
						"japanese": "高原の奥深く。冷たい風がすべての音を飲み込んだ。",
						"chinese": "高原深处。寒风吞噬了所有的声音。",
						"french": "Au plus profond du plateau. Les vents froids avalaient chaque son.",
						"spanish": "En lo profundo de la meseta. Vientos fríos devoraban cada sonido.",
						"vietnamese": "Sâu trong cao nguyên. Gió lạnh nuốt chửng mọi âm thanh.",
						"thai": "ลึกเข้าไปในที่ราบสูง ลมหนาวกลืนกินทุกเสียง",
						"hindi": "पठार की गहराई में। ठंडी हवाओं ने हर आवाज़ को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이봐요. 기온이 너무 급격하게 떨어지고 있어요.",
						"english": "Hey. The temperature is dropping too rapidly.",
						"japanese": "おい。気温が急激に下がりすぎている。",
						"chinese": "喂。气温下降得太快了。",
						"french": "Hé. La température chute trop rapidement.",
						"spanish": "Oye. La temperatura está bajando demasiado rápido.",
						"vietnamese": "Này. Nhiệt độ đang giảm quá nhanh.",
						"thai": "เฮ้ อุณหภูมิกำลังลดลงเร็วเกินไป",
						"hindi": "अरे। तापमान बहुत तेज़ी से गिर रहा है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "생명체들이… 얼어붙고 있잖아.",
						"english": "Living creatures... they're freezing.",
						"japanese": "生き物たちが…凍りついている。",
						"chinese": "生物们……正在冻结。",
						"french": "Les créatures vivantes… elles gèlent.",
						"spanish": "Las criaturas vivas... se están congelando.",
						"vietnamese": "Các sinh vật… đang đóng băng.",
						"thai": "สิ่งมีชีวิต... กำลังแข็งตัว",
						"hindi": "जीवित प्राणी... वे जम रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이건 단순한 자연현상이 아니에요. 스칼혼의 영향이 점점 더….",
						"english": "This isn't a mere natural phenomenon. Skalhorn's influence is growing more and more....",
						"japanese": "これは単なる自然現象ではない。スカルホーンの影響がますます…。",
						"chinese": "这不仅仅是自然现象。斯卡尔霍恩的影响越来越大……。",
						"french": "Ce n'est pas un simple phénomène naturel. L'influence de Skalhorn s'étend de plus en plus...",
						"spanish": "Esto no es un simple fenómeno natural. La influencia de Skalhorn es cada vez mayor...",
						"vietnamese": "Đây không phải là hiện tượng tự nhiên đơn thuần. Ảnh hưởng của Skalhorn ngày càng tăng…",
						"thai": "นี่ไม่ใช่ปรากฏการณ์ทางธรรมชาติธรรมดา อิทธิพลของ Skalhorn กำลังเพิ่มขึ้นเรื่อยๆ...",
						"hindi": "यह कोई साधारण प्राकृतिक घटना नहीं है। स्कालहॉर्न का प्रभाव और बढ़ता जा रहा है...."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대 기록을 더 찾아봤어요. 여기서 발견된 룬 문자들….",
						"english": "I looked up more ancient records. The runic letters found here....",
						"japanese": "古代の記録をもっと調べてみた。ここで見つかったルーン文字は…。",
						"chinese": "我查阅了更多古代记录。这里发现的符文文字……。",
						"french": "J'ai cherché d'autres registres anciens. Les runes trouvées ici...",
						"spanish": "Busqué más registros antiguos. Las runas encontradas aquí...",
						"vietnamese": "Tôi đã tìm kiếm thêm các ghi chép cổ đại. Những chữ rune được tìm thấy ở đây…",
						"thai": "ฉันได้ค้นหาบันทึกโบราณเพิ่มเติม ตัวอักษรรูนที่พบที่นี่...",
						"hindi": "मैंने और प्राचीन अभिलेख देखे। यहां मिले रूनी अक्षर..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐라고 쓰여 있는데?",
						"english": "What does it say?",
						"japanese": "何と書いてある？",
						"chinese": "上面写了什么？",
						"french": "Qu'est-ce qu'il y a écrit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó viết gì vậy?",
						"thai": "เขียนว่าอะไร?",
						"hindi": "इसमें क्या लिखा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "'영원한 얼음의 품'… 그리고… '축복받은 손님'.",
						"english": "'Embrace of Eternal Ice'... and... 'The Blessed Guest'.",
						"japanese": "「永遠なる氷の抱擁」…そして…「祝福されし客人」。",
						"chinese": "“永恒寒冰的拥抱”……以及……“受祝福的客人”。",
						"french": "« L'étreinte de la glace éternelle »… et… « L'invité béni ».",
						"spanish": "«El Abrazo del Hielo Eterno»... y... «El Huésped Bendito».",
						"vietnamese": "“Vòng ôm Băng vĩnh cửu”... và... “Vị khách được ban phước”.",
						"thai": "“อ้อมกอดแห่งน้ำแข็งนิรันดร์”... และ... “แขกผู้ได้รับพร”",
						"hindi": "“अनन्त बर्फ का आलिंगन”... और... “धन्य अतिथि”।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그게 뭔데?",
						"english": "What is it?",
						"japanese": "それは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기록엔 재앙을 의미하는 단어로 사용되었어요.",
						"english": "In records, it signified calamity.",
						"japanese": "記録には、災厄を意味する言葉として使われていました。",
						"chinese": "记录中，它被用作表示灾难的词。",
						"french": "Dans les annales, c'était un mot pour désigner la calamité.",
						"spanish": "En los registros, se usaba para referirse a una calamidad.",
						"vietnamese": "Trong ghi chép, nó được dùng để chỉ tai ương.",
						"thai": "ในบันทึก มันถูกใช้เป็นคำที่หมายถึงหายนะ",
						"hindi": "अभिलेखों में, इसे विपदा के अर्थ में प्रयोग किया गया था।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "스칼혼은… 이 모든 것을 얼리려는 의지를 가지고 있어요.",
						"english": "Skalhorn... has the will to freeze everything.",
						"japanese": "スカルホーンは…この全てを凍らせようとする意志を持っている。",
						"chinese": "斯卡尔霍恩……有冻结这一切的意志。",
						"french": "Skalhorn… a la volonté de tout glacer.",
						"spanish": "Skalhorn... tiene la voluntad de congelar todo esto.",
						"vietnamese": "Skalhorn... có ý chí đóng băng tất cả.",
						"thai": "สกัลฮอร์น... มีเจตจำนงที่จะแช่แข็งทุกสิ่ง",
						"hindi": "स्काल्हॉर्न... में यह सब जमाने की इच्छा है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "의지라고? 유물이 어떻게…",
						"english": "Will? How can an artifact...",
						"japanese": "意志だと？遺物がどうやって…",
						"chinese": "意志？一件遗物怎么会……",
						"french": "La volonté ? Comment un artefact pourrait-il…",
						"spanish": "¿Voluntad? ¿Cómo puede un artefacto...?",
						"vietnamese": "Ý chí sao? Một cổ vật làm sao có thể...",
						"thai": "เจตจำนง? วัตถุโบราณจะ...",
						"hindi": "इच्छा? एक कलाकृति कैसे..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 얼음의 축복은… 모두를 파괴하려는 저주예요.",
						"english": "This blessing of ice... is a curse to destroy all.",
						"japanese": "この氷の祝福は…全てを破壊しようとする呪いなのだ。",
						"chinese": "这冰的祝福……是一个意图摧毁一切的诅咒。",
						"french": "Cette bénédiction de glace… est une malédiction pour tout détruire.",
						"spanish": "Esta bendición de hielo... es una maldición para destruirlo todo.",
						"vietnamese": "Phước lành băng giá này... là một lời nguyền hủy diệt tất cả.",
						"thai": "พรแห่งน้ำแข็งนี้... คือคำสาปที่จะทำลายทุกสิ่ง",
						"hindi": "बर्फ का यह आशीर्वाद... सबको नष्ट करने का एक अभिशाप है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "'축복받은 손님'은… 우리를 노리고 있어요.",
						"english": "'The Blessed Guest'... is targeting us.",
						"japanese": "「祝福されし客人」は…我々を狙っている。",
						"chinese": "“受祝福的客人”……正在瞄准我们。",
						"french": "« L'invité béni »… nous cible.",
						"spanish": "«El Huésped Bendito»... nos está apuntando.",
						"vietnamese": "“Vị khách được ban phước”... đang nhắm vào chúng ta.",
						"thai": "“แขกผู้ได้รับพร”... กำลังมุ่งเป้ามาที่เรา",
						"hindi": "“धन्य अतिथि”... हमें निशाना बना रहा है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가면 안 돼요. 이대로 가다간….",
						"english": "Don't go any deeper. If we continue like this...",
						"japanese": "これ以上深く進んではいけない。このままでは…",
						"chinese": "不要再深入了。再这样下去……",
						"french": "N'allez pas plus loin. Si nous continuons ainsi…",
						"spanish": "No vayas más profundo. Si seguimos así...",
						"vietnamese": "Đừng đi sâu hơn nữa. Nếu cứ tiếp tục thế này...",
						"thai": "อย่าลงลึกไปกว่านี้ ถ้ายังเป็นแบบนี้ต่อไป...",
						"hindi": "और गहरा मत जाओ। अगर हम ऐसे ही चलते रहे तो..."
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어. 이 얼음을 끝내야 해.",
						"english": "I can't stop. I must end this ice.",
						"japanese": "止まるわけにはいかない。この氷を終わらせなければ。",
						"chinese": "无法停止。必须终结这冰。",
						"french": "Je ne peux pas m'arrêter. Je dois mettre fin à cette glace.",
						"spanish": "No puedo parar. Tengo que acabar con este hielo.",
						"vietnamese": "Không thể dừng lại. Phải kết thúc băng này.",
						"thai": "หยุดไม่ได้ ข้าต้องหยุดน้ำแข็งนี้",
						"hindi": "मैं रुक नहीं सकता। मुझे इस बर्फ को खत्म करना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "스칼혼은… 당신의 분노를 원하고 있어요.",
						"english": "Skalhorn... desires your wrath.",
						"japanese": "スカルホーンは…あなたの怒りを求めている。",
						"chinese": "斯卡尔霍恩……想要你的愤怒。",
						"french": "Skalhorn… désire votre colère.",
						"spanish": "Skalhorn... desea tu ira.",
						"vietnamese": "Skalhorn... muốn cơn thịnh nộ của bạn.",
						"thai": "สกัลฮอร์น... ต้องการความโกรธของคุณ",
						"hindi": "स्काल्हॉर्न... तुम्हारे क्रोध की इच्छा रखता है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "상관없어. 막아야만 해.",
						"english": "Doesn't matter. Must stop it.",
						"japanese": "関係ない。止めるしかない。",
						"chinese": "无关紧要。必须阻止。",
						"french": "Peu importe. Il faut l'arrêter.",
						"spanish": "No importa. Debo detenerlo.",
						"vietnamese": "Không thành vấn đề. Phải chặn lại.",
						"thai": "ไม่สำคัญ ต้องหยุดมันให้ได้",
						"hindi": "कोई फर्क नहीं पड़ता। इसे रोकना ही होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
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
						"korean": "차가운 전율이 감도는 공간. 거대한 그림자가 앞을 가로막았다.",
						"english": "A space filled with a cold thrill. A gigantic shadow blocked the way.",
						"japanese": "冷たい戦慄が走る空間。巨大な影が道を塞いだ。",
						"chinese": "冰冷的颤栗弥漫空间。巨大的黑影挡住了去路。",
						"french": "Un frisson glacial parcourt l'espace. Une ombre gigantesque barrait le chemin.",
						"spanish": "Un escalofrío helado recorre el espacio. Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Không gian tràn ngập nỗi rùng mình lạnh giá. Một bóng đen khổng lồ chặn lối.",
						"thai": "พื้นที่ที่เต็มไปด้วยความเยือกเย็นอันน่าสะพรึงกลัว เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक ठंडे रोमांच से भरी जगह। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…침입자들이여. 너희도 얼음의 품으로….",
						"english": "...Intruders. You too shall embrace the ice...",
						"japanese": "…侵入者たちよ。お前たちも氷の懐へ…。",
						"chinese": "……入侵者们。你们也必将投入寒冰的怀抱……",
						"french": "...Intrus. Vous aussi, rejoignez l'étreinte de la glace...",
						"spanish": "...Intrusos. Vosotros también abrazaréis el hielo...",
						"vietnamese": "...Những kẻ xâm nhập. Các ngươi cũng sẽ về với vòng tay của băng giá...",
						"thai": "...ผู้บุกรุกเอ๋ย พวกเจ้าก็จงกลับคืนสู่อ้อมอกแห่งน้ำแข็งเถิด...",
						"hindi": "...घुसपैठियों। तुम भी बर्फ की गोद में आओगे..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 얼음의 원흉이구나.",
						"english": "So you... are the source of all this ice.",
						"japanese": "貴様が…この全ての氷の元凶か。",
						"chinese": "原来你……就是这一切冰霜的元凶。",
						"french": "C'est toi… l'origine de toute cette glace.",
						"spanish": "Así que tú... eres el origen de todo este hielo.",
						"vietnamese": "Ngươi… chính là kẻ gây ra tất cả băng giá này.",
						"thai": "แก...คือต้นเหตุของน้ำแข็งทั้งหมดนี่เอง",
						"hindi": "तो तुम... इस सारी बर्फ की जड़ हो।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나는… 얼음의 축복… {random_boss}.",
						"english": "I am... the blessing of ice... {random_boss}.",
						"japanese": "我は…氷の祝福… {random_boss}。",
						"chinese": "吾乃……寒冰的赐福……{random_boss}。",
						"french": "Je suis… la bénédiction de la glace… {random_boss}.",
						"spanish": "Yo soy... la bendición del hielo... {random_boss}.",
						"vietnamese": "Ta là… phước lành của băng giá… {random_boss}.",
						"thai": "ข้าคือ...พรแห่งน้ำแข็ง... {random_boss}",
						"hindi": "मैं हूँ... बर्फ का आशीर्वाद... {random_boss}।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "축복이 아니라 저주야!",
						"english": "It's a curse, not a blessing!",
						"japanese": "祝福ではなく呪いだ！",
						"chinese": "这不是赐福，是诅咒！",
						"french": "Ce n'est pas une bénédiction, c'est une malédiction !",
						"spanish": "¡Es una maldición, no una bendición!",
						"vietnamese": "Không phải phước lành, mà là lời nguyền!",
						"thai": "มันไม่ใช่พร แต่มันคือคำสาป!",
						"hindi": "यह आशीर्वाद नहीं, अभिशाप है!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음의 품이 모든 것을 집어삼켰다.",
						"english": "The embrace of ice swallowed all.",
						"japanese": "氷の抱擁がすべてを飲み込んだ。",
						"chinese": "冰冷的怀抱吞噬了一切。",
						"french": "L'étreinte de la glace a tout englouti.",
						"spanish": "El abrazo del hielo lo devoró todo.",
						"vietnamese": "Vòng ôm của băng giá đã nuốt chửng tất cả.",
						"thai": "อ้อมกอดแห่งน้ำแข็งกลืนกินทุกสิ่ง",
						"hindi": "बर्फ के आगोश ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 내 얼음에 갇혀라.",
						"english": "Insignificant things... trapped in my ice.",
						"japanese": "愚かな者たちよ…我が氷に囚われよ。",
						"chinese": "渺小的存在…在我的冰中受困吧。",
						"french": "Petites choses… Soyez piégées dans ma glace.",
						"spanish": "Cosas insignificantes… Quedad atrapadas en mi hielo.",
						"vietnamese": "Những kẻ hèn mọn... hãy bị nhốt trong băng của ta.",
						"thai": "เจ้าพวกไร้ค่า... จงถูกขังในน้ำแข็งของข้า",
						"hindi": "तुच्छ प्राणी… मेरी बर्फ़ में क़ैद हो जाओ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 돌아올 것이다!",
						"english": "...It's not over yet. I will return!",
						"japanese": "…まだ終わってない。必ず戻って来る！",
						"chinese": "……还没结束。我还会回来的！",
						"french": "…Ce n'est pas encore fini. Je reviendrai !",
						"spanish": "…Aún no ha terminado. ¡Volveré!",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ trở lại!",
						"thai": "...ยังไม่จบหรอก ข้าจะกลับมา!",
						"hindi": "…अभी ख़त्म नहीं हुआ है। मैं वापस आऊँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크아아악…! 하지만… 얼음은… 영원하다….",
						"english": "Kghaaak...! But... the ice... is eternal...",
						"japanese": "ぐああああっ…！しかし…氷は…永遠だ…。",
						"chinese": "啊啊啊啊……！但是……寒冰……永存……",
						"french": "Grrrraaaah… ! Mais… la glace… est éternelle…",
						"spanish": "¡Arghhh...! Pero... el hielo... es eterno...",
						"vietnamese": "Gràoooo...! Nhưng... băng giá... là vĩnh cửu...",
						"thai": "กร๊าาาาาก...! แต่ว่า...น้ำแข็ง...เป็นนิรันดร์...",
						"hindi": "आआआआह...! लेकिन... बर्फ... अमर है..."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러뜨렸다….",
						"english": "We defeated it...",
						"japanese": "倒したか。",
						"chinese": "击败了……",
						"french": "Nous l'avons vaincu…",
						"spanish": "Lo hemos derrotado...",
						"vietnamese": "Đã đánh bại...",
						"thai": "โค่นมันลงได้แล้ว...",
						"hindi": "हमने उसे हरा दिया..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "스칼혼의 힘은… 생각보다 깊어요. 이건 시작일 뿐이에요.",
						"english": "Skalhorn's power is... deeper than we thought. This is just the beginning.",
						"japanese": "スカルホーンの力は…思ったより深い。これは始まりに過ぎない。",
						"chinese": "斯卡尔霍恩的力量……比想象中更深。这只是个开始。",
						"french": "Le pouvoir de Skalhorn est… plus profond qu'on ne le pensait. Ce n'est que le début.",
						"spanish": "El poder de Skalhorn es... más profundo de lo que pensábamos. Esto es solo el principio.",
						"vietnamese": "Sức mạnh của Skalhorn… sâu hơn chúng ta nghĩ. Đây chỉ là khởi đầu.",
						"thai": "พลังของสเกลฮอร์น...ลึกซึ้งกว่าที่คิด นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "स्कलहॉर्न की शक्ति... हमारी सोच से भी गहरी है। यह तो बस शुरुआत है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음은 잠시 물러났지만, 겨울의 맹위는 여전했다. 더 거대한 존재가 깨어나고 있었다.",
						"english": "The ice receded for a moment, but the might of winter remained. A greater entity was awakening.",
						"japanese": "氷は一時退いたが、冬の猛威は健在だった。さらに巨大な存在が目覚めつつあった。",
						"chinese": "寒冰暂时退去，但冬日的凛冽依旧。一个更巨大的存在正在苏醒。",
						"french": "La glace s'est retirée un instant, mais la fureur de l'hiver persistait. Une entité plus grande s'éveillait.",
						"spanish": "El hielo retrocedió por un momento, pero la furia del invierno permaneció. Una entidad aún mayor estaba despertando.",
						"vietnamese": "Băng giá tạm thời rút lui, nhưng sức mạnh của mùa đông vẫn còn đó. Một thực thể vĩ đại hơn đang thức tỉnh.",
						"thai": "น้ำแข็งถอยไปชั่วคราว แต่ความเกรี้ยวกราดของฤดูหนาวยังคงอยู่ สิ่งที่ยิ่งใหญ่กว่ากำลังตื่นขึ้น",
						"hindi": "बर्फ कुछ समय के लिए पीछे हट गई, लेकिन सर्दियों का प्रकोप अभी भी बना हुआ था। एक और विशालकाय सत्ता जागृत हो रही थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 겨울이 고원을 지배했다.",
			"스칼혼의 저주 아래, 모든 생명은 얼어붙었다.",
			"기록자 에이라는 잊힌 전설 속에서 섬뜩한 예언을 발견했다.",
			"이 얼음은 축복이 아니다. 명백한 파괴의 의지였다."
		],
		"english": [
			"A harsh winter gripped the plateau.",
			"Under Skalhorn's curse, all life froze.",
			"Aira, the Chronicler, uncovered a chilling prophecy within forgotten legends.",
			"This ice is no blessing. It is a clear will of destruction."
		],
		"japanese": [
			"厳しい冬が高原を支配した。",
			"スカルホーンの呪いの下、すべての命は凍りついた。",
			"記録者アイラは、忘れられた伝説の中で不気味な予言を発見した。",
			"この氷は恵みではない。それは明確な破壊の意思だ。"
		],
		"chinese": [
			"严酷的冬天统治着高原。",
			"在斯卡尔霍恩的诅咒下，所有生命都冻结了。",
			"记录者艾拉在被遗忘的传说中发现了一个令人毛骨悚然的预言。",
			"这冰不是祝福。它分明是毁灭的意志。"
		],
		"french": [
			"Un hiver rigoureux s'était abattu sur le plateau.",
			"Sous la malédiction de Skalhorn, toute vie fut figée par le gel.",
			"Aira la Chroniqueuse découvrit une prophétie glaçante dans des légendes oubliées.",
			"Cette glace n'est pas une bénédiction. C'est une volonté manifeste de destruction."
		],
		"spanish": [
			"Un invierno cruel dominaba la meseta.",
			"Bajo la maldición de Skalhorn, toda vida se congeló.",
			"Aira la Cronista descubrió una escalofriante profecía en leyendas olvidadas.",
			"Este hielo no es una bendición. Es una clara voluntad de destrucción."
		],
		"vietnamese": [
			"Mùa đông khắc nghiệt bao trùm cao nguyên.",
			"Dưới lời nguyền của Skalhorn, mọi sự sống đều đóng băng.",
			"Aira, người ghi chép sử, đã phát hiện ra một lời tiên tri rùng rợn trong những truyền thuyết bị lãng quên.",
			"Lớp băng này không phải là phước lành. Đó là ý chí hủy diệt rõ ràng."
		],
		"thai": [
			"ฤดูหนาวอันโหดร้ายเข้าปกคลุมที่ราบสูง",
			"ภายใต้คำสาปของ Skalhorn ทุกชีวิตก็แข็งตัว",
			"ไอรา ผู้บันทึกประวัติศาสตร์ ค้นพบคำพยากรณ์อันน่าสะพรึงกลัวในตำนานที่ถูกลืมเลือน",
			"น้ำแข็งนี้ไม่ใช่พร มันคือเจตจำนงแห่งการทำลายล้างที่ชัดเจน"
		],
		"hindi": [
			"कठोर सर्दी ने पठार पर कब्ज़ा कर लिया था।",
			"स्कालहॉर्न के श्राप के तहत, सभी जीवन जम गए।",
			"इतिवृत्तकार ऐरा ने भूली हुई किंवदंतियों में एक भयानक भविष्यवाणी का पता लगाया।",
			"यह बर्फ कोई आशीर्वाद नहीं है। यह विनाश की स्पष्ट इच्छा है।"
		]
	}
} as const;
