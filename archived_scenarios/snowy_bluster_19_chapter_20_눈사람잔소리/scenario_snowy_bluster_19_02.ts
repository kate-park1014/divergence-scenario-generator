export const scenario_snowy_bluster_19_02 = {
	"scenario_id": "snowy_bluster_19_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"겨울 산맥, 얼어붙은 침묵만이 흐른다.",
			"하지만 그 아래, 소문은 눈덩이처럼 불어난다.",
			"눈사람 괴물? 그저 소문일까.",
			"아니, 얼음 동굴에서 들려오는 수상한 울음소리가 모든 것을 바꿨다."
		],
		"english": [
			"Winter mountains, only frozen silence reigns.",
			"Yet below, rumors snowball.",
			"A snowman monster? Just a rumor, perhaps?",
			"No, a suspicious cry from the ice cave changed everything."
		],
		"japanese": [
			"冬の山脈、凍てつく沈黙だけが流れる。",
			"しかしその下では、噂は雪だるま式に膨れ上がる。",
			"雪だるまの怪物？ただの噂だろうか。",
			"いや、氷の洞窟から聞こえる怪しい鳴き声が、全てを変えた。"
		],
		"chinese": [
			"冬季山脉，唯有冰冷的沉默流淌。",
			"然而其下，谣言如滚雪球般膨胀。",
			"雪人怪物？仅仅是传闻吗？",
			"不，冰洞中传来的可疑叫声改变了一切。"
		],
		"french": [
			"Montagnes hivernales, seul le silence gelé règne.",
			"Mais en dessous, les rumeurs enflent comme une boule de neige.",
			"Un monstre des neiges ? Juste une rumeur, peut-être ?",
			"Non, un cri suspect venu de la grotte de glace a tout changé."
		],
		"spanish": [
			"Sierras invernales, solo fluye el silencio helado.",
			"Pero abajo, los rumores crecen como una bola de nieve.",
			"¿Un monstruo de nieve? ¿Será solo un rumor?",
			"No, un grito sospechoso de la cueva de hielo lo cambió todo."
		],
		"vietnamese": [
			"Dãy núi mùa đông, chỉ có sự im lặng đóng băng.",
			"Nhưng bên dưới, tin đồn lan nhanh như tuyết lăn.",
			"Quái vật người tuyết? Chỉ là tin đồn thôi sao?",
			"Không, tiếng kêu đáng ngờ từ hang băng đã thay đổi mọi thứ."
		],
		"thai": [
			"เทือกเขาฤดูหนาว มีเพียงความเงียบงันเยือกแข็งไหลริน",
			"แต่ข้างใต้นั้น ข่าวลือกลับเติบโตเป็นลูกบอลหิมะ",
			"สัตว์ประหลาดมนุษย์หิมะ? แค่ข่าวลือหรือเปล่า?",
			"ไม่สิ เสียงร้องที่น่าสงสัยจากถ้ำน้ำแข็งได้เปลี่ยนทุกสิ่ง"
		],
		"hindi": [
			"बर्फीली पर्वतमाला, सिर्फ जमी हुई खामोशी छाई है।",
			"पर उसके नीचे, अफवाहें हिमखंड की तरह बढ़ती हैं।",
			"स्नोमैन राक्षस? क्या यह सिर्फ एक अफवाह है?",
			"नहीं, बर्फ की गुफा से आती एक संदिग्ध चीख ने सब कुछ बदल दिया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "혹한의 북방 산맥. 발자국조차 얼어붙는 땅.",
						"english": "The frigid northern mountains. A land where even footprints freeze.",
						"japanese": "極寒の北方山脈。足跡さえ凍てつく地。",
						"chinese": "极寒的北方山脉。连脚印都会被冻结的土地。",
						"french": "Les montagnes septentrionales glaciales. Une terre où même les empreintes de pas gèlent.",
						"spanish": "Las gélidas montañas del norte. Una tierra donde hasta las huellas se congelan.",
						"vietnamese": "Dãy núi phía bắc lạnh giá. Vùng đất mà ngay cả dấu chân cũng đóng băng.",
						"thai": "เทือกเขาทางเหนืออันหนาวเหน็บ ดินแดนที่แม้แต่รอยเท้าก็ยังเยือกแข็ง",
						"hindi": "बर्फीली उत्तरी पर्वतमाला। जहाँ पैरों के निशान भी जम जाते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "으슬으슬하네. 저기… 누가 오는 것 같은데?",
						"english": "It's chilling. Over there... someone's coming, I think?",
						"japanese": "ぞっとするね。あれ…誰か来るみたいだけど？",
						"chinese": "阴森森的。那里…好像有人来了？",
						"french": "C'est glacial. Là-bas… on dirait que quelqu'un arrive ?",
						"spanish": "Qué escalofriante. Allí… parece que viene alguien.",
						"vietnamese": "Lạnh lẽo quá. Kia… hình như có ai đang đến?",
						"thai": "หนาวสะท้านจัง นั่น…เหมือนมีใครกำลังมา",
						"hindi": "अजीब लग रहा है। वहाँ… कोई आ रहा है, लगता है?"
					}
				},
				{
					"spot": [
						5,
						1
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "당신이… 소문의 탐험가? 아눅이라고 합니다.",
						"english": "You're... the rumored explorer? I'm Anuk.",
						"japanese": "あなたが…噂の探検家？私はアヌクと申します。",
						"chinese": "您是…传闻中的探险家？我叫阿努克。",
						"french": "Vous êtes… l'explorateur dont on parle ? Je m'appelle Anuk.",
						"spanish": "¿Usted es… el explorador del que se rumorea? Me llamo Anuk.",
						"vietnamese": "Anh là… nhà thám hiểm trong tin đồn? Tôi là Anuk.",
						"thai": "ท่านคือ…นักสำรวจในข่าวลือใช่ไหม? ข้าชื่ออนุก",
						"hindi": "आप… वही प्रसिद्ध खोजकर्ता? मेरा नाम आनुक है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "눈사람 괴물 소문 때문에 왔어. 자네도 그건가?",
						"english": "I came for the snowman monster rumor. Is that what brings you here too?",
						"japanese": "雪だるまの怪物の噂で来た。君もそれかい？",
						"chinese": "我是为雪人怪物传闻来的。你也是吗？",
						"french": "Je suis venu à cause de la rumeur du monstre des neiges. Est-ce aussi votre cas ?",
						"spanish": "Vine por el rumor del monstruo de nieve. ¿Usted también?",
						"vietnamese": "Tôi đến vì tin đồn về quái vật người tuyết. Anh cũng vậy sao?",
						"thai": "ข้ามาเพราะข่าวลือเรื่องสัตว์ประหลาดมนุษย์หิมะ ท่านก็เหมือนกันหรือ?",
						"hindi": "मैं स्नोमैन राक्षस की अफवाह के कारण आया हूँ। क्या आप भी उसी के लिए हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "예. 녀석을 쫓다… 기묘한 것을 들었습니다. 얼음 동굴에서.",
						"english": "Yes. While tracking it... I heard something strange. In the ice cave.",
						"japanese": "ええ。奴を追っていて…奇妙なものを聞きました。氷の洞窟で。",
						"chinese": "是的。在追逐它时…我听到了一些奇怪的声音。在冰洞里。",
						"french": "Oui. En le poursuivant… j'ai entendu quelque chose d'étrange. Dans la grotte de glace.",
						"spanish": "Sí. Persiguiéndolo… escuché algo extraño. En la cueva de hielo.",
						"vietnamese": "Vâng. Trong lúc đuổi theo nó… tôi đã nghe thấy một điều kỳ lạ. Trong hang băng.",
						"thai": "ครับ ระหว่างตามหามัน…ข้าได้ยินสิ่งประหลาดบางอย่าง ในถ้ำน้ำแข็ง",
						"hindi": "हाँ। उसका पीछा करते हुए… मैंने कुछ अजीब सुना। बर्फ की गुफा में।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "마치… 사람이 '말'하는 듯한 소리였습니다.",
						"english": "It was like... a human 'speaking'.",
						"japanese": "まるで…人が「話している」ような声でした。",
						"chinese": "就像…是人在“说话”的声音。",
						"french": "C'était comme… la voix d'une personne qui « parlait ».",
						"spanish": "Era como… un sonido de una persona \"hablando\".",
						"vietnamese": "Cứ như… đó là tiếng người 'nói' vậy.",
						"thai": "มันราวกับว่า…เป็นเสียงที่คนกำลัง 'พูด'",
						"hindi": "ऐसा था… जैसे कोई इंसान 'बात' कर रहा हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						1
					],
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊은 곳에서… 웅얼거림과 흐느낌이 섞여 들려왔습니다.",
						"english": "From deep within the cave... a mix of murmurs and sobs could be heard.",
						"japanese": "洞窟の奥深くから…つぶやきとすすり泣きが混じって聞こえてきました。",
						"chinese": "从洞穴深处…传来了夹杂着低语和抽泣的声音。",
						"french": "Du plus profond de la grotte... on entendait un mélange de marmonnements et de sanglots.",
						"spanish": "Desde lo profundo de la cueva... se escuchaba una mezcla de murmullos y sollozos.",
						"vietnamese": "Từ sâu trong hang động... nghe thấy những tiếng lầm bầm và thổn thức xen lẫn.",
						"thai": "จากส่วนลึกของถ้ำ... ได้ยินเสียงพึมพำและสะอื้นปะปนกัน",
						"hindi": "गुफा की गहराई से... फुसफुसाहट और सिसकियों का मिश्रण सुनाई दिया。"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "한때 위대했던 영광을… 그리워하는 듯한 중얼거림 같았습니다.",
						"english": "It sounded like murmurs longing for a once-great glory.",
						"japanese": "かつて偉大だった栄光を…懐かしむようなつぶやきに聞こえました。",
						"chinese": "听起来像是对昔日辉煌的低语思念。",
						"french": "On aurait dit des murmures nostalgiques d'une gloire autrefois grande.",
						"spanish": "Parecían murmullos anhelando una gloria que una vez fue grande.",
						"vietnamese": "Nghe như những tiếng lầm bầm khao khát một vinh quang từng huy hoàng.",
						"thai": "ฟังดูเหมือนเสียงพึมพำที่โหยหาความรุ่งโรจน์อันยิ่งใหญ่ในอดีต",
						"hindi": "यह एक ऐसी बड़बड़ाहट थी, मानो कोई एक बार की महान महिमा को याद कर रहा हो।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "말하는 소리라니… 괴물이라고 하기엔 이상하군.",
						"english": "Speaking sounds... Strange for a monster.",
						"japanese": "話し声だと…怪物と呼ぶにはおかしいな。",
						"chinese": "说话的声音…说是怪物又有点奇怪。",
						"french": "Des voix qui parlent... C'est étrange pour un monstre.",
						"spanish": "¿Son voces?... Demasiado extraño para un monstruo.",
						"vietnamese": "Tiếng nói chuyện... Lạ lùng cho một con quái vật.",
						"thai": "เสียงพูด... แปลกเกินไปที่จะเป็นสัตว์ประหลาด",
						"hindi": "बोलने की आवाज... एक राक्षस के लिए अजीब है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "자세한 건 직접 가봐야겠어. 동굴 위치를 알려줄 수 있나?",
						"english": "I'll have to go myself to find out more. Can you tell me the cave's location?",
						"japanese": "詳しいことは直接行ってみるしかない。洞窟の場所を教えてくれるか？",
						"chinese": "看来我得亲自去一趟。你能告诉我洞穴的位置吗？",
						"french": "Je devrai y aller moi-même pour en savoir plus. Peux-tu me donner l'emplacement de la grotte ?",
						"spanish": "Tendré que ir yo mismo para saber más. ¿Puedes decirme la ubicación de la cueva?",
						"vietnamese": "Ta phải tự mình đến xem. Ngươi có thể cho ta biết vị trí hang động không?",
						"thai": "ฉันคงต้องไปดูเองแล้วล่ะ รายละเอียดเพิ่มเติมนะ บอกตำแหน่งถ้ำได้ไหม?",
						"hindi": "मुझे खुद जाकर देखना होगा। क्या तुम मुझे गुफा की जगह बता सकते हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "물론입니다. 하지만 조심하십시오. 불길한 기운이 느껴졌습니다.",
						"english": "Of course. But be careful. I felt an ominous presence.",
						"japanese": "もちろんです。ですが、お気をつけください。不吉な気配を感じました。",
						"chinese": "当然。但请务必小心。我感到了一股不祥的气息。",
						"french": "Bien sûr. Mais soyez prudent. J'ai ressenti une présence inquiétante.",
						"spanish": "Por supuesto. Pero tenga cuidado. Sentí una presencia ominosa.",
						"vietnamese": "Đương nhiên rồi. Nhưng hãy cẩn thận. Ta cảm thấy một luồng khí bất lành.",
						"thai": "แน่นอนครับ แต่ระมัดระวังด้วยนะครับ ผมสัมผัสได้ถึงลางร้าย",
						"hindi": "बिल्कुल। लेकिन सावधान रहें। मुझे एक अशुभ उपस्थिति महसूस हुई।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴 입구. 차가운 공기가 폐부를 찔렀다.",
						"english": "Ice Cave Entrance. The cold air pierced my lungs.",
						"japanese": "氷の洞窟入口。冷たい空気が肺を突き刺した。",
						"chinese": "冰窟入口。寒冷的空气刺入肺腑。",
						"french": "Entrée de la Grotte de Glace. L'air froid transperçait mes poumons.",
						"spanish": "Entrada de la Cueva de Hielo. El aire frío me perforaba los pulmones.",
						"vietnamese": "Lối vào Hang Băng. Khí lạnh thấu xương phổi.",
						"thai": "ทางเข้าถ้ำน้ำแข็ง อากาศเย็นเยียบแทงทะลุปอด",
						"hindi": "बर्फ की गुफा का प्रवेश द्वार। ठंडी हवा फेफड़ों को भेद गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 동굴인가. 서늘한 기운이 심상치 않아.",
						"english": "Is this... that cave? The chill in the air is unsettling.",
						"japanese": "ここが…あの洞窟か。肌寒い空気が尋常じゃない。",
						"chinese": "这里就是…那个洞穴吗。这股寒意非同寻常。",
						"french": "C'est ça... cette grotte ? Le froid dans l'air est troublant.",
						"spanish": "¿Es esta... esa cueva? El frío en el aire es inquietante.",
						"vietnamese": "Đây là... hang động đó sao. Luồng khí lạnh thật bất thường.",
						"thai": "ที่นี่คือ... ถ้ำนั้นสินะ บรรยากาศเย็นเยียบไม่ปกติเลย",
						"hindi": "क्या यह... वही गुफा है? हवा में ठंडक असहज करने वाली है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "direction",
					"action": "focus",
					"spot": [
						5,
						5
					],
					"duration_ms": 700
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가… 들리는 것 같기도 하고.",
						"english": "I think I hear something...",
						"japanese": "何か…聞こえるような気もする。",
						"chinese": "好像…听到了什么。",
						"french": "J'ai l'impression d'entendre quelque chose...",
						"spanish": "Creo que escucho algo...",
						"vietnamese": "Hình như... nghe thấy gì đó.",
						"thai": "เหมือนจะได้ยินอะไรบางอย่าง...",
						"hindi": "मुझे लगता है कि कुछ... सुनाई दे रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그냥 바람 소리 아니야? 괜히 쫄지 마.",
						"english": "Isn't it just the wind? Don't be scared for nothing.",
						"japanese": "ただの風の音じゃないか？ needlesslyビビるなよ。",
						"chinese": "不就是风声吗？别瞎紧张。",
						"french": "C'est juste le vent, non ? Ne panique pas pour rien.",
						"spanish": "¿No es solo el viento? No te asustes sin motivo.",
						"vietnamese": "Không phải chỉ là tiếng gió sao? Đừng có sợ vớ vẩn.",
						"thai": "ก็แค่เสียงลมไม่ใช่เหรอ? อย่าเพิ่งกลัวไปเลย",
						"hindi": "क्या यह सिर्फ हवा की आवाज नहीं है? बेवजह डरो मत।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "아니, 뭔가 웅얼거리는 소리가… 분명 들렸어.",
						"english": "No, I definitely heard some murmuring...",
						"japanese": "いや、何かごにょごにょと…確かに聞こえたんだ。",
						"chinese": "不，我清楚地听到了某种低语声…",
						"french": "Non, j'ai clairement entendu des marmonnements...",
						"spanish": "No, definitivamente escuché unos murmullos...",
						"vietnamese": "Không, ta chắc chắn đã nghe thấy tiếng lầm bầm...",
						"thai": "ไม่ใช่, ฉันได้ยินเสียงพึมพำบางอย่าง... ชัดเจนเลยล่ะ",
						"hindi": "नहीं, मुझे कुछ बुदबुदाहट... साफ सुनाई दी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "(주변을 살핀다.) 복잡한 소리야.",
						"english": "(Looks around.) A jumble of sounds.",
						"japanese": "(周囲を見回す。) 複雑な音だ。",
						"chinese": "(环顾四周。) 复杂的声音。",
						"french": "(Regarde autour.) Des sons complexes.",
						"spanish": "(Mira alrededor.) Sonidos complejos.",
						"vietnamese": "(Nhìn quanh.) Tiếng động hỗn tạp.",
						"thai": "(มองไปรอบๆ) เสียงที่ซับซ้อน",
						"hindi": "(आसपास देखता है।) जटिल आवाज़ें।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊숙한 곳. 얼음벽에서 희미한 소리가 울렸다.",
						"english": "Deep within the cave. A faint sound echoed from the ice walls.",
						"japanese": "洞窟の奥深く。氷の壁から微かな音が響いた。",
						"chinese": "洞穴深处。微弱的声音从冰墙中回荡。",
						"french": "Au plus profond de la grotte. Un son faible résonnait des murs de glace.",
						"spanish": "En lo profundo de la cueva. Un sonido débil resonó en las paredes de hielo.",
						"vietnamese": "Sâu trong hang động. Một âm thanh yếu ớt vọng ra từ bức tường băng.",
						"thai": "ลึกเข้าไปในถ้ำ เสียงแผ่วๆ ก้องกังวานจากผนังน้ำแข็ง",
						"hindi": "गुफा के गहरे अंदर। बर्फ की दीवारों से एक मंद ध्वनि गूँजी।"
					}
				},
				{
					"type": "direction",
					"speaker": "narrator",
					"action": "shake",
					"duration_ms": 600
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장! 흔들려!",
						"english": "Damn it! It's shaking!",
						"japanese": "ちくしょう！揺れてる！",
						"chinese": "该死！在摇晃！",
						"french": "Merde ! Ça tremble !",
						"spanish": "¡Maldita sea! ¡Está temblando!",
						"vietnamese": "Chết tiệt! Nó rung chuyển!",
						"thai": "ให้ตายสิ! มันสั่น!",
						"hindi": "धिक्कार है! यह हिल रहा है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저기… 저거 뭐야?",
						"english": "Hey... what's that?",
						"japanese": "あれ…あれは何だ？",
						"chinese": "喂…那是什么？",
						"french": "Hé... qu'est-ce que c'est ?",
						"spanish": "Oye... ¿qué es eso?",
						"vietnamese": "Kia… kia là cái gì?",
						"thai": "นั่น…นั่นอะไรน่ะ?",
						"hindi": "अरे… वह क्या है?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 결정체가 부서지며, 기묘한 그림자가 드러났다.",
						"english": "A gigantic ice crystal shattered, revealing a strange shadow.",
						"japanese": "巨大な氷の結晶が砕け、奇妙な影が姿を現した。",
						"chinese": "巨大的冰晶破碎，一个奇怪的影子显露出来。",
						"french": "Un gigantesque cristal de glace se brisa, révélant une étrange ombre.",
						"spanish": "Un gigantesco cristal de hielo se hizo añicos, revelando una extraña sombra.",
						"vietnamese": "Một khối tinh thể băng khổng lồ vỡ tan, để lộ một cái bóng kỳ lạ.",
						"thai": "ผลึกน้ำแข็งยักษ์แตกสลาย เผยให้เห็นเงาประหลาด",
						"hindi": "एक विशाल बर्फीला क्रिस्टल टूटा, जिससे एक अजीब छाया प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 800,
					"spot": [
						5,
						5
					],
					"action": "focus",
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내… 이야기… 듣지… 않아…?",
						"english": "Won't... you... listen... to my story...?",
						"japanese": "私の…話…聞い…てくれ…ない…？",
						"chinese": "不…听…我的…故事…吗…？",
						"french": "N'écoutes-tu... pas... mon... histoire...?",
						"spanish": "¿No... escucharás... mi... historia...?",
						"vietnamese": "Không… nghe… chuyện… của tôi… sao…?",
						"thai": "ไม่…ฟัง…เรื่อง…ของฉัน…เหรอ…?",
						"hindi": "मेरी… कहानी… नहीं… सुनोगे… क्या…?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저게… 눈사람 괴물? 근데… 우는 소리 같아.",
						"english": "Is that... a snowman monster? But... it sounds like it's crying.",
						"japanese": "あれは…雪だるまの怪物？でも…泣き声みたいだ。",
						"chinese": "那是…雪人怪物？可是…听起来像在哭。",
						"french": "C'est... un monstre de neige ? Mais... on dirait des pleurs.",
						"spanish": "¿Es eso... un monstruo de nieve? Pero... suena como si estuviera llorando.",
						"vietnamese": "Đó là… quái vật người tuyết? Nhưng… nghe như tiếng khóc.",
						"thai": "นั่นมัน…สัตว์ประหลาดมนุษย์หิมะเหรอ? แต่…เหมือนเสียงร้องไห้เลย",
						"hindi": "क्या वह… हिममानव राक्षस है? लेकिन… यह रोने की आवाज़ लग रही है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						5,
						1
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…당신이 말했던 그 소리군요.",
						"english": "...So that's the sound you spoke of.",
						"japanese": "…あなたが言っていたあの音ですね。",
						"chinese": "……这就是你说的那个声音。",
						"french": "...C'est le son dont vous parliez.",
						"spanish": "...Ese es el sonido que mencionaste.",
						"vietnamese": "…Đó chính là âm thanh mà bạn đã nói.",
						"thai": "…นั่นคือเสียงที่คุณพูดถึงสินะ",
						"hindi": "...तो यह वही आवाज़ है जिसके बारे में आपने बताया था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴 최심부. 정체 모를 거대한 형체가 길을 막았다.",
						"english": "Deepest part of the ice cave. A gigantic, unknown figure blocked the path.",
						"japanese": "氷の洞窟最深部。正体不明の巨大な姿が道を塞いだ。",
						"chinese": "冰窟最深处。一个身份不明的巨大身影挡住了去路。",
						"french": "Au plus profond de la grotte de glace. Une forme gigantesque et inconnue bloquait le passage.",
						"spanish": "La parte más profunda de la cueva de hielo. Una figura gigantesca y desconocida bloqueaba el camino.",
						"vietnamese": "Nơi sâu nhất của hang băng. Một hình thể khổng lồ không rõ danh tính đã chặn đường.",
						"thai": "ส่วนลึกที่สุดของถ้ำน้ำแข็ง รูปร่างมหึมาที่ไม่รู้จักขวางทางอยู่",
						"hindi": "बर्फ की गुफा का सबसे गहरा हिस्सा। एक विशाल, अज्ञात आकृति ने रास्ता रोक दिया।"
					}
				},
				{
					"action": "focus",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 800,
					"spot": [
						5,
						5
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "잊혀진… 영웅의… 이야기… 들어줘…",
						"english": "Listen... to the... story... of the... forgotten... hero...",
						"japanese": "忘れられた…英雄の…話…聞いてくれ…",
						"chinese": "请…听…被遗忘的…英雄的…故事…",
						"french": "Écoute... l'histoire... du... héros... oublié...",
						"spanish": "Escucha... la historia... del... héroe... olvidado...",
						"vietnamese": "Hãy… lắng nghe… câu chuyện… của… người hùng… bị lãng quên…",
						"thai": "ได้โปรด…ฟัง…เรื่องราว…ของ…วีรบุรุษ…ที่ถูกลืม…",
						"hindi": "भूले हुए… नायक… की… कहानी… सुनो…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐야, 싸우려는 거야 말하려는 거야?",
						"english": "What, are you going to fight or talk?",
						"japanese": "何だ、戦うのか、話すのか？",
						"chinese": "怎么，你是想打还是想说？",
						"french": "Quoi, tu veux te battre ou parler ?",
						"spanish": "¿Qué, vas a pelear o a hablar?",
						"vietnamese": "Gì vậy, định đánh hay định nói?",
						"thai": "อะไรนะ จะสู้หรือจะคุย?",
						"hindi": "क्या, लड़ने वाले हो या बात करने वाले हो?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						1
					]
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "녀석이… 무언가 간절히 바라는 것 같습니다. 하지만… 맹세는 맹세.",
						"english": "It seems to desperately want something. But... a vow is a vow.",
						"japanese": "奴は…何かを必死に願っているようだ。しかし…誓いは誓い。",
						"chinese": "它…似乎在恳切地渴望着什么。但是…誓言就是誓言。",
						"french": "Il semble désespérément vouloir quelque chose. Mais... un serment est un serment.",
						"spanish": "Parece que desea algo con desesperación. Pero... un juramento es un juramento.",
						"vietnamese": "Hắn ta... dường như đang khao khát điều gì đó tha thiết. Nhưng... lời thề vẫn là lời thề.",
						"thai": "ดูเหมือนมันจะปรารถนาอะไรบางอย่างอย่างแรงกล้า แต่... คำสาบานก็คือคำสาบาน",
						"hindi": "वह... कुछ बेसब्री से चाह रहा है। लेकिन... कसम तो कसम है।"
					}
				},
				{
					"content": {
						"korean": "이야기는 나중에 들어줄게. 일단 진정해!",
						"english": "I'll hear your story later. Calm down for now!",
						"japanese": "話は後で聞こう。まずは落ち着け！",
						"chinese": "故事以后再说吧。先冷静下来！",
						"french": "J'écouterai ton histoire plus tard. Calme-toi d'abord !",
						"spanish": "Escucharé tu historia después. ¡Cálmate por ahora!",
						"vietnamese": "Chuyện sau này nói. Trước hết hãy bình tĩnh!",
						"thai": "เรื่องราวไว้ค่อยฟังทีหลัง ตอนนี้ใจเย็นก่อน!",
						"hindi": "तुम्हारी कहानी बाद में सुनूँगा। पहले शांत हो जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "거짓말… 다들… 떠나…",
						"english": "Lies... Everyone... leaves...",
						"japanese": "嘘だ…みんな…去っていく…",
						"chinese": "谎言…大家…都离开了…",
						"french": "Mensonges... Tous... partent...",
						"spanish": "Mentiras... Todos... se van...",
						"vietnamese": "Dối trá... Tất cả... đều rời đi...",
						"thai": "โกหก... ทุกคน... จากไป...",
						"hindi": "झूठ... सब... चले गए..."
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 동굴의 냉기가 모든 것을 집어삼켰다.",
						"english": "The chill of the ice cave devoured everything.",
						"japanese": "氷の洞窟の冷気がすべてを飲み込んだ。",
						"chinese": "冰窟的寒气吞噬了一切。",
						"french": "Le froid de la caverne de glace a tout dévoré.",
						"spanish": "El frío de la cueva de hielo lo devoró todo.",
						"vietnamese": "Cái lạnh thấu xương của hang động băng đã nuốt chửng mọi thứ.",
						"thai": "ความหนาวเย็นของถ้ำน้ำแข็งกลืนกินทุกสิ่ง",
						"hindi": "बर्फ की गुफा की ठंडक ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아무도… 듣지 않아…",
						"english": "No one… hears…",
						"japanese": "誰も… 聞かない…",
						"chinese": "没有人… 听到…",
						"french": "Personne… n'entend…",
						"spanish": "Nadie… escucha…",
						"vietnamese": "Không một ai… lắng nghe…",
						"thai": "ไม่มีใคร... ได้ยิน...",
						"hindi": "कोई नहीं… सुनता…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it… It's not over yet.",
						"japanese": "くそ… まだ終わってない。",
						"chinese": "该死… 还没结束。",
						"french": "Maudits… Ce n'est pas encore fini.",
						"spanish": "Maldición… Todavía no ha terminado.",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc.",
						"thai": "บ้าเอ๊ย... ยังไม่จบ",
						"hindi": "धत् तेरे की… यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 이상한 소문의 끝을 봐야 해!",
						"english": "I must see the end of this strange rumor!",
						"japanese": "この奇妙な噂の終わりを見届けなければ！",
						"chinese": "我必须看到这个奇怪谣言的结局！",
						"french": "Je dois voir la fin de cette étrange rumeur !",
						"spanish": "¡Debo ver el final de este extraño rumor!",
						"vietnamese": "Tôi phải tìm ra sự thật đằng sau tin đồn kỳ lạ này!",
						"thai": "ฉันต้องไปให้สุดทางของข่าวลือแปลกๆ นี้!",
						"hindi": "मुझे इस अजीब अफवाह का अंत देखना होगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 형체가 얼음 조각이 되어 스러졌다. 그 속에서 흐느낌이 끊이지 않았다.",
						"english": "The gigantic form shattered into ice fragments. From within, sobs echoed ceaselessly.",
						"japanese": "巨大な姿は氷の破片となり崩れ落ちた。その中からすすり泣きが絶えなかった。",
						"chinese": "巨大的身躯碎裂成冰渣。其中断断续续地传来抽泣声。",
						"french": "La forme gigantesque se brisa en éclats de glace. Des sanglots résonnaient sans cesse en son sein.",
						"spanish": "La gigantesca figura se hizo añicos en fragmentos de hielo. De su interior, los sollozos no cesaban.",
						"vietnamese": "Hình dáng khổng lồ vỡ vụn thành những mảnh băng. Từ bên trong, tiếng nức nở không ngừng vọng lại.",
						"thai": "ร่างมหึมาแตกสลายเป็นเศษน้ำแข็ง เสียงสะอื้นยังคงไม่ขาดสายจากภายใน",
						"hindi": "विशाल आकृति बर्फ के टुकड़ों में बिखर गई। उसके भीतर से लगातार सिसकियाँ आ रही थीं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내… 이름… 내… 전설… 누가… 기억할까…",
						"english": "My... name... My... legend... Who... will remember?",
						"japanese": "私の…名前…私の…伝説…誰が…覚えているだろうか…",
						"chinese": "我的…名字…我的…传说…谁会…记得呢…",
						"french": "Mon... nom... Ma... légende... Qui... se souviendra ?",
						"spanish": "Mi... nombre... Mi... leyenda... ¿Quién... recordará?",
						"vietnamese": "Tên của ta... Huyền thoại của ta... Ai... sẽ nhớ chứ...",
						"thai": "ชื่อของข้า... ตำนานของข้า... ใครจะ... จดจำ...",
						"hindi": "मेरा... नाम... मेरी... कहानी... कौन... याद रखेगा...?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(착잡한 표정) 괴물이 아니라… 슬픔에 잠긴 존재였나.",
						"english": "(Complicated expression) Not a monster... but a being steeped in sorrow, perhaps.",
						"japanese": "（複雑な表情）怪物ではなく…悲しみに沈んだ存在だったのか。",
						"chinese": "(复杂的神情) 不是怪物…而是沉浸在悲伤中的存在吗。",
						"french": "(Expression troublée) Pas un monstre... mais une créature plongée dans la tristesse, peut-être.",
						"spanish": "(Expresión complicada) No era un monstruo... sino una criatura sumida en la tristeza, ¿quizás?",
						"vietnamese": "(Vẻ mặt phức tạp) Không phải quái vật... mà là một sinh vật chìm đắm trong nỗi buồn sao.",
						"thai": "(สีหน้าสับสน) ไม่ใช่สัตว์ประหลาด... แต่อาจเป็นสิ่งมีชีวิตที่จมดิ่งในความเศร้ากระมัง",
						"hindi": "(जटिल भाव) एक राक्षस नहीं... बल्कि दुख में डूबा हुआ प्राणी था, शायद।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						1
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "계약은 지켜졌습니다. 하지만… 이 얼음 동굴에 담긴 이야기는 계속될 겁니다.",
						"english": "The contract has been honored. But... the story within this ice cave will continue.",
						"japanese": "契約は守られました。しかし…この氷の洞窟に秘められた物語は続くでしょう。",
						"chinese": "契约已履行。但是…这个冰窟里的故事还会继续。",
						"french": "Le contrat a été honoré. But... l'histoire contenue dans cette grotte de glace continuera.",
						"spanish": "El contrato ha sido cumplido. Pero... la historia encerrada en esta cueva de hielo continuará.",
						"vietnamese": "Khế ước đã được giữ. Nhưng... câu chuyện ẩn chứa trong hang băng này sẽ tiếp diễn.",
						"thai": "สัญญาได้ถูกรักษาไว้แล้ว แต่... เรื่องราวที่ถูกเก็บงำในถ้ำน้ำแข็งแห่งนี้จะยังคงดำเนินต่อไป",
						"hindi": "अनुबंध का पालन किया गया है। लेकिन... इस बर्फीली गुफा में छिपी कहानी जारी रहेगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴을 떠나자, 더욱 거세진 눈보라가 탐험대를 맞이했다.",
						"english": "Upon leaving the ice cave, an even fiercer blizzard greeted the expedition team.",
						"japanese": "氷の洞窟を去ると、さらに激しい吹雪が探検隊を迎えた。",
						"chinese": "离开冰窟，一场更为猛烈的暴风雪迎向了探险队。",
						"french": "En quittant la grotte de glace, une tempête de neige encore plus féroce accueillit l'équipe d'expédition.",
						"spanish": "Al salir de la cueva de hielo, una ventisca aún más feroz recibió a la expedición.",
						"vietnamese": "Rời khỏi hang băng, một trận bão tuyết dữ dội hơn nữa đón chào đoàn thám hiểm.",
						"thai": "เมื่อออกจากถ้ำน้ำแข็ง พายุหิมะที่รุนแรงยิ่งกว่าก็พัดกระหน่ำเข้าใส่ทีมสำรวจ",
						"hindi": "जैसे ही बर्फीली गुफा से निकले, एक और भी भीषण बर्फीला तूफान अभियान दल का स्वागत करने लगा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "소문은 꼬리에 꼬리를 물고, 진실은 미궁 속으로 깊어지고 있었다.",
						"english": "Rumors spread like wildfire, and the truth sank deeper into the labyrinth.",
						"japanese": "噂は尾ひれをつけて広がり、真実は迷宮の奥深くへと沈んでいった。",
						"chinese": "谣言甚嚣尘上，而真相却越来越深陷迷宫。",
						"french": "Les rumeurs se propageaient sans fin, et la vérité s'enfonçait toujours plus profondément dans le labyrinthe.",
						"spanish": "Los rumores se sucedían sin cesar, y la verdad se adentraba cada vez más en el laberinto.",
						"vietnamese": "Tin đồn nối đuôi nhau, còn sự thật thì càng lún sâu vào mê cung.",
						"thai": "ข่าวลือเล่าขานกันไม่หยุดหย่อน ในขณะที่ความจริงกลับยิ่งจมลึกเข้าไปในเขาวงกต",
						"hindi": "अफवाहें आग की तरह फैलती गईं, और सच्चाई भूलभुलैया में और गहरी होती चली गई।"
					}
				}
			]
		}
	]
} as const;
