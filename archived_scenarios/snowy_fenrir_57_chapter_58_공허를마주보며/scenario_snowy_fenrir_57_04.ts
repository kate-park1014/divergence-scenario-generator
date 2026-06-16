export const scenario_snowy_fenrir_57_04 = {
	"scenario_id": "snowy_fenrir_57_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"텅 빈 어둠이 동공처럼 내려앉았다.",
			"끌어당기는 힘은 잠시 가라앉았으나.",
			"글라세는 말했다. 끝을 똑바로 봐야 한다고.",
			"두려워하면, 그저 빨려 들어갈 뿐이라고."
		],
		"english": [
			"Empty darkness descended like a pupil.",
			"The pulling force subsided for a moment.",
			"Glace said: You must face the end directly.",
			"If you fear, you'll simply be drawn in."
		],
		"japanese": [
			"虚ろな闇が瞳孔のように降りてきた。",
			"引き寄せる力は一時的に鎮まったが。",
			"グラッセは言った。終わりを真っ直ぐ見据えなければならないと。",
			"恐れれば、ただ吸い込まれるだけだと。"
		],
		"chinese": [
			"空虚的黑暗如瞳孔般降临。",
			"拉扯之力暂时平息，然而。",
			"格拉斯说，必须直视结局。",
			"若是恐惧，便只会深陷其中。"
		],
		"french": [
			"L'obscurité vide s'abattit comme une pupille.",
			"La force d'attraction s'apaisa un instant, mais.",
			"Glace dit : « Tu dois regarder la fin en face. »",
			"Si tu as peur, tu seras simplement aspiré(e)."
		],
		"spanish": [
			"La oscuridad vacía descendió como una pupila.",
			"La fuerza de atracción se calmó por un momento, pero.",
			"Glace dijo: «Debes mirar el final directamente.»",
			"Si temes, simplemente serás arrastrado(a)."
		],
		"vietnamese": [
			"Bóng tối trống rỗng phủ xuống như đồng tử.",
			"Lực hút tạm lắng xuống, nhưng.",
			"Glace nói: 'Phải nhìn thẳng vào kết cục.'",
			"Nếu sợ hãi, ngươi sẽ chỉ bị hút vào thôi."
		],
		"thai": [
			"ความมืดมิดว่างเปล่าปกคลุมลงมาราวกับรูม่านตา",
			"แรงดึงดูดสงบลงชั่วขณะ แต่",
			"กลาสกล่าวว่า 'ต้องเผชิญหน้ากับจุดจบโดยตรง'",
			"หากกลัว ก็จะถูกดูดกลืนเข้าไปเท่านั้น"
		],
		"hindi": [
			"खाली अँधेरा एक पुतली की तरह उतर आया。",
			"खिंचाव की शक्ति क्षण भर के लिए शांत हो गई, लेकिन。",
			"ग्लेस ने कहा, 'तुम्हें अंत का सीधा सामना करना होगा।'",
			"अगर तुम डरते हो, तो तुम बस उसमें समा जाओगे。"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "텅 빈 어둠이 거대한 동공처럼 내려앉았다. 끌어당김은 사라진 듯 고요했다.",
						"english": "Vast darkness descended like a giant pupil. The pull seemed to vanish, leaving stillness.",
						"japanese": "虚ろな闇が巨大な瞳孔のように降りてきた。引き寄せる力は消え去ったかのように静寂だった。",
						"chinese": "空虚的黑暗如巨大的瞳孔般降临。拉扯之力似乎消失了，一片寂静。",
						"french": "L'obscurité vaste descendit comme une pupille géante. L'attraction semblait s'être évanouie, laissant le silence.",
						"spanish": "Una vasta oscuridad descendió como una pupila gigante. El tirón pareció desvanecerse, dejando quietud.",
						"vietnamese": "Bóng tối bao la phủ xuống như một đồng tử khổng lồ. Lực hút dường như biến mất, để lại sự tĩnh lặng.",
						"thai": "ความมืดมิดกว้างใหญ่ปกคลุมลงมาราวกับรูม่านตาขนาดยักษ์ แรงดึงดูดดูเหมือนหายไป เหลือไว้เพียงความเงียบงัน",
						"hindi": "एक विशाल अँधेरा एक बड़ी पुतली की तरह उतर आया। खिंचाव गायब हो गया था, शांति छा गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…왔군.",
						"english": "...You're here.",
						"japanese": "…来たな。",
						"chinese": "...来了啊。",
						"french": "...Tu es là.",
						"spanish": "...Has venido.",
						"vietnamese": "...Đến rồi.",
						"thai": "...มาแล้วสินะ",
						"hindi": "...आ गए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "글라세?",
						"english": "Glace?",
						"japanese": "グラッセ？",
						"chinese": "格拉斯？",
						"french": "Glace ?",
						"spanish": "¿Glace?",
						"vietnamese": "Glace?",
						"thai": "กลาส?",
						"hindi": "ग्लेस?"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "끝을 똑바로 봐야 휩쓸리지 않아.",
						"english": "Face the end directly, or you'll be swept away.",
						"japanese": "終わりを真っ直ぐ見据えなければ、巻き込まれるだけだ。",
						"chinese": "直视结局，才不会被卷入其中。",
						"french": "Regarde la fin en face, ou tu seras emporté(e).",
						"spanish": "Mira el final directamente, o serás arrastrado(a).",
						"vietnamese": "Hãy nhìn thẳng vào kết cục, nếu không sẽ bị cuốn trôi.",
						"thai": "จงเผชิญหน้ากับจุดจบโดยตรง มิฉะนั้นเจ้าจะถูกพัดพาไป",
						"hindi": "अंत का सीधा सामना करो, नहीं तो बह जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "두려워하면, 그저 빨려 들어갈 뿐이지.",
						"english": "If you fear, you'll simply be drawn in.",
						"japanese": "恐れれば、ただ吸い込まれるだけだ。",
						"chinese": "若是恐惧，便只会深陷其中。",
						"french": "Si tu as peur, tu seras simplement aspiré(e).",
						"spanish": "Si temes, simplemente serás arrastrado(a).",
						"vietnamese": "Nếu sợ hãi, ngươi sẽ chỉ bị hút vào thôi.",
						"thai": "หากกลัว ก็จะถูกดูดกลืนเข้าไปเท่านั้น",
						"hindi": "अगर तुम डरते हो, तो तुम बस उसमें समा जाओगे।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glace",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "응시한다는 게… 대체 어떤 의미죠?",
						"english": "What exactly does 'gaze' mean...?",
						"japanese": "見つめるって…一体どういう意味ですか？",
						"chinese": "凝视... 到底是什么意思？",
						"french": "Que signifie exactement « fixer du regard »... ?",
						"spanish": "¿Qué significa exactamente «mirar fijamente»...?",
						"vietnamese": "Việc 'nhìn chằm chằm'... rốt cuộc có ý nghĩa gì?",
						"thai": "การจ้องมอง... มันหมายความว่าอะไรกันแน่?",
						"hindi": "'घूरने' का मतलब... आखिर क्या है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것의 끝은 늘 공허해.",
						"english": "The end of everything is always emptiness.",
						"japanese": "全ての終わりは常に虚しい。",
						"chinese": "一切的结局总是虚无。",
						"french": "La fin de tout est toujours le vide.",
						"spanish": "El fin de todo es siempre el vacío.",
						"vietnamese": "Mọi thứ kết thúc luôn là hư không.",
						"thai": "จุดจบของทุกสิ่งมักว่างเปล่าเสมอ",
						"hindi": "हर चीज़ का अंत हमेशा खालीपन होता है।"
					},
					"type": "speech",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "채우려 들면 무너져. 그저 보고, 지나는 거야.",
						"english": "Try to fill it, and it crumbles. Just observe and move on.",
						"japanese": "満たそうとすれば崩れる。ただ見て、通り過ぎるのだ。",
						"chinese": "试图填补，就会崩塌。只需旁观，然后继续。",
						"french": "Si tu essaies de le remplir, il s'effondrera. Contente-toi d'observer et de passer.",
						"spanish": "Si intentas llenarlo, se desmorona. Solo observa y sigue.",
						"vietnamese": "Cố gắng lấp đầy sẽ sụp đổ. Chỉ cần nhìn và bước qua.",
						"thai": "หากพยายามเติมเต็ม มันจะพังทลาย แค่เฝ้าดูและผ่านไป",
						"hindi": "भरने की कोशिश करोगे तो टूट जाएगा। बस देखो और आगे बढ़ो।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "glace",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "하지만 아무것도 하지 않을 수는 없어요.",
						"english": "But I can't do nothing.",
						"japanese": "しかし、何もしないわけにはいきません。",
						"chinese": "但我不能什么都不做。",
						"french": "Mais je ne peux rien faire.",
						"spanish": "Pero no puedo no hacer nada.",
						"vietnamese": "Nhưng tôi không thể không làm gì cả.",
						"thai": "แต่ฉันไม่สามารถไม่ทำอะไรเลยได้",
						"hindi": "पर मैं कुछ न कर पाऊं, ऐसा नहीं हो सकता।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"emotion": "base",
					"content": {
						"korean": "미움으로 가득 채우려 하지 마.",
						"english": "Don't try to fill it with hatred.",
						"japanese": "憎しみで満たそうとしないで。",
						"chinese": "不要试图用仇恨将其填满。",
						"french": "N'essaie pas de le remplir de haine.",
						"spanish": "No intentes llenarlo de odio.",
						"vietnamese": "Đừng cố lấp đầy nó bằng sự căm ghét.",
						"thai": "อย่าพยายามเติมเต็มมันด้วยความเกลียดชัง",
						"hindi": "इसे नफरत से भरने की कोशिश मत करो।"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "연민으로 바라보면, 달라질 수도 있어.",
						"english": "If you look at it with compassion, things might change.",
						"japanese": "憐憫の目で見るなら、変わるかもしれない。",
						"chinese": "如果你以怜悯之心看待，也许会改变。",
						"french": "Si tu le regardes avec compassion, les choses pourraient changer.",
						"spanish": "Si lo miras con compasión, podría cambiar.",
						"vietnamese": "Nếu nhìn nó bằng lòng trắc ẩn, mọi thứ có thể thay đổi.",
						"thai": "หากมองด้วยความเมตตา มันอาจจะเปลี่ยนไป",
						"hindi": "अगर तुम इसे करुणा से देखोगे, तो शायद चीजें बदल सकती हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "미움 없는 연민…",
						"english": "Compassion without hatred...",
						"japanese": "憎しみのない憐憫…",
						"chinese": "没有仇恨的怜悯…",
						"french": "La compassion sans haine…",
						"spanish": "Compasión sin odio…",
						"vietnamese": "Lòng trắc ẩn không hận thù…",
						"thai": "ความเมตตาที่ไร้ความเกลียดชัง…",
						"hindi": "नफरत रहित करुणा..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고요한 어둠 속에서, 아주 희미한 끌어당김이 느껴졌다.",
						"english": "In the silent darkness, a faint pull was felt.",
						"japanese": "静かな闇の中で、ごく微かな引き寄せを感じた。",
						"chinese": "在寂静的黑暗中，感受到了一股微弱的吸引。",
						"french": "Dans l'obscurité silencieuse, une très faible attraction se fit sentir.",
						"spanish": "En la oscuridad silenciosa, se sintió una atracción muy débil.",
						"vietnamese": "Trong bóng tối tĩnh lặng, một lực kéo rất mờ nhạt được cảm nhận.",
						"thai": "ในความมืดมิดอันเงียบสงบ สัมผัสได้ถึงแรงดึงดูดที่แผ่วเบา",
						"hindi": "शांत अंधेरे में, एक बहुत ही हल्की खींच महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없는 유혹처럼, 텅 빈 공간이 속삭였다.",
						"english": "Like an unstoppable temptation, the empty space whispered.",
						"japanese": "止められない誘惑のように、空虚な空間が囁いた。",
						"chinese": "像无法抗拒的诱惑，空虚的空间低语着。",
						"french": "Comme une tentation irrésistible, l'espace vide murmura.",
						"spanish": "Como una tentación imparable, el espacio vacío susurró.",
						"vietnamese": "Như một cám dỗ không thể ngăn cản, không gian trống rỗng thì thầm.",
						"thai": "ราวกับแรงดึงดูดที่ไม่อาจต้านทานได้ ความว่างเปล่ากระซิบ",
						"hindi": "एक अदम्य प्रलोभन की तरह, खाली जगह फुसफुसाई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "glace",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"emotion": "base",
					"content": {
						"korean": "흔들리지 마. 이 어둠은 늘 유혹해.",
						"english": "Don't waver. This darkness always tempts.",
						"japanese": "揺らぐな。この闇は常に誘惑する。",
						"chinese": "不要动摇。这片黑暗总是充满诱惑。",
						"french": "Ne vacille pas. Cette obscurité tente toujours.",
						"spanish": "No vaciles. Esta oscuridad siempre tienta.",
						"vietnamese": "Đừng dao động. Bóng tối này luôn cám dỗ.",
						"thai": "อย่าหวั่นไหว ความมืดนี้ยั่วยวนเสมอ",
						"hindi": "मत डगमगाओ। यह अँधेरा हमेशा लुभाता है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만… 끝이 없는 것 같아요.",
						"english": "But... it feels endless.",
						"japanese": "しかし…終わりがないようだ。",
						"chinese": "但是…好像没有尽头。",
						"french": "Mais… ça semble sans fin.",
						"spanish": "Pero… parece no tener fin.",
						"vietnamese": "Nhưng… dường như không có hồi kết.",
						"thai": "แต่…มันเหมือนไม่มีที่สิ้นสุด",
						"hindi": "लेकिन… ऐसा लगता है कि इसका कोई अंत नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "끝은 있어. 다만… 네가 아직 모를 뿐.",
						"english": "There is an end. You just... don't know it yet.",
						"japanese": "終わりはある。ただ…君がまだ知らないだけ。",
						"chinese": "终点是存在的。只是…你尚未知晓。",
						"french": "Il y a une fin. Tu ne le sais juste pas encore.",
						"spanish": "Hay un final. Solo que... aún no lo sabes.",
						"vietnamese": "Có một kết thúc. Chỉ là... ngươi chưa biết mà thôi.",
						"thai": "มีจุดจบ เพียงแต่... เจ้ายังไม่รู้เท่านั้นเอง",
						"hindi": "अंत तो है। बस... तुम्हें अभी पता नहीं है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow swallowed everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra gigantesca lo devoró todo.",
						"vietnamese": "Một cái bóng khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาขนาดยักษ์กลืนกินทุกสิ่ง",
						"hindi": "एक विशाल परछाई ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "끝은… 늘 허무하지.",
						"english": "The end... is always futile.",
						"japanese": "終わりは… いつも虚しいものだ。",
						"chinese": "结局… 总是虚无。",
						"french": "La fin... est toujours vaine.",
						"spanish": "El final... siempre es en vano.",
						"vietnamese": "Cái kết... luôn vô nghĩa.",
						"thai": "จุดจบ... มักจะไร้ความหมายเสมอ",
						"hindi": "अंत... हमेशा व्यर्थ होता है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직, 포기하지 않아.",
						"english": "...Still, I won't give up.",
						"japanese": "…まだ、諦めない。",
						"chinese": "…我还, 没有放弃。",
						"french": "...Je n'abandonne pas encore.",
						"spanish": "...Todavía no me rindo.",
						"vietnamese": "...Chưa, tôi chưa bỏ cuộc.",
						"thai": "...ยังไม่ยอมแพ้",
						"hindi": "...अभी तक, हार नहीं मानी है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "glace",
					"action": "enter"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "다시, 응시할 기회가 올 거야.",
						"english": "Another chance to face it will come.",
						"japanese": "再び、見つめる機会が来るだろう。",
						"chinese": "再次, 凝视的机会会到来。",
						"french": "Une nouvelle occasion de contempler viendra.",
						"spanish": "Otra oportunidad para contemplar vendrá.",
						"vietnamese": "Một cơ hội để nhìn lại sẽ đến.",
						"thai": "โอกาสที่จะจ้องมองอีกครั้งจะมาถึง",
						"hindi": "फिर से देखने का अवसर आएगा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "텅 빈 어둠이 형체를 만들었다. 거대한 그림자가 일렁였다.",
						"english": "The empty darkness took shape. A colossal shadow flickered.",
						"japanese": "空虚な闇が形を成した。巨大な影が揺らめいた。",
						"chinese": "空虚的黑暗化为形体。巨大的黑影摇曳不定。",
						"french": "Les ténèbres vides prirent forme. Une ombre colossale vacilla.",
						"spanish": "La oscuridad vacía tomó forma. Una sombra colosal parpadeó.",
						"vietnamese": "Bóng tối trống rỗng hóa thành hình. Một cái bóng khổng lồ chập chờn.",
						"thai": "ความมืดว่างเปล่าก่อร่างเป็นรูปร่าง เงาขนาดมหึมาสั่นไหว",
						"hindi": "खाली अंधकार ने आकार लिया। एक विशाल छाया झिलमिला उठी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…환영한다. 끝의 목격자들.",
						"english": "...Welcome. Witnesses of the end.",
						"japanese": "…ようこそ。終わりの目撃者たちよ。",
						"chinese": "…欢迎。终焉的目击者们。",
						"french": "...Bienvenue. Témoins de la fin.",
						"spanish": "...Bienvenidos. Testigos del fin.",
						"vietnamese": "...Chào mừng. Những kẻ chứng kiến tận cùng.",
						"thai": "...ยินดีต้อนรับ ผู้เห็นเหตุการณ์แห่งจุดจบ",
						"hindi": "...स्वागत है। अंत के गवाहों।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 공허의 핵심이야?",
						"english": "Are you... the core of this void?",
						"japanese": "お前が…この虚無の核心なのか？",
						"chinese": "你是…这片虚空的中心吗？",
						"french": "Es-tu... le cœur de ce vide ?",
						"spanish": "¿Eres... el núcleo de este vacío?",
						"vietnamese": "Ngươi... là cốt lõi của hư vô này sao?",
						"thai": "เจ้า... คือแก่นแท้ของความว่างเปล่านี้หรือ?",
						"hindi": "क्या तुम... इस शून्य के मूल हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 그저 응시할 뿐. 너희처럼.",
						"english": "I merely gaze. Like you.",
						"japanese": "私はただ見つめるだけ。君たちのように。",
						"chinese": "我只是凝视而已。如你们一般。",
						"french": "Je ne fais que contempler. Comme vous.",
						"spanish": "Yo solo observo. Como vosotros.",
						"vietnamese": "Ta chỉ đơn thuần là nhìn ngắm. Giống như các ngươi.",
						"thai": "ข้าเพียงแค่เฝ้ามอง เช่นเดียวกับพวกเจ้า",
						"hindi": "मैं बस देखता हूँ। तुम्हारी तरह।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わっていない。",
						"chinese": "…还…没有结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Todavía... no ha terminado.",
						"vietnamese": "...Vẫn... chưa kết thúc.",
						"thai": "...ยัง...ไม่จบ",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그림자는 흩어졌지만, 공허는 사라지지 않았다.",
						"english": "The shadow dispersed, but the void did not vanish.",
						"japanese": "影は散ったが、虚無は消えなかった。",
						"chinese": "影子消散了，但虚空并未消失。",
						"french": "L'ombre se dispersa, mais le vide ne disparut pas.",
						"spanish": "La sombra se dispersó, pero el vacío no desapareció.",
						"vietnamese": "Cái bóng đã tan, nhưng hư vô vẫn chưa biến mất.",
						"thai": "เงากระจัดกระจาย แต่ความว่างเปล่าไม่ได้หายไป",
						"hindi": "छाया बिखर गई, पर शून्य गायब नहीं हुआ।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "glace",
					"action": "enter"
				},
				{
					"content": {
						"korean": "껍데기만 부쉈을 뿐이야. 본질은 저 너머에 있어.",
						"english": "We only shattered the shell. The essence lies beyond.",
						"japanese": "殻を破っただけだ。本質はその先にある。",
						"chinese": "只不过是打破了外壳。本质在更深处。",
						"french": "Nous n'avons brisé que la coquille. L'essence est au-delà.",
						"spanish": "Solo hemos roto la cáscara. La esencia está más allá.",
						"vietnamese": "Chúng ta chỉ phá vỡ cái vỏ bên ngoài. Bản chất nằm ở phía bên kia.",
						"thai": "เราเพียงแค่ทำลายเปลือกนอก แก่นแท้อยู่ที่นั่น",
						"hindi": "हमने केवल खोल तोड़ा है। सार उससे परे है।"
					},
					"emotion": "base",
					"speaker": "glace",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "우리는 어디로 가야 하죠?",
						"english": "Where should we go?",
						"japanese": "私たちはどこへ行けばいい？",
						"chinese": "我们该去哪里？",
						"french": "Où devons-nous aller ?",
						"spanish": "¿Adónde debemos ir?",
						"vietnamese": "Chúng ta phải đi đâu?",
						"thai": "เราควรไปที่ไหน?",
						"hindi": "हमें कहाँ जाना चाहिए?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "셋은 침묵했다. 텅 빈 어둠이 또 다른 시작을 예고하고 있었다.",
						"english": "The three fell silent. The empty darkness heralded another beginning.",
						"japanese": "三人は沈黙した。空虚な闇が、また別の始まりを告げていた。",
						"chinese": "三人陷入沉默。空虚的黑暗预示着另一个开始。",
						"french": "Les trois se turent. Les ténèbres vides annonçaient un autre commencement.",
						"spanish": "Los tres guardaron silencio. La oscuridad vacía presagiaba otro comienzo.",
						"vietnamese": "Ba người im lặng. Bóng tối trống rỗng báo hiệu một khởi đầu khác.",
						"thai": "ทั้งสามคนเงียบไป ความมืดว่างเปล่ากำลังบอกถึงการเริ่มต้นครั้งใหม่",
						"hindi": "तीनों मौन हो गए। खाली अंधकार एक और शुरुआत की घोषणा कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
