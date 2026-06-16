export const scenario_snowy_skalhorn_95_01 = {
	"scenario_id": "snowy_skalhorn_95_01",
	"order": 1,
	"act": "intro",
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
					"content": {
						"korean": "시리즈의 끝, 거대한 뿔잔이 탐험대 앞에 우뚝 섰다.",
						"english": "The end of the series; the colossal Horned Chalice stood tall before the expedition.",
						"japanese": "シリーズの終焉、巨大な角杯が探検隊の前にそびえ立った。",
						"chinese": "系列的终结，巨大的号角圣杯矗立在探险队面前。",
						"french": "La fin de la série ; le colossal Calice à Cornes se dressait devant l'expédition.",
						"spanish": "El fin de la serie; el colosal Cáliz Cornudo se alzaba ante la expedición.",
						"vietnamese": "Kết thúc của chuỗi ; chiếc Sừng khổng lồ sừng sững trước đoàn thám hiểm.",
						"thai": "จุดจบของซีรีส์ ; จอกเขาขนาดมหึมายืนตระหง่านอยู่เบื้องหน้าคณะสำรวจ",
						"hindi": "श्रृंखला का अंत; विशाल सींग वाला प्याला अभियान दल के सामने खड़ा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게 뿔잔인가.",
						"english": "Is that the Chalice?",
						"japanese": "あれが角杯か。",
						"chinese": "那就是圣杯吗？",
						"french": "Est-ce le Calice ?",
						"spanish": "Es ese el Cáliz?",
						"vietnamese": "Đó là chiếc Sừng sao?",
						"thai": "นั่นคือจอกเขาหรือ",
						"hindi": "क्या वह प्याला है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아아, 드디어 이곳이군요.",
						"english": "…Ah, so this is the place, at last.",
						"japanese": "…ああ、ついにここですね。",
						"chinese": "…啊，终于到这里了。",
						"french": "…Ah, c'est donc ici, enfin.",
						"spanish": "…Ah, así que este es el lugar, al fin.",
						"vietnamese": "…À, cuối cùng cũng đến đây rồi.",
						"thai": "…อา ในที่สุดก็ที่นี่สินะ",
						"hindi": "…आह, तो आखिरकार यह जगह है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뿔잔이 떨리고 있어요. 비명과 찬가가… 함께 울리고 있습니다.",
						"english": "The Chalice is trembling. Screams and hymns… resound together.",
						"japanese": "角杯が震えています。悲鳴と賛歌が… 共に響き渡っています。",
						"chinese": "圣杯在颤抖。尖叫和赞歌… 一同响起。",
						"french": "Le Calice tremble. Cris et hymnes… résonnent ensemble.",
						"spanish": "El Cáliz está temblando. Gritos e himnos… resuenan juntos.",
						"vietnamese": "Chiếc Sừng đang rung chuyển. Tiếng thét và thánh ca… cùng vang vọng.",
						"thai": "จอกเขากำลังสั่นสะเทือน เสียงกรีดร้องและเพลงสดุดี… กำลังก้องกังวานพร้อมกัน",
						"hindi": "प्याला काँप रहा है। चीखें और भजन… एक साथ गूँज रहे हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…만찬이라더니, 비명이라니.",
						"english": "…They called it a supper, yet there are screams.",
						"japanese": "…晩餐だと思っていたのに、悲鳴とは。",
						"chinese": "…说是晚宴，却是尖叫声。",
						"french": "…Un festin, disiez-vous, et pourtant des cris.",
						"spanish": "…Dicen que es una cena, pero hay gritos.",
						"vietnamese": "…Cứ bảo là bữa tiệc, sao lại có tiếng thét chứ.",
						"thai": "…บอกว่าเป็นงานเลี้ยง แต่กลับมีเสียงกรีดร้อง",
						"hindi": "…भोज कहा था, पर ये तो चीखें हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이성을 잃은 자들의 마지막 축제. 만찬은 이미 시작됐습니다.",
						"english": "The final feast of the deranged. The supper has already begun.",
						"japanese": "理性を失った者たちの最後の祝祭。晩餐はすでに始まっています。",
						"chinese": "失去理智者的最后庆典。晚宴已经开始了。",
						"french": "Le dernier festin des égarés. Le souper a déjà commencé.",
						"spanish": "El festín final de los enloquecidos. La cena ya ha comenzado.",
						"vietnamese": "Lễ hội cuối cùng của những kẻ mất trí. Bữa tiệc đã bắt đầu rồi.",
						"thai": "เทศกาลสุดท้ายของผู้ที่ไร้สติ งานเลี้ยงได้เริ่มต้นขึ้นแล้ว",
						"hindi": "पागल हो चुके लोगों का अंतिम उत्सव। भोज पहले ही शुरू हो चुका है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "뿔잔은 손님을 원합니다. 거부하는 순간, 우린 불청객이 됩니다.",
						"english": "The Horned Chalice demands guests. Refuse, and we become intruders.",
						"japanese": "角杯は客を求めます。拒んだ瞬間、我々は招かれざる者となるでしょう。",
						"chinese": "号角圣杯渴求宾客。一旦拒绝，我们便会成为不速之客。",
						"french": "Le Calice Cornu exige des convives. Refuser, et nous deviendrons des intrus.",
						"spanish": "El Cáliz Cornudo exige invitados. Si nos negamos, seremos intrusos.",
						"vietnamese": "Cái Sừng đòi hỏi khách. Từ chối, chúng ta sẽ thành kẻ không mời.",
						"thai": "จอกเขาต้องการแขก หากปฏิเสธ เราจะกลายเป็นผู้บุกรุก",
						"hindi": "श्रृंगी प्याला मेहमान चाहता है। इनकार करने पर, हम घुसपैठिए बन जाएंगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…불청객이 되는 게 낫지. 저런 광기에 낄 순 없어.",
						"english": "...Better to be an intruder. I can't join in such madness.",
						"japanese": "…招かれざる者になる方がましだ。あんな狂気には加われん。",
						"chinese": "……宁可成为不速之客。我无法参与那种疯狂。",
						"french": "...Mieux vaut être un intrus. Je ne peux pas prendre part à une telle folie.",
						"spanish": "...Es mejor ser un intruso. No puedo unirme a esa locura.",
						"vietnamese": "...Thà là kẻ không mời. Tôi không thể tham gia vào sự điên rồ đó.",
						"thai": "เป็นผู้บุกรุกยังจะดีกว่า ข้าเข้าร่วมความบ้าคลั่งเช่นนั้นไม่ได้",
						"hindi": "घुसपैठिया बनना बेहतर है। मैं इस तरह के उन्माद में शामिल नहीं हो सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔을 거부하는 자는… 영원히 얼어붙게 됩니다.",
						"english": "Those who refuse the Horned Chalice... shall be frozen forever.",
						"japanese": "角杯を拒む者は…永遠に凍りつくでしょう。",
						"chinese": "拒绝号角圣杯之人……将永远被冰封。",
						"french": "Ceux qui refusent le Calice Cornu... seront figés à jamais.",
						"spanish": "Aquellos que rechacen el Cáliz Cornudo... quedarán congelados para siempre.",
						"vietnamese": "Những kẻ từ chối Cái Sừng... sẽ bị đóng băng vĩnh viễn.",
						"thai": "ผู้ใดปฏิเสธจอกเขา... จะถูกแช่แข็งชั่วนิรันดร์",
						"hindi": "जो श्रृंगी प्याले को मना करते हैं... वे हमेशा के लिए जम जाएंगे।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "뿔잔은 모든 것을 집어삼켜 얼립니다. 존재했던 기억까지도요.",
						"english": "The Horned Chalice devours and freezes all. Even memories that once existed.",
						"japanese": "角杯はすべてを飲み込み、凍らせます。存在した記憶までも。",
						"chinese": "号角圣杯吞噬并冰封一切。甚至包括曾存在过的记忆。",
						"french": "Le Calice Cornu dévore et gèle tout. Même les souvenirs passés.",
						"spanish": "El Cáliz Cornudo lo devora y congela todo. Incluso los recuerdos que existieron.",
						"vietnamese": "Cái Sừng nuốt chửng và đóng băng mọi thứ. Kể cả những ký ức từng tồn tại.",
						"thai": "จอกเขากลืนกินและแช่แข็งทุกสิ่ง แม้กระทั่งความทรงจำที่เคยมี",
						"hindi": "श्रृंगी प्याला सब कुछ निगलकर जमा देता है। यहां तक कि जो यादें थीं, उन्हें भी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억까지? 그럼… 이성을 잃은 자들은 스스로를 기억 못하는 건가.",
						"english": "Even memories? Then... those who lost their reason don't remember themselves?",
						"japanese": "記憶まで？なら…理性を失った者たちは、自分自身を覚えていないのか。",
						"chinese": "甚至记忆？那么……那些丧失理智的人，连自己都不记得了吗？",
						"french": "Même les souvenirs ? Alors... ceux qui ont perdu la raison ne se souviennent plus d'eux-mêmes ?",
						"spanish": "¿Incluso los recuerdos? Entonces... ¿los que perdieron la razón no se recuerdan a sí mismos?",
						"vietnamese": "Kể cả ký ức? Vậy thì... những kẻ mất lý trí không nhớ bản thân sao?",
						"thai": "แม้แต่ความทรงจำ? ถ้าเช่นนั้น... ผู้ที่สูญเสียสติปัญญาจำตัวเองไม่ได้หรือ",
						"hindi": "यादें भी? तो... जिन्होंने अपनी चेतना खो दी, क्या वे खुद को याद नहीं करते?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "기억은 사라지고, 오직 영원한 만찬만이 남습니다.",
						"english": "Memories fade, and only the eternal feast remains.",
						"japanese": "記憶は消え去り、ただ永遠の晩餐のみが残る。",
						"chinese": "记忆消逝，只剩下永恒的盛宴。",
						"french": "Les souvenirs s'effacent, et seul le festin éternel demeure.",
						"spanish": "Los recuerdos se desvanecen, y solo queda el banquete eterno.",
						"vietnamese": "Ký ức tan biến, chỉ còn lại bữa tiệc vĩnh cửu.",
						"thai": "ความทรงจำเลือนหายไป และเหลือเพียงงานเลี้ยงนิรันดร์",
						"hindi": "यादें मिट जाती हैं, और केवल शाश्वत भोज शेष रहता है।"
					},
					"speaker": "eira",
					"type": "speech"
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
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 격렬해지고 있어요. 이제 돌아갈 수 없습니다.",
						"english": "It's growing more intense. There's no turning back now.",
						"japanese": "ますます激しくなっています。もう引き返せません。",
						"chinese": "它正变得越来越激烈。现在已无法回头。",
						"french": "Ça devient de plus en plus intense. Il n'y a plus de retour possible.",
						"spanish": "Se está volviendo más intenso. Ya no podemos regresar.",
						"vietnamese": "Nó ngày càng dữ dội hơn. Giờ không thể quay lại được nữa.",
						"thai": "มันยิ่งรุนแรงขึ้นเรื่อยๆ ตอนนี้กลับไม่ได้แล้ว",
						"hindi": "यह और भी तीव्र होता जा रहा है। अब वापस नहीं जा सकते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "돌아갈 생각 없어. 이걸 끝내야 해.",
						"english": "No thought of returning. I must end this.",
						"japanese": "引き返す気はない。これを終わらせなければ。",
						"chinese": "没想过回头。我必须终结这一切。",
						"french": "Pas question de revenir. Je dois mettre fin à ça.",
						"spanish": "No pienso volver. Debo acabar con esto.",
						"vietnamese": "Không nghĩ đến việc quay lại. Tôi phải kết thúc chuyện này.",
						"thai": "ข้าไม่มีความคิดจะกลับ ต้องจบเรื่องนี้ให้ได้",
						"hindi": "वापस लौटने का कोई विचार नहीं है। मुझे इसे खत्म करना होगा।"
					}
				},
				{
					"content": {
						"korean": "…광기의 만찬을, 매듭지을 때입니다.",
						"english": "...It's time to put an end to this feast of madness.",
						"japanese": "…狂気の晩餐を、終わらせる時です。",
						"chinese": "……是时候，为这疯狂的盛宴画上句号了。",
						"french": "...Il est temps de mettre un terme à ce festin de folie.",
						"spanish": "...Es hora de poner fin a este banquete de locura.",
						"vietnamese": "...Đã đến lúc kết thúc bữa tiệc điên rồ này.",
						"thai": "ถึงเวลาที่จะยุติงานเลี้ยงแห่งความบ้าคลั่งนี้แล้ว",
						"hindi": "यह उन्माद के भोज को समाप्त करने का समय है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 서늘한 기운이 탐험대를 감쌌다.",
						"english": "The chilling aura of the Horned Chalice enveloped the expedition.",
						"japanese": "「角の聖杯の冷たい気が探検隊を包み込んだ。」",
						"chinese": "号角杯的寒冷气息笼罩了探险队。",
						"french": "L'aura glaciale du Calice Cornu enveloppa l'expédition.",
						"spanish": "El aura gélida del Cáliz Cornudo envolvió a la expedición.",
						"vietnamese": "Hơi lạnh buốt của Chiếc Sừng Cốc bao trùm đội thám hiểm.",
						"thai": "ไอเย็นยะเยือกจากจอกเขาปกคลุมเหล่านักสำรวจ",
						"hindi": "सींगों वाले प्याले की सर्द आभा ने अभियान दल को घेर लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불청객이 감히… 내 만찬을 방해하려 드는가.",
						"english": "You dare... disrupt my feast?",
						"japanese": "貴様、この私の晩餐を邪魔する気か…！",
						"chinese": "不速之客… 竟敢打扰我的晚宴？",
						"french": "Tu oses… perturber mon festin ?",
						"spanish": "¿Te atreves… a interrumpir mi festín?",
						"vietnamese": "Kẻ không mời mà đến… dám phá bữa tiệc của ta sao?",
						"thai": "แขกไม่ได้รับเชิญ… กล้ารบกวนงานเลี้ยงของข้าหรือ?",
						"hindi": "एक बिन बुलाया मेहमान… मेरे भोज में विघ्न डालने की हिम्मत करता है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 돌아올 거야. 이 광기를 끝내기 위해.",
						"english": "...I will return. To end this madness.",
						"japanese": "…また戻るだろう。この狂気を終わらせるために。",
						"chinese": "…我会再次归来。为了终结这场疯狂。",
						"french": "…Je reviendrai. Pour mettre fin à cette folie.",
						"spanish": "…Volveré. Para poner fin a esta locura.",
						"vietnamese": "…Ta sẽ quay lại. Để kết thúc sự điên rồ này.",
						"thai": "…ข้าจะกลับมา. เพื่อหยุดยั้งความบ้าคลั่งนี้.",
						"hindi": "…मैं वापस आऊँगा। इस पागलपन को खत्म करने के लिए।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 만찬은… 이제부터인데.",
						"english": "...Is this all? The real feast... begins now.",
						"japanese": "「…たったこれだけか。本当の晩餐は…これからだというのに。」",
						"chinese": "…就这点程度吗。真正的盛宴…才刚开始呢。",
						"french": "...C'est tout ce qu'il y a ? Le vrai festin... ne fait que commencer.",
						"spanish": "¿...Esto es todo? El verdadero banquete... apenas comienza.",
						"vietnamese": "...Chỉ có thế thôi sao? Bữa tiệc thật sự... giờ mới bắt đầu.",
						"thai": "...แค่นี้เองรึ? งานเลี้ยงที่แท้จริง... กำลังจะเริ่มขึ้นต่างหาก",
						"hindi": "...बस इतना ही? असली दावत... तो अब शुरू होगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…끝났다. 더 이상 광기는 없을 거야.",
						"english": "...It's over. There will be no more madness.",
						"japanese": "「…終わった。これ以上、狂気は無いだろう。」",
						"chinese": "…结束了。不会再有疯狂了。",
						"french": "...C'est fini. Il n'y aura plus de folie.",
						"spanish": "...Se acabó. No habrá más locura.",
						"vietnamese": "...Kết thúc rồi. Sẽ không còn sự điên rồ nào nữa.",
						"thai": "...จบแล้ว คงไม่มีความบ้าคลั่งอีกต่อไป",
						"hindi": "...खत्म हो गया। अब और कोई पागलपन नहीं होगा।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "뿔잔이 진정되고 있습니다. 이름 없는 이들의 절규도… 잦아들었어요.",
						"english": "The Horned Chalice is calming. The screams of the nameless... have also faded.",
						"japanese": "「角の聖杯が鎮まっている。名もなき者たちの絶叫も…静まった。」",
						"chinese": "号角杯正在平息。无名者的哀嚎也…消散了。",
						"french": "Le Calice Cornu s'apaise. Les cris des sans-nom... se sont aussi estompés.",
						"spanish": "El Cáliz Cornudo se está calmando. Los gritos de los sin nombre... también se han desvanecido.",
						"vietnamese": "Chiếc Sừng Cốc đang dần dịu lại. Tiếng gào thét của những kẻ vô danh... cũng đã lắng xuống.",
						"thai": "จอกเขากำลังสงบลง เสียงกรีดร้องของเหล่าผู้ไร้นาม... ก็เลือนหายไปแล้ว",
						"hindi": "सींगों वाला प्याला शांत हो रहा है। बेनामों की चीखें भी... शांत हो गई हैं।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "만찬은 끝났다. 그러나 뿔잔은 여전히 거기에 있었다.",
						"english": "The feast is over. But the Horned Chalice was still there.",
						"japanese": "「晩餐は終わった。しかし、角の聖杯は依然としてそこにあった。」",
						"chinese": "盛宴结束了。然而号角杯依然在那里。",
						"french": "Le festin est terminé. Mais le Calice Cornu était toujours là.",
						"spanish": "El banquete ha terminado. Pero el Cáliz Cornudo seguía allí.",
						"vietnamese": "Bữa tiệc đã kết thúc. Nhưng chiếc Sừng Cốc vẫn còn ở đó.",
						"thai": "งานเลี้ยงจบลงแล้ว แต่จอกเขายังคงอยู่ที่นั่น",
						"hindi": "दावत खत्म हो गई। लेकिन सींगों वाला प्याला अभी भी वहीं था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "얼어붙은 이름들은… 기억될 수 있을까.",
						"english": "Will the frozen names... ever be remembered?",
						"japanese": "「凍てついた名たちは…記憶されるだろうか。」",
						"chinese": "那些被冰冻的名字…还能被记住吗？",
						"french": "Les noms figés... pourront-ils être un jour souvenus ?",
						"spanish": "¿Podrán los nombres congelados... ser recordados alguna vez?",
						"vietnamese": "Liệu những cái tên bị đóng băng... có thể được nhớ đến không?",
						"thai": "เหล่าชื่อที่ถูกแช่แข็ง... จะยังถูกจดจำได้หรือไม่?",
						"hindi": "क्या जमे हुए नाम... कभी याद रखे जा सकेंगे?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "격렬히 진동하는 뿔잔, 그 앞에서 정체 모를 자가 기다린다.",
						"english": "The Horned Chalice vibrates violently, and before it, an unknown figure awaits.",
						"japanese": "激しく振動する角杯、その前で正体不明の者が待ち受ける。",
						"chinese": "号角圣杯剧烈震动，一个身份不明之人正在它前方等候。",
						"french": "Le Calice Cornu vibre violemment, et devant lui, une figure inconnue attend.",
						"spanish": "El Cáliz Cornudo vibra violentamente, y ante él, una figura desconocida espera.",
						"vietnamese": "Cái Sừng rung lên dữ dội, trước nó, một kẻ lạ mặt đang chờ đợi.",
						"thai": "จอกเขาที่สั่นสะเทือนอย่างรุนแรง เบื้องหน้ามีบุคคลนิรนามกำลังรออยู่",
						"hindi": "तीव्रता से कंपन करता हुआ श्रृंगी प्याला, उसके सामने एक अज्ञात व्यक्ति प्रतीक्षा कर रहा है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔는가, 손님.",
						"english": "Welcome, guest.",
						"japanese": "「来たか、客よ。」",
						"chinese": "欢迎，客人。",
						"french": "Bienvenue, invité.",
						"spanish": "Bienvenido, invitado.",
						"vietnamese": "Chào mừng, khách.",
						"thai": "ยินดีต้อนรับ แขกผู้มาเยือน",
						"hindi": "स्वागत है, मेहमान।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 마지막 만찬을 완성할 재료들이여.",
						"english": "Ingredients to complete my last supper.",
						"japanese": "「我が最後の晩餐を完成させる食材たちよ。」",
						"chinese": "完成我最后晚餐的食材们。",
						"french": "Ingrédients pour achever mon dernier festin.",
						"spanish": "Ingredientes para completar mi última cena.",
						"vietnamese": "Những nguyên liệu để hoàn thành bữa tối cuối cùng của ta.",
						"thai": "วัตถุดิบที่จะทำให้มื้อค่ำสุดท้ายของข้าสมบูรณ์",
						"hindi": "मेरी अंतिम दावत को पूरा करने वाली सामग्री।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…사양한다.",
						"english": "...I refuse.",
						"japanese": "「…お断りだ。」",
						"chinese": "…我拒绝。",
						"french": "...Je refuse.",
						"spanish": "...Me niego.",
						"vietnamese": "...Ta từ chối.",
						"thai": "...ข้าปฏิเสธ",
						"hindi": "...मैं मना करता हूँ।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석은 것들. 내 초대를 거부하는 순간… 너희는 영원히 얼어붙을 것이다.",
						"english": "Fools. The moment you refuse my invitation... you shall be frozen forever.",
						"japanese": "「愚か者どもめ。我が誘いを拒む瞬間…お前たちは永遠に凍りつくだろう。」",
						"chinese": "愚蠢之徒。拒绝我邀请的瞬间…你们将永远被冰冻。",
						"french": "Imbéciles. L'instant où vous refusez mon invitation... vous serez figés à jamais.",
						"spanish": "Necios. En el instante en que rechacéis mi invitación... seréis congelados para siempre.",
						"vietnamese": "Đồ ngu ngốc. Khoảnh khắc các ngươi từ chối lời mời của ta... các ngươi sẽ vĩnh viễn bị đóng băng.",
						"thai": "พวกโง่เขลา! ในวินาทีที่เจ้าปฏิเสธคำเชิญของข้า... เจ้าจะต้องแข็งตายไปตลอดกาล",
						"hindi": "मूर्खों। जिस पल तुम मेरा निमंत्रण ठुकराओगे... तुम हमेशा के लिए जम जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"여기, 모든 것이 끝나는 곳.",
			"금기의 계약도, 얼어붙은 절규도, 끝없는 축제도.",
			"탐험대는 마침내 뿔잔 앞에 섰다.",
			"비명과 찬가, 뒤섞인 소음 속에 — 마지막 만찬이 시작된다."
		],
		"english": [
			"Here, where everything ends.",
			"Forbidden pacts, frozen screams, endless feasts.",
			"The expedition finally stood before the Horned Chalice.",
			"Amidst screams and hymns, a chaotic din — the final supper begins."
		],
		"japanese": [
			"ここが、すべての終わる場所。",
			"禁忌の契約も、凍てついた絶叫も、終わらない祝祭も。",
			"探検隊はついに、角杯の前に立った。",
			"悲鳴と賛歌、混じり合う喧騒の中 — 最後の晩餐が始まる。"
		],
		"chinese": [
			"这里，万物终结之地。",
			"无论是禁忌之约，冰封的尖叫，还是永无止境的庆典。",
			"探险队终于站在了号角圣杯前。",
			"在尖叫与赞歌，混杂的喧嚣中——最后的晚宴开始了。"
		],
		"french": [
			"Ici, là où tout s'achève.",
			"Les pactes interdits, les cris gelés, les festins sans fin.",
			"L'expédition se tint enfin devant le Calice à Cornes.",
			"Au milieu des cris et des hymnes, un brouhaha chaotique — le dernier souper commence."
		],
		"spanish": [
			"Aquí, donde todo termina.",
			"Pactos prohibidos, gritos helados, festines interminables.",
			"La expedición finalmente se paró frente al cáliz cornudo.",
			"Entre gritos e himnos, un estruendo caótico — la última cena comienza."
		],
		"vietnamese": [
			"Đây, nơi mọi thứ kết thúc.",
			"Cả khế ước cấm đoán, tiếng thét đóng băng, hay những lễ hội bất tận.",
			"Đoàn thám hiểm cuối cùng đã đứng trước chiếc Sừng.",
			"Giữa tiếng thét và thánh ca, trong hỗn độn ồn ào — bữa tiệc cuối cùng bắt đầu."
		],
		"thai": [
			"ที่นี่ ที่ที่ทุกสิ่งสิ้นสุดลง",
			"ทั้งพันธสัญญาต้องห้าม เสียงกรีดร้องที่แข็งค้าง และเทศกาลที่ไม่มีวันสิ้นสุด",
			"ในที่สุด คณะสำรวจก็มายืนอยู่หน้าจอกเขา",
			"ท่ามกลางเสียงกรีดร้องและเพลงสดุดี เสียงอึกทึกที่ปะปนกัน — งานเลี้ยงอาหารค่ำมื้อสุดท้ายเริ่มต้นขึ้น"
		],
		"hindi": [
			"यहाँ, जहाँ सब कुछ खत्म होता है।",
			"वर्जित अनुबंध, जमी हुई चीखें, अंतहीन उत्सव।",
			"अभियान दल अंततः सींग वाले प्याले के सामने खड़ा था।",
			"चीखों और भजनों के बीच, एक अराजक शोर में — अंतिम भोज शुरू होता है।"
		]
	}
} as const;
