export const scenario_snowy_cairn_96_01 = {
	"scenario_id": "snowy_cairn_96_01",
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
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 돌무덤인가.",
						"english": "Is this... the stone tomb?",
						"japanese": "ここが…あの石の墓なのか。",
						"chinese": "这里就是……那座石墓吗？",
						"french": "Est-ce ici... le tombeau de pierre ?",
						"spanish": "¿Es este... el sepulcro de piedra?",
						"vietnamese": "Đây có phải... ngôi mộ đá đó không?",
						"thai": "ที่นี่คือ... หลุมศพหินนั่นหรือ?",
						"hindi": "क्या यह... वह पत्थर का मकबरा है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맹세를 여기서 나누는 거였지.",
						"english": "This is where we make our vows, isn't it?",
						"japanese": "誓いをここで交わすのだったな。",
						"chinese": "誓言就是在这里立下的，对吧。",
						"french": "C'est ici que nous prononçons nos serments, n'est-ce pas ?",
						"spanish": "Aquí es donde hacemos nuestros juramentos, ¿no?",
						"vietnamese": "Chúng ta thề ước ở đây, phải không?",
						"thai": "ที่นี่สินะ ที่เราจะสาบาน",
						"hindi": "यहीं हमें प्रतिज्ञा लेनी थी, है ना?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기록에 따르면, 이곳은 약속의 진위를 시험하는 곳.",
						"english": "...According to records, this place tests the truth of promises.",
						"japanese": "…記録によれば、ここは約束の真偽を試す場所だ。",
						"chinese": "……根据记载，这里是检验誓言真伪之地。",
						"french": "...Selon les registres, cet endroit teste la véracité des promesses.",
						"spanish": "...Según los registros, este lugar prueba la verdad de las promesas.",
						"vietnamese": "Theo ghi chép, nơi đây là nơi thử thách sự thật của những lời hứa.",
						"thai": "...ตามบันทึก ที่นี่คือสถานที่ทดสอบความจริงของคำมั่นสัญญา",
						"hindi": "...रिकॉर्ड के अनुसार, यह स्थान वादों की सच्चाई को परखता है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "돌무덤이… 반응하기 시작했어.",
						"english": "The stone tomb... it's starting to react.",
						"japanese": "石の墓が…反応し始めた。",
						"chinese": "石墓……开始有反应了。",
						"french": "Le tombeau de pierre... commence à réagir.",
						"spanish": "La tumba de piedra... está empezando a reaccionar.",
						"vietnamese": "Ngôi mộ đá... bắt đầu phản ứng.",
						"thai": "หลุมศพหิน... เริ่มมีการตอบสนองแล้ว",
						"hindi": "पत्थर का मकबरा... प्रतिक्रिया देना शुरू हो गया है।"
					}
				},
				{
					"content": {
						"korean": "고대 돌무덤이 둔탁하게 울렸다. 기다려온 순간처럼.",
						"english": "The ancient stone tomb rumbled dully. As if it had been waiting for this moment.",
						"japanese": "古代の石の墓が鈍く響いた。待ち望んだ瞬間のように。",
						"chinese": "古老的石墓发出了低沉的轰鸣。仿佛等待已久的时刻。",
						"french": "L'ancien tombeau de pierre gronda sourdement. Comme s'il attendait ce moment.",
						"spanish": "La antigua tumba de piedra retumbó sordamente. Como si hubiera estado esperando este momento.",
						"vietnamese": "Ngôi mộ đá cổ xưa rung lên trầm đục. Như thể đã chờ đợi khoảnh khắc này.",
						"thai": "หลุมศพหินโบราณส่งเสียงก้องกังวานทึบ ราวกับช่วงเวลาที่รอคอยมานาน",
						"hindi": "प्राचीन पत्थर का मकबरा भारी-भरकम आवाज के साथ गूँज उठा। मानो इस पल का इंतजार कर रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "떨고 있어…?",
						"english": "Are you trembling...?",
						"japanese": "震えているのか…？",
						"chinese": "你在发抖吗……？",
						"french": "Tu trembles...?",
						"spanish": "¿Estás temblando...?",
						"vietnamese": "Đang run rẩy à...?",
						"thai": "กำลังสั่น... หรือ?",
						"hindi": "क्या तुम काँप रहे हो...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 돌무덤은… 단순히 맹세를 듣는 게 아냐.",
						"english": "This stone tomb... it doesn't just hear vows.",
						"japanese": "この石塚は…ただ誓いを聴くだけではない。",
						"chinese": "这石冢…不只是听取誓言。",
						"french": "Ce tumulus… il ne fait pas qu'écouter les vœux.",
						"spanish": "Este túmulo… no solo escucha los juramentos.",
						"vietnamese": "Mộ đá này… không chỉ lắng nghe lời thề.",
						"thai": "หลุมศพหินนี้… ไม่ใช่แค่รับฟังคำสาบาน",
						"hindi": "यह पत्थर की समाधि... केवल शपथ नहीं सुनती।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "배신을 품은 자를 얼어붙게 만드는 심판의 기록자.",
						"english": "A chronicler of judgment, freezing those who harbor betrayal.",
						"japanese": "裏切りを抱く者を凍らせる、審判の記録者。",
						"chinese": "审判的记录者，冻结怀有背叛之心的人。",
						"french": "Un chroniqueur du jugement, qui glace ceux qui nourrissent la trahison.",
						"spanish": "Un cronista del juicio, que congela a quienes albergan traición.",
						"vietnamese": "Kẻ ghi chép phán xét, đóng băng những kẻ ôm ấp sự phản bội.",
						"thai": "ผู้บันทึกคำตัดสิน ผู้แช่แข็งผู้ที่ซ่อนเร้นการทรยศ",
						"hindi": "न्याय का एक इतिवृत्तकार, जो विश्वासघात रखने वालों को जमा देता है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "배신… 설마 우리 중에?",
						"english": "Betrayal... among us?",
						"japanese": "裏切り…まさか我々の中に？",
						"chinese": "背叛…难道在我们之中？",
						"french": "Trahison… parmi nous ?",
						"spanish": "¿Traición… entre nosotros?",
						"vietnamese": "Phản bội… lẽ nào trong chúng ta?",
						"thai": "การทรยศ... ในหมู่พวกเราเหรอ?",
						"hindi": "विश्वासघात... हममें से किसी ने?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록은 누구도 예외가 없다고 말한다.",
						"english": "The records say no one is an exception.",
						"japanese": "記録は誰にも例外はないと告げている。",
						"chinese": "记录表明，无一例外。",
						"french": "Les écrits disent que personne n'est une exception.",
						"spanish": "Los registros dicen que nadie es una excepción.",
						"vietnamese": "Ghi chép nói rằng không ai là ngoại lệ.",
						"thai": "บันทึกกล่าวว่าไม่มีใครเป็นข้อยกเว้น",
						"hindi": "रिकॉर्ड कहते हैं कि कोई भी अपवाद नहीं है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "심판은 가혹할 거야. 깨어진 맹세들이 쌓여온 곳이니.",
						"english": "The judgment will be harsh. This is where broken vows accumulate.",
						"japanese": "審判は苛酷だろう。破られた誓いが積み重なった場所だから。",
						"chinese": "审判将是残酷的。这里是破碎誓言堆积之地。",
						"french": "Le jugement sera sévère. C'est là que les vœux brisés s'accumulent.",
						"spanish": "El juicio será duro. Este es el lugar donde se acumulan los juramentos rotos.",
						"vietnamese": "Phán xét sẽ khắc nghiệt. Vì đây là nơi chất chứa những lời thề đã vỡ.",
						"thai": "การตัดสินจะรุนแรง ที่นี่คือที่ที่คำสาบานที่แตกหักสะสมอยู่",
						"hindi": "न्याय कठोर होगा। यहीं टूटे हुए प्रण जमा होते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 서로를 믿어.",
						"english": "We trust each other.",
						"japanese": "私たちは互いを信じている。",
						"chinese": "我们彼此信任。",
						"french": "Nous nous faisons confiance.",
						"spanish": "Confiamos el uno en el otro.",
						"vietnamese": "Chúng ta tin tưởng lẫn nhau.",
						"thai": "เราเชื่อใจกันและกัน",
						"hindi": "हम एक-दूसरे पर भरोसा करते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "믿음도 중요하지만… 진심이 더 중요해.",
						"english": "Trust is important, but... sincerity is more so.",
						"japanese": "信頼も重要だが…真心がもっと重要だ。",
						"chinese": "信任很重要…但真心更重要。",
						"french": "La confiance est importante, mais… la sincérité l'est davantage.",
						"spanish": "La confianza es importante, pero… la sinceridad lo es más.",
						"vietnamese": "Niềm tin cũng quan trọng, nhưng… chân thành còn quan trọng hơn.",
						"thai": "ความเชื่อใจก็สำคัญ แต่…ความจริงใจสำคัญกว่า",
						"hindi": "विश्वास महत्वपूर्ण है, लेकिन... ईमानदारी अधिक महत्वपूर्ण है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌무덤은 마음의 가장 깊은 곳을 읽어내지.",
						"english": "The stone tomb reads the deepest parts of the heart.",
						"japanese": "石塚は心の最も深い部分を読み取る。",
						"chinese": "石冢能读出内心最深处。",
						"french": "Le tumulus lit les profondeurs du cœur.",
						"spanish": "El túmulo lee lo más profundo del corazón.",
						"vietnamese": "Mộ đá đọc được những nơi sâu thẳm nhất trong trái tim.",
						"thai": "หลุมศพหินอ่านส่วนลึกที่สุดของหัวใจได้",
						"hindi": "पत्थर की समाधि हृदय के गहरे हिस्सों को पढ़ती है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이제 되돌릴 수 없어. 맹세의 순간은 코앞이다.",
						"english": "There's no turning back now. The moment of vows is upon us.",
						"japanese": "もう後戻りはできない。誓いの瞬間は目前だ。",
						"chinese": "现在无法回头了。誓言的时刻迫在眉睫。",
						"french": "On ne peut plus revenir en arrière. L'instant des vœux est imminent.",
						"spanish": "Ya no hay vuelta atrás. El momento de los juramentos está cerca.",
						"vietnamese": "Không thể quay lại nữa rồi. Khoảnh khắc lời thề đã cận kề.",
						"thai": "ย้อนกลับไม่ได้แล้ว ช่วงเวลาแห่งคำสาบานอยู่ตรงหน้า",
						"hindi": "अब पीछे नहीं हट सकते। शपथ का क्षण निकट है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…숨이 막혀.",
						"english": "...I can't breathe.",
						"japanese": "…息が詰まる。",
						"chinese": "…喘不过气来。",
						"french": "…J'étouffe.",
						"spanish": "…Me ahogo.",
						"vietnamese": "…Ngạt thở.",
						"thai": "...ฉันหายใจไม่ออก",
						"hindi": "...सांस घुट रही है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 모든 기록을 매듭지을 마지막 페이지가 열릴 거야.",
						"english": "The final page will turn, sealing all records.",
						"japanese": "この記録を締めくくる最後のページが開かれるだろう。",
						"chinese": "书写这些记录的最后一页即将翻开。",
						"french": "La dernière page se tournera, scellant tous ces registres.",
						"spanish": "La última página se abrirá, dando fin a todos estos registros.",
						"vietnamese": "Trang cuối cùng sẽ mở ra, kết thúc mọi ghi chép này.",
						"thai": "หน้าสุดท้ายจะถูกเปิดออก เพื่อปิดฉากบันทึกทั้งหมดนี้",
						"hindi": "अंतिम पृष्ठ खुलेगा, इन सभी अभिलेखों को सील करते हुए।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억해, 이곳의 심판은 절대적이다.",
						"english": "Remember, judgment here is absolute.",
						"japanese": "覚えておけ、ここでの審判は絶対だ。",
						"chinese": "记住，此地的审判是绝对的。",
						"french": "Souviens-toi, le jugement ici est absolu.",
						"spanish": "Recuerda, el juicio aquí es absoluto.",
						"vietnamese": "Hãy nhớ, phán quyết ở đây là tuyệt đối.",
						"thai": "จำไว้ การพิพากษาที่นี่เป็นที่สุด",
						"hindi": "याद रखना, यहाँ का निर्णय अटल है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이 정도인가. 너희의 맹세는 너무나 약해.",
						"english": "Is this all? Your vows are too weak.",
						"japanese": "これだけか？お前たちの誓いはあまりにも脆い。",
						"chinese": "就这点程度吗？你们的誓言太弱了。",
						"french": "C'est tout ? Vos serments sont trop faibles.",
						"spanish": "¿Es solo esto? Vuestros votos son demasiado débiles.",
						"vietnamese": "Chỉ có thế thôi sao? Lời thề của các ngươi quá yếu ớt.",
						"thai": "แค่นี้เองรึ? คำสาบานของพวกเจ้าอ่อนแอเกินไป",
						"hindi": "बस इतना ही? तुम्हारी कसमें बहुत कमज़ोर हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 돌무덤이 탐험대를 집어삼켰다.",
						"english": "The cold stone tomb swallowed the expedition team.",
						"japanese": "冷たい石の墓が探検隊を飲み込んだ。",
						"chinese": "冰冷的石冢吞噬了探险队。",
						"french": "Le froid tombeau de pierre a englouti l'équipe d'expédition.",
						"spanish": "La fría tumba de piedra engulló al equipo de expedición.",
						"vietnamese": "Lăng mộ đá lạnh lẽo đã nuốt chửng đoàn thám hiểm.",
						"thai": "สุสานหินอันเย็นยะเยือกกลืนกินทีมสำรวจไปแล้ว",
						"hindi": "ठंडे पत्थर के मकबरे ने खोज दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 돌아올 것이다!",
						"english": "...It's not over yet. We will return!",
						"japanese": "…まだ終わってない。我々は戻ってくるだろう！",
						"chinese": "……还没结束。我们还会回来！",
						"french": "...Ce n'est pas encore fini. Nous reviendrons !",
						"spanish": "...Aún no ha terminado. ¡Volveremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ trở lại!",
						"thai": "...ยังไม่จบ เราจะกลับมา!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम वापस आएंगे!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 오너라. 네 맹세가 진정이라면.",
						"english": "Come again. If your vow is true.",
						"japanese": "また来い。お前の誓いが真実ならば。",
						"chinese": "再来吧。如果你的誓言是真诚的。",
						"french": "Revenez. Si votre serment est sincère.",
						"spanish": "Vuelve. Si tu voto es verdadero.",
						"vietnamese": "Hãy trở lại. Nếu lời thề của ngươi là thật.",
						"thai": "กลับมาอีกครั้ง ถ้าคำสาบานของเจ้าเป็นจริง",
						"hindi": "फिर से आना। अगर तुम्हारी कसम सच्ची है。"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어… 여기까지 오는군.",
						"english": "Finally... you've made it this far.",
						"japanese": "ついに…ここまで来たか。",
						"chinese": "终于……你走到这里了。",
						"french": "Enfin... tu es arrivé jusqu'ici.",
						"spanish": "Finalmente... has llegado hasta aquí.",
						"vietnamese": "Cuối cùng... ngươi cũng đến được đây.",
						"thai": "ในที่สุด... ก็มาถึงที่นี่",
						"hindi": "आखिरकार... तुम यहाँ तक आ गए।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나의 심판을 마주할 자격이 있는가.",
						"english": "Are you worthy to face my judgment?",
						"japanese": "私の審判に立ち向かう資格はあるか。",
						"chinese": "你有资格面对我的审判吗？",
						"french": "Es-tu digne d'affronter mon jugement ?",
						"spanish": "¿Eres digno de enfrentar mi juicio?",
						"vietnamese": "Ngươi có xứng đáng đối mặt với phán quyết của ta không?",
						"thai": "เจ้ามีคุณสมบัติพอที่จะเผชิญหน้ากับการพิพากษาของข้าหรือไม่?",
						"hindi": "क्या तुम मेरे निर्णय का सामना करने के योग्य हो?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 돌무덤의 심판자인가?",
						"english": "Are you... the Judge of the Stone Tomb?",
						"japanese": "お前が…石塚の審判者か？",
						"chinese": "你就是……石冢的审判者吗？",
						"french": "Es-tu... le Juge du Tombeau de Pierre ?",
						"spanish": "¿Eres tú... el Juez de la Tumba de Piedra?",
						"vietnamese": "Ngươi là... Kẻ phán xét Mộ Đá ư?",
						"thai": "เจ้าคือ... ผู้พิพากษาแห่งสุสานศิลาหรือ?",
						"hindi": "क्या तुम... पत्थर की कब्र के न्यायाधीश हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 깨어진 맹세들의 의지. 너희의 진위를 가늠할 자다.",
						"english": "I am the will of broken vows. The one who will gauge your truth.",
						"japanese": "私は破られた誓いの意志。お前たちの真偽を量る者だ。",
						"chinese": "我是破碎誓言的意志。我是衡量你们真伪之人。",
						"french": "Je suis la volonté des serments brisés. Celui qui sondera votre vérité.",
						"spanish": "Soy la voluntad de los votos rotos. Quien medirá vuestra verdad.",
						"vietnamese": "Ta là ý chí của những lời thề đã vỡ. Kẻ sẽ đo lường sự thật của các ngươi.",
						"thai": "ข้าคือเจตจำนงแห่งคำสาบานที่แตกหัก ผู้ที่จะตัดสินความจริงของพวกเจ้า",
						"hindi": "मैं टूटी हुई प्रतिज्ञाओं की इच्छा हूँ। वह जो तुम्हारी सच्चाई को मापेगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥… 결국, 맹세는 이어지는가.",
						"english": "Hmph... So, the vow continues after all.",
						"japanese": "ふむ…結局、誓いは続くのか。",
						"chinese": "哼……结果，誓言延续了吗？",
						"french": "Hmm... Ainsi, le serment perdure, après tout.",
						"spanish": "Mmm... Así que, el juramento continúa después de todo.",
						"vietnamese": "Hừm... Rốt cuộc, lời thề vẫn tiếp nối sao.",
						"thai": "หึ... ในที่สุด คำสาบานก็ยังคงดำเนินต่อไปงั้นรึ",
						"hindi": "हम्म... तो, आखिर प्रतिज्ञा जारी है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 모든 진실은 아직 너희에게 드러나지 않았다.",
						"english": "But... not all truth has been revealed to you yet.",
						"japanese": "しかし…すべての真実はお前たちにはまだ明かされていない。",
						"chinese": "但是……所有的真相尚未向你们揭示。",
						"french": "Mais... toute la vérité ne vous a pas encore été révélée.",
						"spanish": "Pero... no toda la verdad os ha sido revelada aún.",
						"vietnamese": "Nhưng... tất cả sự thật vẫn chưa được tiết lộ cho các ngươi.",
						"thai": "แต่... ความจริงทั้งหมดก็ยังไม่ถูกเปิดเผยแก่พวกเจ้า",
						"hindi": "परंतु... तुम्हें अभी तक सारी सच्चाई नहीं बताई गई है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야?",
						"english": "...What do you mean?",
						"japanese": "…どういうことだ？",
						"chinese": "……什么意思？",
						"french": "...Que veux-tu dire ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "...Ngươi nói gì vậy?",
						"thai": "...หมายความว่าอะไร?",
						"hindi": "...तुम्हारा क्या मतलब है?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "기록은 계속된다. 새로운 페이지가 열릴 때까지.",
						"english": "The records continue. Until a new page opens.",
						"japanese": "記録は続く。新たなページが開かれるまで。",
						"chinese": "记录将继续。直到新的页面开启。",
						"french": "Les registres continuent. Jusqu'à l'ouverture d'une nouvelle page.",
						"spanish": "Los registros continúan. Hasta que una nueva página se abra.",
						"vietnamese": "Những ghi chép vẫn tiếp diễn. Cho đến khi một trang mới mở ra.",
						"thai": "บันทึกยังคงดำเนินต่อไป จนกว่าหน้าใหม่จะถูกเปิดออก",
						"hindi": "अभिलेख जारी हैं। जब तक एक नया पृष्ठ नहीं खुलता।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌무덤의 심판은 잠시 멈췄다. 그러나, 깨진 맹세의 기록은 끝나지 않았다.",
						"english": "The judgment of the stone tomb has paused. Yet, the record of broken vows is not over.",
						"japanese": "石の墓の審判は一時的に止まった。しかし、破られた誓いの記録は終わっていない。",
						"chinese": "石冢的审判暂时停止了。然而，被打破的誓言记录并未结束。",
						"french": "Le jugement du tombeau de pierre s'est arrêté un instant. Pourtant, le registre des serments brisés n'est pas clos.",
						"spanish": "El juicio de la tumba de piedra se ha detenido. Sin embargo, el registro de los votos rotos no ha terminado.",
						"vietnamese": "Phán quyết của lăng mộ đá tạm dừng. Tuy nhiên, ghi chép về những lời thề bị phá vỡ vẫn chưa kết thúc.",
						"thai": "การพิพากษาของสุสานหินหยุดลงชั่วคราว แต่บันทึกของคำสาบานที่แตกหักยังไม่สิ้นสุด",
						"hindi": "पत्थर के मकबरे का फैसला थम गया है। हालाँकि, टूटी हुई कसमों का सिलसिला खत्म नहीं हुआ है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "새로운 배신과 새로운 심판이, 다음 이야기를 기다리고 있었다.",
						"english": "New betrayals and new judgments awaited the next chapter.",
						"japanese": "新たな裏切りと新たな審判が、次の物語を待っていた。",
						"chinese": "新的背叛和新的审判，正在等待下一个故事。",
						"french": "De nouvelles trahisons et de nouveaux jugements attendaient le prochain chapitre.",
						"spanish": "Nuevas traiciones y nuevos juicios esperaban la próxima historia.",
						"vietnamese": "Những phản bội mới và những phán xét mới đang chờ đợi câu chuyện tiếp theo.",
						"thai": "การทรยศครั้งใหม่และการพิพากษาครั้งใหม่กำลังรอคอยเรื่องราวต่อไป",
						"hindi": "नए धोखे और नए फैसले, अगली कहानी का इंतज़ार कर रहे थे。"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"긴 여정의 끝, 돌무덤 앞에 섰다.",
			"수많은 시험과 배신, 심판을 넘어 이곳까지 왔다.",
			"이제 마지막 맹세만이 남았다. 돌무덤은 침묵 속에서 기다린다.",
			"어떤 진실이 우리를 기다릴까. 혹은 어떤 파멸이."
		],
		"english": [
			"At the end of a long journey, I stand before the stone tomb.",
			"Through countless trials, betrayals, and judgments, I have reached this place.",
			"Now, only the final vow remains. The stone tomb waits in silence.",
			"What truth awaits us? Or what destruction?"
		],
		"japanese": [
			"長い旅の終わり、石の墓の前に立った。",
			"数えきれないほどの試練、裏切り、そして裁きを乗り越え、ここまで来た。",
			"今、残るは最後の誓いのみ。石の墓は沈黙の中で待つ。",
			"どんな真実が我々を待つのか。あるいは、どんな破滅が。"
		],
		"chinese": [
			"漫长旅程的尽头，我站在石墓前。",
			"历经无数考验、背叛与审判，我来到了这里。",
			"如今，只剩下最后的誓言。石墓在沉默中等待。",
			"什么真相在等待我们？抑或是何种毁灭？"
		],
		"french": [
			"Au terme d'un long voyage, je me tiens devant le tombeau de pierre.",
			"J'ai traversé d'innombrables épreuves, trahisons et jugements pour arriver ici.",
			"Seul le dernier serment demeure. Le tombeau de pierre attend en silence.",
			"Quelle vérité nous attend ? Ou quelle destruction ?"
		],
		"spanish": [
			"Al final de un largo viaje, me encuentro ante la tumba de piedra.",
			"He llegado hasta aquí superando innumerables pruebas, traiciones y juicios.",
			"Ahora, solo queda el juramento final. La tumba de piedra espera en silencio.",
			"¿Qué verdad nos espera? ¿O qué destrucción?"
		],
		"vietnamese": [
			"Cuối hành trình dài, ta đứng trước ngôi mộ đá.",
			"Vượt qua vô vàn thử thách, phản bội và phán xét, ta đã đến được nơi này.",
			"Giờ đây, chỉ còn lại lời thề cuối cùng. Ngôi mộ đá đợi chờ trong im lặng.",
			"Sự thật nào đang đợi chúng ta? Hay là sự hủy diệt nào?"
		],
		"thai": [
			"ณ ปลายทางของการเดินทางอันยาวนาน ข้ามายืนอยู่หน้าหลุมศพหิน",
			"ผ่านพ้นการทดสอบ การทรยศ และการพิพากษามานับไม่ถ้วน ข้าได้มาถึงที่นี่แล้ว",
			"บัดนี้ เหลือเพียงคำสาบานสุดท้าย หลุมศพหินเฝ้ารอคอยในความเงียบงัน",
			"ความจริงใดที่รอเราอยู่? หรือหายนะใดกัน?"
		],
		"hindi": [
			"एक लंबी यात्रा के अंत में, मैं पत्थर के मकबरे के सामने खड़ा हूँ।",
			"अनगिनत परीक्षाओं, विश्वासघात और निर्णयों को पार कर, मैं यहाँ तक पहुँचा हूँ।",
			"अब केवल अंतिम प्रतिज्ञा शेष है। पत्थर का मकबरा चुप्पी में इंतजार कर रहा है।",
			"कौन सी सच्चाई हमारा इंतजार कर रही है? या कौन सा विनाश?"
		]
	}
} as const;
