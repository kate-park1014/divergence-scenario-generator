export const scenario_forest_silvanus_46_01 = {
	"scenario_id": "forest_silvanus_46_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲. 그곳에선 오래된 이야기가 떠돌았다.",
			"길 잃은 영혼을 위한 빛. 희망의 등불.",
			"하지만, 빛을 따라간 자들은 모두 돌아오지 않았다.",
			"혹은, 미쳐버린 채."
		],
		"english": [
			"The Forest. An ancient tale lingered there.",
			"A light for lost souls. A beacon of hope.",
			"But none who followed the light ever returned.",
			"Or, came back insane."
		],
		"japanese": [
			"森。そこには古の物語が漂っていた。",
			"迷いし魂のための光。希望の灯火。",
			"しかし、その光を追った者たちは皆、戻らなかった。",
			"あるいは、狂気のままに。"
		],
		"chinese": [
			"森林。古老的故事在那里流传。",
			"迷失灵魂之光。希望的灯塔。",
			"然而，所有追随光芒的人都未曾归来。",
			"或者，陷入疯狂。"
		],
		"french": [
			"La Forêt. Une ancienne légende y flottait.",
			"Une lumière pour les âmes perdues. Un phare d'espoir.",
			"Cependant, aucun de ceux qui suivirent la lumière ne revint.",
			"Ou, revinrent fous."
		],
		"spanish": [
			"El Bosque. Una antigua historia se murmuraba allí.",
			"Una luz para las almas perdidas. Un faro de esperanza.",
			"Pero ninguno de los que siguieron la luz regresó.",
			"O, enloquecidos."
		],
		"vietnamese": [
			"Khu rừng. Một câu chuyện cổ xưa lan truyền ở đó.",
			"Ánh sáng cho những linh hồn lạc lối. Ngọn đèn hy vọng.",
			"Tuy nhiên, tất cả những ai đi theo ánh sáng đều không trở về.",
			"Hoặc, trở về trong điên loạn."
		],
		"thai": [
			"ป่าไม้ เรื่องราวเก่าแก่เล่าขานกันที่นั่น",
			"แสงสำหรับวิญญาณที่หลงทาง ประภาคารแห่งความหวัง",
			"แต่ไม่มีใครที่ตามแสงนั้นกลับมาเลย",
			"หรือไม่ก็เสียสติไป"
		],
		"hindi": [
			"वन। वहाँ एक पुरानी कहानी घूमती थी।",
			"भटकी हुई आत्माओं के लिए एक प्रकाश। आशा का एक दीपक।",
			"परंतु, जो भी उस प्रकाश के पीछे गया, वह कभी नहीं लौटा।",
			"या, पागल होकर।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오래된 숲에 기이한 소문이 돌기 시작했다.",
						"english": "Strange rumors began to circulate in the ancient forest.",
						"japanese": "古の森に、奇妙な噂が広まり始めた。",
						"chinese": "古老的森林里，开始流传着奇怪的谣言。",
						"french": "D'étranges rumeurs commencèrent à circuler dans la forêt antique.",
						"spanish": "Extraños rumores comenzaron a circular en el bosque ancestral.",
						"vietnamese": "Những tin đồn kỳ lạ bắt đầu lan truyền trong khu rừng cổ.",
						"thai": "ข่าวลือแปลกประหลาดเริ่มแพร่สะพัดในป่าโบราณ",
						"hindi": "प्राचीन वन में अजीब अफवाहें फैलने लगीं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲에서 빛이 보인다며?",
						"english": "They say a light can be seen in the forest?",
						"japanese": "森に光が見えるって？",
						"chinese": "听说森林里有光？",
						"french": "On dit qu'une lumière apparaît dans la forêt ?",
						"spanish": "¿Dicen que se ve una luz en el bosque?",
						"vietnamese": "Người ta nói có ánh sáng trong rừng?",
						"thai": "มีคนบอกว่าเห็นแสงในป่าเหรอ?",
						"hindi": "क्या जंगल में रोशनी दिखती है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "그래… 길 잃은 자를 인도하는 빛이래.",
						"english": "Yes... a light said to guide the lost.",
						"japanese": "ええ…道に迷った者を導く光だって。",
						"chinese": "是的……据说那是指引迷途者的光。",
						"french": "Oui... une lumière censée guider les égarés.",
						"spanish": "Sí... una luz que guía a los perdidos, dicen.",
						"vietnamese": "Phải... ánh sáng dẫn lối cho những người lạc đường.",
						"thai": "ใช่... แสงที่นำทางผู้หลงทาง",
						"hindi": "हाँ... कहते हैं, वह भटके हुए को राह दिखाने वाला प्रकाश है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만… 사라지거나, 돌아와도 미쳐버린대.",
						"english": "But... they vanish, or return, only to be insane.",
						"japanese": "だけど…消えたり、戻ってきても狂ってしまうらしい。",
						"chinese": "但是……他们要么消失，要么回来后就疯了。",
						"french": "Mais... ils disparaissent, ou reviennent, mais devenus fous.",
						"spanish": "Pero... desaparecen, o regresan, pero enloquecidos.",
						"vietnamese": "Nhưng... họ biến mất, hoặc trở về trong điên loạn.",
						"thai": "แต่... พวกเขาก็หายไป หรือไม่ก็กลับมาอย่างคนเสียสติ",
						"hindi": "परंतु... वे या तो गायब हो जाते हैं, या वापस आकर पागल हो जाते हैं।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리 마을 사람들도 몇 명이나…",
						"english": "Several of our villagers have also...",
						"japanese": "私たちの村の人々も何人か…",
						"chinese": "我们村里也有好几个人……",
						"french": "Plusieurs de nos villageois aussi...",
						"spanish": "Varios de nuestros aldeanos también...",
						"vietnamese": "Một vài người trong làng của chúng ta cũng...",
						"thai": "ชาวบ้านของเราหลายคนก็...",
						"hindi": "हमारे गाँव के भी कई लोग..."
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실을 알아야 해.",
						"english": "We must uncover the truth.",
						"japanese": "真実を知らなければならない。",
						"chinese": "我们必须知道真相。",
						"french": "Nous devons découvrir la vérité.",
						"spanish": "Debemos saber la verdad.",
						"vietnamese": "Chúng ta phải tìm ra sự thật.",
						"thai": "เราต้องรู้ความจริง",
						"hindi": "हमें सच्चाई जाननी होगी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "발걸음은 숲으로 향했다. 알 수 없는 힘에 이끌리듯이.",
						"english": "Footsteps led into the forest, as if drawn by an unknown force.",
						"japanese": "足跡は森へと向かった。未知の力に導かれるように。",
						"chinese": "脚步走向森林，仿佛被一股未知的力量牵引。",
						"french": "Les pas s'enfoncèrent dans la forêt, comme attirés par une force inconnue.",
						"spanish": "Los pasos se dirigieron al bosque, como atraídos por una fuerza desconocida.",
						"vietnamese": "Bước chân dẫn vào rừng, như bị một thế lực vô danh cuốn hút.",
						"thai": "ก้าวเดินมุ่งสู่ป่า ราวกับถูกดึงดูดด้วยพลังลึกลับ",
						"hindi": "कदम जंगल की ओर बढ़ चले, मानो किसी अज्ञात शक्ति द्वारा खींचे जा रहे हों।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가지 마… 위험해.",
						"english": "Don't go... It's dangerous.",
						"japanese": "行かないで… 危ない。",
						"chinese": "别去… 危险。",
						"french": "N'y va pas… C'est dangereux.",
						"spanish": "No vayas… Es peligroso.",
						"vietnamese": "Đừng đi… Nguy hiểm lắm.",
						"thai": "อย่าไปเลย... อันตรายนะ",
						"hindi": "मत जाओ... खतरा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무엇이 우릴 부르는지 알아야 해.",
						"english": "We must know what calls us.",
						"japanese": "何が私たちを呼んでいるのか知る必要がある。",
						"chinese": "我们必须知道是什么在召唤我们。",
						"french": "Nous devons savoir ce qui nous appelle.",
						"spanish": "Debemos saber qué nos llama.",
						"vietnamese": "Chúng ta phải biết điều gì đang gọi chúng ta.",
						"thai": "เราต้องรู้ว่าอะไรกำลังเรียกเราอยู่",
						"hindi": "हमें जानना होगा कि हमें क्या बुला रहा है।"
					}
				},
				{
					"content": {
						"korean": "그 빛은… 예전부터 전해 내려오던 전설과는 달라.",
						"english": "That light... it's different from the legends of old.",
						"japanese": "その光は… 昔から伝わる伝説とは違う。",
						"chinese": "那光… 和自古流传的传说不同。",
						"french": "Cette lumière… elle est différente des légendes d'autrefois.",
						"spanish": "Esa luz… es diferente de las leyendas antiguas.",
						"vietnamese": "Ánh sáng đó… khác với truyền thuyết từ xưa.",
						"thai": "แสงนั่น... มันต่างจากตำนานที่เล่าขานกันมา",
						"hindi": "वह प्रकाश... वह पुरानी किंवदंतियों से अलग है।"
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전설? 어떤 전설?",
						"english": "Legends? What legends?",
						"japanese": "伝説？どんな伝説？",
						"chinese": "传说？什么传说？",
						"french": "Légendes ? Quelles légendes ?",
						"spanish": "¿Leyendas? ¿Qué leyendas?",
						"vietnamese": "Truyền thuyết? Truyền thuyết gì?",
						"thai": "ตำนาน? ตำนานอะไร?",
						"hindi": "किंवदंतियाँ? कौन सी किंवदंतियाँ?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "길 잃은 자를 인도하는 등불… 그렇게 불렸지만, 지금은 아니야.",
						"english": "A lamp guiding the lost... that's what it was called, but not anymore.",
						"japanese": "迷いし者を導く灯火…そう呼ばれていたが、今は違う。",
						"chinese": "指引迷途者的灯火… 曾是这样称呼，但现在不是了。",
						"french": "Une lanterne guidant les égarés… c'est ainsi qu'on l'appelait, mais plus maintenant.",
						"spanish": "Una luz que guía a los perdidos… así se la llamaba, pero ya no.",
						"vietnamese": "Ngọn đèn dẫn lối kẻ lạc… từng được gọi như vậy, nhưng giờ thì không.",
						"thai": "ตะเกียงนำทางผู้หลงทาง... เคยถูกเรียกอย่างนั้น แต่ตอนนี้ไม่ใช่แล้ว",
						"hindi": "भटके हुए को राह दिखाने वाला दीपक... ऐसा कहा जाता था, पर अब नहीं।"
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "숲은 점점 더 깊고 어두워졌다. 빛은 손짓하듯 멀어져갔다.",
						"english": "The forest grew deeper and darker. The light beckoned, fading into the distance.",
						"japanese": "森はますます深く暗くなった。光は手招きするように遠ざかっていった。",
						"chinese": "森林越来越深，越来越暗。光芒仿佛招手般远去。",
						"french": "La forêt devenait de plus en plus profonde et sombre. La lumière s'éloignait comme un appel.",
						"spanish": "El bosque se hizo cada vez más profundo y oscuro. La luz se alejaba como un señuelo.",
						"vietnamese": "Rừng ngày càng sâu và tối. Ánh sáng như vẫy gọi, lùi dần vào xa xăm.",
						"thai": "ป่ายิ่งลึกและมืดลง แสงนั้นโบกมือลาจางหายไป",
						"hindi": "जंगल गहरा और घना होता गया। प्रकाश इशारा करते हुए दूर चला गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 이상은… 정말 안 돼.",
						"english": "Any further... no, absolutely not.",
						"japanese": "これ以上は…本当にダメだ。",
						"chinese": "再往前… 真的不行了。",
						"french": "Pas plus loin… vraiment pas.",
						"spanish": "Más allá… realmente no.",
						"vietnamese": "Đi thêm nữa… thực sự không được đâu.",
						"thai": "เกินกว่านี้... ไม่ได้จริงๆ",
						"hindi": "इससे आगे... बिल्कुल नहीं।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "피할 수 없어. 이미 너무 많은 것을 잃었어.",
						"english": "There's no escape. We've already lost too much.",
						"japanese": "逃げられない。すでに多くを失った。",
						"chinese": "无法逃避。已经失去太多了。",
						"french": "On ne peut pas y échapper. Nous avons déjà trop perdu.",
						"spanish": "No se puede escapar. Ya hemos perdido demasiado.",
						"vietnamese": "Không thể tránh được. Đã mất quá nhiều rồi.",
						"thai": "หนีไม่พ้นหรอก เราเสียไปมากแล้ว",
						"hindi": "बचा नहीं जा सकता। हमने पहले ही बहुत कुछ खो दिया है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "빛이 드리운 곳마다… 풀과 꽃들이 시들어 가.",
						"english": "Wherever the light falls... grass and flowers wither.",
						"japanese": "光が差す場所마다…草木や花が枯れていく。",
						"chinese": "光芒所及之处… 草木花朵皆枯萎。",
						"french": "Partout où la lumière tombe… l'herbe et les fleurs se fanent.",
						"spanish": "Donde la luz se posa… la hierba y las flores se marchitan.",
						"vietnamese": "Nơi nào ánh sáng chiếu đến… cỏ cây hoa lá đều héo úa.",
						"thai": "ทุกที่ที่แสงส่องถึง... หญ้าและดอกไม้ก็เหี่ยวเฉาไป",
						"hindi": "जहाँ-जहाँ प्रकाश पड़ता है... घास और फूल मुरझा जाते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 빛이 숲을 죽이고 있어.",
						"english": "That light is killing the forest.",
						"japanese": "その光が森を殺している。",
						"chinese": "那光正在杀死森林。",
						"french": "Cette lumière tue la forêt.",
						"spanish": "Esa luz está matando el bosque.",
						"vietnamese": "Ánh sáng đó đang giết chết khu rừng.",
						"thai": "แสงนั่นกำลังฆ่าป่า",
						"hindi": "वह प्रकाश जंगल को मार रहा है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마모된 석조물이 숲 곳곳에 흩어져 있었다. 잊혀진 문명의 흔적.",
						"english": "Worn stone structures were scattered throughout the forest. Traces of a forgotten civilization.",
						"japanese": "摩耗した石造物が森のあちこちに散らばっていた。忘れ去られた文明の痕跡。",
						"chinese": "磨损的石结构散布在森林各处。被遗忘文明的痕迹。",
						"french": "Des structures en pierre usées étaient éparpillées dans toute la forêt. Des traces d'une civilisation oubliée.",
						"spanish": "Estructuras de piedra desgastadas se esparcían por todo el bosque. Rastros de una civilización olvidada.",
						"vietnamese": "Những công trình đá cũ kỹ nằm rải rác khắp khu rừng. Dấu vết của một nền văn minh bị lãng quên.",
						"thai": "สิ่งก่อสร้างหินที่สึกหรอกระจัดกระจายไปทั่วป่า ร่องรอยของอารยธรรมที่ถูกลืมเลือน",
						"hindi": "जंगल भर में घिसी हुई पत्थर की संरचनाएं बिखरी हुई थीं। एक भूली हुई सभ्यता के निशान।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기서부터는… 돌아올 수 없어.",
						"english": "From here... there's no turning back.",
						"japanese": "ここからは…もう戻れない。",
						"chinese": "从这里开始……无法回头了。",
						"french": "D'ici... il n'y a plus de retour en arrière.",
						"spanish": "Desde aquí... no hay vuelta atrás.",
						"vietnamese": "Từ đây... không thể quay lại được nữa.",
						"thai": "จากตรงนี้...ไม่มีทางย้อนกลับแล้ว",
						"hindi": "यहां से... कोई वापसी नहीं है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어. 이 빛의 끝을 봐야 해.",
						"english": "I can't stop. I have to see the end of this light.",
						"japanese": "止められない。この光の果てを見届けなければ。",
						"chinese": "我无法停止。我必须看到这光的尽头。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la fin de cette lumière.",
						"spanish": "No puedo parar. Tengo que ver el final de esta luz.",
						"vietnamese": "Không thể dừng lại. Phải nhìn thấy tận cùng của ánh sáng này.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องเห็นจุดจบของแสงนี้",
						"hindi": "मैं रुक नहीं सकता। मुझे इस प्रकाश का अंत देखना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "밤마다 들리는… 이상한 속삭임도 이 근처부터였어.",
						"english": "The strange whispers I hear every night... they started around here.",
						"japanese": "毎晩聞こえる…奇妙なささやきもこの辺りからだった。",
						"chinese": "每晚听到的……奇怪的低语也是从这附近开始的。",
						"french": "Les étranges murmures que j'entends chaque nuit... ont commencé par ici.",
						"spanish": "Los extraños susurros que escucho cada noche... también empezaron por aquí.",
						"vietnamese": "Những lời thì thầm kỳ lạ nghe thấy mỗi đêm... cũng bắt đầu từ khu vực này.",
						"thai": "เสียงกระซิบแปลกๆ ที่ได้ยินทุกคืน...ก็เริ่มจากแถวนี้แหละ",
						"hindi": "हर रात सुनाई देने वाली... अजीब फुसफुसाहट भी यहीं से शुरू हुई थी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그것이… 이 숲의 진실인가.",
						"english": "Is that... the truth of this forest?",
						"japanese": "それが…この森の真実なのか。",
						"chinese": "那便是……这座森林的真相吗？",
						"french": "Est-ce là... la vérité de cette forêt ?",
						"spanish": "¿Es eso... la verdad de este bosque?",
						"vietnamese": "Đó có phải... sự thật của khu rừng này không?",
						"thai": "นั่นคือ...ความจริงของป่าแห่งนี้หรือเปล่า",
						"hindi": "क्या वह... इस जंगल का सच है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 일렁였다. 빛의 근원이 그곳에 있었다.",
						"english": "A colossal shadow flickered in the darkness. The source of the light was there.",
						"japanese": "闇の中で巨大な影が揺らめいた。光の根源がそこにあった。",
						"chinese": "黑暗中，一个巨大的影子在摇曳。光的源头就在那里。",
						"french": "Une ombre colossale vacillait dans l'obscurité. La source de la lumière était là.",
						"spanish": "Una sombra colosal parpadeaba en la oscuridad. La fuente de la luz estaba allí.",
						"vietnamese": "Một bóng đen khổng lồ chập chờn trong bóng tối. Nguồn gốc của ánh sáng nằm ở đó.",
						"thai": "เงาขนาดมหึมาสั่นไหวในความมืด แหล่งกำเนิดแสงอยู่ที่นั่น",
						"hindi": "अंधेरे में एक विशाल छाया झिलमिला रही थी। प्रकाश का स्रोत वहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 인간들… 왜 여기까지 온 것이냐.",
						"english": "Foolish humans... Why have you come this far?",
						"japanese": "愚かな人間たち…なぜここまで来たのだ。",
						"chinese": "愚蠢的人类……为何要来到这里？",
						"french": "Humains insensés... Pourquoi êtes-vous venus si loin ?",
						"spanish": "Humanos necios... ¿Por qué habéis llegado tan lejos?",
						"vietnamese": "Hỡi loài người ngu ngốc... Sao ngươi lại đến tận đây?",
						"thai": "มนุษย์โง่เขลา...ทำไมถึงมาไกลขนาดนี้",
						"hindi": "मूर्ख इंसानों... तुम इतनी दूर क्यों आए हो?"
					}
				},
				{
					"content": {
						"korean": "네가 이 숲을 망가뜨리고 있어!",
						"english": "You are destroying this forest!",
						"japanese": "あなたがこの森を破壊している！",
						"chinese": "你正在破坏这座森林！",
						"french": "Tu es en train de détruire cette forêt !",
						"spanish": "¡Estás destruyendo este bosque!",
						"vietnamese": "Ngươi đang phá hủy khu rừng này!",
						"thai": "คุณกำลังทำลายป่าแห่งนี้!",
						"hindi": "तुम इस जंगल को तबाह कर रहे हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "안 돼! 제발… 도망쳐!",
						"english": "No! Please... run away!",
						"japanese": "ダメだ！お願い…逃げて！",
						"chinese": "不！求求你……快逃！",
						"french": "Non ! S'il te plaît... fuis !",
						"spanish": "¡No! ¡Por favor... huye!",
						"vietnamese": "Không! Làm ơn... hãy chạy đi!",
						"thai": "ไม่นะ! ได้โปรด...หนีไป!",
						"hindi": "नहीं! कृपया... भाग जाओ!"
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "hazel",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "빛은… 너희를 인도할 뿐.",
						"english": "The light... merely guides you.",
						"japanese": "光は… お前たちを導くだけだ。",
						"chinese": "光… 只是指引你们。",
						"french": "La lumière... ne fait que vous guider.",
						"spanish": "La luz... solo os guía.",
						"vietnamese": "Ánh sáng... chỉ dẫn lối cho các ngươi.",
						"thai": "แสงสว่าง... เพียงแค่นำทางพวกเจ้า",
						"hindi": "प्रकाश... केवल तुम्हें मार्ग दिखाता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "거짓말! 넌 우리를 홀렸어!",
						"english": "Lies! You bewitched us!",
						"japanese": "嘘だ！ お前は私たちを惑わした！",
						"chinese": "谎言！你迷惑了我们！",
						"french": "Mensonges ! Tu nous as ensorcelés !",
						"spanish": "¡Mentiras! ¡Nos engañaste!",
						"vietnamese": "Dối trá! Ngươi đã mê hoặc chúng ta!",
						"thai": "โกหก! เจ้าหลอกล่อพวกเรา!",
						"hindi": "झूठ! तुमने हमें मोहित किया!"
					}
				},
				{
					"content": {
						"korean": "곧 알게 될 것이다. 진실을… 나의 힘을.",
						"english": "You will soon know. The truth... My power.",
						"japanese": "すぐに分かるだろう。真実を… 我が力を。",
						"chinese": "你们很快就会明白。真相… 我的力量。",
						"french": "Vous saurez bientôt. La vérité... Ma puissance.",
						"spanish": "Pronto lo sabréis. La verdad... Mi poder.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Sự thật... Sức mạnh của ta.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า ความจริง... พลังของข้า",
						"hindi": "तुम्हें जल्द ही पता चलेगा। सच... मेरी शक्ति।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서서히 사라졌다. 빛은 여전히 일렁였다.",
						"english": "The colossal shadow slowly faded. The light still flickered.",
						"japanese": "巨大な影がゆっくりと消えていった。光はまだ揺らめいていた。",
						"chinese": "巨大的黑影渐渐消散。光芒仍在闪烁。",
						"french": "L'ombre colossale s'est lentement dissipée. La lumière vacillait toujours.",
						"spanish": "La sombra colosal se desvaneció lentamente. La luz aún parpadeaba.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Ánh sáng vẫn lay động.",
						"thai": "เงาขนาดมหึมาค่อยๆ หายไป แสงยังคงริบหรี่",
						"hindi": "विशाल छाया धीरे-धीरे लुप्त हो गई। प्रकाश अभी भी टिमटिमा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건… 시작일 뿐이다… 나의 의지는… 사라지지 않아…",
						"english": "This is... just the beginning... My will... will not fade...",
						"japanese": "これは… 始まりに過ぎない… 我が意志は… 消えぬ…",
						"chinese": "这… 只是开始… 我的意志… 不会消失…",
						"french": "Ce n'est... qu'un début... Ma volonté... ne disparaîtra pas...",
						"spanish": "Esto es... solo el principio... Mi voluntad... no se desvanecerá...",
						"vietnamese": "Đây... chỉ là khởi đầu... Ý chí của ta... sẽ không biến mất...",
						"thai": "นี่เป็น... เพียงแค่จุดเริ่มต้น... เจตจำนงของข้า... จะไม่จางหายไป...",
						"hindi": "यह... बस शुरुआत है... मेरी इच्छाशक्ति... मिटेगी नहीं..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝나지 않았어…",
						"english": "It's not over...",
						"japanese": "終わってない…",
						"chinese": "还没结束…",
						"french": "Ce n'est pas fini...",
						"spanish": "No ha terminado...",
						"vietnamese": "Chưa kết thúc đâu...",
						"thai": "ยังไม่จบ...",
						"hindi": "यह खत्म नहीं हुआ..."
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리가… 뭘 한 거지?",
						"english": "What... have we done?",
						"japanese": "私たちは… 何をしたんだ？",
						"chinese": "我们… 做了什么？",
						"french": "Qu'avons-nous... fait ?",
						"spanish": "¿Qué... hemos hecho?",
						"vietnamese": "Chúng ta... đã làm gì vậy?",
						"thai": "พวกเรา... ทำอะไรลงไป?",
						"hindi": "हमने... क्या किया?"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 불안한 침묵 속에서, 또 다른 진실이 기다리고 있었다.",
						"english": "In the forest's unsettling silence, another truth awaited.",
						"japanese": "森の不穏な沈黙の中、また別の真実が待っていた。",
						"chinese": "在森林不安的寂静中，另一个真相正在等待。",
						"french": "Dans le silence inquiétant de la forêt, une autre vérité attendait.",
						"spanish": "En el inquietante silencio del bosque, otra verdad esperaba.",
						"vietnamese": "Trong sự tĩnh lặng đáng sợ của khu rừng, một sự thật khác đang chờ đợi.",
						"thai": "ในความเงียบอันไม่สงบของป่า ความจริงอีกอย่างหนึ่งกำลังรออยู่",
						"hindi": "जंगल की असहज शांति में, एक और सच इंतज़ार कर रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "The colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的黑影吞噬了一切。",
						"french": "L'ombre colossale a tout dévoré.",
						"spanish": "La sombra colosal lo devoró todo.",
						"vietnamese": "Bóng tối khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "विशाल छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 것들… 빛은… 거스를 수 없다.",
						"english": "Insignificant beings... The light... cannot be defied.",
						"japanese": "愚かな者たち… 光は… 逆らえぬ。",
						"chinese": "微不足道的存在… 光… 不可违逆。",
						"french": "Êtres insignifiants... La lumière... ne peut être défiée.",
						"spanish": "Seres insignificantes... La luz... no puede ser desafiada.",
						"vietnamese": "Những kẻ nhỏ bé... Ánh sáng... không thể bị chống lại.",
						"thai": "สิ่งมีชีวิตที่ไร้ค่า... แสงสว่าง... ไม่อาจถูกท้าทายได้",
						"hindi": "तुच्छ प्राणी... प्रकाश... को नकारा नहीं जा सकता।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "미안해… 내 탓이야…",
						"english": "I'm sorry… It's my fault…",
						"japanese": "ごめん… 私のせいだ…",
						"chinese": "对不起… 是我的错…",
						"french": "Désolé… C'est ma faute…",
						"spanish": "Lo siento… Es mi culpa…",
						"vietnamese": "Xin lỗi… Là lỗi của tôi…",
						"thai": "ขอโทษนะ… เป็นความผิดของฉันเอง…",
						"hindi": "माफ़ करना… मेरी गलती है…"
					},
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
