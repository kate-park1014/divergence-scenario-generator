export const scenario_snowy_skuld_52_03 = {
	"scenario_id": "snowy_skuld_52_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 밤. 빙하의 낮은 신음이 셋을 감쌌다.",
						"english": "Frozen night. The glacier's low moan enveloped the three.",
						"japanese": "凍てつく夜。氷河の低い呻きが三人を取り巻いた。",
						"chinese": "冰冻的夜晚。冰川低沉的呻吟声笼罩了三人。",
						"french": "Nuit gelée. Le gémissement grave du glacier enveloppait les trois.",
						"spanish": "Noche helada. El gemido grave del glaciar envolvió a los tres.",
						"vietnamese": "Đêm băng giá. Tiếng rên rỉ trầm thấp của sông băng bao trùm ba người.",
						"thai": "ค่ำคืนอันเยือกแข็ง เสียงครวญต่ำของธารน้ำแข็งโอบล้อมทั้งสาม",
						"hindi": "जमी हुई रात। ग्लेशियर की धीमी कराह ने तीनों को घेर लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 소리가… 밤새 들린다고?",
						"english": "This sound... heard all night?",
						"japanese": "この音が… 夜通し聞こえるって？",
						"chinese": "这声音……会响彻整夜吗？",
						"french": "Ce bruit… toute la nuit ?",
						"spanish": "¿Este sonido... se escucha toda la noche?",
						"vietnamese": "Tiếng này... nghe suốt đêm à?",
						"thai": "เสียงนี้... ได้ยินทั้งคืนหรือ?",
						"hindi": "यह आवाज़... क्या रात भर सुनाई देती है?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…(낮은 추모가를 흥얼거린다)",
						"english": "...(Humming a low dirge)",
						"japanese": "…(低い追悼歌を口ずさむ)",
						"chinese": "……（低声哼唱着挽歌）",
						"french": "…(Fredonne une complainte basse)",
						"spanish": "...(Tararea una elegía baja)",
						"vietnamese": "...(Ngân nga một bài ca tang tóc thấp)",
						"thai": "...(ฮัมเพลงไว้อาลัยเบาๆ)",
						"hindi": "...(धीमी शोकगीत गुनगुनाता है)"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "죽은 것에도 이름이 있어. 누군가는 기려야지.",
						"english": "Even the dead have names. Someone must honor them.",
						"japanese": "死んだものにも名前がある。誰かが弔わなければならない。",
						"chinese": "逝者亦有其名。总有人要去铭记。",
						"french": "Même les morts ont des noms. Quelqu'un doit les honorer.",
						"spanish": "Incluso los muertos tienen nombres. Alguien debe honrarlos.",
						"vietnamese": "Ngay cả người chết cũng có tên. Ai đó phải tôn vinh họ.",
						"thai": "แม้แต่ผู้ตายก็มีชื่อ ใครสักคนต้องให้เกียรติพวกเขา",
						"hindi": "मृतकों के भी नाम होते हैं। किसी को तो उनका सम्मान करना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 남은 자의 의무야.",
						"english": "That is the duty of those who remain.",
						"japanese": "それが残された者の義務だ。",
						"chinese": "那是幸存者的义务。",
						"french": "C'est le devoir de ceux qui restent.",
						"spanish": "Ese es el deber de los que quedan.",
						"vietnamese": "Đó là nghĩa vụ của những người còn lại.",
						"thai": "นั่นคือหน้าที่ของผู้ที่เหลืออยู่",
						"hindi": "यह उन लोगों का कर्तव्य है जो बचे हैं।"
					},
					"speaker": "hild"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "잊히는 건… 가장 잔인한 벌이야.",
						"english": "To be forgotten... is the cruelest punishment.",
						"japanese": "忘れられることは… 最も残酷な罰だ。",
						"chinese": "被遗忘……是最残酷的惩罚。",
						"french": "Être oublié… est le châtiment le plus cruel.",
						"spanish": "Ser olvidado… es el castigo más cruel.",
						"vietnamese": "Bị lãng quên... là hình phạt tàn nhẫn nhất.",
						"thai": "การถูกลืม... คือบทลงโทษที่โหดร้ายที่สุด",
						"hindi": "भुला दिया जाना... सबसे क्रूर सज़ा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "잊혀지지 않기 위해 싸우는 건가.",
						"english": "Are you fighting not to be forgotten?",
						"japanese": "忘れられないために戦うのか？",
						"chinese": "是为了不被遗忘而战吗？",
						"french": "Tu te bats pour ne pas être oublié ?",
						"spanish": "¿Luchas para no ser olvidado?",
						"vietnamese": "Ngươi chiến đấu để không bị lãng quên sao?",
						"thai": "เจ้ากำลังต่อสู้เพื่อไม่ให้ถูกลืมใช่ไหม",
						"hindi": "क्या तुम न भुलाए जाने के लिए लड़ रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "망자와의 약속도 맹세야.",
						"english": "A promise to the dead is also a vow.",
						"japanese": "死者との約束も誓いなのだ。",
						"chinese": "对逝者的承诺也是一种誓言。",
						"french": "Une promesse faite aux morts est aussi un serment.",
						"spanish": "Una promesa a los muertos también es un juramento.",
						"vietnamese": "Lời hứa với người chết cũng là một lời thề.",
						"thai": "สัญญาที่ให้ไว้กับคนตายก็เป็นคำสาบานเช่นกัน",
						"hindi": "मृतकों से किया गया वादा भी एक शपथ है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그것까지 외면하면, 누가 우리를 기억하겠어?",
						"english": "If we ignore even that, who will remember us?",
						"japanese": "それすら背を向けたら、誰が我々を覚えているというのだ？",
						"chinese": "如果连那都置之不理，谁还会记得我们？",
						"french": "Si nous ignorons même cela, qui se souviendra de nous ?",
						"spanish": "¿Quién nos recordará si ignoramos incluso eso?",
						"vietnamese": "Nếu chúng ta cũng quay lưng lại với điều đó, ai sẽ nhớ chúng ta đây?",
						"thai": "ถ้าเราเมินเฉยต่อสิ่งนั้น ใครจะจดจำเราได้?",
						"hindi": "अगर हम उसे भी नज़रअंदाज़ कर दें, तो हमें कौन याद रखेगा?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이 빙하… 많은 약속을 삼켰어.",
						"english": "This glacier... swallowed many promises.",
						"japanese": "この氷河… 多くの約束を飲み込んだ。",
						"chinese": "这片冰川…吞噬了许多承诺。",
						"french": "Ce glacier... a englouti de nombreuses promesses.",
						"spanish": "Este glaciar... se tragó muchas promesas.",
						"vietnamese": "Tảng băng này... đã nuốt chửng nhiều lời hứa.",
						"thai": "ธารน้ำแข็งนี้... กลืนกินคำสัญญามากมาย",
						"hindi": "इस ग्लेशियर ने... कई वादे निगल लिए।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你是什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 그 약속들을 지우려 해.",
						"english": "Someone is trying to erase those promises.",
						"japanese": "誰かがその約束を消そうとしている。",
						"chinese": "有人想抹去那些承诺。",
						"french": "Quelqu'un essaie d'effacer ces promesses.",
						"spanish": "Alguien está intentando borrar esas promesas.",
						"vietnamese": "Ai đó đang cố xóa bỏ những lời hứa đó.",
						"thai": "มีคนกำลังพยายามลบคำสัญญาเหล่านั้น",
						"hindi": "कोई उन वादों को मिटाने की कोशिश कर रहा है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 빙하 속에서 꿈틀거린다.",
						"english": "A colossal shadow stirs within the glacier.",
						"japanese": "巨大な影が氷河の中で蠢いている。",
						"chinese": "一个巨大的影子在冰川中蠕动。",
						"french": "Une ombre colossale s'agite au sein du glacier.",
						"spanish": "Una sombra colosal se agita dentro del glaciar.",
						"vietnamese": "Một cái bóng khổng lồ đang cựa quậy trong tảng băng.",
						"thai": "เงาขนาดมหึมากำลังเคลื่อนไหวอยู่ภายในธารน้ำแข็ง",
						"hindi": "एक विशाल छाया ग्लेशियर के अंदर हिल रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "... !",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "맹세는 죽음보다 강해.",
						"english": "A vow is stronger than death.",
						"japanese": "誓いは死よりも強い。",
						"chinese": "誓言比死亡更强大。",
						"french": "Un serment est plus fort que la mort.",
						"spanish": "Un juramento es más fuerte que la muerte.",
						"vietnamese": "Lời thề còn mạnh hơn cái chết.",
						"thai": "คำสาบานแข็งแกร่งกว่าความตาย",
						"hindi": "शपथ मृत्यु से भी ज़्यादा शक्तिशाली है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "믿는다면…",
						"english": "If you believe...",
						"japanese": "信じるならば…",
						"chinese": "如果你相信…",
						"french": "Si tu crois...",
						"spanish": "Si crees...",
						"vietnamese": "Nếu ngươi tin...",
						"thai": "ถ้าเจ้าเชื่อ...",
						"hindi": "अगर तुम विश्वास करते हो..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맞아. 우리 자신을 걸어야지.",
						"english": "Right. We have to put ourselves on the line.",
						"japanese": "そう。私たち自身を賭けるべきだ。",
						"chinese": "没错。我们必须赌上自己。",
						"french": "Exact. Nous devons nous risquer.",
						"spanish": "Exacto. Debemos arriesgarnos.",
						"vietnamese": "Đúng vậy. Chúng ta phải đặt cược chính mình.",
						"thai": "ใช่ เราต้องเดิมพันตัวเอง",
						"hindi": "सही है। हमें खुद को दांव पर लगाना होगा।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 신음이 더욱 깊어진다.",
						"english": "The glacier's groans deepen.",
						"japanese": "氷河の呻きがさらに深まる。",
						"chinese": "冰川的呻吟愈发深沉。",
						"french": "Les gémissements du glacier s'intensifient.",
						"spanish": "Los gemidos del glaciar se profundizan.",
						"vietnamese": "Tiếng rên rỉ của sông băng càng thêm sâu sắc.",
						"thai": "เสียงคร่ำครวญของธารน้ำแข็งลึกซึ้งยิ่งขึ้น",
						"hindi": "ग्लेशियर की कराहें और गहरी होती जाती हैं।"
					}
				},
				{
					"content": {
						"korean": "감히… 망자를 들먹이는가.",
						"english": "How dare you… invoke the dead?",
						"japanese": "よくも… 死者を口にするか。",
						"chinese": "竟敢… 提及亡者。",
						"french": "Comment oses-tu… évoquer les morts ?",
						"spanish": "¿Cómo osas… mencionar a los muertos?",
						"vietnamese": "Dám… nhắc đến người chết sao.",
						"thai": "กล้า… เอ่ยถึงคนตายรึ",
						"hindi": "हिम्मत कैसे हुई… मृतकों का नाम लेने की।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하찮은… 맹세. 결국…",
						"english": "Worthless… vows. In the end…",
						"japanese": "取るに足らない… 誓い。結局…",
						"chinese": "卑微的… 誓言。最终…",
						"french": "Vœux… insignifiants. Finalement…",
						"spanish": "Votos… insignificantes. Al final…",
						"vietnamese": "Lời thề… vô giá trị. Cuối cùng…",
						"thai": "คำสาบาน… ไร้ค่า สุดท้ายก็…",
						"hindi": "तुच्छ… प्रतिज्ञा। अंततः…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어…",
						"english": "It's over…",
						"japanese": "終わった…",
						"chinese": "结束了…",
						"french": "C'est fini…",
						"spanish": "Se acabó…",
						"vietnamese": "Kết thúc rồi…",
						"thai": "จบแล้ว…",
						"hindi": "खत्म हो गया…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니. 이제 시작이야.",
						"english": "No. It's just the beginning.",
						"japanese": "いいえ。今が始まりだ。",
						"chinese": "不。现在才刚开始。",
						"french": "Non. Ce n'est que le début.",
						"spanish": "No. Es solo el principio.",
						"vietnamese": "Không. Bây giờ mới là bắt đầu.",
						"thai": "ไม่ มันเพิ่งจะเริ่มต้น",
						"hindi": "नहीं। यह तो बस शुरुआत है।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억은… 영원히 싸울 거야.",
						"english": "Memories… will fight on forever.",
						"japanese": "記憶は…永遠に戦い続けるだろう。",
						"chinese": "记忆…将永远战斗下去。",
						"french": "Les souvenirs… combattront éternellement.",
						"spanish": "Los recuerdos… lucharán por siempre.",
						"vietnamese": "Ký ức… sẽ chiến đấu mãi mãi.",
						"thai": "ความทรงจำ… จะต่อสู้ตลอดไป",
						"hindi": "यादें… हमेशा लड़ेंगी।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 신음이 잠시 멎었다.",
						"english": "The glacier's groans momentarily ceased.",
						"japanese": "氷河の呻き声が一時的に止んだ。",
						"chinese": "冰川的呻吟暂时停止了。",
						"french": "Les gémissements du glacier cessèrent un instant.",
						"spanish": "Los gemidos del glaciar cesaron por un momento.",
						"vietnamese": "Tiếng rên rỉ của sông băng tạm thời ngưng lại.",
						"thai": "เสียงครวญครางของธารน้ำแข็งสงบลงชั่วขณะ",
						"hindi": "ग्लेशियर की आहें कुछ पल के लिए थम गईं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 숲의 기억은… 더 깊은 곳에서 시작되었다.",
						"english": "But the forest's memories… began in deeper realms.",
						"japanese": "しかし、森の記憶は…より深き場所で始まった。",
						"chinese": "然而，森林的记忆…在更深处开始。",
						"french": "Mais les souvenirs de la forêt… commencèrent dans des lieux plus profonds.",
						"spanish": "Pero los recuerdos del bosque… comenzaron en lo más profundo.",
						"vietnamese": "Nhưng ký ức của khu rừng… bắt đầu từ nơi sâu thẳm hơn.",
						"thai": "แต่ความทรงจำของป่า… เริ่มต้นจากที่ลึกกว่า",
						"hindi": "लेकिन जंगल की यादें… और गहरे में शुरू हुईं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊힌 것들은 그저 사라질 뿐.",
						"english": "Forgotten things merely vanish.",
						"japanese": "忘れられたものは、ただ消え去るだけだ。",
						"chinese": "被遗忘之物，终将消逝。",
						"french": "Ce qui est oublié ne fait que disparaître.",
						"spanish": "Las cosas olvidadas simplemente desaparecen.",
						"vietnamese": "Những thứ bị lãng quên chỉ đơn thuần biến mất.",
						"thai": "สิ่งที่ถูกลืมก็แค่หายไป",
						"hindi": "भूली हुई चीज़ें बस गायब हो जाती हैं।"
					}
				},
				{
					"content": {
						"korean": "너희의 맹세도… 곧 그렇게 될 거야.",
						"english": "Your vows… will soon follow suit.",
						"japanese": "お前たちの誓いも… すぐそうなるだろう。",
						"chinese": "你们的誓言… 也很快会如此。",
						"french": "Vos serments aussi… le seront bientôt.",
						"spanish": "Vuestros juramentos… pronto serán lo mismo.",
						"vietnamese": "Lời thề của các ngươi… cũng sẽ sớm như vậy thôi.",
						"thai": "คำสาบานของพวกเจ้า… ก็จะตามไปในไม่ช้า",
						"hindi": "तुम्हारी प्रतिज्ञाएँ भी… जल्द ही वैसी ही होंगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "우리는 기억할 거야.",
						"english": "We will remember.",
						"japanese": "私たちは記憶する。",
						"chinese": "我们会记住的。",
						"french": "Nous nous souviendrons.",
						"spanish": "Recordaremos.",
						"vietnamese": "Chúng ta sẽ ghi nhớ.",
						"thai": "เราจะจดจำ",
						"hindi": "हम याद रखेंगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너 같은 괴물이 막을 수 없어!",
						"english": "A monster like you can't stop us!",
						"japanese": "お前のような怪物が止められるものか！",
						"chinese": "你这样的怪物休想阻止！",
						"french": "Un monstre comme toi ne peut pas nous arrêter !",
						"spanish": "¡Un monstruo como tú no puede detenernos!",
						"vietnamese": "Một con quái vật như ngươi không thể ngăn cản được!",
						"thai": "สัตว์ประหลาดอย่างแกไม่มีทางหยุดเราได้!",
						"hindi": "तुम जैसा राक्षस हमें रोक नहीं सकता!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "잊혀진 망자처럼… 쓰러져라.",
						"english": "Fall… like the forgotten dead.",
						"japanese": "忘れられた亡者のように…倒れろ。",
						"chinese": "如同被遗忘的亡者…倒下吧。",
						"french": "Tombe… comme les morts oubliés.",
						"spanish": "Cae… como los muertos olvidados.",
						"vietnamese": "Ngã xuống… như những linh hồn bị lãng quên.",
						"thai": "จงล้มลง… ดุจดวงวิญญาณที่ถูกลืม",
						"hindi": "भूले हुए मृतकों की तरह… गिर जाओ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직…",
						"english": "Damn it… not yet…",
						"japanese": "ちくしょう…まだだ…。",
						"chinese": "该死…还没…",
						"french": "Bon sang… pas encore…",
						"spanish": "Maldita sea… aún no…",
						"vietnamese": "Chết tiệt… chưa đâu…",
						"thai": "บ้าเอ๊ย… ยัง…",
						"hindi": "धिक्कार है… अभी तक नहीं…"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "포기하지 마. 맹세는 죽지 않아.",
						"english": "Don't give up. Oaths never die.",
						"japanese": "諦めるな。誓いは死なない。",
						"chinese": "别放弃。誓言永不死去。",
						"french": "N'abandonne pas. Les serments ne meurent jamais.",
						"spanish": "No te rindas. Los juramentos nunca mueren.",
						"vietnamese": "Đừng bỏ cuộc. Lời thề không bao giờ chết.",
						"thai": "อย่ายอมแพ้ คำสาบานไม่มีวันตาย",
						"hindi": "हार मत मानो। शपथें कभी नहीं मरतीं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하의 낮은 신음이 밤새 울렸다.",
			"잊힌 약속, 사라진 이름들.",
			"죽은 자의 맹세를 기억하려는 한 여인.",
			"이 밤, 얼어붙은 진실이 깨어난다."
		],
		"english": [
			"The low moan of the glacier echoed through the night.",
			"Forgotten promises, vanished names.",
			"A woman trying to remember the vows of the dead.",
			"Tonight, a frozen truth awakens."
		],
		"japanese": [
			"氷河の低い呻き声が夜通し響いた。",
			"忘れられた約束、消え去った名。",
			"死者の誓いを思い出そうとする一人の女。",
			"今宵、凍てついた真実が目覚める。"
		],
		"chinese": [
			"冰川低沉的呻吟声响彻了整夜。",
			"被遗忘的承诺，消失的名字。",
			"一个试图记住逝者誓言的女人。",
			"今夜，冰封的真相苏醒。"
		],
		"french": [
			"Le gémissement grave du glacier a résonné toute la nuit.",
			"Promesses oubliées, noms disparus.",
			"Une femme essayant de se souvenir des serments des morts.",
			"Cette nuit, une vérité gelée s'éveille."
		],
		"spanish": [
			"El gemido grave del glaciar resonó durante toda la noche.",
			"Promesas olvidadas, nombres desvanecidos.",
			"Una mujer intentando recordar los juramentos de los muertos.",
			"Esta noche, una verdad congelada despierta."
		],
		"vietnamese": [
			"Tiếng rên rỉ trầm thấp của sông băng vang vọng suốt đêm.",
			"Lời hứa bị lãng quên, những cái tên biến mất.",
			"Một người phụ nữ cố gắng nhớ lời thề của người chết.",
			"Đêm nay, một sự thật đóng băng thức tỉnh."
		],
		"thai": [
			"เสียงครวญต่ำของธารน้ำแข็งก้องกังวานตลอดคืน",
			"คำสัญญาที่ถูกลืม, ชื่อที่สาบสูญ",
			"สตรีผู้หนึ่งพยายามจดจำคำสาบานของผู้ตาย",
			"คืนนี้ ความจริงที่เยือกแข็งตื่นขึ้น"
		],
		"hindi": [
			"ग्लेशियर की धीमी कराह रात भर गूंजती रही।",
			"भूले हुए वादे, गायब हुए नाम।",
			"एक महिला मृतकों की प्रतिज्ञाओं को याद करने की कोशिश कर रही है।",
			"आज रात, एक जमी हुई सच्चाई जागती है।"
		]
	}
} as const;
