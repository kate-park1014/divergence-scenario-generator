export const scenario_desert_sipius_3_02 = {
	"scenario_id": "desert_sipius_3_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
						"korean": "타들어가는 사막 위, 뜨거운 태양만이 작렬한다.",
						"english": "Above the scorching desert, only the blazing sun rages.",
						"japanese": "灼熱の砂漠の上、燃えるような太陽だけが猛威を振るう。",
						"chinese": "炙热的沙漠上空，只有烈日炎炎。",
						"french": "Au-dessus du désert brûlant, seul le soleil ardent fait rage.",
						"spanish": "Sobre el desierto abrasador, solo el sol ardiente ruge.",
						"vietnamese": "Trên sa mạc bỏng rát, chỉ có mặt trời chói chang hoành hành.",
						"thai": "เหนือทะเลทรายอันร้อนระอุ มีเพียงดวงอาทิตย์ที่แผดเผา",
						"hindi": "झुलसते रेगिस्तान के ऊपर, केवल तपता सूरज ही उग्र है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "저기… 물통인가? 드디어…!",
						"english": "Over there... is that a water skin? Finally...!",
						"japanese": "あれは…水筒か？ついに…！",
						"chinese": "那里……是水囊吗？终于……！",
						"french": "Là-bas... c'est une gourde ? Enfin... !",
						"spanish": "¿Allá... es un odre? ¡Finalmente...!",
						"vietnamese": "Kia... là túi nước sao? Cuối cùng thì...!",
						"thai": "นั่น... กระบอกน้ำหรือเปล่า? ในที่สุดก็...!",
						"hindi": "वहाँ... क्या वह पानी की मशक है? आखिरकार...!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "살았다…! 이 갈증을 겨우 면할 수 있겠어.",
						"english": "I'm saved...! I can finally escape this thirst.",
						"japanese": "助かった…！この渇きからようやく逃れられる。",
						"chinese": "得救了……！我终于可以摆脱这种渴望了。",
						"french": "Je suis sauvé... ! Je peux enfin échapper à cette soif.",
						"spanish": "¡Estoy salvado...! Por fin puedo escapar de esta sed.",
						"vietnamese": "Tôi được cứu rồi...! Cuối cùng tôi cũng thoát khỏi cơn khát này.",
						"thai": "รอดแล้ว...! ในที่สุดก็พ้นจากความกระหายนี้",
						"hindi": "मैं बच गया...! मैं आखिरकार इस प्यास से बच सकता हूँ।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 주변이 너무 메말랐군. 이상해.",
						"english": "But... the surroundings are too parched. It's strange.",
						"japanese": "しかし…周りがひどく乾いている。おかしいな。",
						"chinese": "但是……周围太干旱了。奇怪。",
						"french": "Mais... les environs sont trop desséchés. C'est étrange.",
						"spanish": "Pero... los alrededores están demasiado secos. Es extraño.",
						"vietnamese": "Nhưng... xung quanh quá khô cằn. Thật kỳ lạ.",
						"thai": "แต่... รอบๆ แห้งแล้งเกินไป มันแปลกนะ",
						"hindi": "लेकिन... आसपास बहुत सूखा है। अजीब है।"
					},
					"emotion": "base",
					"speaker": "amir"
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
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "가까이 갈수록 갈증이 심해지는군. 기분 탓인가….",
						"english": "The closer I get, the more intense the thirst becomes. Is it my imagination...?",
						"japanese": "近づくほどに渇きがひどくなる。気のせいか…。",
						"chinese": "越靠近，渴望越强烈。是我的错觉吗……？",
						"french": "Plus je m'approche, plus la soif s'intensifie. Est-ce mon imagination... ?",
						"spanish": "Cuanto más me acerco, más intensa se vuelve la sed. ¿Es mi imaginación...?",
						"vietnamese": "Càng đến gần, cơn khát càng dữ dội. Có phải tôi tưởng tượng không...?",
						"thai": "ยิ่งเข้าใกล้ ความกระหายยิ่งรุนแรงขึ้น หรือเป็นแค่ความรู้สึกไปเอง...?",
						"hindi": "जितना करीब जाता हूँ, प्यास उतनी ही बढ़ती जाती है। क्या यह मेरा वहम है...?"
					}
				},
				{
					"content": {
						"korean": "목이 타들어가는 것 같아… 물통 때문인가?",
						"english": "My throat feels like it's burning... Is it because of the water skin?",
						"japanese": "喉が焼けるようだ…水筒のせいか？",
						"chinese": "我的喉咙感觉像在燃烧……是因为那个水囊吗？",
						"french": "Ma gorge me brûle... Est-ce à cause de la gourde ?",
						"spanish": "Siento que me arde la garganta... ¿Es por el odre?",
						"vietnamese": "Cổ họng tôi như đang cháy... Có phải do túi nước không?",
						"thai": "รู้สึกเหมือนคอจะไหม้... เป็นเพราะกระบอกน้ำหรือเปล่า?",
						"hindi": "मेरा गला जल रहा है... क्या यह पानी की मशक की वजह से है?"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "분명 뭔가 이상해. 이 건조함은 자연스럽지 않아.",
						"english": "Something's definitely wrong. This dryness isn't natural.",
						"japanese": "何かおかしい。この乾燥は不自然だ。",
						"chinese": "肯定有什么不对劲。这种干燥不自然。",
						"french": "Quelque chose cloche. Cette sécheresse n'est pas naturelle.",
						"spanish": "Algo anda mal. Esta sequedad no es natural.",
						"vietnamese": "Chắc chắn có gì đó không ổn. Sự khô hạn này không tự nhiên.",
						"thai": "มีบางอย่างผิดปกติแน่ๆ ความแห้งแล้งนี้ไม่เป็นธรรมชาติ",
						"hindi": "ज़रूर कुछ गड़बड़ है। यह सूखापन स्वाभाविक नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "꿀럭… 꿀럭… 물통에서 이상한 소리가 들려.",
						"english": "Gurgle... Gurgle... A strange sound from the canteen.",
						"japanese": "ゴボッ…ゴボッ…水筒から変な音がする。",
						"chinese": "咕噜…咕噜…水壶里传来奇怪的声音。",
						"french": "Glouglou… Glouglou… Un bruit étrange vient de la gourde.",
						"spanish": "Gluglú... Gluglú... Un sonido extraño viene de la cantimplora.",
						"vietnamese": "Ục… ục… Có tiếng động lạ phát ra từ bình nước.",
						"thai": "กุ๊กๆ... กุ๊กๆ... มีเสียงแปลกๆ ออกมาจากกระติกน้ำ",
						"hindi": "गड़गड़… गड़गड़… पानी की बोतल से अजीब आवाज़ आ रही है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "이 물통… 살아있는 것 같군. 갈증을 부추기는 건가?",
						"english": "This canteen... it seems alive. Is it provoking our thirst?",
						"japanese": "この水筒…生きているようだ。喉の渇きを煽っているのか？",
						"chinese": "这水壶…好像活的。它在诱发我们的口渴吗？",
						"french": "Cette gourde… elle semble vivante. Provoque-t-elle notre soif ?",
						"spanish": "Esta cantimplora... parece viva. ¿Está provocando nuestra sed?",
						"vietnamese": "Bình nước này… có vẻ như nó sống. Nó đang kích động cơn khát của chúng ta sao?",
						"thai": "กระติกน้ำนี่... เหมือนมีชีวิต มันกำลังกระตุ้นความกระหายของเราเหรอ?",
						"hindi": "यह पानी की बोतल… मानो जीवित है। क्या यह हमारी प्यास बढ़ा रही है?"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼…! 수분을 빨아들이는 것 같아!",
						"english": "Unbelievable...! It feels like it's sucking away our moisture!",
						"japanese": "まさか…！水分を吸い取っているようだ！",
						"chinese": "简直胡说…！它好像在吸取水分！",
						"french": "Incroyable… ! On dirait qu'elle aspire l'humidité !",
						"spanish": "¡No puede ser...! ¡Parece que está absorbiendo la humedad!",
						"vietnamese": "Không thể tin được…! Cứ như nó đang hút ẩm vậy!",
						"thai": "ไม่จริงน่า...! เหมือนมันกำลังดูดซับความชุ่มชื้นไป!",
						"hindi": "अविश्वसनीय…! ऐसा लगता है कि यह नमी सोख रहा है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "물통 주변의 모래가 메마르다 못해 바스라졌다.",
						"english": "The sand around the canteen is so dry, it crumbles.",
						"japanese": "水筒の周りの砂は、乾きすぎて崩れた。",
						"chinese": "水壶周围的沙子干涸到 crumble。",
						"french": "Le sable autour de la gourde est si sec qu'il s'effrite.",
						"spanish": "La arena alrededor de la cantimplora está tan seca que se desmorona.",
						"vietnamese": "Cát xung quanh bình nước khô cằn đến mức vỡ vụn.",
						"thai": "ทรายรอบๆ กระติกน้ำแห้งผากจนแตกเป็นผง",
						"hindi": "पानी की बोतल के आसपास की रेत इतनी सूख गई है कि वह चूर-चूर हो गई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 위험해. 후퇴해야 할지도 몰라. 모두 조심해!",
						"english": "It's too dangerous now. We might have to retreat. Everyone, be careful!",
						"japanese": "これ以上は危険だ。撤退すべきかもしれない。皆、気をつけろ！",
						"chinese": "再这样下去就危险了。我们可能需要撤退。大家小心！",
						"french": "C'est trop dangereux maintenant. Il faut peut-être battre en retraite. Tout le monde, soyez prudents !",
						"spanish": "Es demasiado peligroso ahora. Quizás tengamos que retirarnos. ¡Todos, tened cuidado!",
						"vietnamese": "Nguy hiểm quá rồi. Có lẽ chúng ta phải rút lui thôi. Mọi người cẩn thận!",
						"thai": "อันตรายเกินไปแล้ว เราอาจต้องถอย ทุกคนระวังตัว!",
						"hindi": "अब और ख़तरनाक है। हमें पीछे हटना पड़ सकता है। सब लोग सावधान रहें!"
					},
					"emotion": "sad",
					"speaker": "amir"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이미 늦었나… 갈증이 우리를 조종하는 것 같아.",
						"english": "Is it too late...? Thirst seems to be controlling us.",
						"japanese": "もう遅いのか…喉の渇きが我々を操っているようだ。",
						"chinese": "已经太晚了吗…口渴似乎正在控制我们。",
						"french": "Est-il déjà trop tard… ? La soif semble nous contrôler.",
						"spanish": "¿Ya es demasiado tarde...? La sed parece controlarnos.",
						"vietnamese": "Đã quá muộn rồi sao…? Cơn khát dường như đang điều khiển chúng ta.",
						"thai": "สายเกินไปแล้วหรือ...? ความกระหายดูเหมือนจะกำลังควบคุมเรา",
						"hindi": "क्या बहुत देर हो चुकी है…? प्यास हमें नियंत्रित कर रही है।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "몸이 말라붙는 것 같아… 움직일 수 없어…!",
						"english": "My body feels like it's drying up... I can't move...!",
						"japanese": "体が干からびていくようだ…動けない…！",
						"chinese": "身体好像要干枯了…动不了了…！",
						"french": "Mon corps se dessèche… Je ne peux plus bouger… !",
						"spanish": "Mi cuerpo parece secarse... ¡No puedo moverme...!",
						"vietnamese": "Cơ thể tôi cứ như khô héo đi… không thể cử động được…!",
						"thai": "ร่างกายฉันกำลังแห้งผาก... ขยับไม่ได้...!",
						"hindi": "मेरा शरीर सूखता जा रहा है… मैं हिल नहीं सकता…!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 벗어날 수 없는 갈증의 덫에 갇혔다.",
						"english": "The expedition team is trapped in an inescapable web of thirst.",
						"japanese": "探検隊は逃れられない渇きの罠に囚われた。",
						"chinese": "探险队被困在了无法逃脱的饥渴陷阱中。",
						"french": "L'équipe d'exploration est piégée dans un piège de soif inéluctable.",
						"spanish": "El equipo de exploración está atrapado en una trampa de sed ineludible.",
						"vietnamese": "Đoàn thám hiểm đã bị mắc kẹt trong bẫy khát nước không lối thoát.",
						"thai": "ทีมสำรวจถูกขังอยู่ในกับดักความกระหายที่หนีไม่พ้น",
						"hindi": "अभियान दल प्यास के एक ऐसे जाल में फंस गया है जिससे बच निकलना असंभव है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "정신 차려! 여기서 물러설 순 없어!",
						"english": "Snap out of it! We can't back down now!",
						"japanese": "しっかりしろ！ここで引き下がるわけにはいかない！",
						"chinese": "清醒点！我们不能在这里退缩！",
						"french": "Reprenez-vous ! On ne peut pas reculer maintenant !",
						"spanish": "¡Reacciona! ¡No podemos retroceder ahora!",
						"vietnamese": "Tỉnh táo lại đi! Chúng ta không thể lùi bước ở đây!",
						"thai": "ตั้งสติ! เราถอยไม่ได้ตอนนี้!",
						"hindi": "होश में आओ! हम यहाँ से पीछे नहीं हट सकते!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크… 크크… 겨우 이 정도론… 나를 완전히 막을 수 없다…",
						"english": "Kuh... hehe... this much... won't stop me completely...",
						"japanese": "く…くく…この程度では…私を完全に止めることはできない…",
						"chinese": "呵…呵呵…就凭这点…无法完全阻止我…",
						"french": "Ku... hehe... ce n'est pas assez... pour m'arrêter complètement...",
						"spanish": "Kuh... jeje... con esto... no podrán detenerme por completo...",
						"vietnamese": "Khụ… khụ khụ… Chừng này thôi… không thể ngăn ta hoàn toàn được đâu…",
						"thai": "คึ… คึคึ… แค่นี้… หยุดข้าไม่ได้หรอก…",
						"hindi": "ख… खख… बस इतना सा… मुझे पूरी तरह नहीं रोक पाएगा…"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 갈증은… 다시 시작될 것이다… 더 깊이…",
						"english": "Your thirst... will begin again... deeper...",
						"japanese": "お前たちの渇きは…再び始まるだろう…もっと深く…",
						"chinese": "你们的干渴…会再次开始的…更深地…",
						"french": "Votre soif... recommencera... plus profondément...",
						"spanish": "Vuestra sed... volverá a empezar... más profundamente...",
						"vietnamese": "Cơn khát của các ngươi… sẽ lại bắt đầu… sâu hơn nữa…",
						"thai": "ความกระหายของพวกเจ้า… จะเริ่มขึ้นอีกครั้ง… ลึกซึ้งกว่าเดิม…",
						"hindi": "तुम्हारी प्यास… फिर से शुरू होगी… और गहरी…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…사라지지 않아?",
						"english": "...It's not disappearing?",
						"japanese": "…消えないのか？",
						"chinese": "…没有消失吗？",
						"french": "...Ça ne disparaît pas ?",
						"spanish": "¿...No desaparece?",
						"vietnamese": "…Không biến mất sao?",
						"thai": "…ไม่หายไป?",
						"hindi": "…गायब नहीं हो रहा?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						4
					]
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이 물통… 아직 완전히 파괴된 게 아니야. 방심하지 마.",
						"english": "This water tank... it's not completely destroyed yet. Don't let your guard down.",
						"japanese": "この水槽…まだ完全に破壊されていない。油断するな。",
						"chinese": "这个水箱…还没有完全被摧毁。不要放松警惕。",
						"french": "Ce réservoir d'eau... il n'est pas encore complètement détruit. Ne baissez pas votre garde.",
						"spanish": "Este tanque de agua... aún no está completamente destruido. No bajes la guardia.",
						"vietnamese": "Bình nước này... vẫn chưa bị phá hủy hoàn toàn. Đừng mất cảnh giác.",
						"thai": "ถังน้ำนี่... ยังไม่ถูกทำลายโดยสมบูรณ์ อย่าประมาท",
						"hindi": "यह पानी का टैंक... अभी पूरी तरह से नष्ट नहीं हुआ है। लापरवाह मत बनो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 물통은 다시 희미하게 빛났다. 끝나지 않은 갈증처럼.",
						"english": "The old water tank glowed faintly again, like an unquenchable thirst.",
						"japanese": "古い水槽は再び淡く光った。終わらない渇望のように。",
						"chinese": "那个旧水箱又发出了微弱的光芒。如同永无止境的渴望。",
						"french": "Le vieux réservoir d'eau luit de nouveau faiblement, comme une soif inextinguible.",
						"spanish": "El viejo tanque de agua volvió a brillar débilmente, como una sed insaciable.",
						"vietnamese": "Bình nước cũ lại phát sáng mờ ảo, như một cơn khát không hồi kết.",
						"thai": "ถังน้ำเก่ากลับมาส่องแสงเรืองรองอีกครั้ง ราวกับความกระหายที่ไม่สิ้นสุด",
						"hindi": "पुराना पानी का टैंक फिर से मंद-मंद चमकने लगा, एक अंतहीन प्यास की तरह।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "갈증은 모든 것을 집어삼켰다.",
						"english": "Thirst consumed all.",
						"japanese": "渇望が全てを飲み込んだ。",
						"chinese": "饥渴吞噬了一切。",
						"french": "La soif a tout dévoré.",
						"spanish": "La sed lo consumió todo.",
						"vietnamese": "Cơn khát nuốt chửng mọi thứ.",
						"thai": "ความกระหายกลืนกินทุกสิ่ง",
						"hindi": "प्यास ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 나의 일부가 되어라.",
						"english": "Worthless beings... become a part of me.",
						"japanese": "愚かな者たち…我が一部となれ。",
						"chinese": "卑微之物…成为我的一部分吧。",
						"french": "Choses insignifiantes... faites partie de moi.",
						"spanish": "Cosas insignificantes... sed parte de mí.",
						"vietnamese": "Những kẻ hèn mọn... hãy trở thành một phần của ta.",
						"thai": "สิ่งไร้ค่า... จงมาเป็นส่วนหนึ่งของข้า",
						"hindi": "तुच्छ प्राणी... मेरे अंश बनो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... it's not over yet!",
						"japanese": "ぐっ…まだ…終わってない！",
						"chinese": "呃…还没有…结束！",
						"french": "Urgh... Ce n'est pas encore fini !",
						"spanish": "Uf... ¡Aún no ha terminado!",
						"vietnamese": "Khụ... vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "갈증의 근원, 그 그림자가 모습을 드러냈다.",
						"english": "The source of thirst, its shadow has appeared.",
						"japanese": "渇きの根源、その影が姿を現した。",
						"chinese": "干渴之源，其身影已现。",
						"french": "La source de la soif, son ombre est apparue.",
						"spanish": "La fuente de la sed, su sombra ha aparecido.",
						"vietnamese": "Nguồn gốc của cơn khát, cái bóng của nó đã hiện ra.",
						"thai": "ต้นกำเนิดแห่งความกระหาย เงาของมันได้ปรากฏขึ้นแล้ว",
						"hindi": "प्यास का स्रोत, उसकी छाया प्रकट हुई है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "찾아왔구나, 나의 먹잇감들.",
						"english": "You've come, my prey.",
						"japanese": "来たな、我が獲物たちよ。",
						"chinese": "你们来了，我的猎物们。",
						"french": "Vous êtes venus, mes proies.",
						"spanish": "Han venido, mis presas.",
						"vietnamese": "Các ngươi đã đến, con mồi của ta.",
						"thai": "เจ้ามาแล้ว, เหล่าเหยื่อของข้า",
						"hindi": "तुम आ गए, मेरे शिकार।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 갈증의 원흉인가!",
						"english": "You... are you the culprit behind all this thirst?!",
						"japanese": "お前が… この全ての渇きの元凶か！",
						"chinese": "你… 就是这所有干渴的元凶吗！",
						"french": "Tu... es-tu l'instigateur de toute cette soif ?!",
						"spanish": "Tú... ¿eres el culpable de toda esta sed?!",
						"vietnamese": "Ngươi… là kẻ chủ mưu gây ra tất cả cơn khát này sao!",
						"thai": "เจ้า… คือต้นเหตุของความกระหายทั้งหมดนี้หรือ!",
						"hindi": "तुम… क्या तुम ही इस सारी प्यास के पीछे का अपराधी हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 너희의 목마름은 나의 힘. 이제 모두 나에게 바쳐라.",
						"english": "Yes. Your thirst is my power. Now, offer yourselves to me.",
						"japanese": "そうだ。お前たちの渇きは我が力。さあ、全てを私に捧げよ。",
						"chinese": "没错。你们的干渴是我的力量。现在，都奉献给我吧。",
						"french": "Oui. Votre soif est ma puissance. Maintenant, offrez-vous tous à moi.",
						"spanish": "Sí. Vuestra sed es mi poder. Ahora, ofrézcanse todos a mí.",
						"vietnamese": "Đúng vậy. Cơn khát của các ngươi là sức mạnh của ta. Giờ thì, hãy dâng tất cả cho ta.",
						"thai": "ใช่. ความกระหายของพวกเจ้าคือพลังของข้า. บัดนี้ จงถวายทุกสิ่งให้แก่ข้า",
						"hindi": "हाँ। तुम्हारी प्यास मेरी शक्ति है। अब, सब मुझे अर्पित कर दो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물통… 이놈이 모든 걸 꾸민 거였군! 멈춰야 해!",
						"english": "The Water Bottle... this guy planned everything! We have to stop him!",
						"japanese": "水筒… こいつが全てを企んでいたのか！止めなければ！",
						"chinese": "水壶… 这家伙竟是幕后主使！必须阻止他！",
						"french": "La Gourde... c'est lui qui a tout manigancé ! Il faut l'arrêter !",
						"spanish": "La Cantimplora... ¡este tipo lo planeó todo! ¡Tenemos que detenerlo!",
						"vietnamese": "Cái bình nước… tên này đã sắp đặt mọi thứ! Phải ngăn hắn lại!",
						"thai": "กระบอกน้ำ… เจ้านี่เองที่เป็นคนบงการทุกอย่าง! ต้องหยุดมัน!",
						"hindi": "पानी की बोतल… इसी ने सब योजना बनाई थी! हमें इसे रोकना होगा!"
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "똑똑하군. 하지만 이미 늦었다.",
						"english": "Clever. But it's already too late.",
						"japanese": "賢いな。だが、もう遅い。",
						"chinese": "很聪明。但已经太迟了。",
						"french": "Astucieux. Mais il est déjà trop tard.",
						"spanish": "Inteligente. Pero ya es demasiado tarde.",
						"vietnamese": "Thông minh đấy. Nhưng đã quá muộn rồi.",
						"thai": "ฉลาดนี่. แต่ว่าสายเกินไปแล้ว",
						"hindi": "होशियार। लेकिन पहले ही बहुत देर हो चुकी है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "절대 포기하지 않아!",
						"english": "I'll never give up!",
						"japanese": "絶対に諦めない！",
						"chinese": "绝不放弃！",
						"french": "Je n'abandonnerai jamais !",
						"spanish": "¡Nunca me rendiré!",
						"vietnamese": "Tuyệt đối không bỏ cuộc!",
						"thai": "ไม่มีทางยอมแพ้!",
						"hindi": "मैं कभी हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"메마른 사막, 끝없는 갈증이 우리를 덮쳤다.",
			"저 멀리 빛나는 한 줄기 희망, 낡은 물통이었다.",
			"하지만 그 안에는, 새로운 갈증이 숨어 있었다.",
			"오아시스인 줄 알았던 곳에서, 우리는 의심에 잠식되기 시작했다."
		],
		"english": [
			"The arid desert, an endless thirst engulfed us.",
			"A glimmer of hope in the distance, an old water skin.",
			"But within it, a new thirst was hidden.",
			"In what we thought was an oasis, we began to be consumed by doubt."
		],
		"japanese": [
			"乾いた砂漠、果てしない渇きが私たちを襲った。",
			"遠くで輝く一筋の希望、それは古い水筒だった。",
			"しかし、その中には新たな渇きが隠されていた。",
			"オアシスだと思った場所で、私たちは疑念に蝕まれ始めた。"
		],
		"chinese": [
			"干旱的沙漠，无尽的 Gānhàn de shāmò, wújìn de kěwàng tūnshìle wǒmen.",
			"远处闪烁着一丝希望，一个旧水囊。",
			"但其中隐藏着一种新的渴望。",
			"在我们以为是绿洲的地方，我们开始被怀疑侵蚀。"
		],
		"french": [
			"Le désert aride, une soif infinie nous a engloutis.",
			"Au loin, une lueur d'espoir, une vieille gourde.",
			"Mais en son sein, une nouvelle soif se cachait.",
			"Dans ce que nous pensions être une oasis, nous avons commencé à être consumés par le doute."
		],
		"spanish": [
			"El desierto árido, una sed interminable nos envolvió.",
			"A lo lejos, un rayo de esperanza, un viejo odre de agua.",
			"Pero dentro de él, se escondía una nueva sed.",
			"En lo que creíamos que era un oasis, empezamos a ser consumidos por la duda."
		],
		"vietnamese": [
			"Sa mạc cằn cỗi, cơn khát vô tận bao trùm lấy chúng ta.",
			"Một tia hy vọng le lói từ xa, một túi nước cũ kỹ.",
			"Nhưng bên trong đó, một cơn khát mới đang ẩn giấu.",
			"Ở nơi chúng tôi nghĩ là ốc đảo, chúng tôi bắt đầu bị nghi ngờ xâm chiếm."
		],
		"thai": [
			"ทะเลทรายที่แห้งแล้ง ความกระหายไม่รู้จบกลืนกินเรา",
			"ประกายความหวังจากที่ไกลออกไป กระบอกน้ำเก่าๆ",
			"แต่ภายในนั้น ความกระหายใหม่กลับซ่อนอยู่",
			"ในสิ่งที่คิดว่าเป็นโอเอซิส เราเริ่มถูกความสงสัยกัดกิน"
		],
		"hindi": [
			"सूखा रेगिस्तान, एक अंतहीन प्यास ने हमें निगल लिया।",
			"दूर क्षितिज पर उम्मीद की एक किरण, एक पुरानी मशक।",
			"लेकिन उसके भीतर, एक नई प्यास छिपी थी।",
			"जिसे हम नखलिस्तान समझते थे, वहाँ हमें संदेह ने घेरना शुरू कर दिया।"
		]
	}
} as const;
