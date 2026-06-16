export const scenario_snowy_skuld_42_03 = {
	"scenario_id": "snowy_skuld_42_03",
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
	"prologue": {
		"korean": [
			"수천 년의 세월, 얼음 심장부에서 맹세는 굳건했다.",
			"오직 하나의 명령, 그것이 스쿌드를 묶은 저주였다.",
			"강함과 영광을 좇던 전사, 이바르의 눈앞에.",
			"…전사의 진정한 의무가 드러나고 있었다."
		],
		"english": [
			"For millennia, the oath held firm in the heart of ice.",
			"One command alone, the curse that bound Skuld.",
			"Before Ivar, a warrior seeking strength and glory.",
			"...the warrior's true duty was being revealed."
		],
		"japanese": [
			"数千年の歳月、氷の心臓部で誓いは固く守られた。",
			"ただ一つの命令、それがスクルドを縛る呪いだった。",
			"強さと栄光を追い求める戦士、イヴァルの目の前に。",
			"…戦士の真の義務が明らかになりつつあった。"
		],
		"chinese": [
			"数千年间，誓言在冰之心深处坚定不移。",
			"唯有一道命令，那是束缚斯库尔德的诅咒。",
			"在追逐力量与荣耀的战士，伊瓦尔眼前。",
			"……战士真正的职责正在显现。"
		],
		"french": [
			"Pendant des millénaires, le serment fut inébranlable au cœur de la glace.",
			"Un seul commandement, la malédiction qui liait Skuld.",
			"Devant Ivar, un guerrier en quête de force et de gloire.",
			"...le véritable devoir du guerrier se révélait."
		],
		"spanish": [
			"Durante milenios, el juramento se mantuvo firme en el corazón de hielo.",
			"Una sola orden, la maldición que ataba a Skuld.",
			"Ante Ivar, un guerrero que buscaba fuerza y gloria.",
			"...el verdadero deber del guerrero se estaba revelando."
		],
		"vietnamese": [
			"Hàng thiên niên kỷ, lời thề vẫn vững vàng trong lòng băng giá.",
			"Chỉ một mệnh lệnh duy nhất, lời nguyền trói buộc Skuld.",
			"Trước mắt Ivar, một chiến binh theo đuổi sức mạnh và vinh quang.",
			"...nghĩa vụ thực sự của chiến binh đang dần hé lộ."
		],
		"thai": [
			"นับพันปี คำสาบานยังคงมั่นคง ณ ใจกลางน้ำแข็ง",
			"เพียงหนึ่งคำสั่ง นั่นคือคำสาปที่ผูกมัดสกุลด์",
			"เบื้องหน้าอิวาร์ นักรบผู้แสวงหาความแข็งแกร่งและเกียรติยศ",
			"...หน้าที่ที่แท้จริงของนักรบกำลังถูกเปิดเผย"
		],
		"hindi": [
			"हज़ारों वर्षों तक, बर्फ़ के हृदय में शपथ दृढ़ रही।",
			"केवल एक आज्ञा, वही स्कुल्ड को बांधने वाला अभिशाप था।",
			"इवार के सामने, एक योद्धा जो शक्ति और महिमा की तलाश में था।",
			"...योद्धा का सच्चा कर्तव्य प्रकट हो रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하 가장 깊은 곳, 척후선의 심장부. 거대한 룬 비석이 서 있었다.",
						"english": "Deepest within the glacier, the heart of the scout ship. A colossal runic monument stood.",
						"japanese": "氷河の最も深い場所、斥候船の心臓部。巨大なルーン碑石が立っていた。",
						"chinese": "冰川最深处，侦察飞船的心脏。一块巨大的符文石碑矗立着。",
						"french": "Au plus profond du glacier, le cœur du vaisseau éclaireur. Un colossal monument runique se dressait.",
						"spanish": "En lo más profundo del glaciar, el corazón de la nave exploradora. Un colosal monumento rúnico se erguía.",
						"vietnamese": "Sâu nhất trong sông băng, trái tim của tàu trinh sát. Một bia đá rune khổng lồ đứng sừng sững.",
						"thai": "ลึกที่สุดในธารน้ำแข็ง ใจกลางยานสำรวจ อนุสาวรีย์รูนขนาดมหึมายืนตระหง่านอยู่",
						"hindi": "हिमनद के सबसे गहरे में, खोजी यान का हृदय। एक विशालकाय रूण स्मारक खड़ा था।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 얼음 속에서… 수천 년이라.",
						"english": "In this ice... for millennia.",
						"japanese": "この氷の中で…数千年とはな。",
						"chinese": "在这冰中……数千年了啊。",
						"french": "Dans cette glace... depuis des millénaires.",
						"spanish": "En este hielo... por milenios.",
						"vietnamese": "Trong lớp băng này... hàng thiên niên kỷ.",
						"thai": "ในน้ำแข็งนี้... นับพันปีเชียวหรือ",
						"hindi": "इस बर्फ़ में... हज़ारों वर्षों तक।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그를 붙잡았던 건 뭐였을까.",
						"english": "What held him captive?",
						"japanese": "彼を縛っていたのは何だったのだろうか。",
						"chinese": "是什么束缚了他？",
						"french": "Qu'est-ce qui le retenait captif ?",
						"spanish": "¿Qué lo mantuvo cautivo?",
						"vietnamese": "Điều gì đã giam giữ anh ta?",
						"thai": "อะไรกันที่กักขังเขาไว้",
						"hindi": "उसे क्या चीज़ बांधे हुए थी?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "단순한 명령 하나에… 수천 년을 묶여 있다니.",
						"english": "Bound for millennia... by a single command.",
						"japanese": "たった一つの命令で…数千年もの間、縛られていたとは。",
						"chinese": "仅仅一道命令……竟束缚了数千年。",
						"french": "Lié pendant des millénaires... par une simple commande.",
						"spanish": "Atado durante milenios... por una simple orden.",
						"vietnamese": "Bị trói buộc hàng thiên niên kỷ... chỉ vì một mệnh lệnh đơn giản.",
						"thai": "ถูกผูกมัดนับพันปี... ด้วยคำสั่งเพียงหนึ่งเดียว",
						"hindi": "एक साधारण आज्ञा से... हज़ारों वर्षों तक बंधा रहना।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 그의 의무였을까.",
						"english": "Was that his duty?",
						"japanese": "それが彼の義務だったのだろうか。",
						"chinese": "那是他的职责吗？",
						"french": "Était-ce son devoir ?",
						"spanish": "¿Era ese su deber?",
						"vietnamese": "Đó có phải là nghĩa vụ của anh ta không?",
						"thai": "นั่นคือหน้าที่ของเขาหรือ",
						"hindi": "क्या वह उसका कर्तव्य था?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "강함도 영광도 아닌… 그저 명령.",
						"english": "Not strength, not glory... just a command.",
						"japanese": "強さでも栄光でもなく…ただ命令。",
						"chinese": "不是力量，不是荣耀……仅仅是命令。",
						"french": "Ni la force, ni la gloire... juste un commandement.",
						"spanish": "Ni fuerza, ni gloria... solo una orden.",
						"vietnamese": "Không phải sức mạnh, không phải vinh quang... chỉ là một mệnh lệnh.",
						"thai": "ไม่ใช่ความแข็งแกร่ง ไม่ใช่เกียรติยศ... เพียงแค่คำสั่ง",
						"hindi": "न शक्ति, न महिमा... बस एक आज्ञा।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "전사의 의무란… 강함을 좇는 것 아니었나.",
						"english": "A warrior's duty... wasn't it to pursue strength?",
						"japanese": "戦士の務めとは… 強さを追い求めることではなかったのか。",
						"chinese": "战士的职责…不就是追求强大吗？",
						"french": "Le devoir d'un guerrier… n'était-ce pas de poursuivre la force ?",
						"spanish": "¿El deber de un guerrero... no era acaso perseguir la fuerza?",
						"vietnamese": "Nghĩa vụ của chiến binh… chẳng phải là theo đuổi sức mạnh sao?",
						"thai": "หน้าที่ของนักรบ...มิใช่การไล่ตามความแข็งแกร่งหรอกหรือ?",
						"hindi": "एक योद्धा का कर्तव्य... क्या शक्ति का पीछा करना नहीं था?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 비석 속엔 뭐가 더 새겨져 있을까.",
						"english": "What else could be etched within that monument?",
						"japanese": "あの石碑には、他に何が刻まれているのだろうか。",
						"chinese": "那石碑里还刻着什么？",
						"french": "Que pourrait-il y avoir d'autre gravé dans ce monument ?",
						"spanish": "¿Qué más podría estar grabado en esa estela?",
						"vietnamese": "Trong tấm bia đó còn khắc gì nữa?",
						"thai": "ในศิลาจารึกนั้นจะมีอะไรสลักอยู่อีกนะ?",
						"hindi": "उस स्मारक में और क्या खुदा हो सकता है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그저 명령 하나를 지키려고, 이 얼음 속에서.",
						"english": "...Just to uphold a single command, here in this ice.",
						"japanese": "…たった一つの命令を守るために、この氷の中で。",
						"chinese": "…只为遵守一个命令，在这冰天雪地里。",
						"french": "…Juste pour suivre un seul ordre, ici dans cette glace.",
						"spanish": "...Solo para cumplir una orden, aquí en este hielo.",
						"vietnamese": "...Chỉ để tuân theo một mệnh lệnh, tại nơi băng giá này.",
						"thai": "...เพียงเพื่อรักษากฎเพียงข้อเดียว ในน้ำแข็งแห่งนี้.",
						"hindi": "...बस एक आदेश का पालन करने के लिए, इस बर्फ में।"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "전사의 의무… 강함의 끝은 결국 이런 건가.",
						"english": "A warrior's duty... Is this truly the end of strength?",
						"japanese": "戦士の務め… 強さの果ては結局、こんなものなのか。",
						"chinese": "战士的职责…强大的尽头，最终竟是如此吗？",
						"french": "Le devoir d'un guerrier… La fin de la force est-elle vraiment ceci ?",
						"spanish": "El deber de un guerrero... ¿Es este acaso el fin de la fuerza?",
						"vietnamese": "Nghĩa vụ của chiến binh… Cuối cùng thì đây có phải là tận cùng của sức mạnh không?",
						"thai": "หน้าที่ของนักรบ...จุดจบของความแข็งแกร่ง สุดท้ายก็เป็นเช่นนี้เองหรือ?",
						"hindi": "एक योद्धा का कर्तव्य... क्या शक्ति का अंत वास्तव में ऐसा ही है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 존재였다.",
						"english": "A colossal shadow blocked the path. It was an unknown entity.",
						"japanese": "巨大な影が道を阻んだ。それは未知の存在だった。",
						"chinese": "巨大的黑影挡住了去路。那是一个未知存在。",
						"french": "Une ombre colossale barra le chemin. C'était une entité inconnue.",
						"spanish": "Una sombra colosal bloqueó el camino. Era una entidad desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Đó là một thực thể vô danh.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่ไม่รู้จัก.",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह एक अज्ञात इकाई थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나약한 질문은, 얼음 속에 묻어두어라.",
						"english": "...Bury weak questions in the ice.",
						"japanese": "…弱き問いは、氷の中に埋葬せよ。",
						"chinese": "…懦弱的问题，就让它埋葬在冰雪中吧。",
						"french": "...Enterre les questions faibles dans la glace.",
						"spanish": "...Entierra las preguntas débiles en el hielo.",
						"vietnamese": "...Hãy chôn vùi những câu hỏi yếu đuối vào băng giá.",
						"thai": "...จงฝังคำถามอันอ่อนแอไว้ในน้ำแข็งเถิด.",
						"hindi": "...कमजोर सवालों को बर्फ में दफना दो।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "맹세의 무게를 감당할 수 있겠나? 너의 의무란 그런 것이다.",
						"english": "Can you bear the weight of the oath? Such is your duty.",
						"japanese": "誓いの重さに耐えられるか？ それがお前の義務だ。",
						"chinese": "你能承受誓言之重吗？那便是你的职责。",
						"french": "Peux-tu supporter le poids du serment ? Tel est ton devoir.",
						"spanish": "¿Puedes soportar el peso del juramento? Tal es tu deber.",
						"vietnamese": "Ngươi có gánh nổi sức nặng của lời thề không? Nghĩa vụ của ngươi là như vậy đó.",
						"thai": "เจ้าทนทานน้ำหนักของคำสาบานได้หรือไม่? นั่นคือหน้าที่ของเจ้า",
						"hindi": "क्या तुम शपथ का भार सह सकते हो? यही तुम्हारा कर्तव्य है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…끝이 아니다. 다시 일어설 것이다.",
						"english": "...It's not the end. I will rise again.",
						"japanese": "…終わりではない。再び立ち上がるだろう。",
						"chinese": "…这不是结束。我将再次崛起。",
						"french": "...Ce n'est pas la fin. Je me relèverai.",
						"spanish": "...No es el final. Me levantaré de nuevo.",
						"vietnamese": "...Đây không phải là kết thúc. Ta sẽ trỗi dậy lần nữa.",
						"thai": "...นี่ไม่ใช่จุดจบ ข้าจะลุกขึ้นยืนอีกครั้ง",
						"hindi": "...यह अंत नहीं है। मैं फिर से उठ खड़ा हूँगा।"
					},
					"speaker": "ivar"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그릇된 의무를 따르는 자… 너도 결국 그렇게 될 것이다.",
						"english": "One who follows a false duty... you too shall eventually become so.",
						"japanese": "誤った務めに従う者…お前もいずれそうなるだろう。",
						"chinese": "追随错误职责之人…你最终也会变成那样。",
						"french": "Celui qui suit un faux devoir… toi aussi, tu finiras ainsi.",
						"spanish": "Aquel que sigue un deber equivocado... tú también acabarás así.",
						"vietnamese": "Kẻ tuân theo nghĩa vụ sai lầm… ngươi cuối cùng cũng sẽ như vậy.",
						"thai": "ผู้ที่ติดตามหน้าที่อันผิดพลาด...สุดท้ายเจ้าก็จะกลายเป็นเช่นนั้น.",
						"hindi": "जो गलत कर्तव्य का पालन करता है... तुम भी अंततः वैसे ही बनोगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "아니. 내 의무는 내가 찾는다.",
						"english": "No. I shall find my own duty.",
						"japanese": "違う。私の務めは、私が見つける。",
						"chinese": "不。我的职责由我自己寻找。",
						"french": "Non. Mon devoir, je le trouverai moi-même.",
						"spanish": "No. Mi deber lo encontraré yo mismo.",
						"vietnamese": "Không. Nghĩa vụ của ta, ta sẽ tự mình tìm thấy.",
						"thai": "ไม่ หน้าที่ของข้า ข้าจะค้นหามันเอง.",
						"hindi": "नहीं। मैं अपना कर्तव्य स्वयं खोजूंगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "물러서지 않아!",
						"english": "I won't back down!",
						"japanese": "退かない！",
						"chinese": "我不会退缩！",
						"french": "Je ne reculerai pas !",
						"spanish": "¡No me echaré atrás!",
						"vietnamese": "Ta sẽ không lùi bước!",
						"thai": "ข้าจะไม่ถอย!",
						"hindi": "मैं पीछे नहीं हटूंगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 전사여. 이 맹세는, 영원히….",
						"english": "...Foolish warrior. This vow, forever...",
						"japanese": "…愚かなる戦士よ。この誓いは、永遠に…。",
						"chinese": "…愚蠢的战士啊。这个誓言，将永远……",
						"french": "...Guerrier insensé. Ce serment, pour toujours...",
						"spanish": "...Guerrero necio. Este juramento, para siempre...",
						"vietnamese": "...Chiến binh ngu xuẩn. Lời thề này, mãi mãi...",
						"thai": "...นักรบผู้โง่เขลา คำสาบานนี้ จักคงอยู่ชั่วนิรันดร์...",
						"hindi": "...मूर्ख योद्धा। यह प्रतिज्ञा, हमेशा के लिए..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "명령이 아닌, 나의 의지로….",
						"english": "Not by command, but by my will...",
						"japanese": "命令ではなく、私の意思で…",
						"chinese": "并非命令，而是我的意志…",
						"french": "Non par ordre, mais par ma volonté...",
						"spanish": "No por orden, sino por mi voluntad...",
						"vietnamese": "Không phải mệnh lệnh, mà là ý chí của ta...",
						"thai": "ไม่ใช่คำสั่ง แต่เป็นเจตจำนงของข้า...",
						"hindi": "आदेश से नहीं, बल्कि मेरी इच्छा से..."
					},
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "룬 비석의 다음 구절이, 차가운 침묵 속에 드러났다.",
						"english": "The next verse of the Runic tablet was revealed in cold silence.",
						"japanese": "ルーン碑石の次の節が、冷たい沈黙の中に現れた。",
						"chinese": "符文石碑的下一段，在冰冷的寂静中显现。",
						"french": "Le verset suivant de la tablette runique fut révélé dans un froid silence.",
						"spanish": "El siguiente pasaje de la tableta rúnica se reveló en un frío silencio.",
						"vietnamese": "Đoạn văn tiếp theo của phiến đá rune, hiện ra trong im lặng lạnh lẽo.",
						"thai": "บทถัดไปของศิลาจารึกรูน ได้ปรากฏขึ้นในความเงียบงันที่เยือกเย็น",
						"hindi": "रूनिक शिला का अगला छंद, ठंडी खामोशी में प्रकट हुआ।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
