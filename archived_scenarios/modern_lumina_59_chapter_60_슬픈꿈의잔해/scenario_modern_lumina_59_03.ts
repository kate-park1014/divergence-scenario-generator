export const scenario_modern_lumina_59_03 = {
	"scenario_id": "modern_lumina_59_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기억은 부서지고, 도시의 빛은 일그러졌다.",
			"어둠 속에서 들려오는 울음소리는, 누구의 것일까.",
			"사라진 진실은 더 깊은 비극을 품고 있었다.",
			"그 잔향을 따라, 우리는 길을 잃어간다."
		],
		"english": [
			"Memories shattered, city lights distorted.",
			"Whose cries echo in the darkness?",
			"The vanished truth held a deeper tragedy.",
			"Following its lingering scent, we lose our way."
		],
		"japanese": [
			"記憶は砕け、都市の光は歪んだ。",
			"闇の中で響く泣き声は、誰のものだろうか。",
			"消え去った真実は、より深い悲劇を秘めていた。",
			"その残響を追って、私たちは道を見失う。"
		],
		"chinese": [
			"记忆破碎，都市之光扭曲。",
			"黑暗中回荡的哭声，是谁的？",
			"消失的真相，蕴藏着更深的悲剧。",
			"循着那余韵，我们迷失了方向。"
		],
		"french": [
			"Les souvenirs se brisaient, les lumières de la ville se déformaient.",
			"À qui appartiennent les pleurs qui résonnent dans l'obscurité ?",
			"La vérité disparue recelait une tragédie plus profonde.",
			"Suivant son sillage, nous nous perdons."
		],
		"spanish": [
			"Los recuerdos se hicieron añicos, las luces de la ciudad se distorsionaron.",
			"¿De quién son los lamentos que resuenan en la oscuridad?",
			"La verdad desvanecida ocultaba una tragedia más profunda.",
			"Siguiendo su estela, nos perdemos."
		],
		"vietnamese": [
			"Ký ức vỡ nát, ánh đèn thành phố méo mó.",
			"Tiếng khóc vọng trong bóng tối, là của ai?",
			"Sự thật biến mất mang theo bi kịch sâu sắc hơn.",
			"Theo dư âm đó, chúng ta lạc lối."
		],
		"thai": [
			"ความทรงจำแตกสลาย แสงไฟเมืองบิดเบี้ยว",
			"เสียงร่ำไห้ที่ดังในความมืด เป็นของใครกัน?",
			"ความจริงที่เลือนหายแฝงไว้ซึ่งโศกนาฏกรรมที่ลึกซึ้งกว่า",
			"ตามรอยเสียงสะท้อนนั้น เราก็หลงทาง"
		],
		"hindi": [
			"यादें बिखर गईं, शहर की रोशनी विकृत हो गई।",
			"अँधेरे में गूँजती रोने की आवाज़ें, किसकी हैं?",
			"लुप्त हुआ सच एक गहरी त्रासदी छिपाए हुए था।",
			"उसकी बची हुई गंध का पीछा करते हुए, हम भटक जाते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빛의 아지랑이가 드리운 거리. 사람들은 흔적 없이 사라진 기억에 혼란스러워했다.",
						"english": "Streets shimmered with light. People were confused by memories that vanished without a trace.",
						"japanese": "光の陽炎が揺れる街。人々は痕跡もなく消えた記憶に困惑していた。",
						"chinese": "霞光笼罩的街道。人们因记忆毫无痕迹地消失而感到困惑。",
						"french": "Les rues baignées d'un mirage de lumière. Les gens étaient confus par des souvenirs disparus sans laisser de trace.",
						"spanish": "Calles envueltas en un espejismo de luz. La gente estaba confundida por recuerdos que desaparecieron sin dejar rastro.",
						"vietnamese": "Con phố phủ ánh sáng lung linh. Mọi người hoang mang vì ký ức biến mất không dấu vết.",
						"thai": "ถนนที่เต็มไปด้วยแสงระยิบระยับ ผู้คนสับสนกับความทรงจำที่หายไปอย่างไร้ร่องรอย",
						"hindi": "रोशनी की चकाचौंध से भरी सड़कें। लोग बिना किसी निशान के गायब हुई यादों से भ्रमित थे।"
					}
				},
				{
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "내 기억이… 자꾸 사라져.",
						"english": "My memories... they keep fading.",
						"japanese": "私の記憶が…どんどん消えていく。",
						"chinese": "我的记忆……总是在消失。",
						"french": "Mes souvenirs... ils ne cessent de s'effacer.",
						"spanish": "Mis recuerdos... no dejan de desvanecerse.",
						"vietnamese": "Ký ức của tôi... cứ biến mất.",
						"thai": "ความทรงจำของฉัน... มันเลือนหายไปเรื่อยๆ",
						"hindi": "मेरी यादें... वे लगातार मिटती जा रही हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛의 아지랑이 때문인가요?",
						"english": "Is it because of the light's shimmer?",
						"japanese": "光の陽炎のせいですか？",
						"chinese": "是因为霞光吗？",
						"french": "Est-ce à cause du mirage de lumière ?",
						"spanish": "¿Es por el espejismo de luz?",
						"vietnamese": "Có phải vì ánh sáng lung linh đó không?",
						"thai": "เป็นเพราะแสงระยิบระยับนั่นหรือเปล่า?",
						"hindi": "क्या यह रोशनी की चकाचौंध के कारण है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "기억이 끊어질 때마다… 이상한 소리가 들려.",
						"english": "Every time my memory breaks... I hear a strange sound.",
						"japanese": "記憶が途切れるたびに…奇妙な音が聞こえる。",
						"chinese": "每当记忆中断……我就会听到奇怪的声音。",
						"french": "Chaque fois que ma mémoire s'interrompt... j'entends un son étrange.",
						"spanish": "Cada vez que mi memoria se interrumpe... escucho un sonido extraño.",
						"vietnamese": "Mỗi khi ký ức đứt đoạn... tôi nghe thấy một âm thanh lạ.",
						"thai": "ทุกครั้งที่ความทรงจำขาดหาย... ฉันได้ยินเสียงแปลกๆ",
						"hindi": "जब भी मेरी याददाश्त टूटती है... मुझे एक अजीब आवाज़ सुनाई देती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "소리요?",
						"english": "A sound?",
						"japanese": "音ですか？",
						"chinese": "声音？",
						"french": "Un son ?",
						"spanish": "¿Un sonido?",
						"vietnamese": "Âm thanh?",
						"thai": "เสียงเหรอ?",
						"hindi": "आवाज़?"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "어린아이… 울음소리 같았어.",
						"english": "It sounded like a child... crying.",
						"japanese": "子供の…泣き声のようだった。",
						"chinese": "像个孩子……的哭声。",
						"french": "C'était comme... les pleurs d'un enfant.",
						"spanish": "Sonaba como... el llanto de un niño.",
						"vietnamese": "Như tiếng... trẻ con khóc.",
						"thai": "เหมือนเสียง...เด็กร้องไห้",
						"hindi": "यह एक बच्चे... के रोने की आवाज़ जैसी थी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 근처에서 전자기기 오류도 심해지고 있다고 합니다.",
						"english": "Electronic device malfunctions are also getting worse around here.",
						"japanese": "この辺りでは電子機器の故障もひどくなっているそうです。",
						"chinese": "据说这附近电子设备故障也越来越严重了。",
						"french": "On dit que les pannes électroniques s'aggravent aussi dans les environs.",
						"spanish": "Se dice que los fallos electrónicos también están empeorando por aquí.",
						"vietnamese": "Nghe nói lỗi thiết bị điện tử cũng đang trầm trọng hơn ở gần đây.",
						"thai": "ได้ยินว่าแถวนี้เครื่องใช้ไฟฟ้าก็เริ่มมีปัญหาหนักขึ้นแล้วครับ/ค่ะ",
						"hindi": "लगता है इस आस-पास इलेक्ट्रॉनिक उपकरणों की खराबी भी बढ़ रही है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그 소리는… 슬펐어. 너무나도.",
						"english": "That sound... it was so sad. So very sad.",
						"japanese": "あの音は… 悲しかった。あまりにも。",
						"chinese": "那个声音… 令人悲伤。非常悲伤。",
						"french": "Ce son... était si triste. Tellement.",
						"spanish": "Ese sonido... era tan triste. Demasiado.",
						"vietnamese": "Âm thanh đó... thật buồn. Buồn vô cùng.",
						"thai": "เสียงนั้น... มันเศร้ามาก เศร้าเกินไป",
						"hindi": "वह आवाज़... उदास थी। बहुत ज़्यादा उदास।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누군가 고통스러워하는 소리였을까요?",
						"english": "Was it the sound of someone suffering?",
						"japanese": "誰かが苦しんでいる声だったのでしょうか？",
						"chinese": "那会是某人痛苦的声音吗？",
						"french": "Serait-ce le son de quelqu'un qui souffre ?",
						"spanish": "¿Sería el sonido de alguien sufriendo?",
						"vietnamese": "Liệu đó có phải là tiếng ai đó đang đau khổ không?",
						"thai": "นั่นใช่เสียงของใครบางคนกำลังทรมานหรือเปล่า?",
						"hindi": "क्या वह किसी के दर्द की आवाज़ थी?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "마치 오래된 자장가처럼… 희미하게 들렸어.",
						"english": "It sounded faint... like an old lullaby.",
						"japanese": "まるで古い子守唄のように… かすかに聞こえた。",
						"chinese": "像一首古老的摇篮曲… 隐约传来。",
						"french": "Cela résonnait faiblement... comme une vieille berceuse.",
						"spanish": "Se oía débilmente... como una vieja nana.",
						"vietnamese": "Nghe thật mơ hồ... như một bài hát ru cũ.",
						"thai": "มันแผ่วเบา... เหมือนเพลงกล่อมเด็กเก่าๆ",
						"hindi": "यह एक पुरानी लोरी की तरह... धुंधला सुनाई दिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 장난감 가게 진열장. 찢어진 인형의 눈이 유독 슬퍼 보였다.",
						"english": "An old toy store display. The torn doll's eyes looked especially sad.",
						"japanese": "古いおもちゃ屋のショーケース。破れた人形の目がひときわ悲しげに見えた。",
						"chinese": "旧玩具店的橱窗。破损娃娃的眼睛看起来格外悲伤。",
						"french": "Une vitrine de vieille boutique de jouets. Les yeux de la poupée déchirée semblaient particulièrement tristes.",
						"spanish": "Un escaparate de una vieja juguetería. Los ojos de la muñeca rota parecían especialmente tristes.",
						"vietnamese": "Tủ trưng bày của cửa hàng đồ chơi cũ. Đôi mắt búp bê rách nát trông đặc biệt buồn.",
						"thai": "ตู้โชว์ร้านของเล่นเก่า ดวงตาของตุ๊กตาที่ฉีกขาดดูเศร้าเป็นพิเศษ",
						"hindi": "एक पुरानी खिलौनों की दुकान का डिस्प्ले। फटी हुई गुड़िया की आँखें ख़ास तौर पर उदास दिख रही थीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 잔향이 루미나의 무의식적인 고통일 수도 있다는 건가…?",
						"english": "Could this lingering feeling be Lumina's unconscious pain...?",
						"japanese": "この残響がルミナの無意識の苦痛だというのか…？",
						"chinese": "难道这种残余感是卢米娜无意识的痛苦吗…？",
						"french": "Ce sentiment persistant pourrait-il être la douleur inconsciente de Lumina...?",
						"spanish": "¿Podría ser esta resonancia el dolor inconsciente de Lumina...?",
						"vietnamese": "Phải chăng dư âm này có thể là nỗi đau vô thức của Lumina...?",
						"thai": "หรือว่าความรู้สึกที่หลงเหลืออยู่นี้คือความเจ็บปวดในจิตใต้สำนึกของลูมิน่ากันแน่...?",
						"hindi": "क्या यह बची हुई भावना लुमिना का अवचेतन दर्द हो सकती है...?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "그 울음소리가 자꾸… 머리에서 맴돌아.",
						"english": "That crying sound... it keeps echoing in my head.",
						"japanese": "あの泣き声がずっと… 頭の中で響いている。",
						"chinese": "那个哭声… 总是在我脑海中萦绕。",
						"french": "Ce cri... ne cesse de résonner dans ma tête.",
						"spanish": "Ese llanto... sigue rondando en mi cabeza.",
						"vietnamese": "Tiếng khóc đó cứ... văng vẳng trong đầu.",
						"thai": "เสียงร้องไห้นั้น... ยังคงก้องอยู่ในหัวฉัน",
						"hindi": "वह रोने की आवाज़... मेरे दिमाग में गूँजती रहती है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기억 상실과 연관된 감정의 잔상 같아요.",
						"english": "It feels like an emotional afterimage connected to amnesia.",
						"japanese": "記憶喪失と関連した感情の残像のようだ。",
						"chinese": "这感觉像是与失忆症相关的感情残像。",
						"french": "On dirait une rémanence émotionnelle liée à l'amnésie.",
						"spanish": "Parece una huella emocional relacionada con la amnesia.",
						"vietnamese": "Có vẻ là dư ảnh cảm xúc liên quan đến mất trí nhớ.",
						"thai": "รู้สึกเหมือนเป็นภาพติดตาทางอารมณ์ที่เกี่ยวข้องกับภาวะความจำเสื่อม",
						"hindi": "यह स्मृतिलोप से जुड़ी भावनात्मक छाप जैसा लगता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "루미나가 겪었던 고통이 이렇게 나타나는 걸까요?",
						"english": "Is this how the pain Lumina experienced is manifesting?",
						"japanese": "ルミナが経験した苦痛が、このように現れているのだろうか？",
						"chinese": "卢米娜所经历的痛苦会以这种方式显现吗？",
						"french": "Est-ce ainsi que se manifeste la douleur que Lumina a vécue ?",
						"spanish": "¿Es así como se manifiesta el dolor que Lumina experimentó?",
						"vietnamese": "Có phải nỗi đau mà Lumina đã trải qua đang biểu hiện như thế này không?",
						"thai": "ความเจ็บปวดที่ลูมิน่าเคยประสบกำลังแสดงออกมาแบบนี้หรือเปล่า?",
						"hindi": "क्या लुमिना का अनुभव किया हुआ दर्द ऐसे ही प्रकट हो रहा है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 아케이드의 벽. 빛바랜 사진 조각에 어린아이와 여성의 흐릿한 모습이 보였다.",
						"english": "The wall of an old arcade. Faded fragments of a photo showed blurry figures of a child and a woman.",
						"japanese": "古いアーケードの壁。色あせた写真の断片に、子供と女性のぼやけた姿が見えた。",
						"chinese": "旧街机的墙壁。褪色的照片碎片上，隐约可见一个小孩和一位女性的身影。",
						"french": "Le mur d'une vieille salle d'arcade. Des fragments de photo délavés montraient les silhouettes floues d'un enfant et d'une femme.",
						"spanish": "La pared de una vieja galería. En fragmentos de una foto descolorida se veían las siluetas borrosas de un niño y una mujer.",
						"vietnamese": "Bức tường của một khu arcade cũ. Trên mảnh ảnh bạc màu, hiện ra hình ảnh mờ nhạt của một đứa trẻ và một người phụ nữ.",
						"thai": "ผนังของร้านเกมเก่าๆ เศษภาพถ่ายที่ซีดจางเผยให้เห็นร่างเลือนลางของเด็กกับผู้หญิง",
						"hindi": "एक पुराने आर्केड की दीवार। फीकी पड़ी तस्वीर के टुकड़ों में एक बच्चे और एक महिला की धुंधली आकृतियाँ दिखाई दे रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "점점 더… 짙어져 가는 것 같아.",
						"english": "It feels like it's getting... denser.",
						"japanese": "だんだん… 濃くなっていくようだ。",
						"chinese": "感觉… 变得越来越浓了。",
						"french": "On dirait que ça s'épaissit… de plus en plus.",
						"spanish": "Se está volviendo… cada vez más denso.",
						"vietnamese": "Càng lúc càng… đậm đặc hơn.",
						"thai": "รู้สึกเหมือนมัน… กำลังเข้มข้นขึ้นเรื่อยๆ",
						"hindi": "यह… और भी घना होता जा रहा है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이대로 가면 안 될 것 같아… 더 깊은 곳에선….",
						"english": "We can't go on like this... Not deeper.",
						"japanese": "このままではいけない… これ以上奥へは…。",
						"chinese": "这样下去不行… 深入下去的话…",
						"french": "On ne peut pas continuer comme ça… Pas plus loin.",
						"spanish": "No deberíamos seguir así… En lo más profundo…",
						"vietnamese": "Không thể tiếp tục thế này… Vào sâu hơn nữa thì…",
						"thai": "เราไม่ควรไปต่อแบบนี้… ในส่วนที่ลึกกว่านั้น…",
						"hindi": "हमें ऐसे आगे नहीं बढ़ना चाहिए… गहरे में तो और…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 멈출 수 없어요. 진실을 알아야 해.",
						"english": "But we can't stop. We need to know the truth.",
						"japanese": "ですが、止まるわけにはいきません。真実を知る必要があります。",
						"chinese": "但不能止步。必须找出真相。",
						"french": "Mais je ne peux pas m'arrêter. Il faut que je sache la vérité.",
						"spanish": "Pero no podemos detenernos. Debemos saber la verdad.",
						"vietnamese": "Nhưng không thể dừng lại. Phải biết sự thật.",
						"thai": "แต่จะหยุดไม่ได้ เราต้องรู้ความจริง",
						"hindi": "पर रुकना नामुमकिन है। हमें सच जानना होगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 울음소리, 우리가 멈춰줘야 해.",
						"english": "That cry, we have to silence it.",
						"japanese": "あの鳴き声、私たちが止めなくてはならない。",
						"chinese": "那哭声，我们必须让它停止。",
						"french": "Ce cri, il faut que nous le fassions taire.",
						"spanish": "Ese lamento, debemos detenerlo.",
						"vietnamese": "Tiếng khóc đó, chúng ta phải chấm dứt nó.",
						"thai": "เสียงร้องนั่น เราต้องหยุดมันให้ได้",
						"hindi": "उस चीख को, हमें ही शांत करना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빛의 아지랑이는 짙어지고, 도시의 모든 소리가 그 울음소리에 삼켜지는 듯했다.",
						"english": "The light's haze thickened, and the city's sounds seemed swallowed by that cry.",
						"japanese": "光の霞は濃くなり、街のあらゆる音がその鳴き声に飲み込まれるかのようだった。",
						"chinese": "光之薄雾渐浓，城市所有声音仿佛都被那哭声吞噬。",
						"french": "La brume lumineuse s'épaississait, et tous les sons de la ville semblaient être engloutis par ce cri.",
						"spanish": "La bruma de luz se hizo densa, y todos los sonidos de la ciudad fueron engullidos por ese lamento.",
						"vietnamese": "Sương mù ánh sáng càng lúc càng dày đặc, mọi âm thanh đô thị dường như bị tiếng khóc đó nuốt chửng.",
						"thai": "หมอกแสงเข้มข้นขึ้น และเสียงทั้งหมดของเมืองก็ดูเหมือนถูกกลืนหายไปในเสียงคร่ำครวญนั้น",
						"hindi": "प्रकाश की धुंध घनी हो गई, और शहर की हर आवाज़ उस चीख में समाती जा रही थी।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빛의 아지랑이가 모든 것을 집어삼켰다. 기억은 안개가 되어 사라졌다.",
						"english": "A haze of light consumed everything. Memories dissolved into mist and vanished.",
						"japanese": "光の霞が全てを飲み込んだ。記憶は霧となって消え去った。",
						"chinese": "光的薄雾吞噬了一切。记忆化作迷雾消散了。",
						"french": "Une brume de lumière engloutit tout. Les souvenirs se dissipèrent en brouillard et disparurent.",
						"spanish": "Una neblina de luz lo consumió todo. Los recuerdos se disolvieron en niebla y desaparecieron.",
						"vietnamese": "Một màn sương ánh sáng nuốt chửng mọi thứ. Ký ức tan biến thành sương mù.",
						"thai": "ม่านหมอกแห่งแสงกลืนกินทุกสิ่ง ความทรงจำสลายเป็นหมอกและหายไป",
						"hindi": "प्रकाश के धुंध ने सब कुछ निगल लिया। यादें धुंध बनकर गायब हो गईं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's… not over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没……结束。",
						"french": "Ce n'est… pas encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Vẫn… chưa kết thúc.",
						"thai": "ยัง… ไม่จบลง",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "망각은 너희를 편안하게 할 것이다….",
						"english": "Oblivion will bring you peace….",
						"japanese": "忘却がお前たちを安らかにするだろう…。",
						"chinese": "遗忘会让你们安息……。",
						"french": "L'oubli vous apportera la paix….",
						"spanish": "El olvido os traerá la paz….",
						"vietnamese": "Sự lãng quên sẽ mang lại cho các ngươi sự bình yên….",
						"thai": "การลืมเลือนจะนำความสงบมาสู่พวกเจ้า….",
						"hindi": "विस्मृति तुम्हें शांति देगी…।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악…! 이 고통은… 끝나지 않아…!",
						"english": "Aaagh…! This pain… it never ends…!",
						"japanese": "ぐあああ…！この苦痛は…終わらない…！",
						"chinese": "啊啊啊……！这份痛苦……永无止境……！",
						"french": "Aaaargh… ! Cette douleur… elle ne finira jamais… !",
						"spanish": "¡Aaagh…! Este dolor… ¡no tiene fin…!",
						"vietnamese": "Aaaagh…! Nỗi đau này… không bao giờ kết thúc…!",
						"thai": "อ๊าาา…! ความเจ็บปวดนี้… ไม่มีวันสิ้นสุด…!",
						"hindi": "आह…! यह दर्द… कभी खत्म नहीं होगा…!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "울음소리가… 옅어지고 있어.",
						"english": "The cries… are fading.",
						"japanese": "泣き声が…薄れていく。",
						"chinese": "哭声……正在减弱。",
						"french": "Les pleurs… s'estompent.",
						"spanish": "Los lamentos… se están desvaneciendo.",
						"vietnamese": "Tiếng khóc… đang yếu dần.",
						"thai": "เสียงร้อง… กำลังจางหายไป.",
						"hindi": "रोना… धीमा पड़ रहा है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속 울음소리는 잠시 멎었다. 그러나 그 잔향은 여전히 도시에 스며들어 있었다.",
						"english": "The cries in the darkness ceased for a moment. Yet, their lingering echo still permeated the city.",
						"japanese": "闇の中の泣き声は一時止んだ。しかし、その残響はまだ街に染み渡っていた。",
						"chinese": "黑暗中的哭声暂时平息了。然而，余音仍然弥漫在城市中。",
						"french": "Les pleurs dans l'obscurité cessèrent un instant. Pourtant, leur écho persistant imprégnait toujours la ville.",
						"spanish": "Los lamentos en la oscuridad cesaron por un momento. Sin embargo, su eco persistente aún impregnaba la ciudad.",
						"vietnamese": "Tiếng khóc trong bóng tối tạm ngừng. Nhưng dư âm của nó vẫn thấm đẫm thành phố.",
						"thai": "เสียงร้องในความมืดสงบลงชั่วขณะ ทว่าเสียงสะท้อนที่หลงเหลือยังคงแทรกซึมไปทั่วเมือง",
						"hindi": "अंधेरे में रोना पल भर के लिए थम गया। फिर भी, उसकी गूँज शहर में अभी भी फैली हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "Heart of Darkness. A colossal shadow barred our path.",
						"japanese": "闇の心臓部。巨大な影が道を塞いだ。",
						"chinese": "黑暗之心。巨影拦路。",
						"french": "Le Cœur des Ténèbres. Une ombre colossale barrait le chemin.",
						"spanish": "El Corazón de la Oscuridad. Una sombra colosal nos cerró el paso.",
						"vietnamese": "Trái tim bóng tối. Một bóng đen khổng lồ chặn lối.",
						"thai": "ใจกลางแห่งความมืดมิด เงายักษ์มหึมาขวางทาง",
						"hindi": "अंधकार का हृदय। एक विशाल छाया ने मार्ग रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 왔느냐. 잊혀질 운명을 거스르는 어리석은 자들.",
						"english": "How dare you come this far. Fools who defy a forgotten destiny.",
						"japanese": "よくもここまで来たな。忘れ去られる運命に抗う愚か者どもめ。",
						"chinese": "竟敢来此。逆转被遗忘命运的愚者们。",
						"french": "Comment osez-vous venir jusqu'ici ? Insensés, défiant un destin voué à l'oubli.",
						"spanish": "¿Cómo osáis llegar tan lejos? Necios que desafían un destino olvidado.",
						"vietnamese": "Dám đến tận đây sao. Những kẻ ngu ngốc dám thách thức vận mệnh bị lãng quên.",
						"thai": "บังอาจมาถึงที่นี่รึ. พวกงี่เง่าที่ท้าทายโชคชะตาที่ถูกลืมเลือน",
						"hindi": "इतनी दूर आने की तुम्हारी हिम्मत कैसे हुई? भूले हुए भाग्य को चुनौती देने वाले मूर्खों।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 걸 만들었나?",
						"english": "You... made all of this?",
						"japanese": "お前が… この全てを造り出したのか？",
						"chinese": "你… 造就了这一切？",
						"french": "C'est toi… qui as créé tout ça ?",
						"spanish": "¿Tú… creaste todo esto?",
						"vietnamese": "Ngươi… đã tạo ra tất cả điều này sao?",
						"thai": "เจ้า… เป็นคนสร้างเรื่องทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने… यह सब बनाया?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "고통은 잊어야 해. 그게 평화지.",
						"english": "Forget the pain. That is peace.",
						"japanese": "苦痛は忘れるべきだ。それが平和というものだ。",
						"chinese": "痛苦应被遗忘。那便是和平。",
						"french": "La souffrance doit être oubliée. C'est la paix.",
						"spanish": "El dolor debe olvidarse. Esa es la paz.",
						"vietnamese": "Nỗi đau phải được quên đi. Đó mới là bình yên.",
						"thai": "ความเจ็บปวดควรถูกลืม นั่นคือสันติภาพ",
						"hindi": "दर्द को भुलाना होगा। वही तो शांति है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 진실을 마주해야 해!",
						"english": "No. Face the truth!",
						"japanese": "いいえ。真実と向き合うべきだ！",
						"chinese": "不。必须正视真相！",
						"french": "Non. Il faut affronter la vérité !",
						"spanish": "¡No! ¡Debemos enfrentar la verdad!",
						"vietnamese": "Không. Phải đối mặt với sự thật!",
						"thai": "ไม่! เราต้องเผชิญหน้ากับความจริง!",
						"hindi": "नहीं। हमें सच का सामना करना होगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
