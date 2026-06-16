export const scenario_snowy_skalhorn_35_03 = {
	"scenario_id": "snowy_skalhorn_35_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 표면이 투명해졌다. 그 안에서 수많은 얼굴이 어른거렸다.",
						"english": "The surface of the horn cup became transparent. Within it, countless faces flickered.",
						"japanese": "角杯の表面が透明になった。その中で、無数の顔がちらついた。",
						"chinese": "号角杯的表面变得透明。无数张脸在其中晃动。",
						"french": "La surface de la corne devint transparente. À l'intérieur, d'innombrables visages vacillaient.",
						"spanish": "La superficie del cuerno se volvió transparente. Dentro, innumerables rostros parpadeaban.",
						"vietnamese": "Bề mặt chiếc sừng trở nên trong suốt. Vô số khuôn mặt lấp ló bên trong.",
						"thai": "ผิวของถ้วยเขาโปร่งใสขึ้น ภายในนั้นมีใบหน้ามากมายปรากฏให้เห็นวับๆ แวมๆ",
						"hindi": "सींग के प्याले की सतह पारदर्शी हो गई। उसके भीतर अनगिनत चेहरे झिलमिला रहे थे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체… 뭐지?",
						"english": "What in the world... is this?",
						"japanese": "これは一体…何だ？",
						"chinese": "这到底…是什么？",
						"french": "Mais qu'est-ce que… c'est ?",
						"spanish": "¿Qué demonios... es esto?",
						"vietnamese": "Cái quái gì… đây vậy?",
						"thai": "นี่มัน…อะไรกัน?",
						"hindi": "यह सब… क्या है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "하찮은 환영에 불과해. 영광을 좇는 자에겐 방해물일 뿐.",
						"english": "It's nothing but a trivial illusion. Just a hindrance to those seeking glory.",
						"japanese": "取るに足らない幻影だ。栄光を追う者にとっては、邪魔なだけだ。",
						"chinese": "这不过是微不足道的幻影。对于追求荣耀者而言，只是个障碍。",
						"french": "Ce n'est qu'une illusion insignifiante. Juste un obstacle pour ceux qui cherchent la gloire.",
						"spanish": "No es más que una ilusión trivial. Solo un estorbo para quienes buscan la gloria.",
						"vietnamese": "Chỉ là một ảo ảnh tầm thường. Chỉ là chướng ngại vật cho kẻ theo đuổi vinh quang.",
						"thai": "มันก็แค่ภาพลวงตาไร้สาระ เป็นเพียงสิ่งกีดขวางสำหรับผู้ที่แสวงหาความรุ่งโรจน์เท่านั้น",
						"hindi": "यह केवल एक तुच्छ भ्रम है। यश का पीछा करने वालों के लिए बस एक बाधा।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "환영이라고? 저 표정 좀 봐. 고통스러워하고 있잖아.",
						"english": "An illusion? Look at their expressions. They're suffering.",
						"japanese": "幻影だと？あの表情を見てみろ。苦しんでいるじゃないか。",
						"chinese": "幻影？你看看那些表情。他们正在遭受痛苦。",
						"french": "Une illusion ? Regarde leurs expressions. Ils souffrent.",
						"spanish": "¿Una ilusión? Mira sus expresiones. Están sufriendo.",
						"vietnamese": "Ảo ảnh ư? Nhìn biểu cảm của họ kìa. Họ đang đau khổ.",
						"thai": "ภาพลวงตาเหรอ? ดูสีหน้าพวกเขาสิ พวกเขากำลังทนทุกข์ทรมานอยู่นะ",
						"hindi": "एक भ्रम? उनके चेहरे तो देखो। वे दर्द में हैं।"
					}
				},
				{
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "… !",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런 건 처음이야. 싸우고 싶지 않군.",
						"english": "This is new to me. I don't want to fight.",
						"japanese": "こんなのは初めてだ。戦いたくないな。",
						"chinese": "这还是第一次。我不想战斗。",
						"french": "C'est une première pour moi. Je ne veux pas me battre.",
						"spanish": "Esto es nuevo para mí. No quiero pelear.",
						"vietnamese": "Đây là lần đầu tiên tôi gặp chuyện này. Tôi không muốn chiến đấu.",
						"thai": "นี่เป็นครั้งแรกเลย ฉันไม่อยากต่อสู้",
						"hindi": "यह मेरे लिए नया है। मैं लड़ना नहीं चाहता।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "싸우고 싶지 않다고? 네가?",
						"english": "You don't want to fight? You?",
						"japanese": "戦いたくないだと？お前が？",
						"chinese": "你不想战斗？你？",
						"french": "Tu ne veux pas te battre ? Toi ?",
						"spanish": "¿No quieres luchar? ¿Tú?",
						"vietnamese": "Ngươi không muốn chiến đấu? Ngươi sao?",
						"thai": "ไม่อยากสู้เหรอ? นายเนี่ยนะ?",
						"hindi": "तुम लड़ना नहीं चाहते? तुम?"
					}
				},
				{
					"content": {
						"korean": "뿔잔 속 얼굴들이 더욱 또렷해졌다. 무언가 애타게 호소하듯이.",
						"english": "The faces in the horn cup became clearer, as if pleading desperately.",
						"japanese": "角杯の中の顔が、何か必死に訴えかけるように、さらに鮮明になった。",
						"chinese": "角杯中的面孔变得更加清晰，仿佛在焦急地恳求着什么。",
						"french": "Les visages dans la coupe en corne devinrent plus clairs, comme s'ils suppliaient désespérément.",
						"spanish": "Los rostros en el cuerno se hicieron más claros, como si suplicaran desesperadamente.",
						"vietnamese": "Những khuôn mặt trong sừng trở nên rõ nét hơn, như thể đang khẩn cầu tuyệt vọng.",
						"thai": "ใบหน้าในถ้วยเขาชัดเจนขึ้น ราวกับกำลังวิงวอนอย่างสุดชีวิต",
						"hindi": "सींग के प्याले में चेहरे और स्पष्ट हो गए, मानो हताशा से गुहार लगा रहे हों।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…영광? 허상에 불과해 보이는군.",
						"english": "...Glory? Seems like nothing but an illusion.",
						"japanese": "…栄光？虚像に過ぎないようだな。",
						"chinese": "……荣耀？看来不过是虚幻。",
						"french": "...La gloire ? Cela ne semble être qu'une illusion.",
						"spanish": "¿...Gloria? Parece nada más que una ilusión.",
						"vietnamese": "...Vinh quang? Dường như chỉ là một ảo ảnh.",
						"thai": "...เกียรติยศ? ดูเหมือนเป็นเพียงภาพลวงตา",
						"hindi": "...गौरव? यह तो केवल एक भ्रम लगता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "무언가 전하려는 것 같아.",
						"english": "It seems to be trying to convey something.",
						"japanese": "何か伝えようとしているようだ。",
						"chinese": "它似乎想传达什么。",
						"french": "Cela semble vouloir transmettre quelque chose.",
						"spanish": "Parece querer transmitir algo.",
						"vietnamese": "Dường như nó đang muốn truyền đạt điều gì đó.",
						"thai": "ดูเหมือนกำลังพยายามสื่อสารบางอย่าง",
						"hindi": "यह कुछ बताना चाहता है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이들은… 갇혀 있어. 벗어나고 싶어 하는군.",
						"english": "They are... trapped. They want to escape.",
						"japanese": "彼らは…閉じ込められている。抜け出したがっているな。",
						"chinese": "他们……被困住了。他们想逃离。",
						"french": "Ils sont... piégés. Ils veulent s'échapper.",
						"spanish": "Están... atrapados. Quieren escapar.",
						"vietnamese": "Họ... bị mắc kẹt. Họ muốn thoát ra.",
						"thai": "พวกเขา... ถูกขังไว้ พวกเขาอยากหลบหนี",
						"hindi": "वे... फँसे हुए हैं। वे भागना चाहते हैं।"
					}
				},
				{
					"content": {
						"korean": "갇혀 있다고?",
						"english": "Trapped?",
						"japanese": "閉じ込められていると？",
						"chinese": "被困住了？",
						"french": "Piégés ?",
						"spanish": "¿Atrapados?",
						"vietnamese": "Bị mắc kẹt sao?",
						"thai": "ถูกขังไว้เหรอ?",
						"hindi": "फँसे हुए?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 영광보다 중요한 건, 이런 절규를 외면하지 않는 것이다.",
						"english": "Yes. More important than glory is not to turn away from these cries.",
						"japanese": "そうだ。栄光よりも重要なのは、この絶叫から目を背けないことだ。",
						"chinese": "是的。比荣耀更重要的是，不要对这些绝望的呼喊视而不见。",
						"french": "Oui. Plus important que la gloire, c'est de ne pas ignorer ces cris désespérés.",
						"spanish": "Sí. Más importante que la gloria es no ignorar estos gritos.",
						"vietnamese": "Đúng vậy. Điều quan trọng hơn vinh quang là không quay lưng lại với những tiếng kêu gào này.",
						"thai": "ใช่ สิ่งที่สำคัญกว่าเกียรติยศคือการไม่เมินเฉยต่อเสียงกรีดร้องเหล่านี้",
						"hindi": "हाँ। गौरव से भी ज़्यादा महत्वपूर्ण है इन चीखों से मुँह न मोड़ना।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "네가 이런 말을 할 줄이야.",
						"english": "I didn't expect to hear you say such a thing.",
						"japanese": "お前がそんなことを言うとはな。",
						"chinese": "真没想到你会说出这种话。",
						"french": "Je ne m'attendais pas à t'entendre dire une telle chose.",
						"spanish": "No esperaba que dijeras algo así.",
						"vietnamese": "Không ngờ ngươi lại nói ra những lời này.",
						"thai": "ไม่นึกเลยว่านายจะพูดแบบนี้",
						"hindi": "मुझे तुमसे ऐसी बात की उम्मीद नहीं थी।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "강함이란, 결국 약자를 지키는 것이니까.",
						"english": "Strength, after all, means protecting the weak.",
						"japanese": "強さとは、結局のところ弱者を守ることだからな。",
						"chinese": "力量，终究是为了保护弱者。",
						"french": "La force, après tout, signifie protéger les faibles.",
						"spanish": "La fuerza, al fin y al cabo, significa proteger a los débiles.",
						"vietnamese": "Sức mạnh, rốt cuộc, là để bảo vệ kẻ yếu.",
						"thai": "ความแข็งแกร่ง แท้จริงแล้วคือการปกป้องผู้อ่อนแอ",
						"hindi": "ताकत का मतलब, आखिरकार, कमजोरों की रक्षा करना है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "얼굴들이 더욱 선명해질수록, 뿔잔의 노래가 비명처럼 갈라졌다.",
						"english": "As the faces grew clearer, the horn cup's song fractured into a scream.",
						"japanese": "顔がさらに鮮明になるにつれて、角杯の歌は悲鳴のように裂けた。",
						"chinese": "随着面孔变得更加清晰，角杯的歌声像尖叫一样撕裂开来。",
						"french": "À mesure que les visages devenaient plus clairs, le chant de la coupe en corne se brisa en un cri.",
						"spanish": "A medida que los rostros se hacían más claros, el canto del cuerno se quebró en un grito.",
						"vietnamese": "Khi những khuôn mặt trở nên rõ ràng hơn, bài hát của sừng vỡ ra thành một tiếng hét.",
						"thai": "ยิ่งใบหน้าชัดเจนขึ้นเท่าไหร่ เพลงของถ้วยเขาก็ยิ่งแตกออกเป็นเสียงกรีดร้อง",
						"hindi": "जैसे-जैसे चेहरे और स्पष्ट होते गए, सींग के प्याले का गीत चीख में बदल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 고통… 더 이상 두고 볼 수 없어.",
						"english": "This pain... I can't stand by any longer.",
						"japanese": "この苦痛…もう見ていられない。",
						"chinese": "这份痛苦……我再也无法袖手旁观了。",
						"french": "Cette douleur... Je ne peux plus la supporter.",
						"spanish": "Este dolor... no puedo seguir soportándolo.",
						"vietnamese": "Nỗi đau này... tôi không thể khoanh tay đứng nhìn nữa.",
						"thai": "ความเจ็บปวดนี้... ทนดูต่อไปไม่ไหวแล้ว",
						"hindi": "यह पीड़ा... मैं अब और नहीं सह सकता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체가 뭔지 알아내야 해.",
						"english": "I must discover their true nature.",
						"japanese": "その正体を突き止めねば。",
						"chinese": "我必须查明他们的真面目。",
						"french": "Je dois découvrir leur véritable nature.",
						"spanish": "Debo descubrir su verdadera naturaleza.",
						"vietnamese": "Tôi phải tìm ra bản chất thật của chúng.",
						"thai": "ต้องสืบให้รู้ว่าพวกมันคืออะไร",
						"hindi": "मुझे इनकी असलियत जाननी होगी।"
					}
				},
				{
					"content": {
						"korean": "이들을 억압하는 자는 누구냐? 내가 그 강함의 끝을 보여주지.",
						"english": "Who oppresses them? I will show them the limits of their strength.",
						"japanese": "彼らを抑圧する者は誰だ？その強さの限界を見せてやる。",
						"chinese": "谁在压迫他们？我会让他们见识到力量的极限。",
						"french": "Qui les opprime ? Je leur montrerai les limites de leur force.",
						"spanish": "¿Quién los oprime? Les mostraré los límites de su fuerza.",
						"vietnamese": "Ai đang áp bức họ? Ta sẽ cho chúng thấy giới hạn sức mạnh của chúng.",
						"thai": "ใครกันที่กดขี่พวกเขานี้? ข้าจะแสดงให้เห็นถึงจุดสิ้นสุดของความแข็งแกร่งนั้นเอง",
						"hindi": "कौन है जो इन्हें दबा रहा है? मैं उन्हें उनकी शक्ति की सीमा दिखाऊंगा।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이 끝은… 시작일 뿐….",
						"english": "Heh heh... This end... is just the beginning...",
						"japanese": "クク…この終わりは…始まりに過ぎぬ…",
						"chinese": "呵呵……这个结局……只是个开始……",
						"french": "Hé hé... Cette fin... n'est que le début...",
						"spanish": "Je je... Este final... es solo el principio...",
						"vietnamese": "Khà khà... Cái kết này... chỉ là khởi đầu thôi...",
						"thai": "ฮึๆ... จุดจบนี้... เป็นเพียงจุดเริ่มต้นเท่านั้น...",
						"hindi": "हँ हँ... यह अंत... केवल शुरुआत है..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}가 쓰러지자, 뿔잔 속 비명 같던 노래가 잠시 잦아들었다.",
						"english": "As {random_boss} fell, the shriek-like song from within the horn-chalice briefly subsided.",
						"japanese": "{random_boss}が倒れると、角杯の中から響き渡っていた悲鳴のような歌は、一時的に静まった。",
						"chinese": "随着{random_boss}倒下，号角杯中那如同尖叫般的歌声暂时平息了。",
						"french": "Alors que {random_boss} tombait, le chant semblable à un cri provenant du calice en corne s'est brièvement estompé.",
						"spanish": "Cuando {random_boss} cayó, el canto similar a un grito desde el cáliz de cuerno se calmó brevemente.",
						"vietnamese": "Khi {random_boss} gục ngã, bài hát tựa tiếng thét từ trong chiếc sừng-chén tạm thời lắng xuống.",
						"thai": "เมื่อ {random_boss} ล้มลง บทเพลงที่คล้ายเสียงกรีดร้องจากภายในถ้วยเขาก็เงียบลงชั่วขณะ",
						"hindi": "{random_boss} के गिरने पर, हॉर्न-चैलिस के भीतर से आ रहा चीख जैसा गाना कुछ समय के लिए शांत हो गया।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "겨우 시작이라고? 그렇다면, 이들을 구원할 때까지 멈추지 않겠다.",
						"english": "Just the beginning, you say? Then I won't stop until I've saved them.",
						"japanese": "始まりに過ぎないだと？ならば、彼らを救い出すまで止まらない。",
						"chinese": "仅仅是开始？那么，在拯救他们之前，我绝不会停下。",
						"french": "Juste le début, dis-tu ? Alors je ne m'arrêterai pas tant que je ne les aurai pas sauvés.",
						"spanish": "¿Solo el principio, dices? Entonces no me detendré hasta que los haya salvado.",
						"vietnamese": "Mới chỉ là khởi đầu thôi sao? Vậy thì, tôi sẽ không dừng lại cho đến khi cứu được họ.",
						"thai": "แค่จุดเริ่มต้นเท่านั้นหรือ? ถ้าอย่างนั้น ข้าจะไม่หยุดจนกว่าจะช่วยพวกเขาได้",
						"hindi": "बस शुरुआत है, तुम कहते हो? तो मैं उन्हें बचाने तक नहीं रुकूँगा।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔의 표면은 더욱 투명해졌다. 다음 단서를 기다리는 것처럼.",
						"english": "The surface of the horn-chalice became even more transparent, as if awaiting the next clue.",
						"japanese": "角杯の表面はさらに透明になり、次の手がかりを待っているかのようだった。",
						"chinese": "号角杯的表面变得更加透明，仿佛在等待下一个线索。",
						"french": "La surface du calice en corne devint encore plus transparente, comme si elle attendait le prochain indice.",
						"spanish": "La superficie del cáliz de cuerno se volvió aún más transparente, como si esperara la siguiente pista.",
						"vietnamese": "Bề mặt của chiếc sừng-chén trở nên trong suốt hơn, như thể đang chờ đợi manh mối tiếp theo.",
						"thai": "พื้นผิวของถ้วยเขาก็โปร่งใสขึ้น ราวกับกำลังรอเบาะแสต่อไป",
						"hindi": "हॉर्न-चैलिस की सतह और भी पारदर्शी हो गई, जैसे अगले सुराग का इंतजार कर रही हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직도 모르는가? 너희는 한낱 꼭두각시일 뿐.",
						"english": "Still don't understand? You're nothing but puppets.",
						"japanese": "まだ分からないのか？お前たちはただの操り人形に過ぎない。",
						"chinese": "还不明白吗？你们不过是一群傀儡罢了。",
						"french": "Vous ne comprenez toujours pas ? Vous n'êtes que de simples marionnettes.",
						"spanish": "¿Todavía no lo entienden? No son más que meras marionetas.",
						"vietnamese": "Vẫn chưa hiểu sao? Các ngươi chẳng qua chỉ là những con rối.",
						"thai": "ยังไม่เข้าใจอีกรึไง? พวกเจ้าเป็นแค่หุ่นเชิดเท่านั้นเอง",
						"hindi": "अभी भी नहीं समझे? तुम सब बस कठपुतलियां हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 물러설 수는 없어. 반드시 이들을 구해낼 것이다.",
						"english": "I can't retreat like this. I must save them.",
						"japanese": "このまま引き下がるわけにはいかない。必ず彼らを救い出す。",
						"chinese": "不能就这样退缩。我一定会救出他们。",
						"french": "Je ne peux pas reculer ainsi. Je les sauverai à tout prix.",
						"spanish": "No puedo retroceder así. Debo salvarlos.",
						"vietnamese": "Không thể cứ thế mà lùi bước. Ta nhất định sẽ cứu họ.",
						"thai": "ฉันถอยไม่ได้หรอกนะ จะต้องช่วยพวกเขาให้ได้แน่นอน",
						"hindi": "मैं ऐसे पीछे नहीं हट सकता। मैं इन्हें निश्चित रूप से बचाऊंगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "포기하지 않아.",
						"english": "I won't give up.",
						"japanese": "諦めない。",
						"chinese": "我不会放弃。",
						"french": "Je n'abandonnerai pas.",
						"spanish": "No me rendiré.",
						"vietnamese": "Tôi sẽ không bỏ cuộc.",
						"thai": "ฉันไม่ยอมแพ้หรอก",
						"hindi": "मैं हार नहीं मानूंगा।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "감히 여기까지 오다니. 어리석은 자들.",
						"english": "How dare you come this far. Foolish ones.",
						"japanese": "よくもここまで来たな。愚か者め。",
						"chinese": "竟敢来到这里。愚蠢之徒。",
						"french": "Comment osez-vous venir si loin. Imbéciles.",
						"spanish": "Cómo os atrevéis a llegar tan lejos. Necios.",
						"vietnamese": "Ngươi dám đến đây sao. Những kẻ ngu ngốc.",
						"thai": "บังอาจมาถึงที่นี่ได้ไง พวกโง่เอ๊ย",
						"hindi": "तुम यहाँ तक आने की हिम्मत कैसे हुई। मूर्खों।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이들을 가둔 자인가? 그 죄를 갚게 해주마.",
						"english": "Are you the one who imprisoned them? I will make you pay for your sins.",
						"japanese": "お前が彼らを閉じ込めた者か？その罪を償わせてやる。",
						"chinese": "你就是囚禁他们的人吗？我会让你付出代价。",
						"french": "Es-tu celui qui les a emprisonnés ? Je te ferai payer tes péchés.",
						"spanish": "¿Eres tú quien los ha encarcelado? Te haré pagar por tus pecados.",
						"vietnamese": "Ngươi là kẻ đã giam cầm họ sao? Ta sẽ khiến ngươi phải trả giá cho tội lỗi của mình.",
						"thai": "เจ้าคือคนที่ขังพวกเขาไว้หรือ? ข้าจะทำให้เจ้าชดใช้บาปนั้น",
						"hindi": "क्या तुम वही हो जिसने इन्हें कैद किया? मैं तुम्हें तुम्हारे पापों का हिसाब चुकाने दूँगा।"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리의 영광은 네가 막을 수 없어.",
						"english": "You cannot stop our glory.",
						"japanese": "我らの栄光は、お前には止められない。",
						"chinese": "你无法阻止我们的荣耀。",
						"french": "Tu ne peux pas arrêter notre gloire.",
						"spanish": "No puedes detener nuestra gloria.",
						"vietnamese": "Ngươi không thể ngăn cản vinh quang của chúng ta.",
						"thai": "เจ้าไม่อาจหยุดยั้งเกียรติของเราได้",
						"hindi": "तुम हमारी महिमा को रोक नहीं सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔 속, 흐릿했던 그림자들이 모습을 드러냈다.",
			"고통에 일그러진 얼굴들. 무언가를 호소하는 눈빛.",
			"영광을 좇던 전사는 낯선 감각에 휩싸였다.",
			"그들의 비명이, 그의 심장을 파고들기 시작했다."
		],
		"english": [
			"Within the horn, hazy shadows took form.",
			"Faces contorted in pain. Eyes pleading for something.",
			"The warrior, chasing glory, was swept by an unfamiliar sensation.",
			"Their screams began to pierce his heart."
		],
		"japanese": [
			"角杯の中で、ぼんやりとした影たちが姿を現した。",
			"苦痛に歪んだ顔々。何かを訴えかける眼差し。",
			"栄光を追い求める戦士は、見慣れない感覚に包まれた。",
			"彼らの悲鳴が、彼の心臓を抉り始めた。"
		],
		"chinese": [
			"在号角杯中，模糊的影子显现出来。",
			"痛苦扭曲的面孔。眼神中充满了哀求。",
			"追逐荣耀的战士被一种陌生的感觉所笼罩。",
			"他们的尖叫声开始刺穿他的心脏。"
		],
		"french": [
			"Dans la corne, des ombres floues prirent forme.",
			"Des visages tordus par la douleur. Des regards suppliants.",
			"Le guerrier, en quête de gloire, fut envahi par une sensation étrange.",
			"Leurs cris commencèrent à transpercer son cœur."
		],
		"spanish": [
			"Dentro del cuerno, sombras borrosas comenzaron a aparecer.",
			"Rostros desfigurados por el dolor. Miradas que suplicaban algo.",
			"El guerrero, persiguiendo la gloria, fue envuelto por una sensación desconocida.",
			"Sus gritos comenzaron a perforarle el corazón."
		],
		"vietnamese": [
			"Trong chiếc sừng, những bóng mờ dần hiện rõ.",
			"Những khuôn mặt méo mó vì đau đớn. Ánh mắt cầu xin điều gì đó.",
			"Chiến binh theo đuổi vinh quang bị cuốn vào một cảm giác xa lạ.",
			"Tiếng thét của họ bắt đầu xuyên thấu trái tim anh ta."
		],
		"thai": [
			"ในถ้วยเขา สารัตถะเงาเลือนรางได้ปรากฏตัวขึ้น",
			"ใบหน้าที่บิดเบี้ยวด้วยความเจ็บปวด ดวงตาที่วิงวอนขอบางสิ่ง",
			"นักรบผู้ไล่ล่าความรุ่งโรจน์ถูกโอบล้อมด้วยความรู้สึกที่ไม่คุ้นเคย",
			"เสียงกรีดร้องของพวกเขาเริ่มแทงทะลุหัวใจของเขา"
		],
		"hindi": [
			"सींग के प्याले में, धुंधली परछाइयाँ दिखाई देने लगीं।",
			"दर्द से विकृत चेहरे। कुछ गुहार करती आँखें।",
			"यश का पीछा करने वाला योद्धा एक अपरिचित एहसास में डूब गया।",
			"उनकी चीखें उसके दिल को चीरने लगीं।"
		]
	}
} as const;
