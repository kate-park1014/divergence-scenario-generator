export const scenario_snowy_guzzler_79_04 = {
	"scenario_id": "snowy_guzzler_79_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대 유적의 문이 열렸다. 희미한 빛이 망자의 흔적을 비춘다.",
						"english": "The ancient ruins' gate opened. A faint light illuminates the traces of the dead.",
						"japanese": "古代遺跡の門が開いた。微かな光が死者の痕跡を照らす。",
						"chinese": "古代遗迹的大门打开了。微弱的光线照亮了死者的痕迹。",
						"french": "La porte des ruines antiques s'est ouverte. Une faible lumière éclaire les traces des morts.",
						"spanish": "La puerta de las ruinas antiguas se abrió. Una luz tenue ilumina las huellas de los muertos.",
						"vietnamese": "Cánh cổng của di tích cổ đại đã mở ra. Một ánh sáng mờ ảo chiếu rọi dấu vết của người chết.",
						"thai": "ประตูซากปรักหักพังโบราณเปิดออก แสงสลัวส่องสว่างร่องรอยของผู้ตาย",
						"hindi": "प्राचीन खंडहरों का द्वार खुला। एक धुंधली रोशनी मृतकों के निशानों को रोशन करती है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그대들을 기다리고 있었다.",
						"english": "...I was waiting for you all.",
						"japanese": "…あなたたちを待っていた。",
						"chinese": "……我一直在等你们。",
						"french": "...Je vous attendais.",
						"spanish": "...Los estaba esperando.",
						"vietnamese": "...Ta đã chờ đợi các ngươi.",
						"thai": "...ฉันกำลังรอพวกคุณอยู่",
						"hindi": "...मैं तुम सबका इंतजार कर रहा था।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "您是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngài là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이름 없는 자들의 목소리. 뿔잔에 갇힌 영혼들의 마지막 염원.",
						"english": "The voices of the nameless. The last wishes of souls trapped in the Horned Chalice.",
						"japanese": "名もなき者たちの声。角杯に囚われた魂たちの最後の願い。",
						"chinese": "无名者的声音。被困在角杯中的灵魂的最后愿望。",
						"french": "Les voix des sans-noms. Les derniers vœux des âmes piégées dans le Calice Cornu.",
						"spanish": "Las voces de los sin nombre. Los últimos deseos de las almas atrapadas en el Cáliz Cornudo.",
						"vietnamese": "Tiếng nói của những kẻ vô danh. Khát vọng cuối cùng của những linh hồn bị mắc kẹt trong Chiếc Cốc Sừng.",
						"thai": "เสียงของผู้วายชนม์ ความปรารถนาสุดท้ายของดวงวิญญาณที่ถูกขังอยู่ในจอกเขา",
						"hindi": "बेनामों की आवाजें। सींग वाले प्याले में फंसी आत्माओं की आखिरी इच्छाएं।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "뿔잔은 원래… 명예로운 축배였다. 전사들의 맹세였지.",
						"english": "The Horned Chalice was originally... an honorable toast. A warrior's vow.",
						"japanese": "角杯は元々… 名誉ある祝杯だった。戦士たちの誓いだったのだ。",
						"chinese": "角杯最初是……一场光荣的祝酒。战士们的誓言。",
						"french": "Le Calice Cornu était à l'origine... un toast honorable. Le vœu des guerriers.",
						"spanish": "El Cáliz Cornudo era originalmente... un brindis honorable. Un juramento de guerreros.",
						"vietnamese": "Chiếc Cốc Sừng ban đầu là... một lời chúc mừng danh dự. Lời thề của các chiến binh.",
						"thai": "จอกเขาเดิมทีเป็น... การดื่มอวยพรที่ทรงเกียรติ คำสาบานของนักรบ",
						"hindi": "सींग वाला प्याला मूल रूप से... एक सम्माननीय टोस्ट था। योद्धाओं की प्रतिज्ञा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세요?",
						"english": "A vow?",
						"japanese": "誓いですか？",
						"chinese": "誓言？",
						"french": "Un vœu ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề ư?",
						"thai": "คำสาบาน?",
						"hindi": "एक प्रतिज्ञा?"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "허나, 그 맹세는 변질되었다. 과도한 욕망이 그 본질을 집어삼켰지.",
						"english": "But that oath was corrupted. Excessive desire devoured its essence.",
						"japanese": "だが、その誓いは変質した。過度な欲望がその本質を食い尽くしたのだ。",
						"chinese": "然而，那个誓言变质了。过度的欲望吞噬了它的本质。",
						"french": "Cependant, ce serment fut corrompu. Un désir excessif en dévora l'essence.",
						"spanish": "Sin embargo, ese juramento se corrompió. Un deseo excesivo devoró su esencia.",
						"vietnamese": "Tuy nhiên, lời thề đó đã biến chất. Ham muốn quá mức đã nuốt chửng bản chất của nó.",
						"thai": "แต่คำสัตย์สาบานนั้นถูกบิดเบือนไป ความปรารถนาที่มากเกินไปได้กลืนกินแก่นแท้ของมัน",
						"hindi": "किन्तु, वह शपथ दूषित हो गई। अत्यधिक लालसा ने उसके सार को निगल लिया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "욕망이라니…",
						"english": "Desire, you say…",
						"japanese": "欲望だと…",
						"chinese": "欲望…？",
						"french": "Le désir, dites-vous…",
						"spanish": "¿Deseo…?",
						"vietnamese": "Ham muốn ư…",
						"thai": "ความปรารถนาหรือ…",
						"hindi": "लालसा भला…"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "영원한 환락, 끝없는 축배. 뿔잔은 영광을 좇다 길을 잃었다.",
						"english": "Eternal revelry, endless toasts. The Horn lost its way chasing glory.",
						"japanese": "永遠の歓楽、終わりのない祝杯。角杯は栄光を追い求めるうち、道を見失った。",
						"chinese": "永恒的欢愉，无尽的祝酒。角杯在追逐荣耀中迷失了方向。",
						"french": "Fêtes éternelles, toasts infinis. La Corne s'est perdue en poursuivant la gloire.",
						"spanish": "Júbilo eterno, brindis sin fin. El Cuerno se perdió persiguiendo la gloria.",
						"vietnamese": "Niềm vui vĩnh cửu, những lời chúc tụng không ngừng. Chiếc Sừng đã lạc lối khi đuổi theo vinh quang.",
						"thai": "ความสุขสำราญชั่วนิรันดร์ การดื่มฉลองไม่รู้จบ แตรนอสหลงทางขณะไล่ตามความรุ่งโรจน์",
						"hindi": "शाश्वत उल्लास, अनंत शुभकामनाएँ। हॉर्न महिमा का पीछा करते हुए भटक गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 이렇게 된 건가요?",
						"english": "Is that why it became like this?",
						"japanese": "それで、こうなったのですか？",
						"chinese": "所以才变成这样了吗？",
						"french": "C'est pour cela que c'est devenu ainsi ?",
						"spanish": "¿Es por eso que se volvió así?",
						"vietnamese": "Thế nên mọi chuyện mới ra nông nỗi này sao?",
						"thai": "นั่นคือเหตุผลที่มันกลายเป็นแบบนี้ใช่ไหม?",
						"hindi": "तो क्या इसलिए ऐसा हुआ?"
					}
				},
				{
					"content": {
						"korean": "명예는 사라지고, 껍데기만 남은 기쁨. 그것이 지금의 뿔잔이다.",
						"english": "Honor gone, only a shell of joy remains. That is the Horn now.",
						"japanese": "名誉は失われ、空っぽの喜びだけが残る。それが今の角杯だ。",
						"chinese": "荣耀消逝，只剩下空洞的喜悦。那就是现在的角杯。",
						"french": "L'honneur disparu, seule une coquille de joie demeure. Tel est le Cornet à présent.",
						"spanish": "El honor se fue, solo queda una cáscara de alegría. Ese es el Cuerno ahora.",
						"vietnamese": "Danh dự biến mất, chỉ còn lại niềm vui rỗng tuếch. Đó là chiếc Sừng bây giờ.",
						"thai": "เกียรติยศหายไป เหลือเพียงความสุขที่ว่างเปล่า นั่นคือสิ่งที่แตรนอสเป็นตอนนี้",
						"hindi": "सम्मान चला गया, केवल खुशी का एक खोल बचा है। यही अब हॉर्न है।"
					},
					"speaker": "hild",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "뿔잔의 진정한 본질은… 영원한 공허함이다.",
						"english": "The true essence of the Horn is… eternal emptiness.",
						"japanese": "角杯の真のDは…永遠の虚しさだ。",
						"chinese": "角杯的真正本质是…永恒的空虚。",
						"french": "La véritable essence de la Corne est… le vide éternel.",
						"spanish": "La verdadera esencia del Cuerno es… el vacío eterno.",
						"vietnamese": "Bản chất thực sự của chiếc Sừng là… sự trống rỗng vĩnh cửu.",
						"thai": "แก่นแท้ที่แท้จริงของแตรนอสคือ... ความว่างเปล่าชั่วนิรันดร์",
						"hindi": "हॉर्न का सच्चा सार… शाश्वत शून्यता है।"
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "공허함…?",
						"english": "Emptiness…?",
						"japanese": "虚しさ…？",
						"chinese": "空虚…？",
						"french": "Le vide… ?",
						"spanish": "¿Vacío…?",
						"vietnamese": "Trống rỗng…?",
						"thai": "ความว่างเปล่า…?",
						"hindi": "शून्यता…?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "과거의 영광을 잃은 고독. 채워지지 않는 갈증이 이 연회를 만들었지.",
						"english": "Solitude having lost past glory. An unquenchable thirst created this feast.",
						"japanese": "過去の栄光を失った孤独。満たされない渇望がこの宴を作り出したのだ。",
						"chinese": "失去昔日荣耀的孤独。永不满足的渴望造就了这场盛宴。",
						"french": "La solitude ayant perdu sa gloire passée. Une soif inextinguible a créé ce festin.",
						"spanish": "La soledad que ha perdido la gloria pasada. Una sed insaciable creó este festín.",
						"vietnamese": "Sự cô độc đã đánh mất vinh quang trong quá khứ. Một cơn khát không thể nguôi đã tạo ra bữa tiệc này.",
						"thai": "ความโดดเดี่ยวที่สูญเสียความรุ่งโรจน์ในอดีต ความกระหายที่ไม่รู้จักพอนี้สร้างงานเลี้ยงนี้ขึ้นมา",
						"hindi": "अतीत की महिमा खोने वाला अकेलापन। एक अतृप्त प्यास ने इस दावत को बनाया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그럼 뿔잔도… 외로운 건가요?",
						"english": "Then is the Horn… lonely too?",
						"japanese": "では角杯も…寂しいのですか？",
						"chinese": "那么角杯也…很寂寞吗？",
						"french": "Alors la Corne est-elle… solitaire aussi ?",
						"spanish": "¿Entonces el Cuerno también… está solo?",
						"vietnamese": "Vậy chiếc Sừng cũng… cô đơn sao?",
						"thai": "ถ้าอย่างนั้นแตรนอสก็… เหงาด้วยหรือ?",
						"hindi": "तो क्या हॉर्न भी… अकेला है?"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그대가 직감하는 것이 진실이다.",
						"english": "…What you intuit is the truth.",
						"japanese": "…お前が直感するものが真実だ。",
						"chinese": "…你所直觉到的，就是真相。",
						"french": "…Ce que tu pressens est la vérité.",
						"spanish": "…Lo que intuyes es la verdad.",
						"vietnamese": "…Điều ngươi trực cảm chính là sự thật.",
						"thai": "…สิ่งที่เจ้าสังหรณ์ใจคือความจริง",
						"hindi": "…जो तुम अंतर्ज्ञान से समझते हो, वही सत्य है।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…외로움.",
						"english": "...Loneliness.",
						"japanese": "「…孤独。」",
						"chinese": "“……孤独。”",
						"french": "...Solitude.",
						"spanish": "...Soledad.",
						"vietnamese": "...Cô đơn.",
						"thai": "...ความเหงา",
						"hindi": "...अकेलापन।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 그대에게 남은 건 진실을 마주할 용기뿐.",
						"english": "All that remains for you now is the courage to face the truth.",
						"japanese": "「今、あなたに残されたのは、真実と向き合う勇気だけだ。」",
						"chinese": "“现在，你所剩的只有面对真相的勇气。”",
						"french": "Il ne te reste plus que le courage d'affronter la vérité.",
						"spanish": "Ahora, todo lo que te queda es el valor de enfrentar la verdad.",
						"vietnamese": "Giờ đây, tất cả những gì còn lại cho ngươi là lòng dũng cảm để đối mặt với sự thật.",
						"thai": "ตอนนี้สิ่งเดียวที่เหลืออยู่สำหรับเจ้าคือความกล้าที่จะเผชิญหน้ากับความจริง",
						"hindi": "अब तुम्हें सिर्फ़ सच का सामना करने का साहस चाहिए।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "알고 있습니다.",
						"english": "I know.",
						"japanese": "「知っています。」",
						"chinese": "“我知道。”",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Tôi biết.",
						"thai": "ข้าทราบแล้ว",
						"hindi": "मुझे पता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 심장으로 향해라. 그 안에서 모든 것이 시작되고 끝난다.",
						"english": "Head to the heart of the Horned Chalice. There, all begins and ends.",
						"japanese": "「角杯の心臓へ向かえ。その中で、全てが始まり、全てが終わる。」",
						"chinese": "“前往角杯之心。一切在那里开始，也终结。”",
						"french": "Dirige-toi vers le cœur du Calice Cornu. Là, tout commence et tout finit.",
						"spanish": "Dirígete al corazón del Cáliz Cornudo. Allí, todo comienza y termina.",
						"vietnamese": "Hãy đi đến trái tim của Chiếc Ly Sừng. Ở đó, mọi thứ bắt đầu và kết thúc.",
						"thai": "จงมุ่งหน้าสู่ใจกลางของถ้วยเขา สรรพสิ่งเริ่มต้นและสิ้นสุดที่นั่น",
						"hindi": "सिंग वाले प्याले के दिल की ओर बढ़ो। वहीं सब कुछ शुरू होता है और खत्म भी।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 유적의 끝, 거대한 그림자가 기다리고 있었다.",
						"english": "At the end of the faint ruins, a colossal shadow awaited.",
						"japanese": "「朧げな遺跡の果てに、巨大な影が待ち構えていた。」",
						"chinese": "“在模糊的遗迹尽头，一个巨大的身影正在等候。”",
						"french": "Au bout des ruines ténues, une ombre colossale attendait.",
						"spanish": "Al final de las ruinas débiles, una sombra colosal esperaba.",
						"vietnamese": "Ở cuối tàn tích mờ ảo, một bóng đen khổng lồ đang chờ đợi.",
						"thai": "ที่ปลายสุดของซากปรักหักพังอันเลือนราง เงาขนาดมหึมารอคอยอยู่",
						"hindi": "धुंधले खंडहरों के अंत में, एक विशाल परछाई इंतज़ार कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "「…」",
						"chinese": "“……”",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "왔는가, 어리석은 자여. 이 연회를 멈추러?",
						"english": "You've come, foolish one. To stop this feast?",
						"japanese": "「来たか、愚か者め。この宴を止めに？」",
						"chinese": "“你来了，愚蠢的家伙。来阻止这场盛宴吗？”",
						"french": "Es-tu venu, insensé ? Pour arrêter ce festin ?",
						"spanish": "¿Has venido, necio? ¿A detener este festín?",
						"vietnamese": "Ngươi đến rồi sao, kẻ ngu muội. Để ngăn bữa tiệc này ư?",
						"thai": "มาแล้วรึ เจ้าคนโง่ มาเพื่อหยุดงานเลี้ยงนี้งั้นหรือ?",
						"hindi": "आ गए, मूर्ख! क्या इस दावत को रोकने आए हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "「お前がこの全てを企んだのか？」",
						"chinese": "“这一切都是你策划的吗？”",
						"french": "Est-ce toi qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने यह सब रचा है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "꾸며? 난 그저 갈증을 채워줬을 뿐. 잊혀진 영광에 취하게 했지.",
						"english": "Orchestrate? I merely quenched their thirst. Let them revel in forgotten glory.",
						"japanese": "「企む？私はただ、彼らの渇きを癒やし、忘れ去られた栄光に酔わせただけだ。」",
						"chinese": "“策划？我不过是满足了他们的渴望。让他们沉醉于被遗忘的荣耀罢了。”",
						"french": "Orchestré ? J'ai simplement étanché leur soif. Je les ai enivrés d'une gloire oubliée.",
						"spanish": "¿Orquestar? Yo solo sacié su sed. Los embriagué con una gloria olvidada.",
						"vietnamese": "Sắp đặt ư? Ta chỉ đơn thuần làm dịu cơn khát của chúng. Để chúng say sưa trong vinh quang đã lãng quên.",
						"thai": "บงการงั้นหรือ? ข้าเพียงแค่ดับกระหายให้พวกเขา ปล่อยให้พวกเขาเคลิบเคลิ้มในความรุ่งโรจน์ที่ถูกลืมเลือน",
						"hindi": "रचा? मैंने बस उनकी प्यास बुझाई। उन्हें भूली हुई महिमा में डुबो दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너도 곧… 나와 같아질 것이다. 영원한 공허함 속으로.",
						"english": "You too shall soon... become like me. Into eternal emptiness.",
						"japanese": "「お前もすぐに…私と同じになるだろう。永遠の虚無の中へ。」",
						"chinese": "“你很快也会……变得像我一样。坠入永恒的虚无。”",
						"french": "Toi aussi, bientôt... tu deviendras comme moi. Dans le vide éternel.",
						"spanish": "Tú también pronto... serás como yo. En la vacuidad eterna.",
						"vietnamese": "Ngươi cũng sẽ sớm... trở nên giống ta. Vào trong sự trống rỗng vĩnh hằng.",
						"thai": "เจ้าเองก็จะ...กลายเป็นเช่นข้าในไม่ช้า สู่ความว่างเปล่าชั่วนิรันดร์",
						"hindi": "तुम भी जल्द ही... मेरे जैसे हो जाओगे। शाश्वत शून्यता में।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "ばかばかしい！",
						"chinese": "别胡说！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดไร้สาระ!",
						"hindi": "बकवास!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크하하! 겨우 이 정도인가? 넌 이 공허함을 채울 수 없어!",
						"english": "Hahaha! Is this all you've got? You can't fill this void!",
						"japanese": "クハハ！たったこれだけか？お前はこの虚無を満たすことはできない！",
						"chinese": "哈哈哈！就这点本事吗？你无法填补这份空虚！",
						"french": "Hahaha ! C'est tout ce que tu as ? Tu ne peux pas combler ce vide !",
						"spanish": "¡Jajaja! ¿Esto es todo lo que tienes? ¡No puedes llenar este vacío!",
						"vietnamese": "Khà khà! Chỉ có thế thôi sao? Ngươi không thể lấp đầy khoảng trống này đâu!",
						"thai": "คิกคิก! แค่นี้เองเหรอ? เจ้าเติมเต็มความว่างเปล่านี้ไม่ได้หรอก!",
						"hindi": "हाहाहा! बस इतना ही है तुम्हारे पास? तुम इस शून्यता को नहीं भर सकते!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 아직 끝나지 않았다.",
						"english": "...No. It's not over yet.",
						"japanese": "…いや。まだ終わってはいない。",
						"chinese": "……不。还没有结束。",
						"french": "...Non. Ce n'est pas encore fini.",
						"spanish": "...No. Aún no ha terminado.",
						"vietnamese": "...Không. Vẫn chưa kết thúc.",
						"thai": "...ไม่. มันยังไม่จบ",
						"hindi": "...नहीं। यह अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥… 다시 와라. 언제든 환영이다, 이 외로운 손님아.",
						"english": "Hmph... Come again. You're always welcome, lonely guest.",
						"japanese": "フン…また来い。いつでも歓迎だ、この孤独な客よ。",
						"chinese": "哼……再来吧。随时欢迎你，孤独的客人。",
						"french": "Hmph... Reviens. Tu es toujours le bienvenu, invité solitaire.",
						"spanish": "Mmm... Vuelve. Siempre serás bienvenido, huésped solitario.",
						"vietnamese": "Hừm... Hãy quay lại đi. Ngươi luôn được chào đón, vị khách cô độc ạ.",
						"thai": "หึ... กลับมาอีกนะ ยินดีต้อนรับเสมอ, แขกผู้โดดเดี่ยวเอ๋ย",
						"hindi": "हम्म... फिर से आना। तुम्हारा हमेशा स्वागत है, अकेले मेहमान।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크큭… 어리석군. 공허함은… 사라지지 않아.",
						"english": "Heh heh... Foolish. The void... it never fades.",
						"japanese": "ククッ…愚かだな。虚無は…消えはしない。",
						"chinese": "呵呵……真蠢。空虚感……不会消失的。",
						"french": "Hé hé... Stupide. Le vide... il ne disparaîtra jamais.",
						"spanish": "Je je... Qué necio. El vacío... nunca se desvanece.",
						"vietnamese": "Hừ hừ... Ngốc nghếch. Khoảng trống này... sẽ không biến mất đâu.",
						"thai": "หึหึ... ช่างโง่เขลา ความว่างเปล่า... ไม่มีวันหายไป",
						"hindi": "हेहे... मूर्ख। शून्यता... यह कभी नहीं मिटती।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다음 잔은… 더 독할 것이다…",
						"english": "The next cup... will be deadlier...",
						"japanese": "次の杯は…もっと毒々しいぞ…",
						"chinese": "下一杯……会更毒……",
						"french": "La prochaine coupe... sera plus mortelle...",
						"spanish": "La próxima copa... será más letal...",
						"vietnamese": "Chén tiếp theo... sẽ độc hơn đấy...",
						"thai": "แก้วต่อไป... จะร้ายกาจกว่านี้...",
						"hindi": "अगला प्याला... और ज़हरीला होगा..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끝난 줄 알았는데.",
						"english": "...Thought it was over.",
						"japanese": "…終わったと思ったのに。",
						"chinese": "……还以为结束了呢。",
						"french": "...Je croyais que c'était fini.",
						"spanish": "...Creía que había terminado.",
						"vietnamese": "...Cứ tưởng đã kết thúc rồi.",
						"thai": "...นึกว่าจะจบแล้ว",
						"hindi": "...सोचा था कि खत्म हो गया।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "뿔잔의 그림자는 쉽게 사라지지 않는다. 뿌리가 깊거든.",
						"english": "The shadow of the horn cup doesn't easily vanish. Its roots run deep.",
						"japanese": "角杯の影は容易には消えない。根が深いからな。",
						"chinese": "角杯的阴影不会轻易消失。因为它根深蒂固。",
						"french": "L'ombre de la coupe en corne ne s'efface pas si facilement. Ses racines sont profondes.",
						"spanish": "La sombra del cuerno no desaparece fácilmente. Sus raíces son profundas.",
						"vietnamese": "Bóng của chiếc sừng không dễ dàng biến mất. Rễ của nó rất sâu.",
						"thai": "เงาของถ้วยเขาไม่หายไปง่ายๆ เพราะมันหยั่งรากลึก",
						"hindi": "सींग के प्याले की छाया आसानी से नहीं मिटती। इसकी जड़ें गहरी हैं।"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뿔잔의 일부분이 부서졌다. 그러나 설원의 눈보라는 더욱 거세졌다.",
						"english": "A part of the horn cup shattered. Yet, the blizzard on the snowfield grew fiercer.",
						"japanese": "角杯の一部が砕けた。だが、雪原の吹雪はさらに激しさを増した。",
						"chinese": "角杯的一部分碎裂了。然而，雪原上的暴风雪却更加猛烈了。",
						"french": "Une partie de la coupe en corne s'est brisée. Pourtant, le blizzard sur le champ de neige est devenu plus féroce.",
						"spanish": "Una parte del cuerno se hizo añicos. Sin embargo, la ventisca en el campo nevado se hizo más feroz.",
						"vietnamese": "Một phần của chiếc sừng đã vỡ. Nhưng bão tuyết trên cánh đồng tuyết lại càng dữ dội hơn.",
						"thai": "ส่วนหนึ่งของถ้วยเขาแตกหัก แต่พายุหิมะบนทุ่งน้ำแข็งกลับรุนแรงขึ้น",
						"hindi": "सींग के प्याले का एक हिस्सा टूट गया। फिर भी, बर्फीले मैदान पर बर्फीला तूफान और तेज़ हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "영원한 환락은, 아직 끝나지 않았다.",
						"english": "The eternal revelry... it isn't over yet.",
						"japanese": "永遠の歓楽は、まだ終わってはいない。",
						"chinese": "永恒的狂欢……还没有结束。",
						"french": "La fête éternelle... n'est pas encore terminée.",
						"spanish": "La juerga eterna... aún no ha terminado.",
						"vietnamese": "Sự hoan lạc vĩnh cửu... vẫn chưa kết thúc.",
						"thai": "ความสำราญนิรันดร์... ยังไม่จบลง",
						"hindi": "अनंत उत्सव... अभी खत्म नहीं हुआ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잊혀진 고대 유적. 시간이 멈춘 듯한 곳.",
			"뿔잔의 속삭임은 영혼들을 묶고 있었다.",
			"명예로운 축배는 욕망으로 변질되었고, 남은 건 공허함 뿐.",
			"진실을 직면할 용기. 그것만이 이 광기의 연회를 끝낼 수 있다."
		],
		"english": [
			"Forgotten ancient ruins. A place where time stands still.",
			"The whispers of the Horned Chalice bound the souls.",
			"The honorable toast turned to desire, leaving only emptiness.",
			"The courage to face the truth. Only that can end this feast of madness."
		],
		"japanese": [
			"忘れ去られた古代遺跡。時が止まったかのような場所。",
			"角杯のささやきは魂たちを縛っていた。",
			"名誉ある祝杯は欲望に変質し、残ったのは虚無のみ。",
			"真実と向き合う勇気。それだけが、この狂気の宴を終わらせられる。"
		],
		"chinese": [
			"被遗忘的古代遗迹。一个时间仿佛静止的地方。",
			"角杯的低语束缚着灵魂。",
			"光荣的祝酒词变成了欲望，只剩下空虚。",
			"面对真相的勇气。唯有如此才能结束这场疯狂的盛宴。"
		],
		"french": [
			"Ruines antiques oubliées. Un lieu où le temps semble s'être arrêté.",
			"Les murmures du Calice Cornu liaient les âmes.",
			"Le toast honorable s'est transformé en désir, ne laissant que le vide.",
			"Le courage d'affronter la vérité. Seul cela peut mettre fin à ce festin de folie."
		],
		"spanish": [
			"Antiguas ruinas olvidadas. Un lugar donde el tiempo se ha detenido.",
			"Los susurros del Cáliz Cornudo ataban las almas.",
			"El brindis honorable se convirtió en deseo, dejando solo el vacío.",
			"El valor de enfrentar la verdad. Solo eso puede terminar con este festín de locura."
		],
		"vietnamese": [
			"Di tích cổ đại bị lãng quên. Một nơi mà thời gian dường như đã ngừng lại.",
			"Những lời thì thầm của Chiếc Cốc Sừng trói buộc các linh hồn.",
			"Lời chúc mừng danh dự biến thành dục vọng, chỉ còn lại sự trống rỗng.",
			"Dũng khí đối mặt sự thật. Chỉ có điều đó mới có thể kết thúc bữa tiệc điên rồ này."
		],
		"thai": [
			"ซากปรักหักพังโบราณที่ถูกลืมเลือน สถานที่ที่เวลาหยุดนิ่ง",
			"เสียงกระซิบของจอกเขาผูกมัดดวงวิญญาณ",
			"การดื่มอวยพรที่ทรงเกียรติกลายเป็นความปรารถนา เหลือไว้เพียงความว่างเปล่า",
			"ความกล้าหาญที่จะเผชิญหน้ากับความจริง มีเพียงสิ่งนั้นเท่านั้นที่สามารถยุติงานเลี้ยงแห่งความบ้าคลั่งนี้ได้"
		],
		"hindi": [
			"भूले हुए प्राचीन खंडहर। एक ऐसी जगह जहाँ समय ठहर गया है।",
			"सींग वाले प्याले की फुसफुसाहट आत्माओं को बांध रही थी।",
			"सम्माननीय टोस्ट इच्छा में बदल गया, केवल शून्यता बची।",
			"सच का सामना करने का साहस। केवल वही इस पागलपन की दावत को खत्म कर सकता है।"
		]
	}
} as const;
