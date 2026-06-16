export const scenario_snowy_skaalbane_63_03 = {
	"scenario_id": "snowy_skaalbane_63_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"content": {
						"korean": "탑의 얼음벽이 한결 투명해졌다. 그 안에 수많은 얼굴이 얼어붙어 있었다.",
						"english": "The Ice Tower's walls became clearer. Countless faces were frozen within.",
						"japanese": "塔の氷壁は一層透明になった。その中に無数の顔が凍り付いていた。",
						"chinese": "塔的冰墙变得更加透明了。无数张脸被冻结在里面。",
						"french": "Les murs de glace de la tour devinrent plus transparents. D'innombrables visages y étaient figés.",
						"spanish": "Las paredes de hielo de la torre se volvieron más transparentes. Incontables rostros estaban congelados dentro.",
						"vietnamese": "Bức tường băng của tháp trở nên trong suốt hơn. Vô số khuôn mặt bị đóng băng bên trong.",
						"thai": "กำแพงน้ำแข็งของหอคอยโปร่งใสขึ้น ใบหน้านับไม่ถ้วนถูกแช่แข็งอยู่ภายใน",
						"hindi": "मीनार की बर्फीली दीवारें और पारदर्शी हो गईं। अनगिनत चेहरे उनमें जमे हुए थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모두 눈을 감고 있었지만, 그 표정엔 마지막 절규가 멈춘 듯 남아 있었다.",
						"english": "All had their eyes closed, but their expressions held what seemed to be their final screams, frozen.",
						"japanese": "皆、目を閉じていたが、その表情には最後の絶叫が止まったかのように残っていた。",
						"chinese": "他们都闭着眼睛，但表情上却残留着仿佛定格的最后一声尖叫。",
						"french": "Tous avaient les yeux fermés, mais leurs expressions gardaient l'écho de leurs derniers cris, figés.",
						"spanish": "Todos tenían los ojos cerrados, pero sus expresiones conservaban lo que parecían ser sus últimos gritos, congelados.",
						"vietnamese": "Tất cả đều nhắm mắt, nhưng trên gương mặt họ vẫn còn lại tiếng thét cuối cùng như thể đã ngừng lại.",
						"thai": "ทุกคนหลับตา แต่สีหน้าของพวกเขายังคงเหลือร่องรอยของเสียงกรีดร้องสุดท้ายที่หยุดนิ่งอยู่",
						"hindi": "सभी की आँखें बंद थीं, लेकिन उनके भावों में अंतिम चीखें जमी हुई सी लग रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…이 사람들.",
						"english": "...These people.",
						"japanese": "…この人たち。",
						"chinese": "……这些人。",
						"french": "...Ces gens.",
						"spanish": "...Esta gente.",
						"vietnamese": "...Những người này.",
						"thai": "...คนพวกนี้",
						"hindi": "...ये लोग।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "얼음 속에서도… 비명을 지르고 있어.",
						"english": "Even in the ice... they're screaming.",
						"japanese": "氷の中でも…叫んでいる。",
						"chinese": "即使在冰中……他们也在尖叫。",
						"french": "Même dans la glace... ils hurlent.",
						"spanish": "Incluso en el hielo... están gritando.",
						"vietnamese": "Ngay cả trong băng... họ vẫn đang la hét.",
						"thai": "แม้ในน้ำแข็ง... พวกเขาก็ยังกรีดร้อง",
						"hindi": "बर्फ में भी... वे चीख रहे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "인카, 괜찮아?",
						"english": "Inka, are you alright?",
						"japanese": "インカ、大丈夫？",
						"chinese": "因卡，你没事吧？",
						"french": "Inka, tu vas bien ?",
						"spanish": "Inka, ¿estás bien?",
						"vietnamese": "Inka, cậu có sao không?",
						"thai": "อินคา, คุณสบายดีไหม?",
						"hindi": "इंका, क्या तुम ठीक हो?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "가까이 갈수록… 더 선명해져.",
						"english": "The closer I get... the clearer it becomes.",
						"japanese": "近づけば近づくほど…さらに鮮明になる。",
						"chinese": "越靠近……越清晰。",
						"french": "Plus je m'approche... plus c'est net.",
						"spanish": "Cuanto más me acerco... más claro se vuelve.",
						"vietnamese": "Càng đến gần... càng rõ ràng hơn.",
						"thai": "ยิ่งเข้าใกล้... ยิ่งชัดเจนขึ้น",
						"hindi": "जितना करीब जाता हूँ... उतना ही स्पष्ट होता जाता है।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 너 괜찮아보이지 않아.",
						"english": "What's that sound? You don't look okay.",
						"japanese": "何の音だ？元気がないみたいだけど。",
						"chinese": "什么声音？你看起来不太好。",
						"french": "Quel est ce bruit ? Tu n'as pas l'air d'aller bien.",
						"spanish": "¿Qué es ese sonido? No te ves bien.",
						"vietnamese": "Tiếng gì vậy? Trông cậu không ổn.",
						"thai": "เสียงอะไรน่ะ? คุณดูไม่ค่อยดีเลยนะ",
						"hindi": "यह कैसी आवाज़ है? तुम ठीक नहीं लग रहे हो।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 절규… 내 가슴으로 스며드는 것 같아.",
						"english": "This scream... it feels like it's seeping into my chest.",
						"japanese": "この絶叫…胸に染み渡るようだ。",
						"chinese": "这尖叫声… 仿佛渗透进了我的心。",
						"french": "Ce hurlement… On dirait qu'il s'infiltre dans ma poitrine.",
						"spanish": "Este grito... Parece que se me está metiendo en el pecho.",
						"vietnamese": "Tiếng thét này… như đang ngấm vào lồng ngực tôi.",
						"thai": "เสียงกรีดร้องนี้… เหมือนมันซึมเข้าไปในอกฉันเลย",
						"hindi": "यह चीख... लगता है मेरे सीने में उतर रही है।"
					}
				},
				{
					"content": {
						"korean": "너무 오래 들여다보지 마.",
						"english": "Don't stare at it too long.",
						"japanese": "あまり長く見つめないで。",
						"chinese": "别看太久。",
						"french": "Ne le regarde pas trop longtemps.",
						"spanish": "No lo mires demasiado tiempo.",
						"vietnamese": "Đừng nhìn chằm chằm lâu quá.",
						"thai": "อย่าจ้องนานเกินไปนะ",
						"hindi": "इसे ज़्यादा देर मत देखो।"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…아직도 비명을 멈추지 못했어.",
						"english": "...The screaming still hasn't stopped.",
						"japanese": "…まだ悲鳴が止まない。",
						"chinese": "…尖叫声还没停。",
						"french": "...Les cris n'ont toujours pas cessé.",
						"spanish": "...Todavía no han dejado de gritar.",
						"vietnamese": "…Tiếng hét vẫn chưa dừng lại.",
						"thai": "…เสียงกรีดร้องยังไม่หยุดเลย",
						"hindi": "...चीखें अभी भी बंद नहीं हुई हैं।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너무… 아파 보여.",
						"english": "They look... so pained.",
						"japanese": "とても…苦しそうだ。",
						"chinese": "看起来…太痛苦了。",
						"french": "Ils ont l'air… tellement souffrants.",
						"spanish": "Se ven... tan adoloridos.",
						"vietnamese": "Trông… đau đớn quá.",
						"thai": "ดู…ทรมานมากเลย",
						"hindi": "बहुत... दर्द में दिख रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "그냥 괴물들이잖아.",
						"english": "They're just monsters.",
						"japanese": "ただの怪物だよ。",
						"chinese": "它们只是怪物罢了。",
						"french": "Ce ne sont que des monstres.",
						"spanish": "Son solo monstruos.",
						"vietnamese": "Chúng chỉ là quái vật thôi.",
						"thai": "พวกมันก็แค่สัตว์ประหลาด",
						"hindi": "वे तो बस राक्षस हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야. 이 사람들… 모두 누군가의 소중한 사람이었어.",
						"english": "No. These people... they were all precious to someone.",
						"japanese": "違う。この人たちは…みんな誰かの大切な人だったんだ。",
						"chinese": "不。这些人…都曾是某个人的挚爱。",
						"french": "Non. Ces gens… ils étaient tous importants pour quelqu'un.",
						"spanish": "No. Estas personas... todos fueron importantes para alguien.",
						"vietnamese": "Không. Những người này… đều từng là người thân yêu của ai đó.",
						"thai": "ไม่หรอก คนพวกนี้… ล้วนเคยเป็นคนสำคัญของใครบางคน",
						"hindi": "नहीं। ये लोग... सभी किसी के प्यारे थे।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 이러고 있을 시간이 없어.",
						"english": "We don't have time to stay here like this.",
						"japanese": "ここでこうしている時間はない。",
						"chinese": "我们没时间在这里耗着了。",
						"french": "Nous n'avons pas le temps de rester ici comme ça.",
						"spanish": "No tenemos tiempo para estar aquí así.",
						"vietnamese": "Chúng ta không có thời gian ở đây như thế này đâu.",
						"thai": "เราไม่มีเวลามาอยู่ตรงนี้แบบนี้หรอก",
						"hindi": "हमारे पास यहाँ ऐसे रहने का समय नहीं है।"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "점점 더… 많아지고 있어. 비명 소리가.",
						"english": "The screams are getting... more and more frequent.",
						"japanese": "だんだん…多くなっている。悲鳴の音が。",
						"chinese": "尖叫声…越来越多了。",
						"french": "Ils sont de plus en plus… nombreux. Les cris.",
						"spanish": "Cada vez hay más... gritos.",
						"vietnamese": "Càng ngày… càng nhiều. Tiếng hét.",
						"thai": "มัน…เยอะขึ้นเรื่อยๆ เลยนะ เสียงกรีดร้องน่ะ",
						"hindi": "चीखें... बढ़ती जा रही हैं।"
					}
				},
				{
					"content": {
						"korean": "안쪽 얼음의 얼굴들은 형체가 흐려져 탑과 거의 하나가 된 듯했다.",
						"english": "The faces in the inner ice blurred, almost merging with the tower.",
						"japanese": "内側の氷の顔は形がぼやけ、塔とほぼ一体となっているようだった。",
						"chinese": "冰层内部的面孔模糊不清，仿佛与塔融为一体。",
						"french": "Les visages dans la glace intérieure étaient flous, presque fusionnés avec la tour.",
						"spanish": "Los rostros en el hielo interior se desdibujaron, casi fusionándose con la torre.",
						"vietnamese": "Những khuôn mặt bên trong lớp băng mờ dần, gần như hòa làm một với tòa tháp.",
						"thai": "ใบหน้าในน้ำแข็งด้านในพร่ามัว จนดูเหมือนหลอมรวมเป็นหนึ่งเดียวกับหอคอย",
						"hindi": "अंदरूनी बर्फ में चेहरों की आकृति धुंधली हो गई थी, मानो वे टावर से लगभग एक हो गए हों।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소름 끼쳐. 빨리 지나가자.",
						"english": "Creepy. Let's hurry past.",
						"japanese": "不気味だ。早く通り過ぎよう。",
						"chinese": "真让人毛骨悚然。快走吧。",
						"french": "Glauque. Dépêchons-nous de passer.",
						"spanish": "Espeluznante. Pasemos rápido.",
						"vietnamese": "Rợn người. Đi nhanh thôi.",
						"thai": "น่าขนลุก. รีบไปกันเถอะ.",
						"hindi": "डरावना है। जल्दी से निकलें।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그냥 두고 갈 수 없어.",
						"english": "...Can't just leave it.",
						"japanese": "…置いていけない。",
						"chinese": "...不能就这么 छोड़。",
						"french": "...Je ne peux pas juste le laisser.",
						"spanish": "...No puedo dejarlo así.",
						"vietnamese": "...Không thể bỏ mặc được.",
						"thai": "...ทิ้งไว้แบบนี้ไม่ได้.",
						"hindi": "...बस ऐसे ही नहीं छोड़ सकता।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "네가 감히… 이 절규를 이해하려 드는가.",
						"english": "Dare you… try to comprehend this scream?",
						"japanese": "貴様が…この絶叫を理解しようと企むのか。",
						"chinese": "你竟敢……试图理解这绝望的尖叫？",
						"french": "Oserez-vous… tenter de comprendre ce hurlement ?",
						"spanish": "¿Te atreves… a intentar comprender este alarido?",
						"vietnamese": "Ngươi dám… cố gắng hiểu tiếng thét này sao?",
						"thai": "แกกล้า…ที่จะพยายามเข้าใจเสียงกรีดร้องนี้หรือ?",
						"hindi": "क्या तुम हिम्मत करते हो… इस चीख को समझने की?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "하찮은 공감은… 이곳에서 죽음일 뿐.",
						"english": "Petty empathy… is merely death here.",
						"japanese": "些細な共感は…ここでは死にすぎない。",
						"chinese": "微不足道的同情……在这里只会带来死亡。",
						"french": "Une vaine empathie… n'est ici que la mort.",
						"spanish": "La empatía insignificante… aquí es solo la muerte.",
						"vietnamese": "Sự đồng cảm nhỏ bé… chỉ là cái chết ở đây.",
						"thai": "ความเห็นอกเห็นใจเล็กน้อย…เป็นเพียงความตายที่นี่.",
						"hindi": "तुच्छ सहानुभूति… यहाँ केवल मृत्यु है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…절대 포기 안 해!",
						"english": "…I'll never give up!",
						"japanese": "…絶対に諦めない！",
						"chinese": "……绝不放弃！",
						"french": "…Jamais je n'abandonnerai !",
						"spanish": "…¡Nunca me rendiré!",
						"vietnamese": "…Tuyệt đối không từ bỏ!",
						"thai": "…ไม่มีวันยอมแพ้!",
						"hindi": "…कभी हार नहीं मानूँगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "그들의 비명에 응답하듯, 거대한 그림자가 나타났다.",
						"english": "Responding to their screams, a colossal shadow appeared.",
						"japanese": "彼らの悲鳴に応えるように、巨大な影が現れた。",
						"chinese": "回应他们的尖叫，一道巨大的阴影出现了。",
						"french": "Répondant à leurs cris, une ombre colossale apparut.",
						"spanish": "Respondiendo a sus gritos, una sombra colosal apareció.",
						"vietnamese": "Đáp lại tiếng thét của họ, một cái bóng khổng lồ xuất hiện.",
						"thai": "ราวกับตอบรับเสียงกรีดร้องของพวกเขา เงาขนาดมหึมาได้ปรากฏขึ้น.",
						"hindi": "उनकी चीखों के जवाब में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 감정… 이곳의 먹이가 될 뿐.",
						"english": "Weak emotions... merely prey here.",
						"japanese": "弱き感情… ここでは餌になるだけだ。",
						"chinese": "脆弱的情感… 在这里只会成为猎物。",
						"french": "Faibles émotions... simple proie ici.",
						"spanish": "Emociones débiles... solo serán la presa aquí.",
						"vietnamese": "Cảm xúc yếu đuối... chỉ là con mồi ở đây.",
						"thai": "อารมณ์ที่อ่อนแอ... ก็เป็นแค่เหยื่อที่นี่เท่านั้น.",
						"hindi": "कमजोर भावनाएँ... यहाँ सिर्फ शिकार बनेंगी।"
					}
				},
				{
					"content": {
						"korean": "이건… 비명이야. 고통받는 자들의 절규!",
						"english": "This is... a scream. The wails of the suffering!",
						"japanese": "これは… 悲鳴だ。苦しむ者たちの絶叫！",
						"chinese": "这是...尖叫。受苦者的哀嚎！",
						"french": "C'est... un cri. Les lamentations des souffrants !",
						"spanish": "Esto es... un grito. ¡El clamor de los que sufren!",
						"vietnamese": "Đây là... tiếng thét. Tiếng kêu gào của những kẻ đau khổ!",
						"thai": "นี่คือ... เสียงกรีดร้อง. เสียงคร่ำครวญของผู้ทนทุกข์!",
						"hindi": "यह... एक चीख है। पीड़ा झेलने वालों की कराह!"
					},
					"emotion": "angry",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 비명도… 곧 합류할 것이다.",
						"english": "Your screams... will soon join them.",
						"japanese": "お前の悲鳴も… すぐに加わるだろう。",
						"chinese": "你的尖叫...也将很快加入其中。",
						"french": "Tes cris... les rejoindront bientôt.",
						"spanish": "Tus gritos... pronto se unirán.",
						"vietnamese": "Tiếng thét của ngươi... cũng sẽ sớm hòa vào.",
						"thai": "เสียงกรีดร้องของเจ้า... ก็จะตามมาในไม่ช้า.",
						"hindi": "तुम्हारी चीखें भी... जल्द ही शामिल होंगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "인카를 건드리지 마!",
						"english": "Don't touch Inka!",
						"japanese": "インカに触るな！",
						"chinese": "别碰茵卡！",
						"french": "Ne touche pas à Inka !",
						"spanish": "¡No toques a Inka!",
						"vietnamese": "Đừng động vào Inka!",
						"thai": "อย่าแตะต้องอินก้า!",
						"hindi": "इंका को मत छूना!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 고통은… 끝나지 않아.",
						"english": "This suffering... won't end.",
						"japanese": "この苦痛は… 終わらない。",
						"chinese": "这份痛苦...不会结束。",
						"french": "Cette souffrance... ne finira pas.",
						"spanish": "Este sufrimiento... no terminará.",
						"vietnamese": "Nỗi đau này... sẽ không kết thúc.",
						"thai": "ความเจ็บปวดนี้... จะไม่สิ้นสุด.",
						"hindi": "यह दर्द... खत्म नहीं होगा।"
					}
				},
				{
					"content": {
						"korean": "너희도… 곧 알게 될 것이다.",
						"english": "You too... will soon know.",
						"japanese": "お前たちも… すぐに知ることになるだろう。",
						"chinese": "你们也...很快就会明白。",
						"french": "Vous aussi... le saurez bientôt.",
						"spanish": "Ustedes también... pronto lo sabrán.",
						"vietnamese": "Các ngươi... cũng sẽ sớm biết thôi.",
						"thai": "พวกเจ้าเอง... ก็จะรู้ในไม่ช้า.",
						"hindi": "तुम भी... जल्द ही जान जाओगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…이 비명들이 멈출 때까지.",
						"english": "...Until these screams stop.",
						"japanese": "…この悲鳴が止まるまで。",
						"chinese": "...直到这些尖叫停止。",
						"french": "...Jusqu'à ce que ces cris cessent.",
						"spanish": "...Hasta que estos gritos cesen.",
						"vietnamese": "...Cho đến khi những tiếng thét này dừng lại.",
						"thai": "...จนกว่าเสียงกรีดร้องเหล่านี้จะหยุดลง.",
						"hindi": "...जब तक ये चीखें थम न जाएँ।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우린… 계속 갈 거야.",
						"english": "We'll… press on.",
						"japanese": "我々は…進み続けるだろう。",
						"chinese": "我们……会继续前进。",
						"french": "Nous… continuerons.",
						"spanish": "Nosotros… seguiremos adelante.",
						"vietnamese": "Chúng ta… sẽ tiếp tục.",
						"thai": "เรา…จะไปต่อ.",
						"hindi": "हम… आगे बढ़ते रहेंगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "얼어붙은 비명은 잠시 잦아들었지만, 탑의 핵심은 여전히 멀었다.",
						"english": "The frozen screams quieted for a moment, but the tower's core remained distant.",
						"japanese": "凍てついた悲鳴は一時的に和らいだが、塔の核心は依然として遠い。",
						"chinese": "冰冷的尖叫声暂时平息了，但塔的核心依然遥远。",
						"french": "Les cris gelés se sont tus un instant, mais le cœur de la tour restait lointain.",
						"spanish": "Los gritos helados cesaron por un momento, pero el núcleo de la torre seguía distante.",
						"vietnamese": "Những tiếng la hét đóng băng tạm thời lắng xuống, nhưng lõi của tòa tháp vẫn còn xa.",
						"thai": "เสียงกรีดร้องที่เยือกแข็งเงียบลงชั่วขณะ แต่แกนกลางของหอยังคงอยู่ห่างไกล.",
						"hindi": "जमी हुई चीखें कुछ पल के लिए शांत हो गईं, लेकिन टावर का मूल अभी भी दूर था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음탑, 깊숙한 곳.",
			"그 투명한 벽 안엔 수천의 얼굴이 멈춰 있었다.",
			"마지막 절규가 얼어붙은 채.",
			"그러나 누군가 그 비명에 귀 기울이자, 한기가 스며들었다."
		],
		"english": [
			"Deep within the Ice Tower.",
			"Within its transparent walls, thousands of faces were frozen.",
			"Their final screams frozen.",
			"But as someone listened to those screams, a chill permeated."
		],
		"japanese": [
			"氷の塔、その奥深く。",
			"その透明な壁の中には、数千の顔が凍り付いていた。",
			"最後の絶叫は凍り付いたまま。",
			"しかし、誰かがその悲鳴に耳を傾けると、冷気が染み込んだ。"
		],
		"chinese": [
			"冰塔，深处。",
			"在那透明的墙壁中，数千张面孔静止不动。",
			"最后的尖叫凝固其中。",
			"然而，当有人倾听那些尖叫时，一股寒意渗透开来。"
		],
		"french": [
			"La Tour de Glace, en ses profondeurs.",
			"Dans ses murs transparents, des milliers de visages étaient figés.",
			"Leurs derniers cris figés.",
			"Mais quand quelqu'un prêta l'oreille à ces cris, un froid glacial s'infiltra."
		],
		"spanish": [
			"La Torre de Hielo, en lo más profundo.",
			"Dentro de sus muros transparentes, miles de rostros estaban inmóviles.",
			"Sus últimos gritos congelados.",
			"Pero cuando alguien escuchó esos gritos, un frío se infiltró."
		],
		"vietnamese": [
			"Tháp Băng, sâu thẳm bên trong.",
			"Bên trong bức tường trong suốt ấy, hàng ngàn khuôn mặt đã ngưng đọng.",
			"Với những tiếng kêu cuối cùng đóng băng.",
			"Nhưng khi có ai đó lắng nghe những tiếng thét ấy, một làn khí lạnh tràn ngập."
		],
		"thai": [
			"หอคอยน้ำแข็ง, ลึกเข้าไปข้างใน.",
			"ภายในกำแพงใสแจ๋วเหล่านั้น ใบหน้าหลายพันใบหยุดนิ่งอยู่",
			"เสียงกรีดร้องสุดท้ายยังคงแข็งตัวอยู่",
			"แต่เมื่อมีใครสักคนรับฟังเสียงกรีดร้องเหล่านั้น ความหนาวเหน็บก็แทรกซึมเข้ามา"
		],
		"hindi": [
			"बर्फ़ीला मीनार, गहराई में।",
			"उसकी पारदर्शी दीवारों के भीतर, हजारों चेहरे स्थिर थे।",
			"उनकी अंतिम चीखें जमी हुई थीं।",
			"परन्तु जब किसी ने उन चीखों को सुना, तो एक ठंडक फैल गई।"
		]
	}
} as const;
