export const scenario_RingBearer_Aftermath_04 = {
	"scenario_id": "RingBearer_Aftermath_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
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
						"korean": "현실의 조각들이 뒤섞였다. 발걸음마다 환상이 일그러졌다.",
						"english": "Fragments of reality intertwined. With every step, illusions warped.",
						"japanese": "現実の断片が入り混じる。足取りごとに幻想が歪んだ。",
						"chinese": "现实的碎片交织。每一步都扭曲了幻象。",
						"french": "Les fragments de la réalité s'entremêlaient. À chaque pas, les illusions se tordaient.",
						"spanish": "Fragmentos de la realidad se entrelazaron. Con cada paso, las ilusiones se distorsionaban.",
						"vietnamese": "Những mảnh ghép hiện thực đan xen. Mỗi bước chân, ảo ảnh lại méo mó.",
						"thai": "ชิ้นส่วนของความจริงปะปนกัน ทุกย่างก้าว ภาพลวงตาบิดเบี้ยว",
						"hindi": "यथार्थ के टुकड़े आपस में मिल गए। हर कदम पर भ्रम विकृत हो गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 왕좌의 회랑이라고?",
						"english": "This is... the Throne's Corridor?",
						"japanese": "ここが…玉座の回廊だと？",
						"chinese": "这里是……王座回廊？",
						"french": "C'est... le Couloir du Trône ?",
						"spanish": "¿Este es... el Corredor del Trono?",
						"vietnamese": "Đây là… Hành lang Ngai vàng sao?",
						"thai": "นี่คือ... โถงทางเดินแห่งบัลลังก์หรือ?",
						"hindi": "यह... सिंहासन का गलियारा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…찾았다. 새로운 사냥감을.",
						"english": "...Found. A new quarry.",
						"japanese": "…見つけた。新たな獲物を。",
						"chinese": "……找到了。新的猎物。",
						"french": "...Trouvé. Une nouvelle proie.",
						"spanish": "...Encontré. Una nueva presa.",
						"vietnamese": "…Tìm thấy rồi. Một con mồi mới.",
						"thai": "…เจอแล้ว เหยื่อรายใหม่",
						"hindi": "...मिल गया। एक नया शिकार।"
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใคร?",
						"hindi": "कौन हो तुम?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "신더. 진실을 쫓는 자. 아르카인은 그저 꼭두각시일 뿐.",
						"english": "Cinder. Seeker of truth. Arcane is merely a puppet.",
						"japanese": "シンダー。真実を追う者。アルカインはただの操り人形に過ぎない。",
						"chinese": "辛德。真相追寻者。奥术不过是个傀儡。",
						"french": "Cinder. Chercheuse de vérité. Arcane n'est qu'une marionnette.",
						"spanish": "Cinder. Buscadora de la verdad. Arcane es solo una marioneta.",
						"vietnamese": "Cinder. Kẻ truy tìm sự thật. Arcane chỉ là một con rối.",
						"thai": "ซินเดอร์ ผู้แสวงหาความจริง อาร์เคนเป็นเพียงหุ่นเชิด",
						"hindi": "सिंडर। सत्य का अन्वेषक। आर्केन महज एक कठपुतली है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "cinder",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "너도 느꼈을 거야. 거울 속 네 안의 또 다른 그림자.",
						"english": "You must have felt it too. Another shadow within you, in the mirror.",
						"japanese": "お前も感じたはずだ。鏡の中にいる、お前の中のもう一つの影を。",
						"chinese": "你也一定感受到了吧。镜中你体内另一个影子。",
						"french": "Tu l'as sûrement ressenti aussi. Une autre ombre en toi, dans le miroir.",
						"spanish": "Tú también lo habrás sentido. Otra sombra dentro de ti, en el espejo.",
						"vietnamese": "Ngươi cũng đã cảm nhận được rồi chứ. Một cái bóng khác trong ngươi, trong gương.",
						"thai": "นายเองก็คงรู้สึกเช่นกัน เงาอีกตนที่อยู่ในตัวนาย ในกระจก",
						"hindi": "तुमने भी महसूस किया होगा। दर्पण में तुम्हारे भीतर की एक और छाया।"
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...뭐?",
						"english": "...What?",
						"japanese": "...何？",
						"chinese": "...什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Gì cơ?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아르카인은 진정한 반지의 현신일 뿐. 힘의 조각에 불과해.",
						"english": "Arcane is merely an incarnation of the true ring. Just a fragment of its power.",
						"japanese": "アルカインは真の指輪の化身に過ぎない。力の断片に過ぎない。",
						"chinese": "奥术只不过是真戒的化身。仅仅是力量的碎片。",
						"french": "L'Arcane n'est qu'une incarnation du véritable anneau. Un simple fragment de son pouvoir.",
						"spanish": "El Arcano es solo una encarnación del verdadero anillo. Un mero fragmento de su poder.",
						"vietnamese": "Arcane chỉ là hiện thân của chiếc nhẫn thật sự. Chỉ là một mảnh sức mạnh.",
						"thai": "อาร์เคนเป็นเพียงร่างอวตารของแหวนที่แท้จริง เป็นเพียงเศษเสี้ยวของพลัง",
						"hindi": "आर्केन केवल सच्ची अंगूठी का अवतार है। शक्ति का एक टुकड़ा मात्र।"
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "그럼 진짜는…",
						"english": "Then the true one...",
						"japanese": "じゃあ、本物は…",
						"chinese": "那真正的…",
						"french": "Alors, le vrai...",
						"spanish": "Entonces, el verdadero...",
						"vietnamese": "Vậy cái thật sự...",
						"thai": "แล้วของจริงล่ะ...",
						"hindi": "तो असली वाला..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 큰 존재가 있어. 이 모든 것을 조종하는.",
						"english": "There's a greater being. One that manipulates all of this.",
						"japanese": "もっと大きな存在がいる。この全てを操る者が。",
						"chinese": "有一个更强大的存在。它在操纵这一切。",
						"french": "Il y a un être plus grand. Un qui manipule tout cela.",
						"spanish": "Hay un ser superior. Uno que manipula todo esto.",
						"vietnamese": "Có một thực thể lớn hơn. Một kẻ thao túng tất cả những điều này.",
						"thai": "มีสิ่งมีชีวิตที่ยิ่งใหญ่กว่านั้น ผู้ที่บงการทั้งหมดนี้",
						"hindi": "एक बड़ी शक्ति है। जो यह सब नियंत्रित करती है।"
					},
					"emotion": "sad",
					"speaker": "cinder"
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
					"type": "direction",
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 원하나? 내가 가진 고대 문서가 모든 것을 말해줄 거야.",
						"english": "Do you seek the truth? My ancient texts will tell you everything.",
						"japanese": "真実を望むか？ 私が持つ古文書が全てを語るだろう。",
						"chinese": "你想要真相吗？我拥有的古老文献会告诉你一切。",
						"french": "Cherches-tu la vérité ? Mes anciens textes te diront tout.",
						"spanish": "¿Buscas la verdad? Mis documentos antiguos te lo dirán todo.",
						"vietnamese": "Ngươi muốn sự thật ư? Tài liệu cổ của ta sẽ kể cho ngươi mọi thứ.",
						"thai": "เจ้าต้องการความจริงหรือ? เอกสารโบราณของข้าจะบอกเจ้าทุกสิ่ง",
						"hindi": "क्या तुम सच जानना चाहते हो? मेरे प्राचीन ग्रंथ तुम्हें सब बता देंगे।"
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭘 원하는데?",
						"english": "What do you want?",
						"japanese": "何を望む？",
						"chinese": "你想要什么？",
						"french": "Que veux-tu ?",
						"spanish": "¿Qué quieres?",
						"vietnamese": "Ngươi muốn gì?",
						"thai": "เจ้าต้องการอะไร?",
						"hindi": "तुम क्या चाहते हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "대가. 네 기억의 일부.",
						"english": "A price. A part of your memory.",
						"japanese": "代償だ。お前の記憶の一部を。",
						"chinese": "代价。你记忆的一部分。",
						"french": "Un prix. Une partie de ta mémoire.",
						"spanish": "Un precio. Una parte de tu memoria.",
						"vietnamese": "Cái giá. Một phần ký ức của ngươi.",
						"thai": "ค่าตอบแทน ส่วนหนึ่งของความทรงจำของเจ้า",
						"hindi": "कीमत। तुम्हारी याददाश्त का एक हिस्सा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억을?",
						"english": "My memory?",
						"japanese": "記憶を？",
						"chinese": "记忆？",
						"french": "Ma mémoire ?",
						"spanish": "¿Mi memoria?",
						"vietnamese": "Ký ức của ta ư?",
						"thai": "ความทรงจำหรือ?",
						"hindi": "याददाश्त?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 지식은 공짜가 아니지. 어때? 감당할 수 있겠어?",
						"english": "Yes. Knowledge isn't free. So, can you bear the cost?",
						"japanese": "そうだ。知識はただではない。どうだ？ その代償を払えるか？",
						"chinese": "是的。知识不是免费的。怎么样？你能承受吗？",
						"french": "Oui. Le savoir n'est pas gratuit. Alors, peux-tu en supporter le coût ?",
						"spanish": "Sí. El conocimiento no es gratis. ¿Qué te parece? ¿Puedes soportarlo?",
						"vietnamese": "Phải. Kiến thức không hề miễn phí. Thế nào? Ngươi có gánh vác nổi không?",
						"thai": "ใช่ ความรู้ไม่ได้มาฟรีๆ แล้วไงล่ะ เจ้าแบกรับมันได้ไหม?",
						"hindi": "हाँ। ज्ञान मुफ्त नहीं है। तो, क्या तुम कीमत चुका सकते हो?"
					},
					"emotion": "base",
					"speaker": "cinder",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "…좋아. 진실을 줘.",
						"english": "...Fine. Give me the truth.",
						"japanese": "…わかった。真実をくれ。",
						"chinese": "…好吧。给我真相。",
						"french": "...D'accord. Donne-moi la vérité.",
						"spanish": "...Bien. Dame la verdad.",
						"vietnamese": "...Được thôi. Hãy cho ta sự thật.",
						"thai": "...ก็ได้ ให้ความจริงมา",
						"hindi": "...ठीक है। मुझे सच बताओ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현명한 선택이야.",
						"english": "Wise choice.",
						"japanese": "賢明な選択だ。",
						"chinese": "明智的选择。",
						"french": "Un choix judicieux.",
						"spanish": "Una elección sabia.",
						"vietnamese": "Một lựa chọn khôn ngoan.",
						"thai": "เป็นการเลือกที่ชาญฉลาด",
						"hindi": "एक बुद्धिमान चुनाव है।"
					},
					"emotion": "happy",
					"speaker": "cinder"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "머리가 지끈거렸다. 어떤 기억이 사라진 걸까. 알 수 없었다.",
						"english": "My head throbbed. What memory vanished? I couldn't tell.",
						"japanese": "頭がズキズキした。どんな記憶が消えたのか。分からなかった。",
						"chinese": "头痛欲裂。什么记忆消失了？无从得知。",
						"french": "Ma tête palpitait. Quel souvenir avait disparu ? Impossible de le savoir.",
						"spanish": "Mi cabeza palpitaba. ¿Qué recuerdo se había desvanecido? No lo sabía.",
						"vietnamese": "Đầu tôi đau nhức. Ký ức nào đã biến mất? Tôi không thể biết.",
						"thai": "หัวของฉันปวดแปลบปลาบ ความทรงจำใดหายไปนะ ฉันไม่อาจรู้ได้",
						"hindi": "मेरा सर दर्द से फटा जा रहा था। कौन सी याददाश्त गायब हो गई थी? मैं नहीं जान पाया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cinder",
					"content": {
						"korean": "이제 알겠지? 너를 부르는 그 속삭임. 그게 진짜 목소리야.",
						"english": "Now you understand, don't you? That whisper calling to you. That's the true voice.",
						"japanese": "もう分かるだろ？ お前を呼ぶそのささやき。それが本当の声だ。",
						"chinese": "现在你明白了吧？那个呼唤你的低语。那才是真正的声音。",
						"french": "Maintenant tu comprends, n'est-ce pas ? Ce murmure qui t'appelle. C'est la vraie voix.",
						"spanish": "¿Ahora lo entiendes, verdad? Ese susurro que te llama. Esa es la verdadera voz.",
						"vietnamese": "Giờ ngươi hiểu rồi chứ? Tiếng thì thầm gọi ngươi đó. Đó mới là giọng nói thật.",
						"thai": "ตอนนี้เข้าใจแล้วใช่ไหม? เสียงกระซิบที่เรียกเจ้า นั่นแหละคือเสียงที่แท้จริง",
						"hindi": "अब तुम समझते हो ना? वो फुसफुसाहट जो तुम्हें बुला रही है। वो असली आवाज़ है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 소리…",
						"english": "This sound...",
						"japanese": "この音…",
						"chinese": "这声音…",
						"french": "Ce son...",
						"spanish": "Este sonido...",
						"vietnamese": "Tiếng này...",
						"thai": "เสียงนี้...",
						"hindi": "ये आवाज़..."
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "곧 알게 될 거야. 누가 진짜 주인인지.",
						"english": "You'll soon know. Who the true master is.",
						"japanese": "すぐ分かるだろう。誰が本当の主なのか。",
						"chinese": "你很快就会知道。谁才是真正的主人。",
						"french": "Tu le sauras bientôt. Qui est le vrai maître.",
						"spanish": "Pronto lo sabrás. Quién es el verdadero amo.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Ai mới là chủ nhân thật sự.",
						"thai": "เจ้าจะรู้ในไม่ช้า ใครคือเจ้านายที่แท้จริง",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। असली मालिक कौन है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기괴한 울음소리가 회랑을 뒤흔들었다. 무언가 나타났다.",
						"english": "A grotesque wail echoed through the corridor. Something appeared.",
						"japanese": "おぞましい叫び声が回廊を揺るがした。何かが現れた。",
						"chinese": "怪异的嚎叫声震动了回廊。有什么东西出现了。",
						"french": "Un hurlement grotesque secoua le couloir. Quelque chose apparut.",
						"spanish": "Un lamento grotesco sacudió el pasillo. Algo apareció.",
						"vietnamese": "Tiếng hú quái dị làm rung chuyển hành lang. Thứ gì đó đã xuất hiện.",
						"thai": "เสียงร้องโหยหวนประหลาดสะท้อนก้องทั่วโถงทางเดิน มีบางสิ่งปรากฏขึ้น",
						"hindi": "एक भयानक चीख गलियारे में गूँज उठी। कुछ प्रकट हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…건방진… 감히… 진실을… 엿보다니…!",
						"english": "...Presumptuous... How dare you... peek at the truth...!",
						"japanese": "…生意気な…よくも…真実を…覗き見るとは…！",
						"chinese": "……放肆……竟敢……窥视……真相……！",
						"french": "...Impudent... Comment oses-tu... jeter un œil à la vérité... !",
						"spanish": "... ¡Insolente... Cómo te atreves... a espiar la verdad...!",
						"vietnamese": "...Xấc xược... Dám... rình mò... sự thật...!",
						"thai": "...บังอาจ... กล้าดียังไง... มาแอบดู... ความจริง...!",
						"hindi": "...गुस्ताख़... हिम्मत कैसे हुई... सच पर... झाँकने की...!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 진짜를 숨기고 있었지!",
						"english": "You were hiding the truth!",
						"japanese": "お前が本物を隠していたんだな！",
						"chinese": "你一直在隐藏真相！",
						"french": "Tu cachais la vérité !",
						"spanish": "¡Tú estabas ocultando la verdad!",
						"vietnamese": "Ngươi đã giấu giếm sự thật!",
						"thai": "เจ้ากำลังซ่อนความจริงอยู่!",
						"hindi": "तुम सच छिपा रहे थे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "거슬리는… 벌레…",
						"english": "Annoying... insect...",
						"japanese": "忌まわしい…虫けらめ…",
						"chinese": "碍眼的……虫子……",
						"french": "Ennuyeux... insecte...",
						"spanish": "Molesto... insecto...",
						"vietnamese": "Thứ đáng ghét... côn trùng...",
						"thai": "น่ารำคาญ... แมลง...",
						"hindi": "परेशान करने वाला... कीड़ा..."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…아직… 몰라… 진짜 고통은… 이제… 시작이야…",
						"english": "...You still... don't know... The true pain... is just... beginning...",
						"japanese": "…まだ…分かってないな…本当の苦痛は…これから…始まるのだ…",
						"chinese": "……你还……不知道……真正的痛苦……才刚……开始……",
						"french": "...Tu... ne sais pas... encore... La vraie souffrance... ne fait que... commencer...",
						"spanish": "...Todavía... no sabes... El verdadero dolor... recién... empieza...",
						"vietnamese": "...Ngươi vẫn... chưa biết... Nỗi đau thật sự... giờ mới... bắt đầu...",
						"thai": "...ยัง... ไม่รู้... ความเจ็บปวดที่แท้จริง... เพิ่งจะ... เริ่มต้น...",
						"hindi": "...अभी तक... नहीं जानते... असली दर्द... अब... शुरू हो रहा है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...무슨 소리야.",
						"english": "...What was that sound?",
						"japanese": "…何の音だ？",
						"chinese": "……什么声音？",
						"french": "...Quel est ce bruit ?",
						"spanish": "¿...Qué fue eso?",
						"vietnamese": "...Tiếng gì vậy?",
						"thai": "...เสียงอะไรน่ะ?",
						"hindi": "...वह क्या आवाज़ थी?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자가 사라졌다. 그러나 회랑은 더욱 깊은 불안에 잠겼다. 잃어버린 기억, 파편화된 진실. 끝은 어디일까.",
						"english": "The shadow vanished. But the corridor sank into deeper unease. Lost memories, fragmented truth. Where does it end?",
						"japanese": "影は消えた。しかし回廊はより深い不安に包まれた。失われた記憶、断片化された真実。終わりはどこにあるのだろうか。",
						"chinese": "影子消失了。然而，走廊却陷入了更深的焦虑。失落的记忆，支离破碎的真相。尽头在哪里？",
						"french": "L'ombre a disparu. Mais le couloir sombrait dans une anxiété plus profonde. Souvenirs perdus, vérité fragmentée. Où est la fin ?",
						"spanish": "La sombra desapareció. Pero el pasillo se sumió en una inquietud más profunda. Recuerdos perdidos, verdad fragmentada. ¿Dónde está el final?",
						"vietnamese": "Bóng tối tan biến. Nhưng hành lang lại chìm trong sự bất an sâu sắc hơn. Ký ức đã mất, sự thật tan vỡ. Kết thúc ở đâu?",
						"thai": "เงามืดหายไป แต่โถงทางเดินกลับจมดิ่งลงสู่ความไม่สบายใจที่ลึกซึ้งยิ่งขึ้น ความทรงจำที่หายไป ความจริงที่แตกสลาย จุดจบอยู่ที่ไหน?",
						"hindi": "परछाई गायब हो गई। लेकिन गलियारा गहरे अशांति में डूब गया। खोई हुई यादें, खंडित सत्य। अंत कहाँ है?"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 진실은… 너를… 집어삼킬 뿐…",
						"english": "Foolish... The truth... will only... consume you...",
						"japanese": "愚かな… 真実は… お前を… 飲み込むだけだ…",
						"chinese": "愚蠢的……真相只会……吞噬你……",
						"french": "Stupide... La vérité... ne fera que... te dévorer...",
						"spanish": "Estúpido... La verdad... solo... te consumirá...",
						"vietnamese": "Ngốc nghếch... Sự thật... sẽ chỉ... nuốt chửng ngươi...",
						"thai": "โง่เขลา... ความจริง... จะ... กลืนกินเจ้าเท่านั้น...",
						"hindi": "मूर्ख... सच... तुम्हें... निगल जाएगा..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...아직… 아니야… 포기 안 해…",
						"english": "...Not yet... No... I won't give up...",
						"japanese": "…まだ… だめだ… 諦めない…",
						"chinese": "……还没……不行……我不会放弃……",
						"french": "...Pas encore... Non... Je n'abandonnerai pas...",
						"spanish": "...Todavía no... No... No me rindo...",
						"vietnamese": "...Chưa... Không... Tôi sẽ không bỏ cuộc...",
						"thai": "...ยัง... ไม่... ฉันไม่ยอมแพ้...",
						"hindi": "...अभी तक... नहीं... मैं हार नहीं मानूँगा..."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 이제 파편화된 진실 속으로.",
			"아르카인은 그저 그림자일 뿐.",
			"반지의 진짜 주인은 누구인가?",
			"그녀의 목소리가 심연에서 울린다."
		],
		"english": [
			"The world now fragments into fractured truths.",
			"Arcane is merely a shadow.",
			"Who is the true master of the ring?",
			"Her voice echoes from the abyss."
		],
		"japanese": [
			"世界は今、断片化された真実の中へ。",
			"アルカインはただの影に過ぎない。",
			"指輪の真の持ち主は誰だ？",
			"彼女の声が深淵から響く。"
		],
		"chinese": [
			"世界现已碎片化，真相迷离。",
			"奥术不过是道影子。",
			"戒指的真正主人是谁？",
			"她的声音在深渊中回响。"
		],
		"french": [
			"Le monde se fragmente désormais en vérités brisées.",
			"Arcane n'est qu'une ombre.",
			"Qui est le véritable maître de l'anneau ?",
			"Sa voix résonne depuis l'abysse."
		],
		"spanish": [
			"El mundo ahora se fragmenta en verdades rotas.",
			"Arcane es solo una sombra.",
			"¿Quién es el verdadero dueño del anillo?",
			"Su voz resuena desde el abismo."
		],
		"vietnamese": [
			"Thế giới giờ đây vỡ vụn thành những sự thật phân mảnh.",
			"Arcane chỉ là một cái bóng.",
			"Ai là chủ nhân thật sự của chiếc nhẫn?",
			"Tiếng cô ấy vọng lên từ vực sâu."
		],
		"thai": [
			"โลกบัดนี้แตกสลายเป็นความจริงที่บิดเบี้ยว",
			"อาร์เคนเป็นเพียงเงา",
			"ใครคือเจ้าของแหวนที่แท้จริง?",
			"เสียงของเธอดังก้องจากห้วงลึก"
		],
		"hindi": [
			"दुनिया अब खंडित सत्यों में बिखर गई है।",
			"आर्केन महज एक छाया है।",
			"अंगूठी का असली मालिक कौन है?",
			"उसकी आवाज़ रसातल से गूँजती है।"
		]
	}
} as const;
