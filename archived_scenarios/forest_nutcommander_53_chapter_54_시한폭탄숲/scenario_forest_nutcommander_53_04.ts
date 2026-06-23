export const scenario_forest_nutcommander_53_04 = {
	"scenario_id": "forest_nutcommander_53_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"emotion": "base",
					"content": {
						"korean": "숲의 저주는 더욱 깊어졌다. 숨쉬기조차 버거운 공기였다.",
						"english": "The forest's curse deepened. The air was too heavy to breathe.",
						"japanese": "森の呪いはさらに深まった。息をするのも苦しい空気だった。",
						"chinese": "森林的诅咒愈发深重。空气沉重得令人窒息。",
						"french": "La malédiction de la forêt s'intensifiait. L'air était si lourd qu'on pouvait à peine respirer.",
						"spanish": "La maldición del bosque se hizo más profunda. El aire era demasiado denso para respirar.",
						"vietnamese": "Lời nguyền của rừng sâu thêm. Không khí nặng nề đến mức khó thở.",
						"thai": "คำสาปของป่าลึกยิ่งขึ้น อากาศหนักอึ้งจนหายใจแทบไม่ออก",
						"hindi": "वन का अभिशाप और गहरा हो गया। हवा इतनी घुटन भरी थी कि सांस लेना भी मुश्किल था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲이… 죽어가고 있어.",
						"english": "The forest... it's dying.",
						"japanese": "森が…死にかけている。",
						"chinese": "森林……正在死去。",
						"french": "La forêt... elle se meurt.",
						"spanish": "El bosque... se está muriendo.",
						"vietnamese": "Rừng… đang chết dần.",
						"thai": "ป่ากำลัง...ตาย",
						"hindi": "वन... मर रहा है।"
					}
				},
				{
					"type": "direction",
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "왔구나. 이 이상은… 위험해.",
						"english": "You're here. Any further... it's dangerous.",
						"japanese": "来たか。これ以上は…危険だ。",
						"chinese": "你来了。再往前……很危险。",
						"french": "Tu es là. Au-delà... c'est dangereux.",
						"spanish": "Has llegado. Más allá... es peligroso.",
						"vietnamese": "Ngươi đến rồi. Đi xa hơn nữa… nguy hiểm đấy.",
						"thai": "มาแล้วสินะ เกินกว่านี้...อันตรายนะ",
						"hindi": "तुम आ गए। इससे आगे... ख़तरनाक है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헤이즐? 무슨 소리야.",
						"english": "Hazel? What are you talking about?",
						"japanese": "ヘイゼル？何を言ってるんだ。",
						"chinese": "海泽尔？你在说什么？",
						"french": "Hazel ? De quoi parles-tu ?",
						"spanish": "¿Hazel? ¿De qué hablas?",
						"vietnamese": "Hazel? Ngươi đang nói gì vậy?",
						"thai": "เฮเซล? พูดอะไรน่ะ",
						"hindi": "हेज़ल? तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "심장의 씨앗은… 너무 강력해. 대가가 너무 커.",
						"english": "The Seed of the Heart... it's too powerful. The price is too high.",
						"japanese": "心臓の種子は…あまりにも強力だ。代償が大きすぎる。",
						"chinese": "心脏之种……太过强大了。代价太大了。",
						"french": "La Graine du Cœur... elle est trop puissante. Le prix est trop élevé.",
						"spanish": "La Semilla del Corazón... es demasiado poderosa. El precio es demasiado alto.",
						"vietnamese": "Hạt giống trái tim… nó quá mạnh. Cái giá phải trả quá lớn.",
						"thai": "เมล็ดพันธุ์แห่งใจ...มันทรงพลังเกินไป ค่าตอบแทนมันสูงนัก",
						"hindi": "हृदय का बीज... यह बहुत शक्तिशाली है। कीमत बहुत ज़्यादा है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel",
					"action": "enter"
				},
				{
					"content": {
						"korean": "심장의 씨앗은 숲을 살릴 수 있어. 하지만…",
						"english": "The Seed of the Heart can save the forest. But...",
						"japanese": "心の種は森を救える。だが…",
						"chinese": "心之种能拯救森林。但是…",
						"french": "La Graine du Cœur peut sauver la forêt. Mais...",
						"spanish": "La Semilla del Corazón puede salvar el bosque. Pero...",
						"vietnamese": "Hạt giống Trái tim có thể cứu khu rừng. Nhưng…",
						"thai": "เมล็ดพันธุ์แห่งใจสามารถช่วยป่าได้ แต่…",
						"hindi": "हृदय का बीज जंगल को बचा सकता है। लेकिन..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "동시에 숲을 집어삼킬 수도 있지.",
						"english": "At the same time, it can also consume it.",
						"japanese": "同時に、森を飲み込むこともできる。",
						"chinese": "同时，它也能吞噬森林。",
						"french": "En même temps, elle peut aussi la dévorer.",
						"spanish": "Al mismo tiempo, también puede consumirlo.",
						"vietnamese": "Đồng thời, nó cũng có thể nuốt chửng khu rừng.",
						"thai": "ในขณะเดียวกัน มันก็สามารถกลืนกินป่าได้เช่นกัน",
						"hindi": "साथ ही, यह जंगल को निगल भी सकता है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "희생 없이 구원은 없다는 거야?",
						"english": "So, there's no salvation without sacrifice?",
						"japanese": "犠牲なくして救済はないというのか？",
						"chinese": "所以，没有牺牲就没有救赎吗？",
						"french": "Donc, il n'y a pas de salut sans sacrifice ?",
						"spanish": "¿Entonces, no hay salvación sin sacrificio?",
						"vietnamese": "Vậy là, không có sự cứu rỗi nào mà không cần hy sinh sao?",
						"thai": "งั้นก็ไม่มีการไถ่บาปหากปราศจากการเสียสละเหรอ?",
						"hindi": "तो, बिना बलिदान के कोई मुक्ति नहीं?"
					}
				},
				{
					"speaker": "hazel",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어쩌면, 구원이라는 이름의 파멸일 수도 있어.",
						"english": "Perhaps, it's destruction in the name of salvation.",
						"japanese": "もしかしたら、それは救済という名の破滅かもしれない。",
						"chinese": "或许，这只是以救赎为名的毁灭。",
						"french": "Peut-être est-ce la destruction au nom du salut.",
						"spanish": "Quizás, sea destrucción en nombre de la salvación.",
						"vietnamese": "Có lẽ, đó là sự hủy diệt nhân danh sự cứu rỗi.",
						"thai": "บางที มันอาจเป็นการทำลายล้างในนามของการไถ่บาป",
						"hindi": "शायद, यह मुक्ति के नाम पर विनाश है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500,
					"spot": [
						3,
						4
					]
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 석판이 드러났다. 오랜 세월의 흔적이었다.",
						"english": "An old stone tablet was revealed. It bore the marks of ages.",
						"japanese": "古い石板が現れた。それは長い歳月の痕跡だった。",
						"chinese": "一块古老的石板显露出来。那是岁月留下的痕迹。",
						"french": "Une vieille tablette de pierre fut révélée. Elle portait les marques des âges.",
						"spanish": "Una antigua losa de piedra fue revelada. Llevaba las marcas de los siglos.",
						"vietnamese": "Một tấm bia đá cũ đã lộ ra. Nó mang dấu vết của thời gian.",
						"thai": "แผ่นศิลาเก่าแก่ปรากฏขึ้น มันคือร่องรอยของกาลเวลาอันยาวนาน",
						"hindi": "एक पुरानी पत्थर की पटिया सामने आई। उस पर सदियों के निशान थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 글자 같은데?",
						"english": "This is... like writing?",
						"japanese": "これは…文字のようだが？",
						"chinese": "这是…文字吗？",
						"french": "C'est... comme une écriture ?",
						"spanish": "¿Esto es... como escritura?",
						"vietnamese": "Đây là... như chữ viết vậy?",
						"thai": "นี่มัน... เหมือนตัวอักษร?",
						"hindi": "यह... लेखन जैसा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 고대 기록이야. '만월의 세 번의 순환이 끝나면, 약속은 완성되리라.'",
						"english": "It's an ancient record of the forest. 'When three cycles of the full moon end, the promise shall be fulfilled.'",
						"japanese": "森の古代の記録だ。「満月が三度巡り終える時、約束は成就されるだろう。」",
						"chinese": "这是森林的古老记录。'当满月的三次循环结束，承诺便会实现。'",
						"french": "C'est un ancien registre de la forêt. « Quand trois cycles de pleine lune s'achèveront, la promesse sera tenue. »",
						"spanish": "Es un antiguo registro del bosque. 'Cuando terminen tres ciclos de luna llena, la promesa se cumplirá.'",
						"vietnamese": "Đây là một ghi chép cổ xưa của khu rừng. 'Khi ba chu kỳ trăng tròn kết thúc, lời hứa sẽ được hoàn thành.'",
						"thai": "เป็นบันทึกโบราณของป่า 'เมื่อวงจรของพระจันทร์เต็มดวงครบสามครั้ง คำสัญญาจะสำเร็จ'",
						"hindi": "यह जंगल का एक प्राचीन अभिलेख है। 'जब पूर्णिमा के तीन चक्र समाप्त होंगे, तो वादा पूरा होगा।'"
					},
					"speaker": "hazel",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "만월의 세 번의 순환? 그게 무슨 의미야?",
						"english": "Three cycles of the full moon? What does that mean?",
						"japanese": "満月が三度巡る？それが何を意味するんだ？",
						"chinese": "满月的三次循环？那是什么意思？",
						"french": "Trois cycles de pleine lune ? Qu'est-ce que cela signifie ?",
						"spanish": "¿Tres ciclos de luna llena? ¿Qué significa eso?",
						"vietnamese": "Ba chu kỳ trăng tròn? Điều đó có nghĩa là gì?",
						"thai": "วงจรพระจันทร์เต็มดวงสามครั้ง? นั่นหมายความว่าอะไร?",
						"hindi": "पूर्णिमा के तीन चक्र? उसका क्या मतलब है?"
					}
				},
				{
					"speaker": "hazel",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저주의 시간이… 얼마 남지 않았다는 뜻이야.",
						"english": "It means the time of the curse... is almost upon us.",
						"japanese": "呪いの時間が…もうすぐそこまで来ているという意味だ。",
						"chinese": "这意味着诅咒的时间…所剩无几了。",
						"french": "Cela signifie que le temps de la malédiction... est presque là.",
						"spanish": "Significa que el tiempo de la maldición... está casi aquí.",
						"vietnamese": "Nó có nghĩa là thời gian của lời nguyền... không còn nhiều nữa.",
						"thai": "นั่นหมายความว่าเวลาแห่งคำสาป... ใกล้จะมาถึงแล้ว",
						"hindi": "इसका मतलब है कि अभिशाप का समय... करीब आ गया है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hazel",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "시간이 없어. 저주는 완성될 거야.",
						"english": "There's no time. The curse will be complete.",
						"japanese": "時間がない。呪いは完成するだろう。",
						"chinese": "没有时间了。诅咒将会完成。",
						"french": "Il n'y a plus de temps. La malédiction sera complète.",
						"spanish": "No hay tiempo. La maldición se completará.",
						"vietnamese": "Không còn thời gian nữa. Lời nguyền sẽ hoàn thành.",
						"thai": "ไม่มีเวลาแล้ว คำสาปจะสมบูรณ์",
						"hindi": "समय नहीं है। अभिशाप पूरा हो जाएगा।"
					}
				},
				{
					"content": {
						"korean": "막아야 해!",
						"english": "We must stop them!",
						"japanese": "止めなければ！",
						"chinese": "必须阻止！",
						"french": "Il faut les arrêter !",
						"spanish": "¡Debemos detenerlos!",
						"vietnamese": "Phải ngăn chặn!",
						"thai": "ต้องหยุดมัน!",
						"hindi": "हमें रोकना होगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "무작정 나아가면… 모두 끝날 수도 있어. 신중해야 한다.",
						"english": "Charge in blindly... and it could all end. We must be cautious.",
						"japanese": "無謀に進めば…全てが終わるかもしれない。慎重に。",
						"chinese": "盲目前进…一切可能就此终结。必须谨慎。",
						"french": "Avancer sans réfléchir… tout pourrait se terminer. Soyons prudents.",
						"spanish": "Si avanzamos a ciegas… todo podría acabar. Debemos ser cautelosos.",
						"vietnamese": "Nếu cứ liều lĩnh xông lên… tất cả có thể kết thúc. Phải cẩn trọng.",
						"thai": "หากบุกไปโดยไม่คิด… ทุกอย่างอาจจบลงได้ ต้องระวังให้ดี",
						"hindi": "अगर आँख मूँद कर आगे बढ़े… तो सब खत्म हो सकता है। हमें सावधान रहना होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "다른 길은 없어. 멈출 수 없어!",
						"english": "There's no other way. We can't stop!",
						"japanese": "他に道はない。止まれない！",
						"chinese": "没有别的路了。无法停止！",
						"french": "Il n'y a pas d'autre chemin. On ne peut pas s'arrêter !",
						"spanish": "No hay otra forma. ¡No podemos detenernos!",
						"vietnamese": "Không còn đường nào khác. Không thể dừng lại!",
						"thai": "ไม่มีทางอื่นแล้ว เราหยุดไม่ได้!",
						"hindi": "कोई और रास्ता नहीं है। हम रुक नहीं सकते!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아악… 이… 이럴 수가…",
						"english": "Grrrgh… Th-this can't be…",
						"japanese": "ぐあああ… ま…まさか…",
						"chinese": "呃啊… 这…这不可能…",
						"french": "Argh… Ce… ce n'est pas possible…",
						"spanish": "¡Argh! ¡N-no puede ser...!",
						"vietnamese": "Khụ… Kh-không thể nào…",
						"thai": "อ๊ากก… น-นี่มันเป็นไปไม่ได้…",
						"hindi": "आर्ग… य-यह नहीं हो सकता…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 결국 파멸을 선택한 것이다…",
						"english": "Fools… you chose destruction after all…",
						"japanese": "愚かな者たち… 結局、破滅を選んだか…",
						"chinese": "愚蠢之人… 最终还是选择了毁灭…",
						"french": "Insensés… vous avez finalement choisi la destruction…",
						"spanish": "Necios… al final eligieron la perdición…",
						"vietnamese": "Những kẻ ngốc… cuối cùng các ngươi đã chọn sự hủy diệt…",
						"thai": "พวกโง่เง่า… ในที่สุดพวกเจ้าก็เลือกหายนะ…",
						"hindi": "मूर्खों… अंततः तुमने विनाश को ही चुना…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "파멸이 아니야! 구원이야!",
						"english": "Not destruction! It's salvation!",
						"japanese": "破滅じゃない！救済だ！",
						"chinese": "这不是毁灭！是救赎！",
						"french": "Ce n'est pas la destruction ! C'est le salut !",
						"spanish": "¡No es destrucción! ¡Es salvación!",
						"vietnamese": "Không phải hủy diệt! Mà là cứu rỗi!",
						"thai": "ไม่ใช่หายนะ! แต่มันคือการไถ่ถอน!",
						"hindi": "विनाश नहीं! यह मुक्ति है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 그림자가 사라졌다. 그러나 숲은… 여전히 고통스러웠다.",
						"english": "The shadow of {random_boss} vanished. Yet the forest… still suffered.",
						"japanese": "{random_boss}の影は消えた。しかし森は…まだ苦しんでいた。",
						"chinese": "{random_boss}的影子消失了。然而森林…仍在受苦。",
						"french": "L'ombre de {random_boss} a disparu. Pourtant, la forêt… souffrait toujours.",
						"spanish": "La sombra de {random_boss} desapareció. Pero el bosque… aún sufría.",
						"vietnamese": "Bóng của {random_boss} đã biến mất. Nhưng khu rừng… vẫn còn đau khổ.",
						"thai": "เงาของ {random_boss} หายไปแล้ว. แต่ป่า… ยังคงเจ็บปวด.",
						"hindi": "{random_boss} की छाया गायब हो गई। फिर भी जंगल… अभी भी पीड़ित था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'심장의 씨앗'… 그 진정한 의미를 찾아야 할 때가 왔다.",
						"english": "'Seed of the Heart'… The time has come to find its true meaning.",
						"japanese": "「心の種」… その真の意味を見つける時が来た。",
						"chinese": "“心灵之种”… 是时候寻找其真正意义了。",
						"french": "« La Graine du Cœur »… Le moment est venu de trouver sa véritable signification.",
						"spanish": "La 'Semilla del Corazón'… Ha llegado el momento de encontrar su verdadero significado.",
						"vietnamese": "‘Hạt giống Trái tim’… Đã đến lúc tìm ra ý nghĩa thực sự của nó.",
						"thai": "‘เมล็ดพันธุ์แห่งหัวใจ’… ถึงเวลาแล้วที่จะค้นหาความหมายที่แท้จริงของมัน.",
						"hindi": "'हृदय का बीज'… अब उसका सच्चा अर्थ खोजने का समय आ गया है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어.",
						"english": "It's not over yet.",
						"japanese": "まだ終わってない。",
						"chinese": "还没结束。",
						"french": "Ce n'est pas encore fini.",
						"spanish": "Aún no ha terminado.",
						"vietnamese": "Chưa kết thúc đâu.",
						"thai": "ยังไม่จบแค่นี้.",
						"hindi": "अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 어둠이 모든 것을 집어삼켰다.",
						"english": "A colossal darkness swallowed everything.",
						"japanese": "巨大な闇がすべてを飲み込んだ。",
						"chinese": "巨大的黑暗吞噬了一切。",
						"french": "Une obscurité colossale a tout englouti.",
						"spanish": "Una oscuridad colosal lo devoró todo.",
						"vietnamese": "Bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดอันใหญ่หลวงได้กลืนกินทุกสิ่ง.",
						"hindi": "एक विशाल अंधकार ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "너희의 무모함이 숲을 끝장낼 것이다.",
						"english": "Your recklessness will doom the forest.",
						"japanese": "お前たちの無謀さが森を終わらせるだろう。",
						"chinese": "你们的鲁莽将终结森林。",
						"french": "Votre imprudence anéantira la forêt.",
						"spanish": "Su imprudencia acabará con el bosque.",
						"vietnamese": "Sự liều lĩnh của các ngươi sẽ hủy diệt khu rừng.",
						"thai": "ความประมาทของพวกเจ้าจะทำลายป่า.",
						"hindi": "तुम्हारी लापरवाही वन को नष्ट कर देगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 포기 못 해!",
						"english": "…I can't give up yet!",
						"japanese": "…まだ諦められない！",
						"chinese": "…我还没放弃！",
						"french": "…Je ne peux pas encore abandonner !",
						"spanish": "…¡Todavía no puedo rendirme!",
						"vietnamese": "…Tôi vẫn chưa thể bỏ cuộc!",
						"thai": "…ยังยอมแพ้ไม่ได้!",
						"hindi": "…मैं अभी हार नहीं मान सकता!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "허무한 발버둥이로군.",
						"english": "A futile struggle.",
						"japanese": "虚しい足掻きだな。",
						"chinese": "徒劳的挣扎。",
						"french": "Une lutte vaine.",
						"spanish": "Un esfuerzo inútil.",
						"vietnamese": "Một cuộc giãy giụa vô vọng.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์.",
						"hindi": "एक व्यर्थ संघर्ष।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "여기까지 온 어리석은 자들…",
						"english": "Foolish ones who've come this far...",
						"japanese": "ここまで来た愚か者たちめ…",
						"chinese": "竟敢来到此处的愚蠢之徒…",
						"french": "Insensés qui êtes venus jusqu'ici...",
						"spanish": "Necios que habéis llegado hasta aquí...",
						"vietnamese": "Lũ ngu ngốc đã đến tận đây…",
						"thai": "พวกโง่เขลาที่มาถึงนี่ได้…",
						"hindi": "यहाँ तक पहुँचने वाले मूर्ख…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 숲의 섭리에 도전하려 하는가?",
						"english": "Dare you challenge the forest's providence?",
						"japanese": "敢えて森の摂理に挑もうとするか？",
						"chinese": "竟敢挑战森林的法则？",
						"french": "Osez-vous défier la providence de la forêt ?",
						"spanish": "¿Osáis desafiar la providencia del bosque?",
						"vietnamese": "Dám thách thức quy luật của rừng sao?",
						"thai": "กล้าดีอย่างไรมาท้าทายกฎแห่งป่า?",
						"hindi": "क्या तुम जंगल के विधान को चुनौती देने की हिम्मत करते हो?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 저주의 근원인가!",
						"english": "Are you the source of the curse!",
						"japanese": "お前が呪いの根源か！",
						"chinese": "你就是诅咒的根源吗！",
						"french": "Es-tu la source de la malédiction !",
						"spanish": "¡¿Eres tú el origen de la maldición?!",
						"vietnamese": "Ngươi là nguồn gốc của lời nguyền sao!",
						"thai": "เจ้าคือต้นกำเนิดของคำสาปงั้นรึ!",
						"hindi": "क्या तुम ही शाप का स्रोत हो!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 섭리 그 자체다. 너희는 그저 방해물일 뿐.",
						"english": "I am providence itself. You are merely obstacles.",
						"japanese": "我は摂理そのもの。貴様らはただの邪魔者だ。",
						"chinese": "我即是法则本身。你们不过是障碍。",
						"french": "Je suis la providence même. Vous n'êtes que des obstacles.",
						"spanish": "Yo soy la providencia misma. Vosotros sois meros obstáculos.",
						"vietnamese": "Ta chính là quy luật. Các ngươi chỉ là chướng ngại vật mà thôi.",
						"thai": "ข้าคือสัจธรรมเอง พวกเจ้าเป็นแค่ตัวขัดขวาง",
						"hindi": "मैं स्वयं विधान हूँ। तुम तो बस बाधाएँ हो।"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "hazel",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "도망쳐! 저자는… 너희의 분노를 노리고 있어!",
						"english": "Run! That one... seeks your fury!",
						"japanese": "逃げろ！奴は…お前たちの怒りを狙っている！",
						"chinese": "快逃！那家伙…正在觊觎你们的愤怒！",
						"french": "Fuyez ! Il… cherche à attiser votre fureur !",
						"spanish": "¡Corred! ¡Ese… busca vuestra ira!",
						"vietnamese": "Chạy đi! Kẻ đó… đang nhắm vào cơn thịnh nộ của các ngươi!",
						"thai": "หนีไป! มัน…กำลังจ้องความโกรธของพวกเจ้า!",
						"hindi": "भागो! वह… तुम्हारे क्रोध को निशाना बना रहा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이미 늦었다. 너희의 어리석음이 숲을 파멸로 이끌 것이다.",
						"english": "It's already too late. Your folly will lead the forest to ruin.",
						"japanese": "もう遅い。お前たちの愚かさが森を破滅へ導くだろう。",
						"chinese": "为时已晚。你们的愚蠢会将森林引向毁灭。",
						"french": "Il est déjà trop tard. Votre folie mènera la forêt à sa perte.",
						"spanish": "Ya es demasiado tarde. Vuestra locura llevará al bosque a la ruina.",
						"vietnamese": "Đã quá muộn rồi. Sự ngu ngốc của các ngươi sẽ đẩy khu rừng vào diệt vong.",
						"thai": "สายเกินไปแล้ว ความโง่เขลาของพวกเจ้าจะนำป่าไปสู่ความพินาศ",
						"hindi": "बहुत देर हो चुकी है। तुम्हारी मूर्खता जंगल को बर्बादी की ओर ले जाएगी।"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "hazel",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 병들어가고 있었다. 고통의 시간은 끝없이 흘렀다.",
			"심장의 씨앗… 유일한 희망인가, 거대한 파멸의 시작인가.",
			"늙은 예언자는 경고했다. “무모한 구원은 재앙을 부를 뿐.”",
			"시간은 흐르고, 숲의 숨통은 점점 조여왔다.",
			"궁극의 선택. 파멸의 그림자가 드리운다."
		],
		"english": [
			"The forest sickened. The time of suffering flowed endlessly.",
			"The Seed of the Heart... sole hope, or the dawn of ruin?",
			"The old prophet warned, \"Reckless salvation brings only catastrophe.\"",
			"Time passed, and the forest's breath grew increasingly choked.",
			"The ultimate choice. The shadow of ruin looms."
		],
		"japanese": [
			"森は病んでいた。苦痛の時は果てしなく流れた。",
			"心臓の種子…唯一の希望か、それとも巨大な破滅の始まりか。",
			"老いた預言者は警告した。「無謀な救済は災厄を招くだけだ。」",
			"時は流れ、森の息の根は次第に締め付けられた。",
			"究極の選択。破滅の影が迫る。"
		],
		"chinese": [
			"森林病了。痛苦的时间无尽地流逝。",
			"心脏之种……是唯一的希望，还是巨大毁灭的开端？",
			"老预言者警告道：“鲁莽的救赎只会招致灾难。”",
			"时光流逝，森林的生机逐渐枯竭。",
			"终极抉择。毁灭的阴影笼罩。"
		],
		"french": [
			"La forêt dépérissait. Le temps de la souffrance s'écoulait sans fin.",
			"La Graine du Cœur... unique espoir, ou l'aube d'une ruine colossale ?",
			"La vieille prophétesse avertit : « Un salut imprudent n'engendrera que catastrophe. »",
			"Le temps s'écoulait, et le souffle de la forêt se serrait de plus en plus.",
			"Le choix ultime. L'ombre de la ruine s'étend."
		],
		"spanish": [
			"El bosque enfermaba. El tiempo del sufrimiento fluía sin cesar.",
			"La Semilla del Corazón... ¿única esperanza o el comienzo de una ruina inmensa?",
			"El viejo profeta advirtió: \"Una salvación imprudente solo atraerá la catástrofe.\"",
			"El tiempo pasaba, y el aliento del bosque se asfixiaba cada vez más.",
			"La elección definitiva. La sombra de la ruina se cierne."
		],
		"vietnamese": [
			"Rừng đang bệnh. Thời gian đau khổ trôi đi vô tận.",
			"Hạt giống trái tim… hy vọng duy nhất, hay khởi đầu của một sự hủy diệt to lớn?",
			"Tiên tri già cảnh báo: “Cứu rỗi mù quáng chỉ mang lại tai ương.”",
			"Thời gian trôi đi, hơi thở của rừng ngày càng ngạt thở.",
			"Lựa chọn cuối cùng. Bóng tối hủy diệt đang bao trùm."
		],
		"thai": [
			"ป่ากำลังป่วย เวลาแห่งความทุกข์ทรมานไหลผ่านไปไม่สิ้นสุด",
			"เมล็ดพันธุ์แห่งใจ... ความหวังเดียว หรือจุดเริ่มต้นของหายนะอันใหญ่หลวง?",
			"ผู้พยากรณ์เฒ่าเตือนว่า \"การช่วยชีวิตอย่างบ้าระห่ำจะนำมาซึ่งหายนะเท่านั้น\"",
			"เวลาผ่านไป และลมหายใจของป่าก็ถูกบีบรัดมากขึ้นเรื่อยๆ",
			"ทางเลือกสุดท้าย เงาแห่งความพินาศคืบคลานเข้ามา"
		],
		"hindi": [
			"वन बीमार पड़ रहा था। पीड़ा का समय अनंत काल तक बहता रहा।",
			"हृदय का बीज... क्या यह इकलौती आशा है, या एक महान विनाश की शुरुआत?",
			"बूढ़े पैगंबर ने चेतावनी दी, \"लापरवाह मोक्ष केवल तबाही लाता है।\"",
			"समय बीतता गया, और वन का दम घुटता गया।",
			"अंतिम विकल्प। विनाश की छाया मंडराती है।"
		]
	}
} as const;
