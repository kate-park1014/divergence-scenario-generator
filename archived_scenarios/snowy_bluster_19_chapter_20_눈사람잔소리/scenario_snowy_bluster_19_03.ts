export const scenario_snowy_bluster_19_03 = {
	"scenario_id": "snowy_bluster_19_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 유적의 입구. 수천 년의 세월이 응결된 한기가 맴돌았다.",
						"english": "The entrance to the frozen ruins. A chill, condensed from millennia, lingered.",
						"japanese": "凍てついた遺跡の入口。数千年の歳月が凝結した冷気が漂っていた。",
						"chinese": "冰封遗迹的入口。数千年的寒气凝结于此，久久不散。",
						"french": "L'entrée des ruines gelées. Un froid, condensé de millénaires, persistait.",
						"spanish": "La entrada a las ruinas congeladas. Un frío, condensado de milenios, persistía.",
						"vietnamese": "Lối vào phế tích băng giá. Một luồng khí lạnh, ngưng tụ từ hàng thiên niên kỷ, vẫn còn vương vấn.",
						"thai": "ทางเข้าซากปรักหักพังที่เยือกแข็ง ความเย็นยะเยือกที่ควบแน่นมานับพันปีห้อมล้อมอยู่",
						"hindi": "जमे हुए खंडहर का प्रवेश द्वार। सहस्राब्दियों से संघनित एक ठंडक छाई हुई थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기서 뭐라도 찾을 수 있을까요?",
						"english": "Think we'll find anything here?",
						"japanese": "ここで何か見つかるでしょうか？",
						"chinese": "我们能在这里找到什么吗？",
						"french": "Pensez-vous qu'on trouvera quelque chose ici ?",
						"spanish": "¿Crees que encontraremos algo aquí?",
						"vietnamese": "Liệu chúng ta có thể tìm thấy gì ở đây không?",
						"thai": "เราจะเจออะไรที่นี่ไหมนะ?",
						"hindi": "क्या हमें यहाँ कुछ मिलेगा?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "흥. 마을 사람들의 과장된 소리만 아니라면. 기록이 증명할 뿐이지.",
						"english": "Hmph. As long as it's not just the villagers' exaggerations. The records will prove it.",
						"japanese": "ふん。村人の大げさな話でなければいいがな。記録が証明するだけだ。",
						"chinese": "哼。只要不是村民夸大其词就好。记录会证明一切。",
						"french": "Humph. Pourvu que ce ne soient pas les exagérations des villageois. Les archives le prouveront.",
						"spanish": "Mmm. Siempre que no sean solo las exageraciones de los aldeanos. Los registros lo probarán.",
						"vietnamese": "Hừ. Miễn là không phải lời cường điệu của dân làng. Ghi chép sẽ chứng minh thôi.",
						"thai": "หึ ถ้าไม่ใช่แค่เรื่องที่ชาวบ้านพูดเกินจริงก็แล้วไป บันทึกต่างหากที่จะพิสูจน์ได้",
						"hindi": "हम्म्फ़। बशर्ते यह गाँव वालों की सिर्फ़ अतिशयोक्ति न हो। अभिलेख ही इसे सिद्ध करेंगे।"
					}
				},
				{
					"content": {
						"korean": "눈사람 괴물이 나타난다는 소문이 심상치 않아요.",
						"english": "The rumors of a snowman monster appearing are unsettling.",
						"japanese": "雪だるまの怪物が現れるという噂、穏やかじゃないですね。",
						"chinese": "雪人怪物出现的传闻，可不寻常啊。",
						"french": "Les rumeurs d'un monstre des neiges sont inquiétantes.",
						"spanish": "Los rumores de la aparición de un monstruo de nieve son inquietantes.",
						"vietnamese": "Tin đồn về quái vật người tuyết xuất hiện không hề tầm thường chút nào.",
						"thai": "ข่าวลือเรื่องสัตว์ประหลาดมนุษย์หิมะปรากฏตัวนั้นไม่ธรรมดาเลย",
						"hindi": "बर्फ़ीले दानव के प्रकट होने की अफ़वाहें परेशान करने वाली हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "괴물이라. 아직 실체는 없더군. 헛소리일 가능성이 높아.",
						"english": "A monster, you say? No tangible form yet. Most likely nonsense.",
						"japanese": "怪物だと。まだ実体はない。たわ言である可能性が高い。",
						"chinese": "怪物？尚未有实体。多半是胡言乱语。",
						"french": "Un monstre, dites-vous ? Pas de forme concrète encore. Probablement des balivernes.",
						"spanish": "¿Un monstruo? Todavía no hay forma tangible. Lo más probable es que sea una tontería.",
						"vietnamese": "Quái vật ư. Vẫn chưa có hình dạng thật. Rất có thể là chuyện vớ vẩn.",
						"thai": "สัตว์ประหลาดงั้นเหรอ? ยังไม่มีตัวตนจริง ส่วนใหญ่มันก็แค่เรื่องไร้สาระ",
						"hindi": "एक राक्षस? अभी तक कोई ठोस रूप नहीं। ज़्यादातर बकवास होने की संभावना है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이것 좀 보게! 바이킹 서적의 파편이야. 그리고… 고대 문헌도!",
						"english": "Look at this! Fragments of a Viking book. And... ancient scriptures too!",
						"japanese": "これを見てくれ！ヴァイキングの書物の破片だ。それに…古代文献も！",
						"chinese": "快看这个！维京书籍的碎片。还有……古代文献！",
						"french": "Regardez ça ! Des fragments d'un livre viking. Et... des manuscrits anciens aussi !",
						"spanish": "¡Mira esto! Fragmentos de un libro vikingo. ¡Y... escrituras antiguas también!",
						"vietnamese": "Nhìn này! Các mảnh vỡ của một cuốn sách Viking. Và... cả những tài liệu cổ đại nữa!",
						"thai": "ดูนี่สิ! ชิ้นส่วนของหนังสือไวกิ้ง แถมยังมี... เอกสารโบราณอีกด้วย!",
						"hindi": "इसे देखो! वाइकिंग किताब के टुकड़े। और… प्राचीन धर्मग्रंथ भी!"
					},
					"speaker": "boris",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 내용인데요?",
						"english": "What does it say?",
						"japanese": "何て書いてあるんですか？",
						"chinese": "写了什么？",
						"french": "Qu'est-ce que ça dit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó nói gì?",
						"thai": "มันว่ายังไง?",
						"hindi": "इसमें क्या लिखा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'과도한 허풍은 재앙을 부른다.' 그리고 '눈의 정령이 노여워할 것이다'… 하, 소설인가?",
						"english": "'Excessive boastfulness invites disaster.' And 'The Snow Spirit will be enraged'... Ha, is this fiction?",
						"japanese": "「過度な虚勢は災厄を招く。」そして「雪の精霊が怒るだろう」…はぁ、小説か？",
						"chinese": "“过度的吹嘘会招致灾祸。”还有“雪之精灵会发怒”…哈，这是小说吗？",
						"french": "« L'orgueil démesuré attire la catastrophe. » Et « L'Esprit des Neiges sera en colère »… Pff, c'est un roman ?",
						"spanish": "'La excesiva fanfarronería atrae el desastre.' Y 'El Espíritu de la Nieve se enfurecerá'... Ja, ¿es una novela?",
						"vietnamese": "'Tự phụ quá mức sẽ mang tai họa.' Và 'Linh hồn Tuyết sẽ nổi giận'... Ha, là tiểu thuyết sao?",
						"thai": "“ความโอ้อวดที่มากเกินไปนำมาซึ่งหายนะ” และ “วิญญาณแห่งหิมะจะโกรธแค้น”... ฮ่า นิยายหรือไงกัน?",
						"hindi": "'अत्यधिक शेखी आपदा को आमंत्रित करती है।' और 'बर्फ की आत्मा क्रोधित होगी'... हा, क्या यह कोई उपन्यास है?"
					},
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "정령이 화났다는 말인가요?",
						"english": "So the spirit's angry?",
						"japanese": "精霊が怒ったってことですか？",
						"chinese": "是说精灵生气了吗？",
						"french": "Ça veut dire que l'esprit est en colère ?",
						"spanish": "¿Significa que el espíritu está enojado?",
						"vietnamese": "Nghĩa là linh hồn đang giận sao?",
						"thai": "หมายความว่าวิญญาณโกรธเหรอครับ/คะ?",
						"hindi": "क्या इसका मतलब है कि आत्मा क्रोधित है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "뭐, 고대인들은 허풍을 떨다 정령의 심기를 건드렸다고 믿었겠지. 미신이야.",
						"english": "Well, ancient people must have believed they provoked the spirit by boasting. Superstition.",
						"japanese": "まあ、古の人々は虚勢を張って精霊の機嫌を損ねたと思っていたんだろう。迷信だよ。",
						"chinese": "嗯，古人肯定相信他们夸耀惹怒了精灵。迷信罢了。",
						"french": "Bof, les anciens devaient croire qu'ils avaient provoqué l'esprit en se vantant. De la superstition.",
						"spanish": "Bueno, los antiguos debieron creer que provocaron al espíritu al jactarse. Es una superstición.",
						"vietnamese": "Chà, người xưa hẳn tin rằng họ đã chọc giận linh hồn bằng cách khoe khoang. Mê tín thôi.",
						"thai": "อืม คนโบราณคงเชื่อว่าการคุยโวของพวกเขาทำให้วิญญาณไม่พอใจน่ะ. มันเป็นแค่ความเชื่อ.",
						"hindi": "खैर, प्राचीन लोग मानते थे कि उन्होंने शेखी बघार कर आत्मा को भड़काया था। अंधविश्वास है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "하지만 괴물은 나타났어요!",
						"english": "But the monster appeared!",
						"japanese": "でも、怪物は現れたんです！",
						"chinese": "可是怪物出现了！",
						"french": "Mais le monstre est apparu !",
						"spanish": "¡Pero el monstruo apareció!",
						"vietnamese": "Nhưng con quái vật đã xuất hiện!",
						"thai": "แต่สัตว์ประหลาดปรากฏตัวขึ้นแล้วนะคะ/ครับ!",
						"hindi": "लेकिन राक्षस तो प्रकट हो गया!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "그것도 실체는 아직 불분명해.",
						"english": "And its true nature is still uncertain.",
						"japanese": "それも、実体はまだ不明だ。",
						"chinese": "而且它的实体还不清楚。",
						"french": "Et sa véritable nature est encore incertaine.",
						"spanish": "Y su verdadera naturaleza aún es incierta.",
						"vietnamese": "Hơn nữa, thực thể của nó vẫn chưa rõ ràng.",
						"thai": "แถมรูปร่างที่แท้จริงของมันก็ยังไม่ชัดเจนด้วย.",
						"hindi": "और उसका वास्तविक स्वरूप अभी भी अस्पष्ट है।"
					}
				},
				{
					"content": {
						"korean": "보리스는 미심쩍은 표정으로 고대 문헌을 응시했다. '오만'이란 단어가 유독 선명했다.",
						"english": "Boris gazed at the ancient text with a skeptical expression. The word 'arrogance' stood out with particular clarity.",
						"japanese": "ボリスは訝しげな表情で古文書を見つめた。「傲慢」という言葉がひときわ鮮明だった。",
						"chinese": "鲍里斯带着怀疑的表情凝视着古籍。“傲慢”一词格外清晰。",
						"french": "Boris fixa les anciens écrits d'un air sceptique. Le mot « arrogance » était particulièrement clair.",
						"spanish": "Boris contempló el antiguo texto con una expresión escéptica. La palabra 'arrogancia' destacaba con particular claridad.",
						"vietnamese": "Boris nhìn chằm chằm vào văn tự cổ với vẻ mặt hoài nghi. Từ 'kiêu ngạo' hiện lên rõ ràng một cách đặc biệt.",
						"thai": "บอริสมองตำราโบราณด้วยสีหน้าไม่แน่ใจ คำว่า 'โอหัง' โดดเด่นเป็นพิเศษ.",
						"hindi": "बोरिस ने प्राचीन ग्रंथ को संदिग्ध भाव से देखा। 'अहंकार' शब्द विशेष रूप से स्पष्ट था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "이 구절을 보게. '눈의 정령은 진실을 왜곡하는 자들을 경멸한다'라고 쓰여 있어.",
						"english": "Look at this passage. It says, 'The Snow Spirit despises those who distort the truth.'",
						"japanese": "この一節を見ろ。「雪の精霊は真実を歪める者たちを軽蔑する」と書いてある。",
						"chinese": "看看这一段。“雪之精灵蔑视那些歪曲真相的人。”",
						"french": "Regarde ce passage. Il est écrit : « L'Esprit des Neiges méprise ceux qui déforment la vérité. »",
						"spanish": "Mira este pasaje. Dice: 'El Espíritu de la Nieve desprecia a aquellos que distorsionan la verdad'.",
						"vietnamese": "Nhìn đoạn này xem. Nó viết, 'Linh hồn Tuyết khinh miệt những kẻ bóp méo sự thật.'",
						"thai": "ดูย่อหน้านี้สิ. มันเขียนว่า 'วิญญาณแห่งหิมะดูถูกผู้ที่บิดเบือนความจริง'.",
						"hindi": "इस अंश को देखो। इसमें लिखा है, 'बर्फ की आत्मा उन लोगों से घृणा करती है जो सत्य को विकृत करते हैं।'"
					}
				},
				{
					"content": {
						"korean": "그럼… 괴물은 진실을 왜곡한 벌인가요?",
						"english": "So... is the monster a punishment for distorting the truth?",
						"japanese": "じゃあ…怪物は真実を歪めた罰なんですか？",
						"chinese": "那么…怪物是对歪曲真相的惩罚吗？",
						"french": "Alors… le monstre est une punition pour avoir déformé la vérité ?",
						"spanish": "Entonces... ¿el monstruo es un castigo por distorsionar la verdad?",
						"vietnamese": "Vậy... quái vật là hình phạt cho việc bóp méo sự thật sao?",
						"thai": "งั้น... สัตว์ประหลาดนี่คือการลงโทษจากการบิดเบือนความจริงเหรอ?",
						"hindi": "तो... क्या राक्षस सत्य को विकृत करने की सज़ा है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "벌이든 뭐든, '떠들썩하고 시끄러운' 소리만 들었다는 증언뿐이더군. 피해는 없고.",
						"english": "Punishment or whatever, there's only testimony of hearing 'boisterous and loud' noises. No damage.",
						"japanese": "罰だろうが何だろうが、「騒がしくてうるさい」音を聞いたという証言ばかりだ。被害はない。",
						"chinese": "惩罚也好，什么都好，只有听到“喧闹吵杂”声音的证词。没有损失。",
						"french": "Punition ou autre, il n'y a que des témoignages de bruits « tapageurs et forts ». Aucun dégât.",
						"spanish": "Castigo o lo que sea, solo hay testimonios de haber escuchado ruidos 'escandalosos y fuertes'. Sin daños.",
						"vietnamese": "Phạt hay gì cũng được, chỉ có lời khai là nghe thấy tiếng động 'ồn ào và ầm ĩ' thôi. Không có thiệt hại.",
						"thai": "จะลงโทษหรือไม่ก็ตาม มีแค่คำให้การว่าได้ยินแต่เสียง 'ดังเอะอะ' เท่านั้น ไม่มีผู้บาดเจ็บ.",
						"hindi": "सज़ा हो या कुछ और, बस 'शोरगुल और ऊँची' आवाज़ें सुनने की गवाही है। कोई नुकसान नहीं हुआ।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "그래도 밤마다 들리는 울음소리는 무서워요.",
						"english": "Still, the nightly wailing scares me.",
						"japanese": "それでも、夜ごとに聞こえる鳴き声は怖いです。",
						"chinese": "但每晚听到的哭声还是让我害怕。",
						"french": "Pourtant, les pleurs nocturnes me terrifient.",
						"spanish": "Aun así, los lamentos que se oyen cada noche me asustan.",
						"vietnamese": "Dù vậy, tiếng khóc văng vẳng mỗi đêm vẫn đáng sợ.",
						"thai": "ถึงอย่างนั้น เสียงร่ำไห้ที่ได้ยินทุกคืนก็ยังน่ากลัวอยู่ดี",
						"hindi": "फिर भी, हर रात सुनाई देने वाली वो रोने की आवाज़ें डरावनी हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "공포가 과장되면 없는 것도 보이게 마련이지. 이성을 지켜야 해.",
						"english": "Fear exaggerates; you'll see things that aren't there. Keep your wits about you.",
						"japanese": "恐怖が誇張されると、ないものまで見えてくるものだ。理性を保たねば。",
						"chinese": "恐惧会夸大一切，让你看到不存在的东西。保持理性。",
						"french": "La peur exagère tout, on voit ce qui n'est pas. Garde ta raison.",
						"spanish": "El miedo exagera; verás cosas que no existen. Debes mantener la razón.",
						"vietnamese": "Nỗi sợ phóng đại, sẽ thấy những thứ không có thật. Phải giữ lý trí.",
						"thai": "ความกลัวทำให้เห็นสิ่งไม่มีอยู่จริง จงมีสติเข้าไว้",
						"hindi": "डर से चीज़ें बढ़-चढ़कर दिखती हैं; तुम ऐसी चीज़ें देखोगे जो हैं ही नहीं। अपनी समझ बनाए रखो।"
					}
				},
				{
					"content": {
						"korean": "유적 깊숙이, 묘하게 성난 듯한 눈보라가 몰아쳤다. 보리스는 아랑곳없이 기록에 몰두했다.",
						"english": "Deep within the ruins, a strangely furious blizzard raged. Boris, unconcerned, immersed himself in his records.",
						"japanese": "遺跡の奥深く、奇妙に荒れ狂う吹雪が吹き荒れていた。ボリスは気にも留めず、記録に没頭した。",
						"chinese": "在遗迹深处，一场诡异狂暴的暴风雪肆虐着。鲍里斯却毫不在意，沉浸在记录中。",
						"french": "Au fond des ruines, un blizzard étrangement furieux faisait rage. Boris, impassible, s'immergeait dans ses notes.",
						"spanish": "En lo profundo de las ruinas, una tormenta de nieve extrañamente furiosa arremetía. Boris, impasible, se sumergía en sus registros.",
						"vietnamese": "Sâu trong di tích, một trận bão tuyết kỳ lạ, giận dữ hoành hành. Boris vẫn không màng, mải mê với ghi chép của mình.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง พายุหิมะที่ดูเหมือนโกรธแค้นประดังเข้ามา บอริสไม่สนใจและจดจ่ออยู่กับการบันทึก",
						"hindi": "खंडहरों के भीतर गहराई में, एक अजीबोगरीब रूप से उग्र बर्फीला तूफान आया। बोरिस, बेपरवाह, अपने रिकॉर्ड में डूबा रहा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
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
					"action": "enter",
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 석상 주변의 글자들이 의미심장하군. '오만', '허풍'… 계속 반복돼.",
						"english": "The inscriptions around this statue are significant. 'Arrogance,' 'Boasting'... they keep repeating.",
						"japanese": "この石像の周りの文字は意味深だな。「傲慢」、「虚言」…繰り返されている。",
						"chinese": "这石像周围的文字意味深长。“傲慢”，“虚夸”……不断重复着。",
						"french": "Les inscriptions autour de cette statue sont révélatrices. 'Arrogance', 'Vanité'... elles se répètent.",
						"spanish": "Las inscripciones alrededor de esta estatua son significativas. 'Arrogancia', 'Fanfarronería'... se repiten sin cesar.",
						"vietnamese": "Những dòng chữ quanh bức tượng này thật có ý nghĩa. 'Kiêu ngạo', 'Khoe khoang'... cứ lặp đi lặp lại.",
						"thai": "ตัวอักษรรอบรูปปั้นนี้มีความหมาย 'ความโอหัง', 'คุยโว'... ซ้ำไปซ้ำมา",
						"hindi": "इस मूर्ति के चारों ओर के शिलालेख महत्वपूर्ण हैं। 'अहंकार', 'शेखी'... वे दोहराते रहते हैं।"
					},
					"speaker": "boris",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 길이 끝이 보이지 않아요. 정말 괜찮을까요?",
						"english": "This path seems endless. Will we really be okay?",
						"japanese": "この道は終わりが見えません。本当に大丈夫でしょうか？",
						"chinese": "这条路似乎没有尽头。真的没问题吗？",
						"french": "Ce chemin semble sans fin. Serons-nous vraiment en sécurité ?",
						"spanish": "Este camino no tiene fin. ¿Estaremos bien de verdad?",
						"vietnamese": "Con đường này không thấy điểm cuối. Chúng ta có ổn không?",
						"thai": "ทางนี้ไม่มีที่สิ้นสุด เราจะโอเคจริง ๆ หรือ",
						"hindi": "इस रास्ते का कोई अंत नहीं दिख रहा। क्या हम वाकई ठीक रहेंगे?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 더 찾아야 할 기록이 있어. 우리가 놓친 게 있을지도 몰라.",
						"english": "There are still more records to find. We might have missed something.",
						"japanese": "まだ見つけるべき記録がある。何か見落としているのかもしれない。",
						"chinese": "还有更多记录要找。我们可能遗漏了什么。",
						"french": "Il y a encore plus de registres à trouver. Nous avons peut-être manqué quelque chose.",
						"spanish": "Todavía hay más registros que encontrar. Puede que hayamos pasado algo por alto.",
						"vietnamese": "Vẫn còn nhiều ghi chép phải tìm. Có thể chúng ta đã bỏ lỡ điều gì đó.",
						"thai": "ยังมีบันทึกที่ต้องค้นหาอีก เราอาจจะพลาดอะไรไป",
						"hindi": "अभी और रिकॉर्ड ढूंढने बाकी हैं। हो सकता है हमने कुछ खो दिया हो।"
					},
					"speaker": "boris"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "점점 더 깊은 곳으로. 알 수 없는 위협과 오래된 경고가 뒤섞였다. 돌아갈 수 없는 길이었다.",
						"english": "Deeper and deeper. Unseen threats and ancient warnings mingled. It was a path of no return.",
						"japanese": "ますます深みへ。未知の脅威と古き警告が入り混じっていた。それは戻れない道だった。",
						"chinese": "越来越深。未知的威胁与古老的警告交织在一起。这是一条不归路。",
						"french": "Toujours plus profond. Menaces inconnues et avertissements anciens se mêlaient. C'était un chemin sans retour.",
						"spanish": "Cada vez más profundo. Amenazas desconocidas y antiguas advertencias se mezclaban. Era un camino sin retorno.",
						"vietnamese": "Càng lúc càng sâu hơn. Những mối đe dọa không thể biết và những lời cảnh báo cổ xưa hòa quyện. Đó là con đường không thể quay lại.",
						"thai": "ลึกเข้าไปเรื่อย ๆ อันตรายที่ไม่รู้จักและคำเตือนเก่าแก่ปะปนกัน นี่คือเส้นทางที่ไม่อาจหวนกลับ",
						"hindi": "और गहरा, और गहरा। अनदेखे खतरे और प्राचीन चेतावनी घुल-मिल गए। यह वापसी का रास्ता नहीं था।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 유적의 가장 깊은 곳을 지키고 있었다.",
						"english": "A colossal shadow guarded the deepest part of the ruins.",
						"japanese": "巨大な影が遺跡の最も深い場所を守っていた。",
						"chinese": "一个巨大的影子守护着遗迹最深处。",
						"french": "Une ombre colossale gardait la partie la plus profonde des ruines.",
						"spanish": "Una sombra colosal custodiaba la parte más profunda de las ruinas.",
						"vietnamese": "Một cái bóng khổng lồ canh giữ nơi sâu nhất của di tích.",
						"thai": "เงาขนาดมหึมาเฝ้าส่วนที่ลึกที่สุดของซากปรักหักพัง",
						"hindi": "एक विशाल छाया खंडहरों के सबसे गहरे हिस्से की रखवाली कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…오지 말았어야 했다.",
						"english": "...I shouldn't have come.",
						"japanese": "…来るべきではなかった。",
						"chinese": "……我真不该来。",
						"french": "...Je n'aurais pas dû venir.",
						"spanish": "...No debería haber venido.",
						"vietnamese": "...Lẽ ra tôi không nên đến.",
						"thai": "...ไม่น่ามาเลย",
						"hindi": "...मुझे आना ही नहीं चाहिए था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가… 눈사람 괴물인가!",
						"english": "You... are you the snowman monster!",
						"japanese": "お前が…雪だるまの怪物か！",
						"chinese": "你就是……雪人怪物吗！",
						"french": "Toi... es-tu le monstre des neiges !",
						"spanish": "¡Tú... eres el monstruo de nieve!",
						"vietnamese": "Ngươi... là quái vật người tuyết sao!",
						"thai": "แก... แกคือสัตว์ประหลาดมนุษย์หิมะ!",
						"hindi": "तुम... क्या तुम हिममानव राक्षस हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "실체를 드러냈군. 하지만 네 존재 이유를 밝혀야 해.",
						"english": "You've revealed your true form. But you must explain your reason for being.",
						"japanese": "正体を現したな。だが、お前の存在理由を明かせ。",
						"chinese": "你暴露了真面目。但你必须解释你存在的理由。",
						"french": "Tu as révélé ta vraie forme. Mais tu dois révéler la raison de ton existence.",
						"spanish": "Has revelado tu verdadera forma. Pero debes explicar tu razón de ser.",
						"vietnamese": "Ngươi đã lộ diện. Nhưng ngươi phải giải thích lý do tồn tại của mình.",
						"thai": "เจ้าเผยร่างที่แท้จริงแล้ว แต่เจ้าต้องเปิดเผยเหตุผลของการดำรงอยู่ของเจ้า",
						"hindi": "तुमने अपना असली रूप दिखा दिया है। लेकिन तुम्हें अपने अस्तित्व का कारण बताना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…말해도 소용없다. 너희는 듣지 않아.",
						"english": "...It's useless to speak. You won't listen.",
						"japanese": "…話しても無駄だ。お前たちは聞かない。",
						"chinese": "…说也无济于事。你们不会听的。",
						"french": "...C'est inutile de parler. Vous n'écouterez pas.",
						"spanish": "...Es inútil hablar. No escucharéis.",
						"vietnamese": "...Nói cũng vô ích. Các ngươi sẽ không nghe đâu.",
						"thai": "...พูดไปก็ไร้ประโยชน์ พวกเจ้าไม่ฟังหรอก",
						"hindi": "...बोलना बेकार है। तुम सुनोगे नहीं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 아무도 나를 이해하지 못하는군. {random_boss}의 저주는… 계속될 것이다…",
						"english": "...In the end, no one understands me. The curse of {random_boss} will... continue...",
						"japanese": "…結局、誰も私を理解しない。{random_boss}の呪いは…続くのだ…",
						"chinese": "...最终，没有人理解我。{random_boss}的诅咒将...继续...",
						"french": "...Au final, personne ne me comprend. La malédiction de {random_boss} va... continuer...",
						"spanish": "...Al final, nadie me entiende. La maldición de {random_boss}... continuará...",
						"vietnamese": "...Cuối cùng, không ai hiểu ta. Lời nguyền của {random_boss} sẽ... tiếp tục...",
						"thai": "...ท้ายที่สุด ก็ไม่มีใครเข้าใจข้า คำสาปของ {random_boss} จะ...ดำเนินต่อไป...",
						"hindi": "...अंत में, कोई मुझे नहीं समझता। {random_boss} का अभिशाप... जारी रहेगा..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게… 끝인가? 뭔가 찝찝해.",
						"english": "Is this... the end? Something feels off.",
						"japanese": "これが…終わりか？ 何か釈然としない。",
						"chinese": "这…就是结局吗？总觉得有些不对劲。",
						"french": "Est-ce... la fin ? Quelque chose cloche.",
						"spanish": "¿Es este... el final? Algo no cuadra.",
						"vietnamese": "Đây... là kết thúc sao? Cảm giác cứ bứt rứt thế nào.",
						"thai": "นี่...คือจุดจบหรือ? รู้สึกไม่สบายใจเลย",
						"hindi": "क्या यह... अंत है? कुछ अटपटा लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "괴물을 처치했지만, 기록은 아직 불완전해. 진실은 더 깊이 잠들어 있어.",
						"english": "We defeated the monster, but the records are still incomplete. The truth lies deeper.",
						"japanese": "怪物を倒したが、記録はまだ不完全だ。真実はもっと深く眠っている。",
						"chinese": "我们击败了怪物，但记录仍不完整。真相潜藏得更深。",
						"french": "Nous avons vaincu le monstre, mais les archives sont encore incomplètes. La vérité est enfouie plus profondément.",
						"spanish": "Hemos derrotado al monstruo, pero los registros aún están incompletos. La verdad yace más profunda.",
						"vietnamese": "Chúng ta đã đánh bại quái vật, nhưng hồ sơ vẫn chưa hoàn chỉnh. Sự thật vẫn còn ngủ sâu hơn.",
						"thai": "เราจัดการกับสัตว์ประหลาดได้แล้ว แต่บันทึกยังไม่สมบูรณ์ ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "हमने राक्षस को हरा दिया, लेकिन रिकॉर्ड अभी भी अधूरे हैं। सच्चाई और गहरी छिपी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적과의 싸움. 그러나 공포는 사라지지 않았다. 오히려 더 많은 의문이 남았다.",
						"english": "A battle against an unknown foe. Yet, the fear hasn't vanished. Instead, more questions remain.",
						"japanese": "正体不明の敵との戦い。しかし、恐怖は消えなかった。むしろ、より多くの疑問が残った。",
						"chinese": "与不明敌人的战斗。然而，恐惧并未消失。反而留下了更多疑问。",
						"french": "Un combat contre un ennemi inconnu. Pourtant, la peur n'a pas disparu. Au contraire, davantage de questions subsistent.",
						"spanish": "Una batalla contra un enemigo desconocido. Sin embargo, el miedo no ha desaparecido. En cambio, quedan más preguntas.",
						"vietnamese": "Trận chiến với kẻ thù không rõ danh tính. Tuy nhiên, nỗi sợ hãi vẫn chưa biến mất. Thay vào đó, nhiều câu hỏi hơn còn đọng lại.",
						"thai": "การต่อสู้กับศัตรูที่ไม่รู้จัก แต่ความกลัวยังไม่หายไป กลับทิ้งคำถามไว้มากมายกว่าเดิม",
						"hindi": "एक अज्ञात दुश्मन के खिलाफ लड़ाई। फिर भी, डर गायब नहीं हुआ है। इसके बजाय, और भी सवाल बाकी हैं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 너희의 오만은… 나를 더 강하게 할 뿐.",
						"english": "Foolish mortals. Your arrogance will only... make me stronger.",
						"japanese": "愚かな者たちめ。お前たちの傲慢は…私をさらに強くするだけだ。",
						"chinese": "愚蠢的人类。你们的傲慢只会…让我更强大。",
						"french": "Fous. Votre arrogance ne fera que... me rendre plus fort.",
						"spanish": "Estúpidos. Vuestra arrogancia solo me... hará más fuerte.",
						"vietnamese": "Những kẻ ngu ngốc. Sự kiêu ngạo của các ngươi sẽ chỉ... khiến ta mạnh hơn.",
						"thai": "พวกโง่เขลา ความเย่อหยิ่งของพวกเจ้าจะ...ทำให้ข้าแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "मूर्ख प्राणियों। तुम्हारा अहंकार केवल... मुझे और मजबूत बनाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 아직 아니야. 여기서 물러설 수 없어!",
						"english": "Damn it... Not yet. I can't back down here!",
						"japanese": "くそ…まだだ。ここで退くわけにはいかない！",
						"chinese": "该死…还没完。我不能在这里退缩！",
						"french": "Mince... Pas encore. Je ne peux pas reculer ici !",
						"spanish": "Maldita sea... Todavía no. ¡No puedo retroceder aquí!",
						"vietnamese": "Chết tiệt... Chưa đâu. Tôi không thể lùi bước ở đây!",
						"thai": "บ้าจริง...ยังไม่ใช่ตอนนี้ ข้าถอยไม่ได้!",
						"hindi": "धिक्कार है... अभी नहीं। मैं यहां पीछे नहीं हट सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "이대로 끝낼 수는 없어. 아직 밝혀야 할 것이 많다.",
						"english": "I can't end it like this. There's still so much to uncover.",
						"japanese": "このままでは終われない。まだ明らかにすべきことが多い。",
						"chinese": "不能就这么结束。还有很多事情需要揭露。",
						"french": "Je ne peux pas laisser ça se terminer comme ça. Il y a encore tant à découvrir.",
						"spanish": "No puedo terminar así. Todavía hay mucho que desvelar.",
						"vietnamese": "Tôi không thể kết thúc như thế này. Vẫn còn nhiều điều phải khám phá.",
						"thai": "จบแบบนี้ไม่ได้ ยังมีอีกมากที่ต้องเปิดเผย",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता। अभी बहुत कुछ उजागर करना बाकी है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 춤추는 유적. 그곳에 묻힌 고대 바이킹의 이야기가 깨어난다.",
			"고고학자 보리스는 소문 너머의 진실을 쫓았다.",
			"오만과 허풍. 정령의 노여움. 모든 것이 뒤섞여 거대한 눈덩이가 되어갔다.",
			"사람들은 믿었고, 두려워했다. 하지만 보리스는… 여전히 회의적이었다."
		],
		"english": [
			"A blizzard-swept ruin. The tale of ancient Vikings buried within awakens.",
			"Archaeologist Boris pursued the truth beyond the rumors.",
			"Arrogance and bluster. The spirits' wrath. All intertwined, forming a colossal snowball.",
			"People believed and feared. But Boris... remained skeptical."
		],
		"japanese": [
			"吹雪が舞う遺跡。そこに埋もれた古代ヴァイキングの物語が目覚める。",
			"考古学者ボリスは、噂の向こうの真実を追った。",
			"傲慢と虚勢。精霊の怒り。全てが混じり合い、巨大な雪玉と化した。",
			"人々は信じ、恐れた。しかしボリスは…依然として懐疑的だった。"
		],
		"chinese": [
			"暴风雪中的遗迹。埋藏于此的古维京传说苏醒了。",
			"考古学家鲍里斯追寻着谣言背后的真相。",
			"傲慢与吹嘘。精灵的愤怒。一切交织，化为巨大的雪球。",
			"人们深信不疑，心生恐惧。但鲍里斯……依然心存疑虑。"
		],
		"french": [
			"Des ruines balayées par la tempête. Le récit des anciens Vikings qui y sont enfouis s'éveille.",
			"L'archéologue Boris cherchait la vérité au-delà des rumeurs.",
			"Arrogance et vantardise. La colère des esprits. Tout s'entremêlait, formant une boule de neige colossale.",
			"Les gens croyaient et craignaient. Mais Boris... restait sceptique."
		],
		"spanish": [
			"Ruinas azotadas por la ventisca. Despierta la historia de los antiguos vikingos sepultados allí.",
			"El arqueólogo Boris persiguió la verdad más allá de los rumores.",
			"Arrogancia y fanfarronería. La ira de los espíritus. Todo se mezcló, formando una gigantesca bola de nieve.",
			"La gente creyó y temió. Pero Boris... seguía siendo escéptico."
		],
		"vietnamese": [
			"Phế tích trong bão tuyết. Câu chuyện về những người Viking cổ đại bị chôn vùi tại đó đang thức tỉnh.",
			"Nhà khảo cổ Boris đã theo đuổi sự thật đằng sau những lời đồn.",
			"Kiêu ngạo và khoác lác. Cơn thịnh nộ của tinh linh. Tất cả hòa quyện, tạo thành một quả cầu tuyết khổng lồ.",
			"Mọi người tin và sợ hãi. Nhưng Boris… vẫn hoài nghi."
		],
		"thai": [
			"ซากปรักหักพังที่พายุหิมะพัดผ่าน เรื่องราวของชาวไวกิ้งโบราณที่ถูกฝังอยู่ภายในกำลังตื่นขึ้น",
			"นักโบราณคดีบอริสติดตามความจริงที่อยู่เบื้องหลังข่าวลือ",
			"ความเย่อหยิ่งและคำโอ้อวด ความพิโรธของวิญญาณ ทุกสิ่งผสมผสานกัน กลายเป็นก้อนหิมะมหึมา",
			"ผู้คนเชื่อและหวาดกลัว แต่บอริส... ยังคงกังขา"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान में एक खंडहर। वहाँ दबी प्राचीन वाइकिंग्स की कहानी जागृत होती है।",
			"पुरातत्ववेत्ता बोरिस ने अफ़वाहों से परे की सच्चाई का पीछा किया।",
			"अहंकार और बड़बोलापन। आत्माओं का क्रोध। सब कुछ आपस में मिल गया, एक विशाल हिमगोला बनता गया।",
			"लोगों ने विश्वास किया और डर गए। लेकिन बोरिस… अभी भी संशयवादी था।"
		]
	}
} as const;
