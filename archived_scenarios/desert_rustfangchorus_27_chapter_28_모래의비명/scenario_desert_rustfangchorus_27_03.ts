export const scenario_desert_rustfangchorus_27_03 = {
	"scenario_id": "desert_rustfangchorus_27_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"붉은 모래 바람이 불어왔다. 모든 풍경이 일그러졌다.",
			"신기루 속에서 비명 소리가 들려왔다.",
			"과거의 비극이 다시 시작되는 것 같았다.",
			"벗어날 수 없는 환각의 굴레 속으로."
		],
		"english": [
			"Red sand winds blew. All scenery became distorted.",
			"Screams were heard from within the mirage.",
			"It felt as if a past tragedy was beginning anew.",
			"Into the inescapable cycle of hallucination."
		],
		"japanese": [
			"赤い砂嵐が吹いた。全ての景色が歪んだ。",
			"蜃気楼の中から悲鳴が聞こえてきた。",
			"過去の悲劇が再び始まるようだった。",
			"逃れられない幻覚の輪廻の中へ。"
		],
		"chinese": [
			"红色的沙风吹来。所有景色都扭曲了。",
			"海市蜃楼中传来了尖叫声。",
			"过去的悲剧似乎再次开始。",
			"进入无法摆脱的幻觉循环。"
		],
		"french": [
			"Un vent de sable rouge soufflait. Tous les paysages se sont déformés.",
			"Des cris provenaient du mirage.",
			"Il semblait qu'une tragédie passée recommençait.",
			"Dans le cycle inéluctable de l'hallucination."
		],
		"spanish": [
			"Soplaba un viento de arena roja. Todo el paisaje se distorsionó.",
			"Se escucharon gritos desde el espejismo.",
			"Parecía que una tragedia del pasado comenzaba de nuevo.",
			"En el ciclo ineludible de la alucinación."
		],
		"vietnamese": [
			"Gió cát đỏ thổi qua. Mọi cảnh vật đều biến dạng.",
			"Tiếng hét vang lên từ trong ảo ảnh.",
			"Dường như bi kịch quá khứ đang tái diễn.",
			"Dấn thân vào vòng xoáy ảo giác không lối thoát."
		],
		"thai": [
			"ลมทรายแดงพัดมา ทิวทัศน์ทั้งหมดบิดเบี้ยวไปหมด",
			"เสียงกรีดร้องดังมาจากภาพลวงตา",
			"ราวกับโศกนาฏกรรมในอดีตกำลังจะเริ่มต้นใหม่อีกครั้ง",
			"สู่ห้วงแห่งภาพหลอนที่ไม่อาจหลุดพ้น"
		],
		"hindi": [
			"लाल रेतीली हवाएं चलीं। हर नज़ारा विकृत हो गया।",
			"मृगतृष्णा से चीखें सुनाई दीं।",
			"ऐसा लगा जैसे अतीत की त्रासदी फिर से शुरू हो रही थी।",
			"मतिभ्रम के एक अटूट चक्र में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 몰아쳤다. 눈앞의 풍경이 왜곡되었다.",
						"english": "A sandstorm raged. The scenery before my eyes was distorted.",
						"japanese": "砂嵐が吹き荒れた。目の前の景色が歪んだ。",
						"chinese": "沙尘暴肆虐。眼前的景色扭曲了。",
						"french": "Une tempête de sable faisait rage. Le paysage devant mes yeux était déformé.",
						"spanish": "Una tormenta de arena rugió. El paisaje ante mis ojos se distorsionó.",
						"vietnamese": "Bão cát hoành hành. Cảnh vật trước mắt biến dạng.",
						"thai": "พายุทรายโหมกระหน่ำ ทิวทัศน์เบื้องหน้าบิดเบี้ยวไปหมด",
						"hindi": "एक रेतीला तूफ़ान आया। मेरी आँखों के सामने का नज़ारा विकृत हो गया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기가… 사막이야? 이상해….",
						"english": "Is this... a desert? Strange...",
						"japanese": "ここは…砂漠？変だ…。",
						"chinese": "这里是……沙漠吗？奇怪……",
						"french": "C'est... un désert ? Étrange...",
						"spanish": "¿Esto es... un desierto? Extraño...",
						"vietnamese": "Đây là… sa mạc sao? Lạ thật…",
						"thai": "ที่นี่… ทะเลทรายเหรอ? แปลกจัง…",
						"hindi": "यह... रेगिस्तान है? अजीब है..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "환각이 아니야… 느껴져.",
						"english": "It's not a hallucination... I can feel it.",
						"japanese": "幻覚じゃない…感じる。",
						"chinese": "这不是幻觉……我能感觉到。",
						"french": "Ce n'est pas une hallucination... je le sens.",
						"spanish": "No es una alucinación... lo siento.",
						"vietnamese": "Không phải ảo giác… tôi cảm nhận được.",
						"thai": "นี่ไม่ใช่ภาพหลอน… ฉันรู้สึกได้",
						"hindi": "यह मतिभ्रम नहीं है... मुझे महसूस हो रहा है।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무엇이?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "환각 '속에' 갇힌 진짜 고통이.",
						"english": "The real pain trapped 'within' the hallucination.",
						"japanese": "幻覚の「中に」閉じ込められた本当の苦痛が。",
						"chinese": "被困在幻觉“之中”的真正痛苦。",
						"french": "La vraie douleur piégée 'dans' l'hallucination.",
						"spanish": "El verdadero dolor atrapado 'dentro' de la alucinación.",
						"vietnamese": "Nỗi đau thật sự bị mắc kẹt 'trong' ảo giác.",
						"thai": "ความเจ็บปวดที่แท้จริงที่ถูกขัง 'ใน' ภาพหลอน",
						"hindi": "मतिभ्रम 'के भीतर' फंसा हुआ असली दर्द।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…들려? 오래된 비명 소리가.",
						"english": "...Do you hear it? The old scream.",
						"japanese": "…聞こえる？古き悲鳴が。",
						"chinese": "……听到了吗？那古老的尖叫声。",
						"french": "...Tu l'entends ? Le vieux cri.",
						"spanish": "...¿Lo oyes? El viejo grito.",
						"vietnamese": "…Nghe thấy không? Tiếng hét cổ xưa.",
						"thai": "…ได้ยินไหม? เสียงกรีดร้องเก่าแก่",
						"hindi": "...सुनाई दिया? वह पुरानी चीख।"
					},
					"speaker": "ember",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아무것도 안 들리는데….",
						"english": "I don't hear anything...",
						"japanese": "何も聞こえないけど...",
						"chinese": "什么都听不到...",
						"french": "Je n'entends rien...",
						"spanish": "No escucho nada...",
						"vietnamese": "Tôi không nghe thấy gì cả...",
						"thai": "ฉันไม่ได้ยินอะไรเลย...",
						"hindi": "मुझे कुछ सुनाई नहीं दे रहा है..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "전사들의 환영이… 싸우고 있어. 계속, 끝없이.",
						"english": "Warrior phantoms... they're fighting. Constantly, endlessly.",
						"japanese": "戦士たちの幻影が…戦っている。ずっと、終わることなく。",
						"chinese": "战士们的幻影…在战斗。持续，无休止地。",
						"french": "Les fantômes des guerriers... ils se battent. Constamment, sans fin.",
						"spanish": "Los fantasmas de los guerreros... están luchando. Constantemente, sin fin.",
						"vietnamese": "Những bóng ma chiến binh... chúng đang chiến đấu. Liên tục, không ngừng nghỉ.",
						"thai": "ภาพหลอนของนักรบ... พวกเขากำลังต่อสู้. ตลอดไป, ไม่มีที่สิ้นสุด.",
						"hindi": "योद्धाओं के प्रेत... वे लड़ रहे हैं। लगातार, अंतहीन।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저들이 이 사막에 갇힌 건가?",
						"english": "Are they trapped in this desert?",
						"japanese": "彼らはこの砂漠に閉じ込められているのか？",
						"chinese": "他们被困在这片沙漠里了吗？",
						"french": "Sont-ils piégés dans ce désert ?",
						"spanish": "¿Están atrapados en este desierto?",
						"vietnamese": "Họ bị mắc kẹt trong sa mạc này sao?",
						"thai": "พวกเขาถูกขังอยู่ในทะเลทรายนี้หรือเปล่า?",
						"hindi": "क्या वे इस रेगिस्तान में फंसे हुए हैं?"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "신기루 속에서 비극적인 전투가 재현되었다. 검과 검이 부딪히는 끔찍한 소리가 울렸다.",
						"english": "A tragic battle replayed in the mirage. The dreadful sound of swords clashing echoed.",
						"japanese": "蜃気楼の中で悲劇的な戦いが再現された。剣と剣がぶつかる恐ろしい音が響いた。",
						"chinese": "海市蜃楼中重现了一场悲剧性的战斗。剑与剑碰撞的可怕声音回荡着。",
						"french": "Une bataille tragique s'est rejouée dans le mirage. Le son effroyable des épées qui s'entrechoquent a résonné.",
						"spanish": "Una trágica batalla se recreó en el espejismo. El terrible sonido de espadas chocando resonó.",
						"vietnamese": "Một trận chiến bi thảm tái hiện trong ảo ảnh. Tiếng kiếm va chạm kinh hoàng vang vọng.",
						"thai": "การต่อสู้ที่น่าเศร้าถูกย้อนรอยในภาพลวงตา เสียงดาบกระทบกันอย่างน่ากลัวดังก้องไปทั่ว",
						"hindi": "मृगतृष्णा में एक दुखद युद्ध फिर से खेला गया। तलवारों के टकराने की भयानक आवाज गूँज उठी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "안 돼… 그만해…! 너무 아파….",
						"english": "No... stop it...! It hurts so much...",
						"japanese": "だめ…やめて…！とても痛い…",
						"chinese": "不…住手…！太痛了…",
						"french": "Non... arrête ça...! Ça fait si mal...",
						"spanish": "No... ¡detente...! Me duele mucho...",
						"vietnamese": "Không... dừng lại...! Đau quá...",
						"thai": "ไม่นะ... หยุดเถอะ...! เจ็บมากเลย...",
						"hindi": "नहीं... बंद करो...! बहुत दर्द हो रहा है..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "앰버, 진정해! 이건…!",
						"english": "Amber, calm down! This is...!",
						"japanese": "アンバー、落ち着いて！これは…！",
						"chinese": "琥珀，冷静点！这是…！",
						"french": "Ambre, calme-toi ! C'est... !",
						"spanish": "¡Amber, cálmate! ¡Esto es...!",
						"vietnamese": "Amber, bình tĩnh lại! Đây là...!",
						"thai": "แอมเบอร์, ใจเย็นๆ! นี่มัน...!",
						"hindi": "एम्बर, शांत हो जाओ! यह तो...!"
					},
					"emotion": "base"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "아니야! 저들의 고통이 내게 전해져…! 아파….",
						"english": "No! Their pain is reaching me...! It hurts...",
						"japanese": "違う！彼らの苦痛が私に伝わってくる…！痛い…",
						"chinese": "不是！他们的痛苦传到我这里了…！好痛…",
						"french": "Non ! Leur douleur m'atteint...! Ça fait mal...",
						"spanish": "¡No! ¡Su dolor me está llegando...! Duele...",
						"vietnamese": "Không! Nỗi đau của họ đang truyền đến tôi...! Đau quá...",
						"thai": "ไม่! ความเจ็บปวดของพวกเขามาถึงฉันแล้ว...! เจ็บ...",
						"hindi": "नहीं! उनका दर्द मुझ तक पहुँच रहा है...! दर्द हो रहा है..."
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "진짜 고통을 느끼는 것 같아….",
						"english": "I feel like I'm feeling real pain...",
						"japanese": "本当の苦痛を感じているみたい…",
						"chinese": "我好像感受到了真实的痛苦…",
						"french": "J'ai l'impression de ressentir une vraie douleur...",
						"spanish": "Siento como si estuviera sintiendo un dolor real...",
						"vietnamese": "Tôi cảm thấy như đang chịu đựng nỗi đau thật sự...",
						"thai": "ฉันรู้สึกเหมือนกำลังรู้สึกถึงความเจ็บปวดจริงๆ...",
						"hindi": "मुझे लग रहा है कि मुझे असली दर्द हो रहा है..."
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
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "모래 폭풍이 더 거세졌어! 나갈 수가 없어!",
						"english": "The sandstorm got fiercer! I can't get out!",
						"japanese": "砂嵐がさらに激しくなった！出られない！",
						"chinese": "沙尘暴更猛烈了！我出不去了！",
						"french": "La tempête de sable est devenue plus féroce ! Je ne peux pas sortir !",
						"spanish": "¡La tormenta de arena se hizo más feroz! ¡No puedo salir!",
						"vietnamese": "Cơn bão cát càng dữ dội hơn! Tôi không thể ra ngoài!",
						"thai": "พายุทรายรุนแรงขึ้น! ฉันออกไปไม่ได้!",
						"hindi": "रेत का तूफान और भीषण हो गया है! मैं बाहर नहीं निकल सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 환영들이… 우릴 붙잡고 있어. 이 굴레에 가두려고 해.",
						"english": "Those phantoms... they're holding us. Trying to trap us in this cycle.",
						"japanese": "あの幻影たちが…私たちを捕らえている。この輪廻に閉じ込めようとしている。",
						"chinese": "那些幻影…抓住了我们。想把我们困在这个循环里。",
						"french": "Ces fantômes... ils nous retiennent. Ils essaient de nous piéger dans ce cycle.",
						"spanish": "Esos fantasmas... nos están reteniendo. Intentando atraparnos en este ciclo.",
						"vietnamese": "Những bóng ma đó... chúng đang giữ chúng ta lại. Cố gắng nhốt chúng ta vào vòng luân hồi này.",
						"thai": "ภาพหลอนเหล่านั้น... พวกเขาจะจับเราไว้ พยายามจะขังเราไว้ในวงจรนี้",
						"hindi": "वे प्रेत... हमें पकड़े हुए हैं। हमें इस चक्र में फंसाने की कोशिश कर रहे हैं।"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜곡된 전사의 형상들이 사방에서 나타나 탐험대를 에워쌌다.",
						"english": "Distorted warrior figures emerged from all sides, surrounding the expedition.",
						"japanese": "歪んだ戦士の影が四方から現れ、探検隊を取り囲んだ。",
						"chinese": "扭曲的战士形态从四面八方出现，包围了探险队。",
						"french": "Des figures de guerriers distordus apparurent de toutes parts, encerclant l'expédition.",
						"spanish": "Figuras distorsionadas de guerreros emergieron por todas partes, rodeando a la expedición.",
						"vietnamese": "Những hình dạng chiến binh méo mó xuất hiện khắp nơi, bao vây đội thám hiểm.",
						"thai": "ร่างของนักรบที่บิดเบี้ยวปรากฏขึ้นจากทุกทิศทาง ล้อมรอบคณะสำรวจ",
						"hindi": "विकृत योद्धाओं की आकृतियाँ चारों ओर से प्रकट हुईं, उन्होंने अभियान दल को घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이대로는… 영원히 갇힐 거야…!",
						"english": "Like this... we'll be trapped forever...!",
						"japanese": "このままでは… 永遠に閉じ込められる…！",
						"chinese": "这样下去… 我们会被永远困住的…！",
						"french": "Comme ça... nous serons piégés pour toujours...!",
						"spanish": "Así... estaremos atrapados para siempre...!",
						"vietnamese": "Cứ thế này... chúng ta sẽ bị mắc kẹt mãi mãi...!",
						"thai": "แบบนี้... เราจะติดอยู่ตลอดไป...!",
						"hindi": "ऐसे ही... हम हमेशा के लिए फँस जाएँगे...!"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "벗어나야 해… 여기서 죽으면… 영원히 이 고통 속에 갇혀!",
						"english": "We must escape... If we die here... we'll be trapped in this pain forever!",
						"japanese": "逃げ出さなければ… ここで死ねば… この苦痛の中に永遠に閉じ込められる！",
						"chinese": "必须逃出去… 如果死在这里… 就会永远被困在这痛苦之中！",
						"french": "Nous devons nous échapper... Si nous mourons ici... nous serons piégés dans cette douleur pour toujours !",
						"spanish": "¡Debemos escapar... Si morimos aquí... estaremos atrapados en este dolor para siempre!",
						"vietnamese": "Phải thoát ra... Nếu chết ở đây... sẽ bị kẹt trong nỗi đau này mãi mãi!",
						"thai": "ต้องหนีไป... ถ้าตายที่นี่... จะติดอยู่ในความเจ็บปวดนี้ตลอดไป!",
						"hindi": "हमें भागना होगा... अगर हम यहाँ मर गए... तो हमेशा के लिए इस दर्द में फँस जाएँगे!"
					},
					"speaker": "ember",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환각의 심장부. 거대한 그림자가 탐험대를 내려다봤다.",
						"english": "The heart of the illusion. A colossal shadow loomed over the expedition.",
						"japanese": "幻影の心臓部。巨大な影が探検隊を見下ろした。",
						"chinese": "幻觉的核心。一道巨大的阴影俯视着探险队。",
						"french": "Le cœur de l'illusion. Une ombre colossale dominait l'expédition.",
						"spanish": "El corazón de la ilusión. Una sombra colosal se cernía sobre la expedición.",
						"vietnamese": "Trung tâm của ảo ảnh. Một cái bóng khổng lồ bao trùm đội thám hiểm.",
						"thai": "ใจกลางของภาพลวงตา เงาขนาดมหึมาทอดตัวลงมามองคณะสำรวจ",
						"hindi": "भ्रम का हृदय। एक विशालकाय परछाई अभियान दल पर मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 기어들어왔군. 이 굴레에서 벗어날 수 있을 거라 생각하나?",
						"english": "You crawled all the way here. Do you think you can escape this cycle?",
						"japanese": "ここまで這いずり込んできたか。このしがらみから逃れられるとでも思うのか？",
						"chinese": "居然爬到这里来了。你以为能摆脱这个束缚吗？",
						"french": "Vous avez rampé jusqu'ici. Pensez-vous pouvoir échapper à ce cycle ?",
						"spanish": "Has logrado arrastrarte hasta aquí. ¿Crees que podrás escapar de este ciclo?",
						"vietnamese": "Ngươi đã bò đến tận đây. Ngươi nghĩ mình có thể thoát khỏi vòng luẩn quẩn này sao?",
						"thai": "คลานมาถึงที่นี่แล้วรึ คิดว่าจะหลุดพ้นจากวงเวียนนี้ได้หรือไง?",
						"hindi": "तुम यहाँ तक रेंगते हुए आ गए। क्या तुम्हें लगता है कि तुम इस बंधन से बच निकलोगे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 너희가 가둬놓은 거지!",
						"english": "Shut up! You're the ones who trapped us!",
						"japanese": "黙れ！ お前たちが閉じ込めたんだろ！",
						"chinese": "闭嘴！是你们把我们困住的！",
						"french": "Taisez-vous ! C'est vous qui nous avez piégés !",
						"spanish": "¡Cállate! ¡Ustedes fueron quienes nos atraparon!",
						"vietnamese": "Câm mồm! Chính các ngươi đã giam cầm chúng ta!",
						"thai": "หุบปาก! พวกแกต่างหากที่ขังพวกเราไว้!",
						"hindi": "चुप रहो! तुम लोगों ने हमें फँसाया है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희도 곧 우리의 일부가 될 것이다.",
						"english": "Fools. You too shall soon become one of us.",
						"japanese": "愚かな者たちめ。お前たちもじきに我々の一部となるだろう。",
						"chinese": "愚蠢的东西。你们很快也会成为我们的一部分。",
						"french": "Imbéciles. Vous aussi, vous deviendrez bientôt l'un des nôtres.",
						"spanish": "Necios. Vosotros también seréis pronto parte de nosotros.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi cũng sẽ sớm trở thành một phần của chúng ta thôi.",
						"thai": "เจ้าพวกโง่ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของเราในไม่ช้า",
						"hindi": "मूर्खों। तुम भी जल्द ही हमारे हिस्से बन जाओगे।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아니… 우리는 달라! 우리는 싸울 거야! 이 비극을 끝낼 거야!",
						"english": "No... We're different! We will fight! We will end this tragedy!",
						"japanese": "違う… 私たちは違う！ 私たちは戦う！ この悲劇を終わらせる！",
						"chinese": "不… 我们不一样！我们会战斗的！我们会结束这场悲剧！",
						"french": "Non... Nous sommes différents ! Nous allons nous battre ! Nous allons mettre fin à cette tragédie !",
						"spanish": "¡No... Somos diferentes! ¡Lucharemos! ¡Pondremos fin a esta tragedia!",
						"vietnamese": "Không... Chúng ta khác! Chúng ta sẽ chiến đấu! Chúng ta sẽ kết thúc bi kịch này!",
						"thai": "ไม่... เราต่างกัน! เราจะสู้! เราจะยุติโศกนาฏกรรมนี้!",
						"hindi": "नहीं... हम अलग हैं! हम लड़ेंगे! हम इस त्रासदी को खत्म करेंगे!"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…이… 고통은… 영원하다…! 너희도….",
						"english": "...This... pain is... eternal...! You too....",
						"japanese": "…この…苦痛は…永遠だ…！ お前たちも…。",
						"chinese": "……这……痛苦……是永恒的……！你们也……。",
						"french": "...Cette... douleur est... éternelle...! Vous aussi....",
						"spanish": "...Este... dolor es... eterno...! Vosotros también....",
						"vietnamese": "...Nỗi... đau này... là vĩnh cửu...! Các ngươi cũng...",
						"thai": "...ความ...เจ็บปวดนี้...เป็นนิรันดร์...! พวกเจ้าก็...",
						"hindi": "...यह... दर्द... अनंत है...! तुम भी...."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝났어… 하지만… 사라지지 않는 아픔이….",
						"english": "It's over... But... an unceasing pain remains....",
						"japanese": "終わった… でも… 消えない痛みが…。",
						"chinese": "结束了… 但是… 一种挥之不去的痛苦…。",
						"french": "C'est fini... Mais... une douleur persistante demeure....",
						"spanish": "Se acabó... Pero... un dolor que no desaparece....",
						"vietnamese": "Kết thúc rồi... Nhưng... một nỗi đau không tan biến...",
						"thai": "จบแล้ว... แต่... ความเจ็บปวดที่ไม่หายไป...",
						"hindi": "खत्म हो गया... लेकिन... एक न मिटने वाला दर्द...."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 환각의 잔재 속에서, 희미한 오팔빛 조각들이 빛났다. 사막은 여전히 침묵했지만, 그 침묵 속에는… 다음 비극의 숨결이 스며들어 있었다.",
						"english": "Amidst the fallen remnants of the illusion, faint opal fragments gleamed. The desert remained silent, yet within that silence... the breath of the next tragedy seeped in.",
						"japanese": "倒れた幻影の残骸の中で、かすかなオパール色の破片が輝いた。砂漠は依然として沈黙していたが、その沈黙の中には…次の悲劇の息吹が染み込んでいた。",
						"chinese": "在倒塌的幻觉残骸中，微弱的蛋白石碎片闪烁着光芒。沙漠依然沉默，然而在那沉默之中……下一个悲剧的气息已然渗入。",
						"french": "Au milieu des vestiges tombés de l'illusion, de faibles fragments opalescents brillaient. Le désert restait silencieux, mais dans ce silence... le souffle de la prochaine tragédie s'infiltrait.",
						"spanish": "Entre los restos caídos de la ilusión, débiles fragmentos opalinos brillaron. El desierto permanecía en silencio, pero en ese silencio... el aliento de la próxima tragedia se filtraba.",
						"vietnamese": "Giữa tàn tích ảo ảnh đã đổ nát, những mảnh opal mờ ảo lấp lánh. Sa mạc vẫn im lìm, nhưng trong sự im lìm ấy... hơi thở của bi kịch tiếp theo đã thấm vào.",
						"thai": "ท่ามกลางซากปรักหักพังของภาพลวงตาที่ร่วงหล่น เศษโอปอลสีจาง ๆ ส่องประกาย ทะเลทรายยังคงเงียบงัน แต่ในความเงียบนั้น... ลมหายใจของโศกนาฏกรรมครั้งต่อไปได้ซึมซาบเข้ามา",
						"hindi": "भ्रम के गिरे हुए अवशेषों के बीच, धुंधले ओपल के टुकड़े चमक रहे थे। रेगिस्तान अभी भी शांत था, फिर भी उस शांति में... अगली त्रासदी की सांस रिस रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환각의 굴레가 다시 탐험대를 집어삼켰다.",
						"english": "The cycle of illusion consumed the expedition once more.",
						"japanese": "幻影の輪廻が再び探検隊を飲み込んだ。",
						"chinese": "幻觉的桎梏再次吞噬了探险队。",
						"french": "Le cycle de l'illusion a de nouveau englouti l'expédition.",
						"spanish": "El ciclo de la ilusión devoró una vez más a la expedición.",
						"vietnamese": "Vòng xoáy ảo ảnh lại một lần nữa nuốt chửng đoàn thám hiểm.",
						"thai": "วงจรแห่งภาพลวงตาได้กลืนกินคณะสำรวจอีกครั้ง",
						"hindi": "भ्रम के चक्र ने अभियान को फिर से निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 저항… 영원히 헤매어라….",
						"english": "Futile resistance... Wander forever...",
						"japanese": "無意味な抵抗…永遠に彷徨え…。",
						"chinese": "徒劳的抵抗……永远徘徊吧……",
						"french": "Résistance futile... Errez pour l'éternité...",
						"spanish": "Resistencia inútil... Vaga por siempre...",
						"vietnamese": "Sự kháng cự vô ích... Hãy lang thang mãi mãi...",
						"thai": "การต่อต้านที่ไร้ประโยชน์... จงหลงทางไปตลอดกาล...",
						"hindi": "तुच्छ प्रतिरोध... हमेशा भटकते रहो..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…! 우리는… 벗어날 거야!",
						"english": "It's not... over yet...! We will... break free!",
						"japanese": "まだ…終わってない…！私たちは…抜け出すんだ！",
						"chinese": "还没……结束……！我们……会挣脱的！",
						"french": "Ce n'est pas... encore fini...! Nous allons... nous libérer !",
						"spanish": "¡Todavía... no ha terminado...! ¡Nosotros... escaparemos!",
						"vietnamese": "Chưa... kết thúc đâu...! Chúng ta sẽ... thoát ra!",
						"thai": "ยัง...ไม่จบ...! เราจะ...หลุดพ้น!",
						"hindi": "अभी... खत्म नहीं हुआ...! हम... आजाद होंगे!"
					}
				}
			]
		}
	]
} as const;
