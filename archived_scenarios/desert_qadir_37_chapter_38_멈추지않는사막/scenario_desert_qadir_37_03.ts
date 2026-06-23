export const scenario_desert_qadir_37_03 = {
	"scenario_id": "desert_qadir_37_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막 한가운데, 생기 없는 오아시스. 죽은 자들의 비명이 맴돌았다.",
						"english": "In the middle of the desert, a lifeless oasis. Screams of the dead echoed.",
						"japanese": "砂漠の真ん中、生気のないオアシス。死者の悲鳴がこだました。",
						"chinese": "沙漠中央，死气沉沉的绿洲。亡者的尖叫声回荡着。",
						"french": "Au milieu du désert, une oasis sans vie. Les cris des morts résonnaient.",
						"spanish": "En medio del desierto, un oasis sin vida. Los gritos de los muertos resonaban.",
						"vietnamese": "Giữa lòng sa mạc, một ốc đảo vô hồn. Tiếng thét của người chết vang vọng.",
						"thai": "กลางทะเลทราย โอเอซิสที่ไร้ชีวิต เสียงกรีดร้องของคนตายดังก้อง",
						"hindi": "रेगिस्तान के बीच में, एक बेजान नखलिस्तान। मृतकों की चीखें गूँज रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…여긴 대체.",
						"english": "...Where am I?",
						"japanese": "…ここはいったい。",
						"chinese": "……这是哪儿。",
						"french": "...Où suis-je ?",
						"spanish": "...¿Dónde estoy?",
						"vietnamese": "...Đây rốt cuộc là đâu.",
						"thai": "...ที่นี่มันที่ไหนกันแน่",
						"hindi": "...यह कहाँ है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래 기다렸어, 영웅.",
						"english": "I've been waiting for a long time, hero.",
						"japanese": "長く待っていた、英雄よ。",
						"chinese": "我等你很久了，英雄。",
						"french": "Je t'attendais depuis longtemps, héros.",
						"spanish": "Te he estado esperando mucho tiempo, héroe.",
						"vietnamese": "Ta đã đợi rất lâu rồi, anh hùng.",
						"thai": "ข้ารอเจ้ามานานแล้ว วีรบุรุษ",
						"hindi": "मैं बहुत देर से प्रतीक्षा कर रहा हूँ, नायक।"
					},
					"speaker": "ember"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ember",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네가 죽인 자들이 여기 있어. 잊혀진 오아시스의 영혼들.",
						"english": "Those you killed are here. The souls of the forgotten oasis.",
						"japanese": "お前が殺した者たちがここにいる。忘れられたオアシスの魂だ。",
						"chinese": "你所杀之人都在这里。被遗忘绿洲的灵魂们。",
						"french": "Ceux que tu as tués sont ici. Les âmes de l'oasis oubliée.",
						"spanish": "Los que mataste están aquí. Las almas del oasis olvidado.",
						"vietnamese": "Những kẻ ngươi đã giết đều ở đây. Linh hồn của ốc đảo lãng quên.",
						"thai": "ผู้ที่เจ้าฆ่าอยู่ที่นี่ วิญญาณแห่งโอเอซิสที่ถูกลืม",
						"hindi": "जिन्हें तुमने मारा, वे यहाँ हैं। भूले हुए नखलिस्तान की आत्माएँ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "망령… 내가 죽인….",
						"english": "Ghosts... Those I killed...",
						"japanese": "亡霊… 私が殺した…。",
						"chinese": "亡魂…… 我杀的……。",
						"french": "Des spectres... Ceux que j'ai tués...",
						"spanish": "Fantasmas... Los que maté...",
						"vietnamese": "Bóng ma... Những kẻ ta đã giết...",
						"thai": "วิญญาณ... ที่ข้าฆ่า...",
						"hindi": "भूत... जिन्हें मैंने मारा...।"
					}
				},
				{
					"content": {
						"korean": "그들은 죽은 게 아니야. 전쟁이 끝나지 않도록 '관리'되는 영혼들.",
						"english": "They're not dead. They are souls \"managed\" so the war never ends.",
						"japanese": "彼らは死んだのではない。戦争が終わらないように「管理」されている魂だ。",
						"chinese": "他们没有死。是为确保战争永不结束而“管理”的灵魂。",
						"french": "Ils ne sont pas morts. Ce sont des âmes « gérées » pour que la guerre ne se termine jamais.",
						"spanish": "No están muertos. Son almas \"gestionadas\" para que la guerra nunca termine.",
						"vietnamese": "Họ không chết. Họ là những linh hồn bị \"quản lý\" để chiến tranh không bao giờ kết thúc.",
						"thai": "พวกเขาไม่ได้ตาย พวกเขาคือวิญญาณที่ถูก 'ควบคุม' เพื่อไม่ให้สงครามสิ้นสุดลง",
						"hindi": "वे मरे नहीं हैं। वे ऐसी आत्माएँ हैं जिन्हें \"नियंत्रित\" किया जाता है ताकि युद्ध कभी खत्म न हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너의 죄책감을 먹고, 이 전쟁은 계속되는 거지.",
						"english": "Feeding on your guilt, this war continues.",
						"japanese": "君の罪悪感を糧に、この戦争は続く。",
						"chinese": "吞噬着你的罪恶感，这场战争还会继续。",
						"french": "Se nourrissant de ta culpabilité, cette guerre continue.",
						"spanish": "Alimentándose de tu culpa, esta guerra continúa.",
						"vietnamese": "Nuôi dưỡng bởi tội lỗi của ngươi, cuộc chiến này vẫn tiếp diễn.",
						"thai": "สงครามนี้ดำเนินต่อไป โดยกินความรู้สึกผิดของคุณเป็นอาหาร",
						"hindi": "तुम्हारी ग्लानि को खाकर, यह युद्ध जारी रहेगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야… 내가….",
						"english": "No... I...",
						"japanese": "違う… 私が…。",
						"chinese": "不… 我…",
						"french": "Non... Je...",
						"spanish": "No... Yo...",
						"vietnamese": "Không... Ta...",
						"thai": "ไม่นะ... ฉัน...",
						"hindi": "नहीं... मैंने..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "과거 승리했던 자들의 얼굴을 봤어? 그들은 공허했어. 너처럼.",
						"english": "Have you seen the faces of those who triumphed in the past? They were hollow. Like you.",
						"japanese": "過去に勝利した者たちの顔を見たか？ 彼らは虚ろだった。お前のように。",
						"chinese": "你见过过去那些胜利者的脸吗？他们是空虚的。像你一样。",
						"french": "As-tu vu les visages de ceux qui ont triomphé par le passé ? Ils étaient vides. Comme toi.",
						"spanish": "¿Has visto los rostros de quienes triunfaron en el pasado? Estaban vacíos. Como tú.",
						"vietnamese": "Ngươi đã thấy khuôn mặt của những kẻ chiến thắng trong quá khứ chưa? Họ trống rỗng. Giống như ngươi.",
						"thai": "คุณเคยเห็นใบหน้าของผู้ที่ได้รับชัยชนะในอดีตไหม? พวกเขาว่างเปล่า เหมือนคุณเลย",
						"hindi": "क्या तुमने अतीत में जीतने वालों के चेहरे देखे हैं? वे खोखले थे। तुम्हारी तरह।"
					},
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "환상이야….",
						"english": "It's an illusion...",
						"japanese": "幻想だ…。",
						"chinese": "幻象罢了…",
						"french": "C'est une illusion...",
						"spanish": "Es una ilusión...",
						"vietnamese": "Chỉ là ảo ảnh...",
						"thai": "มันเป็นภาพลวงตา...",
						"hindi": "यह एक भ्रम है..."
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피할 수 없어. 네 죄는 너를 영원히 따라다닐 거야.",
						"english": "There's no escape. Your sins will haunt you forever.",
						"japanese": "逃れられない。お前の罪は永遠にお前を追い続けるだろう。",
						"chinese": "你逃不掉的。你的罪孽将永远缠绕着你。",
						"french": "Tu ne peux pas t'échapper. Tes péchés te hanteront pour toujours.",
						"spanish": "No puedes escapar. Tus pecados te perseguirán para siempre.",
						"vietnamese": "Không thể trốn thoát. Tội lỗi của ngươi sẽ ám ảnh ngươi mãi mãi.",
						"thai": "หนีไม่พ้นหรอก บาปของคุณจะตามหลอกหลอนคุณไปตลอดกาล",
						"hindi": "कोई बच नहीं सकता। तुम्हारे पाप तुम्हें हमेशा सताते रहेंगे।"
					},
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "조용히 해… 사라져….",
						"english": "Be quiet... Vanish...",
						"japanese": "黙れ… 消え失せろ…。",
						"chinese": "安静！消失吧！",
						"french": "Tais-toi... Disparais...",
						"spanish": "Cállate... Desaparece...",
						"vietnamese": "Im đi... Biến đi...",
						"thai": "เงียบซะ... หายไปซะ...",
						"hindi": "चुप रहो... गायब हो जाओ..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "봐. 네 주변을 봐. 그들이 너를 비난하잖아.",
						"english": "Look. Look around you. They're accusing you.",
						"japanese": "見ろ。お前の周りを見ろ。彼らがお前を非難しているじゃないか。",
						"chinese": "看。看看你周围。他们都在指责你。",
						"french": "Regarde. Regarde autour de toi. Ils te blâment.",
						"spanish": "Mira. Mira a tu alrededor. Te están culpando.",
						"vietnamese": "Nhìn đi. Nhìn xung quanh ngươi đi. Họ đang buộc tội ngươi kìa.",
						"thai": "ดูสิ ดูรอบตัวคุณสิ พวกเขากำลังกล่าวหาคุณอยู่",
						"hindi": "देखो। अपने चारों ओर देखो। वे तुम्हें दोषी ठहरा रहे हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "아아… 젠장….",
						"english": "Ah... Damn it...",
						"japanese": "ああ… くそ…。",
						"chinese": "啊… 该死…",
						"french": "Ah... Merde...",
						"spanish": "Ah... Maldita sea...",
						"vietnamese": "Á à... Chết tiệt...",
						"thai": "อ่า... ให้ตายสิ...",
						"hindi": "आह... धिक्कार है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "주인공의 눈앞에 죽은 자들의 환상이 일렁였다. 죄책감에 갇혔다.",
						"english": "Illusions of the dead shimmered before the protagonist's eyes. Trapped by guilt.",
						"japanese": "主人公の目の前に死者の幻影が揺らめいた。罪悪感に囚われた。",
						"chinese": "死者的幻象在主人公眼前晃动。他被罪恶感困住了。",
						"french": "Des illusions des morts scintillaient devant les yeux du protagoniste. Piégé par la culpabilité.",
						"spanish": "Las ilusiones de los muertos parpadearon ante los ojos del protagonista. Atrapado por la culpa.",
						"vietnamese": "Ảo ảnh của những người đã khuất lung linh trước mắt nhân vật chính. Bị mắc kẹt trong tội lỗi.",
						"thai": "ภาพลวงตาของผู้ตายระยิบระยับอยู่ตรงหน้าตัวละครหลัก เขาถูกขังอยู่ในความรู้สึกผิด",
						"hindi": "नायक की आँखों के सामने मृतकों के भ्रम झिलमिला उठे। अपराधबोध में फँसा हुआ।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 현실이 아니야…! 벗어나야 해…!",
						"english": "This isn't real...! I have to escape...!",
						"japanese": "これは現実じゃない…！ 抜け出さなければ…！",
						"chinese": "这不是现实…！我必须逃离…！",
						"french": "Ce n'est pas réel...! Je dois m'échapper...!",
						"spanish": "¡Esto no es real...! ¡Tengo que escapar...!",
						"vietnamese": "Đây không phải là thực tại...! Ta phải thoát ra...!",
						"thai": "นี่ไม่ใช่ความจริง...! ฉันต้องหนีไป...!",
						"hindi": "यह सच नहीं है...! मुझे भागना होगा...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						4,
						4
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벗어날 수 없어, 죄인. 네가 만든 세상이니까.",
						"english": "There's no escape, sinner. It's a world of your own making.",
						"japanese": "逃れることはできない、罪人よ。お前が作った世界なのだから。",
						"chinese": "你无法逃脱，罪人。这是你创造的世界。",
						"french": "Pas d'échappatoire, pécheur. C'est le monde que tu as créé.",
						"spanish": "No puedes escapar, pecador. Es el mundo que creaste.",
						"vietnamese": "Không thể thoát được đâu, tội nhân. Vì đây là thế giới do ngươi tạo ra.",
						"thai": "หนีไม่พ้นหรอกนะ เจ้าคนบาป เพราะนี่คือโลกที่เจ้าสร้างขึ้นมาเอง",
						"hindi": "कोई बच नहीं सकता, पापी। यह तुम्हारी अपनी बनाई हुई दुनिया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너는… 대체 뭐야.",
						"english": "What... what exactly are you?",
						"japanese": "お前は…一体何だ？",
						"chinese": "你到底…是什么？",
						"french": "Qu'est-ce que tu es... exactement ?",
						"spanish": "¿Qué... qué eres exactamente?",
						"vietnamese": "Ngươi... rốt cuộc là cái gì?",
						"thai": "แก... เป็นอะไรกันแน่",
						"hindi": "तुम... आख़िर क्या हो?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 외면한 진실. 네 어두운 그림자.",
						"english": "The truth you turned away from. Your dark shadow.",
						"japanese": "お前が目を背けた真実。お前の暗い影。",
						"chinese": "你所回避的真相。你黑暗的影子。",
						"french": "La vérité que tu as fuie. Ton ombre obscure.",
						"spanish": "La verdad que ignoraste. Tu sombra oscura.",
						"vietnamese": "Sự thật ngươi đã chối bỏ. Cái bóng tối của ngươi.",
						"thai": "ความจริงที่เจ้าเมินเฉย เงาอันมืดมิดของเจ้า",
						"hindi": "जिस सच्चाई से तुम मुँह मोड़ते हो। तुम्हारी काली परछाई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "발버둥 쳐봐야 소용없어. 넌 영원히 이곳에 갇힐 운명.",
						"english": "Struggling is futile. You are destined to be trapped here forever.",
						"japanese": "もがいても無駄だ。お前は永遠にここに囚われる運命なのだ。",
						"chinese": "挣扎也无济于事。你注定永远被困于此。",
						"french": "Lutter est vain. Tu es destiné à être piégé ici pour toujours.",
						"spanish": "Luchar es inútil. Estás destinado a estar atrapado aquí para siempre.",
						"vietnamese": "Dù có vùng vẫy cũng vô ích. Ngươi định mệnh sẽ bị nhốt ở đây mãi mãi.",
						"thai": "ดิ้นรนไปก็เท่านั้น เจ้าถูกลิขิตให้ติดอยู่ที่นี่ตลอดไป",
						"hindi": "कोशिश करना बेकार है। तुम हमेशा के लिए यहाँ फँसे रहने के लिए ही बने हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 난 여기서 끝낼 거야!",
						"english": "Nonsense! I'll end it here!",
						"japanese": "たわごとを言うな！ここで終わらせてやる！",
						"chinese": "胡说八道！我偏要在这里了结！",
						"french": "Quelle stupidité ! J'en finirai ici !",
						"spanish": "¡Tonterías! ¡Lo terminaré aquí!",
						"vietnamese": "Đừng nói nhảm! Ta sẽ kết thúc nó ở đây!",
						"thai": "ไร้สาระ! ฉันจะจบมันตรงนี้แหละ!",
						"hindi": "बकवास बंद करो! मैं इसे यहीं ख़त्म करूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…환상을 깨봤자. 또 다른 죄책감이 너를 기다릴 뿐.",
						"english": "...Even if you shatter the illusion. Only another guilt awaits you.",
						"japanese": "…幻想を打ち破っても。また別の罪悪感が、お前を待つだけだ。",
						"chinese": "……即便打破了幻想。也只会有新的罪恶感等着你。",
						"french": "...Même si tu brises l'illusion. Seule une autre culpabilité t'attend.",
						"spanish": "...Aunque rompas la ilusión. Solo otra culpa te espera.",
						"vietnamese": "...Dù có phá vỡ ảo ảnh. Chỉ có một cảm giác tội lỗi khác đang chờ ngươi.",
						"thai": "...แม้จะทำลายภาพลวงตาได้ ก็มีแค่ความรู้สึกผิดอื่น ๆ รอเจ้าอยู่เท่านั้น",
						"hindi": "...भले ही तुम भ्रम को तोड़ दो। सिर्फ़ एक और अपराधबोध तुम्हारा इंतज़ार करेगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이겼는데… 왜 이렇게 공허하지.",
						"english": "I won... so why do I feel so empty?",
						"japanese": "勝ったのに…なぜこんなにも虚しいんだ。",
						"chinese": "我赢了……为何如此空虚。",
						"french": "J'ai gagné... alors pourquoi ce vide ?",
						"spanish": "Gané... ¿entonces por qué me siento tan vacío?",
						"vietnamese": "Ta đã thắng... sao lại trống rỗng thế này?",
						"thai": "ฉันชนะแล้ว... ทำไมถึงรู้สึกว่างเปล่าแบบนี้นะ",
						"hindi": "मैं जीत गया... तो फिर इतना ख़ालीपन क्यों है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환상은 부서졌지만, 죄책감의 씨앗은 깊이 박혔다. 전쟁은 계속된다.",
						"english": "The illusion shattered, but the seeds of guilt are deeply rooted. The war continues.",
						"japanese": "幻想は砕け散ったが、罪悪感の種は深く根付いた。戦いは続く。",
						"chinese": "幻想破灭了，但罪恶感的种子已根深蒂固。战争仍在继续。",
						"french": "L'illusion est brisée, mais les graines de la culpabilité sont profondément ancrées. La guerre continue.",
						"spanish": "La ilusión se rompió, pero las semillas de la culpa están profundamente arraigadas. La guerra continúa.",
						"vietnamese": "Ảo ảnh tan vỡ, nhưng hạt giống tội lỗi đã cắm rễ sâu. Cuộc chiến vẫn tiếp diễn.",
						"thai": "ภาพลวงตาแตกสลาย แต่เมล็ดพันธุ์แห่งความรู้สึกผิดหยั่งรากลึก สงครามยังคงดำเนินต่อไป",
						"hindi": "भ्रम टूट गया, लेकिन अपराधबोध के बीज गहरे जड़ गए हैं। युद्ध जारी है।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도망칠 수 없어. 네 죄와 함께 영원히 고통받아라.",
						"english": "There's no escape. Suffer eternally with your sins.",
						"japanese": "逃れることはできない。お前の罪と共に永遠に苦しめ。",
						"chinese": "你无法逃脱。与你的罪孽一同承受永恒的痛苦吧。",
						"french": "Pas d'échappatoire. Souffre éternellement avec tes péchés.",
						"spanish": "No puedes escapar. Sufre eternamente con tus pecados.",
						"vietnamese": "Không thể thoát được đâu. Hãy mãi mãi chịu đựng cùng với tội lỗi của ngươi.",
						"thai": "หนีไม่พ้นหรอก จงทนทุกข์ทรมานไปพร้อมกับบาปของเจ้าชั่วนิรันดร์",
						"hindi": "कोई बच नहीं सकता। अपने पापों के साथ हमेशा के लिए पीड़ित रहो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没……结束……！",
						"french": "Ce n'est pas... encore fini... !",
						"spanish": "Aún... no ha terminado...!",
						"vietnamese": "Vẫn... chưa kết thúc...!",
						"thai": "ยัง... ไม่จบ...!",
						"hindi": "अभी... ख़त्म नहीं हुआ है...!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잊혀진 오아시스. 모래바람 속, 죽음마저 배회하는 곳.",
			"과거의 망령들이 속삭인다. 나의 죄가 파도처럼 밀려왔다.",
			"전쟁은 끝나지 않는다. 영혼마저 관리되는 잔혹한 진실.",
			"승리의 그림자엔, 오직 공허함만 남았다."
		],
		"english": [
			"The forgotten oasis. Where even death roams in the sandstorms.",
			"Ghosts of the past whisper. My sins crashed in like waves.",
			"The war never ends. A cruel truth where even souls are managed.",
			"In the shadow of victory, only emptiness remained."
		],
		"japanese": [
			"忘れられたオアシス。砂嵐の中、死すら彷徨う場所。",
			"過去の亡霊が囁く。私の罪が波のように押し寄せた。",
			"戦争は終わらない。魂さえも管理される残酷な真実。",
			"勝利の影には、ただ虚無だけが残った。"
		],
		"chinese": [
			"遗忘的绿洲。沙尘暴中，连死亡也徘徊之地。",
			"过去的亡魂低语。我的罪孽如潮水般涌来。",
			"战争永无止境。连灵魂都被“管理”的残酷真相。",
			"胜利的阴影下，只剩下虚无。"
		],
		"french": [
			"L'oasis oubliée. Un lieu où même la mort rôde dans les tempêtes de sable.",
			"Les spectres du passé chuchotent. Mes péchés sont arrivés comme des vagues.",
			"La guerre ne finit jamais. Une cruelle vérité où même les âmes sont contrôlées.",
			"Dans l'ombre de la victoire, seul le vide subsistait."
		],
		"spanish": [
			"El oasis olvidado. Donde incluso la muerte deambula entre las tormentas de arena.",
			"Los fantasmas del pasado susurran. Mis pecados llegaron como olas.",
			"La guerra nunca termina. Una cruel verdad donde incluso las almas son gestionadas.",
			"A la sombra de la victoria, solo quedó el vacío."
		],
		"vietnamese": [
			"Ốc đảo lãng quên. Nơi ngay cả cái chết cũng lang thang trong bão cát.",
			"Bóng ma quá khứ thì thầm. Tội lỗi của ta ập đến như sóng.",
			"Chiến tranh không hồi kết. Một sự thật tàn khốc khi linh hồn cũng bị kiểm soát.",
			"Trong bóng tối chiến thắng, chỉ còn lại sự trống rỗng."
		],
		"thai": [
			"โอเอซิสที่ถูกลืมเลือน ท่ามกลางพายุทราย สถานที่ที่แม้แต่ความตายยังคงวนเวียน",
			"วิญญาณจากอดีตกระซิบกระซาบ บาปของข้าซัดสาดเข้ามาดั่งคลื่น",
			"สงครามไม่มีวันสิ้นสุด ความจริงอันโหดร้ายที่แม้แต่วิญญาณก็ถูกควบคุม",
			"ภายใต้เงาแห่งชัยชนะ มีเพียงความว่างเปล่าเท่านั้นที่เหลืออยู่"
		],
		"hindi": [
			"भूला हुआ नखलिस्तान। जहाँ रेत के तूफानों में मृत्यु भी भटकती है।",
			"अतीत के भूत फुसफुसाते हैं। मेरे पाप लहरों की तरह उमड़ पड़े।",
			"युद्ध कभी खत्म नहीं होता। एक क्रूर सत्य जहाँ आत्माओं को भी नियंत्रित किया जाता है।",
			"विजय की छाया में, केवल रिक्तता ही शेष रही।"
		]
	}
} as const;
