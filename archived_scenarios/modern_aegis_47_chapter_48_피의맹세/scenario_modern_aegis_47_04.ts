export const scenario_modern_aegis_47_04 = {
	"scenario_id": "modern_aegis_47_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
						"korean": "화려했던 유흥가는 폐쇄된 채, 맹세의 파편들이 흩어져 있었다.",
						"english": "The once-splendid entertainment district was closed, fragments of the vow scattered.",
						"japanese": "かつて華やかだった歓楽街は閉鎖され、誓いの破片が散らばっていた。",
						"chinese": "曾经繁华的娱乐区已被封闭，誓言的碎片散落一地。",
						"french": "Le quartier de divertissement autrefois splendide était fermé, des fragments du serment éparpillés.",
						"spanish": "El otrora espléndido distrito de ocio estaba cerrado, con fragmentos de la promesa esparcidos.",
						"vietnamese": "Khu giải trí từng tráng lệ đã bị đóng cửa, những mảnh vỡ của lời thề nằm rải rác.",
						"thai": "ย่านบันเทิงที่เคยรุ่งโรจน์ถูกปิดลง, เศษเสี้ยวของคำสาบานกระจัดกระจายไปทั่ว.",
						"hindi": "कभी शानदार मनोरंजन जिला बंद हो गया था, प्रतिज्ञा के टुकड़े बिखरे हुए थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…안 돼… 또… 돌아와…",
						"english": "...No... It's... back again...",
						"japanese": "…やめて…また…戻ってくる…",
						"chinese": "...不...又...回来了...",
						"french": "...Non... Encore... C'est de retour...",
						"spanish": "...No... Otra vez... Ha vuelto...",
						"vietnamese": "...Không... Lại... quay về rồi...",
						"thai": "...ไม่นะ... มัน... กลับมาอีกแล้ว...",
						"hindi": "...नहीं... यह... फिर... वापस आ रहा है..."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "카이? 괜찮아요?",
						"english": "Kai? Are you alright?",
						"japanese": "カイ？大丈夫ですか？",
						"chinese": "凯？你还好吗？",
						"french": "Kai ? Ça va ?",
						"spanish": "¿Kai? ¿Estás bien?",
						"vietnamese": "Kai? Anh ổn không?",
						"thai": "ไค? คุณโอเคไหม?",
						"hindi": "काई? क्या तुम ठीक हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괜찮아? 맹세는… 부메랑처럼… 돌아온다…",
						"english": "Are you alright? Vows... return... like boomerangs...",
						"japanese": "大丈夫？誓いは…ブーメランのように…戻ってくる…",
						"chinese": "你还好吗？誓言...像回旋镖一样...回来了...",
						"french": "Tu vas bien ? Les serments... reviennent... comme des boomerangs...",
						"spanish": "¿Estás bien? Las promesas... regresan... como bumeranes...",
						"vietnamese": "Anh ổn không? Lời thề... như boomerang... quay về...",
						"thai": "คุณโอเคไหม? คำสาบาน... ย้อนกลับมา... เหมือนบูมเมอแรง...",
						"hindi": "क्या तुम ठीक हो? प्रतिज्ञाएँ... बूमरैंग की तरह... लौटती हैं..."
					},
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리예요?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんですか？",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "그 조형물… 심판의 징표다…",
						"english": "That sculpture... a mark of judgment...",
						"japanese": "あの彫刻…審判の証だ…",
						"chinese": "那个雕塑...是审判的标志...",
						"french": "Cette sculpture... un signe de jugement...",
						"spanish": "Esa escultura... una marca de juicio...",
						"vietnamese": "Bức tượng đó... là dấu hiệu của sự phán xét...",
						"thai": "ประติมากรรมนั้น... สัญลักษณ์ของการพิพากษา...",
						"hindi": "वह मूर्ति... न्याय का प्रतीक है..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "심판이라뇨? 당신 도대체 뭘 아는 거죠?",
						"english": "Judgment? What do you know?",
						"japanese": "審判だと？一体何を知っているんだ？",
						"chinese": "审判？你到底知道些什么？",
						"french": "Un jugement ? Que savez-vous donc ?",
						"spanish": "¿Juicio? ¿Qué sabes tú?",
						"vietnamese": "Phán xét ư? Ngươi biết gì chứ?",
						"thai": "ตัดสินเหรอ? คุณรู้อะไรกันแน่?",
						"hindi": "न्याय? तुम क्या जानते हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린… 맹세를 깼어… 모두가 벌을 받을 거야…",
						"english": "We... broke the oath... Everyone will be punished...",
						"japanese": "私たちは…誓いを破った…皆が罰せられるだろう…",
						"chinese": "我们…打破了誓言…所有人都会受到惩罚…",
						"french": "Nous... avons brisé le serment... Tout le monde sera puni...",
						"spanish": "Nosotros... rompimos el juramento... Todos serán castigados...",
						"vietnamese": "Chúng ta... đã phá vỡ lời thề... Mọi người sẽ bị trừng phạt...",
						"thai": "เรา... ผิดคำสาบาน... ทุกคนจะต้องถูกลงโทษ...",
						"hindi": "हमने... कसम तोड़ी... सबको सज़ा मिलेगी..."
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "저 조형물이… 그 시작을 알리는 징표라고…",
						"english": "That sculpture... is the sign of its beginning...",
						"japanese": "あの彫刻が…その始まりを告げるしるしだ…",
						"chinese": "那个雕塑…是它开始的征兆…",
						"french": "Cette sculpture... est le signe de son commencement...",
						"spanish": "Esa escultura... es la señal de su comienzo...",
						"vietnamese": "Tượng đài đó... là dấu hiệu của sự khởi đầu...",
						"thai": "ประติมากรรมนั้น... คือสัญลักษณ์ของการเริ่มต้น...",
						"hindi": "वह मूर्ति... उसकी शुरुआत का प्रतीक है..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "들려? 과거의 절규가… 점점 선명해져…",
						"english": "Do you hear it? The screams of the past... growing clearer...",
						"japanese": "聞こえるか？過去の絶叫が…どんどん鮮明になる…",
						"chinese": "听到了吗？过去的尖叫…越来越清晰了…",
						"french": "Tu entends ? Les cris du passé... deviennent de plus en plus clairs...",
						"spanish": "¿Lo oyes? Los gritos del pasado... se vuelven cada vez más claros...",
						"vietnamese": "Ngươi nghe thấy không? Tiếng kêu thét của quá khứ... ngày càng rõ nét...",
						"thai": "ได้ยินไหม? เสียงกรีดร้องจากอดีต... ชัดเจนขึ้นเรื่อยๆ...",
						"hindi": "सुन रहे हो? अतीत की चीखें... और साफ होती जा रही हैं..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절규요? 아무것도 안 들리는데요.",
						"english": "Screams? I don't hear anything.",
						"japanese": "絶叫ですか？何も聞こえませんが。",
						"chinese": "尖叫？我什么都没听到。",
						"french": "Des cris ? Je n'entends rien.",
						"spanish": "¿Gritos? No oigo nada.",
						"vietnamese": "Tiếng kêu thét ư? Tôi không nghe thấy gì cả.",
						"thai": "เสียงกรีดร้องเหรอ? ฉันไม่ได้ยินอะไรเลยนะ.",
						"hindi": "चीखें? मुझे कुछ सुनाई नहीं दे रहा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "이건 내 죄책감… 너희도 곧 듣게 될 거야…",
						"english": "This is my guilt... You'll hear it soon too...",
						"japanese": "これは私の罪悪感…お前たちもすぐに聞くことになるだろう…",
						"chinese": "这是我的罪恶感…你们很快也会听到…",
						"french": "C'est ma culpabilité... Vous l'entendrez bientôt aussi...",
						"spanish": "Esta es mi culpa... Vosotros también la oiréis pronto...",
						"vietnamese": "Đây là nỗi day dứt của ta... Các ngươi cũng sẽ sớm nghe thấy thôi...",
						"thai": "นี่คือความรู้สึกผิดของฉัน... พวกคุณจะได้ยินมันในไม่ช้า...",
						"hindi": "यह मेरा अपराधबोध है... तुम भी जल्द ही सुनोगे..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "깨어진 약속은… 결국 모두를 파멸로 이끌어…",
						"english": "Broken promises... ultimately lead everyone to ruin...",
						"japanese": "破られた約束は…結局は皆を破滅に導く…",
						"chinese": "破碎的承诺…最终会将所有人引向毁灭…",
						"french": "Les promesses brisées... finissent par mener tout le monde à la ruine...",
						"spanish": "Las promesas rotas... finalmente llevan a todos a la ruina...",
						"vietnamese": "Những lời hứa đã tan vỡ... cuối cùng sẽ dẫn tất cả đến sự hủy diệt...",
						"thai": "คำสัญญาที่แตกสลาย... สุดท้ายก็นำทุกคนไปสู่ความพินาศ...",
						"hindi": "टूटे हुए वादे... अंततः सबको बर्बादी की ओर ले जाते हैं..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "kai",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "더 이상은 못 가… 가지 마…",
						"english": "I can't go any further... Don't go...",
						"japanese": "これ以上は行けない…行かないで…",
						"chinese": "我不能再往前走了…别走…",
						"french": "Je ne peux plus aller plus loin... Ne pars pas...",
						"spanish": "No puedo ir más lejos... No vayas...",
						"vietnamese": "Không thể đi tiếp được nữa... Đừng đi...",
						"thai": "ไปต่อไม่ไหวแล้ว... อย่าไปเลย...",
						"hindi": "मैं और आगे नहीं जा सकता... मत जाओ..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어요. 진실을 밝혀야 해요.",
						"english": "I can't stop. I have to reveal the truth.",
						"japanese": "止められません。真実を明らかにしなければなりません。",
						"chinese": "我不能停下来。我必须揭露真相。",
						"french": "Je ne peux pas m'arrêter. Je dois révéler la vérité.",
						"spanish": "No puedo detenerme. Tengo que revelar la verdad.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải tiết lộ sự thật.",
						"thai": "หยุดไม่ได้แล้วค่ะ. ต้องเปิดเผยความจริง.",
						"hindi": "मैं रुक नहीं सकता। मुझे सच बताना होगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 파멸을 부를 뿐이야…",
						"english": "The truth... only brings ruin...",
						"japanese": "真実は…破滅を招くだけだ…",
						"chinese": "真相…只会带来毁灭…",
						"french": "La vérité... n'apporte que la ruine...",
						"spanish": "La verdad... solo trae ruina...",
						"vietnamese": "Sự thật... chỉ mang đến sự hủy diệt mà thôi...",
						"thai": "ความจริง... มีแต่จะนำมาซึ่งความพินาศ...",
						"hindi": "सच... सिर्फ़ बर्बादी लाता है..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 조형물이… 모두를 집어삼킬 거야…",
						"english": "That construct... it will swallow everyone...",
						"japanese": "あの造形物が… 皆を飲み込むだろう…",
						"chinese": "那个造型物… 会吞噬所有人…",
						"french": "Cette structure... elle va tout engloutir...",
						"spanish": "Esa estructura... nos devorará a todos...",
						"vietnamese": "Cấu trúc đó... sẽ nuốt chửng tất cả...",
						"thai": "โครงสร้างนั้น... จะกลืนกินทุกคน...",
						"hindi": "वह संरचना... सबको निगल जाएगी..."
					},
					"emotion": "angry",
					"speaker": "kai"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "이것은… 시작일 뿐… 진정한 심판은…",
						"english": "This is... merely the beginning... The true judgment is...",
						"japanese": "これは… 始まりに過ぎない… 真の審判は…",
						"chinese": "这只是… 开始而已… 真正的审判是…",
						"french": "Ce n'est... qu'un début... Le vrai jugement est...",
						"spanish": "Esto es... solo el principio... El verdadero juicio es...",
						"vietnamese": "Đây chỉ là... khởi đầu thôi... Sự phán xét thật sự là...",
						"thai": "นี่เป็นเพียง... จุดเริ่มต้นเท่านั้น... การพิพากษาที่แท้จริงคือ...",
						"hindi": "यह... केवल शुरुआत है... सच्चा न्याय तो..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 모든 걸 끝냈어!",
						"english": "What's that sound? I've finished everything!",
						"japanese": "なんだって？全部終わった！",
						"chinese": "什么声音？我全都搞定了！",
						"french": "Quel est ce bruit ? J'ai tout terminé !",
						"spanish": "¿Qué es ese ruido? ¡Lo he terminado todo!",
						"vietnamese": "Cái gì thế? Mọi chuyện đã kết thúc rồi!",
						"thai": "เสียงอะไรน่ะ? ฉันจัดการทุกอย่างเรียบร้อยแล้ว!",
						"hindi": "यह कैसी आवाज़ है? मैंने सब कुछ खत्म कर दिया है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "조형물의 절규는 잦아들었지만, 도시의 그림자는 더 깊어졌다.",
						"english": "The sculpture's screams faded, but the city's shadows deepened.",
						"japanese": "彫像の叫び声は薄れたが、都市の影はさらに深まった。",
						"chinese": "雕塑的尖叫声减弱了，但城市的阴影却更深了。",
						"french": "Les cris de la sculpture se sont estompés, mais les ombres de la ville se sont approfondies.",
						"spanish": "Los gritos de la escultura se desvanecieron, pero las sombras de la ciudad se hicieron más profundas.",
						"vietnamese": "Tiếng kêu gào của bức tượng đã dịu đi, nhưng bóng tối của thành phố càng thêm sâu sắc.",
						"thai": "เสียงกรีดร้องของประติมากรรมจางหายไป แต่เงาของเมืองกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "मूर्ति की चीखें तो थम गईं, पर शहर की परछाइयां और गहरी हो गईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "깨어진 맹세의 고리는 아직 끊어지지 않은 듯했다.",
						"english": "The broken chain of vows still seemed unbroken.",
						"japanese": "破られた誓いの輪は、まだ断ち切られていないようだった。",
						"chinese": "破碎的誓言之环似乎仍未断裂。",
						"french": "La chaîne brisée des serments semblait encore intacte.",
						"spanish": "El lazo roto de las promesas aún parecía no haberse roto.",
						"vietnamese": "Vòng tròn lời thề đã vỡ vẫn dường như chưa bị cắt đứt.",
						"thai": "ห่วงโซ่แห่งคำสาบานที่แตกหักยังคงดูเหมือนไม่ขาดสะบั้น",
						"hindi": "टूटी हुई कसमों की कड़ी अभी भी अटूट लग रही थी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 약속은… 너무나 나약했다…",
						"english": "Your promise... was too weak...",
						"japanese": "お前たちの約束は…あまりにも脆かった…",
						"chinese": "你们的承诺……太脆弱了……",
						"french": "Votre promesse... était bien trop faible...",
						"spanish": "Vuestra promesa... era demasiado débil...",
						"vietnamese": "Lời hứa của các ngươi… quá đỗi yếu ớt…",
						"thai": "คำสัญญาของพวกเจ้า... ช่างอ่อนแอเหลือเกิน...",
						"hindi": "तुम्हारा वादा... बहुत कमज़ोर था..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어… 진실은… 반드시 밝혀낸다!",
						"english": "It's not over yet... The truth... will surely be revealed!",
						"japanese": "まだ終わってない…真実は…必ず明らかにする！",
						"chinese": "还没结束……真相……一定会大白！",
						"french": "Ce n'est pas encore fini... La vérité... sera sûrement révélée !",
						"spanish": "Aún no ha terminado... ¡La verdad... saldrá a la luz!",
						"vietnamese": "Vẫn chưa kết thúc… Sự thật… nhất định sẽ được phơi bày!",
						"thai": "ยังไม่จบ... ความจริง... จะถูกเปิดเผยอย่างแน่นอน!",
						"hindi": "यह अभी खत्म नहीं हुआ है... सच... ज़रूर सामने आएगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "폐허 속, 거대한 조형물이 희미한 빛을 내고 있었다. 그 안에서 절규가 터져 나왔다.",
						"english": "In the ruins, a colossal construct emitted a faint light. A shriek erupted from within.",
						"japanese": "廃墟の中、巨大な造形物が微かな光を放っていた。その中から絶叫が迸った。",
						"chinese": "废墟中，巨大的造型物散发着微弱的光芒。一声尖叫从中爆发。",
						"french": "Dans les ruines, une structure colossale émettait une faible lumière. Un hurlement en jaillit.",
						"spanish": "Entre las ruinas, una estructura colosal emitía una luz tenue. Un grito brotó de su interior.",
						"vietnamese": "Trong đống đổ nát, một kiến trúc khổng lồ phát ra ánh sáng mờ nhạt. Một tiếng kêu thét bùng nổ từ bên trong.",
						"thai": "ในซากปรักหักพัง โครงสร้างขนาดมหึมากำลังเปล่งแสงริบหรี่ เสียงกรีดร้องดังมาจากข้างใน",
						"hindi": "खंडहरों में, एक विशाल संरचना से हल्की रोशनी निकल रही थी। उसके भीतर से एक चीख निकली।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "왔구나… 파멸의 순간이…",
						"english": "It has come... the moment of ruin...",
						"japanese": "来たか… 破滅の瞬間が…",
						"chinese": "来了啊… 毁灭的时刻…",
						"french": "C'est arrivé... le moment de la ruine...",
						"spanish": "Ha llegado... el momento de la ruina...",
						"vietnamese": "Đã đến rồi... khoảnh khắc của sự diệt vong...",
						"thai": "มาแล้วสินะ... ช่วงเวลาแห่งความพินาศ...",
						"hindi": "आ गया... विनाश का क्षण..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카이, 저 조형물에 대체 뭐가 있는 거죠?",
						"english": "Kai, what exactly is inside that construct?",
						"japanese": "カイ、あの造形物には一体何があるんだ？",
						"chinese": "凯，那个造型物里到底有什么？",
						"french": "Kai, qu'y a-t-il donc dans cette structure ?",
						"spanish": "Kai, ¿qué hay exactamente dentro de esa estructura?",
						"vietnamese": "Kai, rốt cuộc có gì bên trong cấu trúc đó vậy?",
						"thai": "ไค ในโครงสร้างนั้นมีอะไรกันแน่?",
						"hindi": "काई, उस संरचना के अंदर आखिर क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더는 안 돼… 난… 못 봐…",
						"english": "...No more... I... can't bear to see it...",
						"japanese": "…もうダメだ… 私は… 見ていられない…",
						"chinese": "……不行了……我……看不下去了……",
						"french": "...Plus maintenant... Je... ne peux pas regarder...",
						"spanish": "...No más... Yo... no puedo verlo...",
						"vietnamese": "...Không được nữa rồi... Tôi... không thể nhìn...",
						"thai": "...ไม่ไหวแล้ว... ฉัน... ดูไม่ได้...",
						"hindi": "...और नहीं... मैं... देख नहीं सकता..."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그 순간, 조형물에서 거대한 그림자가 솟아올랐다.",
						"english": "At that moment, a colossal shadow surged from the construct.",
						"japanese": "その瞬間、造形物から巨大な影が솟아올랐다。",
						"chinese": "就在那一刻，巨大的黑影从造型物中升起。",
						"french": "À cet instant, une ombre colossale jaillit de la structure.",
						"spanish": "En ese instante, una sombra colosal surgió de la estructura.",
						"vietnamese": "Khoảnh khắc đó, một bóng đen khổng lồ trỗi dậy từ cấu trúc.",
						"thai": "ในช่วงเวลาเดียวกันนั้น เงาขนาดมหึมาก็ผุดขึ้นมาจากโครงสร้าง",
						"hindi": "उसी क्षण, उस संरचना से एक विशाल छाया निकली।"
					}
				},
				{
					"content": {
						"korean": "맹세는… 부메랑이 되어… 돌아온다…",
						"english": "Oaths... return... as boomerangs...",
						"japanese": "誓いは… ブーメランとなって… 戻ってくる…",
						"chinese": "誓言… 会变成回旋镖… 回来…",
						"french": "Les serments... reviennent... comme des boomerangs...",
						"spanish": "Los juramentos... regresan... como bumeranes...",
						"vietnamese": "Lời thề... sẽ trở lại... như một chiếc boomerang...",
						"thai": "คำสาบาน... จะกลับมา... เหมือนบูมเมอแรง...",
						"hindi": "प्रतिज्ञाएँ... बूमरैंग बनकर... लौट आती हैं..."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누구냐! 네가 이 비극의 시작이냐?",
						"english": "Who are you! Are you the beginning of this tragedy?",
						"japanese": "誰だ！お前がこの悲劇の始まりなのか？",
						"chinese": "你是谁！你是这场悲剧的开端吗？",
						"french": "Qui es-tu ! Es-tu le début de cette tragédie ?",
						"spanish": "¡Quién eres! ¿Eres el inicio de esta tragedia?",
						"vietnamese": "Ngươi là ai! Ngươi có phải là khởi đầu của bi kịch này không?",
						"thai": "แกเป็นใคร! แกคือจุดเริ่มต้นของโศกนาฏกรรมนี้หรือเปล่า?",
						"hindi": "तुम कौन हो! क्या तुम इस त्रासदी की शुरुआत हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "나는… 깨어진 약속의 심판자… 너희의 죄를 묻겠다.",
						"english": "I am... the judge of broken promises... I will question your sins.",
						"japanese": "私は… 破られた約束の審判者… お前たちの罪を問う。",
						"chinese": "我是… 破碎誓约的审判者… 我将审问你们的罪孽。",
						"french": "Je suis... le juge des promesses brisées... Je vous interrogerai sur vos péchés.",
						"spanish": "Yo soy... el juez de las promesas rotas... Cuestionaré vuestros pecados.",
						"vietnamese": "Ta là... kẻ phán xét những lời hứa tan vỡ... Ta sẽ chất vấn tội lỗi của các ngươi.",
						"thai": "ข้าคือ... ผู้พิพากษาแห่งคำสัญญาที่แตกสลาย... ข้าจะถามถึงบาปของพวกเจ้า",
						"hindi": "मैं... टूटे हुए वादों का निर्णायक हूँ... मैं तुम्हारे पापों का हिसाब लूँगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 외곽, 폐허가 된 유흥가에 잊혀진 맹세의 그림자가 드리웠다.",
			"과거의 죄책감에 사로잡힌 카이는 환각 속에서 끝없이 절규했다.",
			"맹세는 부메랑처럼 돌아온다. 그 경고는, 심판의 전조였다.",
			"조형물에서 들려오는 희생자들의 비명은 점점 더 선명해졌다."
		],
		"english": [
			"On the city's outskirts, in a ruined entertainment district, the shadow of a forgotten vow loomed.",
			"Trapped by past guilt, Kai screamed endlessly in hallucinations.",
			"Vows return like boomerangs. That warning was a harbinger of judgment.",
			"The screams of victims from the sculpture grew increasingly clear."
		],
		"japanese": [
			"都市郊外の廃墟となった歓楽街に、忘れられた誓いの影が差していた。",
			"過去の罪悪感に囚われたカイは、幻覚の中で絶え間なく叫び続けた。",
			"誓いはブーメランのように戻る。その警告は、審判の予兆だった。",
			"彫刻から聞こえる犠牲者たちの悲鳴は、ますます鮮明になった。"
		],
		"chinese": [
			"在城市郊区，废弃的娱乐区笼罩着被遗忘誓言的阴影。",
			"被过去的罪恶感困扰，凯在幻觉中无尽地尖叫。",
			"誓言如回旋镖般归来。那个警告是审判的预兆。",
			"雕塑中传来的受害者尖叫声越来越清晰。"
		],
		"french": [
			"Aux abords de la ville, dans un quartier de divertissement en ruine, l'ombre d'un serment oublié planait.",
			"Piégé par la culpabilité passée, Kai hurlait sans fin dans ses hallucinations.",
			"Les serments reviennent comme des boomerangs. Cet avertissement était le présage du jugement.",
			"Les cris des victimes provenant de la sculpture devenaient de plus en plus clairs."
		],
		"spanish": [
			"En las afueras de la ciudad, en un distrito de ocio en ruinas, la sombra de una promesa olvidada se cernía.",
			"Atrapado por la culpa del pasado, Kai gritaba sin cesar en sus alucinaciones.",
			"Las promesas regresan como bumeranes. Esa advertencia era un presagio del juicio.",
			"Los gritos de las víctimas que venían de la escultura se hicieron cada vez más claros."
		],
		"vietnamese": [
			"Ngoại ô thành phố, tại khu giải trí hoang tàn, bóng dáng một lời thề bị lãng quên bao trùm.",
			"Mắc kẹt trong mặc cảm tội lỗi quá khứ, Kai không ngừng gào thét trong ảo giác.",
			"Lời thề quay lại như boomerang. Cảnh báo đó, là điềm báo của sự phán xét.",
			"Tiếng la hét của các nạn nhân từ bức tượng ngày càng rõ ràng hơn."
		],
		"thai": [
			"ชานเมือง, ในย่านบันเทิงที่ปรักหักพัง, เงาของคำสาบานที่ถูกลืมเลือนได้ทอดตัวลง.",
			"ถูกกักขังด้วยความรู้สึกผิดในอดีต, ไคกรีดร้องไม่หยุดในภาพหลอน.",
			"คำสาบานย้อนกลับมาเหมือนบูมเมอแรง. คำเตือนนั้นคือลางบอกเหตุของการพิพากษา.",
			"เสียงกรีดร้องของเหยื่อที่ดังมาจากประติมากรรมเริ่มชัดเจนขึ้นเรื่อยๆ."
		],
		"hindi": [
			"शहर के बाहरी इलाके में, एक बर्बाद मनोरंजन जिले में, एक भूली हुई प्रतिज्ञा की छाया मंडरा रही थी।",
			"अतीत के अपराध बोध में फंसा, काई मतिभ्रम में अंतहीन चीख रहा था।",
			"प्रतिज्ञाएँ बूमरैंग की तरह लौटती हैं। वह चेतावनी न्याय का अग्रदूत थी।",
			"मूर्ति से पीड़ितों की चीखें लगातार स्पष्ट होती गईं।"
		]
	}
} as const;
