export const scenario_desert_shimmerclaw_33_01 = {
	"scenario_id": "desert_shimmerclaw_33_01",
	"order": 1,
	"act": "intro",
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
					"content": {
						"korean": "모래 폭풍이 걷히자, 세상의 끝이 드러났다.",
						"english": "As the sandstorm cleared, the edge of the world was revealed.",
						"japanese": "砂嵐が去り、世界の果てが姿を現した。",
						"chinese": "沙尘暴散去后，世界的尽头显现出来。",
						"french": "La tempête de sable s'est dissipée, révélant le bout du monde.",
						"spanish": "Cuando la tormenta de arena se disipó, el fin del mundo se reveló.",
						"vietnamese": "Khi bão cát tan, tận cùng thế giới hiện ra.",
						"thai": "เมื่อพายุทรายสงบลง, สุดขอบโลกก็ปรากฏ.",
						"hindi": "जैसे ही रेत का तूफान हटा, दुनिया का किनारा सामने आ गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 전설의 오팔의 사막?",
						"english": "Is this... the legendary Opal Desert?",
						"japanese": "ここが…伝説のオパールの砂漠？",
						"chinese": "这里就是…传说中的欧泊沙漠？",
						"french": "C'est ici... le légendaire Désert d'Opale ?",
						"spanish": "¿Es este... el legendario Desierto de Ópalo?",
						"vietnamese": "Đây là… Sa mạc Opal huyền thoại?",
						"thai": "นี่คือ... ทะเลทรายโอปอลในตำนานหรือ?",
						"hindi": "क्या यह... पौराणिक ओपल रेगिस्तान है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그래. 한때 번성했던 블레이드마스터 문명의 성지였지.",
						"english": "Yes. Once, it was the sacred ground of the prosperous Blademaster civilization.",
						"japanese": "そうだ。かつては繁栄したブレードマスター文明の聖地だった。",
						"chinese": "是的。这里曾是繁荣的剑圣文明的圣地。",
						"french": "Oui. Jadis, c'était le lieu sacré de la civilisation prospère des Maîtres-Lames.",
						"spanish": "Sí. Antaño, fue la tierra sagrada de la próspera civilización de los Maestros Espada.",
						"vietnamese": "Đúng vậy. Từng là thánh địa của nền văn minh Kiếm Sư thịnh vượng.",
						"thai": "ใช่. ครั้งหนึ่งเคยเป็นดินแดนศักดิ์สิทธิ์ของอารยธรรมปรมาจารย์ดาบที่รุ่งเรือง.",
						"hindi": "हाँ। कभी यह समृद्ध ब्लेडमास्टर सभ्यता की पवित्र भूमि थी।"
					}
				},
				{
					"content": {
						"korean": "지금은 저주받은 땅이지만.",
						"english": "But now, it's a cursed land.",
						"japanese": "今は呪われた地だが。",
						"chinese": "但现在，它是一片被诅咒的土地。",
						"french": "Mais maintenant, c'est une terre maudite.",
						"spanish": "Pero ahora, es una tierra maldita.",
						"vietnamese": "Nhưng giờ đây, đó là một vùng đất bị nguyền rủa.",
						"thai": "แต่ตอนนี้, มันคือดินแดนต้องคำสาป.",
						"hindi": "लेकिन अब, यह एक शापित भूमि है।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저주…?",
						"english": "Cursed...?",
						"japanese": "呪い…？",
						"chinese": "诅咒…？",
						"french": "Maudite...?",
						"spanish": "¿Maldición...?",
						"vietnamese": "Nguyền rủa…?",
						"thai": "คำสาป...?",
						"hindi": "शाप...?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "밤마다 들려오는 노랫소리를 조심해.",
						"english": "Beware the song that echoes every night.",
						"japanese": "夜ごと聞こえる歌声には気をつけろ。",
						"chinese": "小心每晚回荡的歌声。",
						"french": "Méfie-toi du chant qui résonne chaque nuit.",
						"spanish": "Ten cuidado con la canción que resuena cada noche.",
						"vietnamese": "Hãy cẩn thận với tiếng hát vang vọng mỗi đêm.",
						"thai": "ระวังเสียงเพลงที่ดังก้องทุกคืน.",
						"hindi": "हर रात गूंजने वाले गीत से सावधान रहना।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그건 죽음으로 이끄는 길이야.",
						"english": "That path leads to death.",
						"japanese": "それは死へと続く道だ。",
						"chinese": "那是通往死亡的道路。",
						"french": "C'est un chemin qui mène à la mort.",
						"spanish": "Ese camino lleva a la muerte.",
						"vietnamese": "Đó là con đường dẫn đến cái chết.",
						"thai": "นั่นคือหนทางสู่ความตาย",
						"hindi": "वह रास्ता मौत की ओर ले जाता है।"
					}
				},
				{
					"content": {
						"korean": "아름다운 노랫소리 아니었나요?",
						"english": "Wasn't that a beautiful song?",
						"japanese": "美しい歌声ではありませんでしたか？",
						"chinese": "那不是美妙的歌声吗？",
						"french": "N'était-ce pas un chant magnifique ?",
						"spanish": "¿No fue una hermosa canción?",
						"vietnamese": "Đó không phải là một bài hát tuyệt đẹp sao?",
						"thai": "นั่นไม่ใช่เสียงเพลงที่ไพเราะเหรอ?",
						"hindi": "क्या वह एक सुंदर गीत नहीं था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아름다움은 가장 위험한 유혹이지.",
						"english": "Beauty is the most dangerous temptation.",
						"japanese": "美しさは最も危険な誘惑だ。",
						"chinese": "美丽是最危险的诱惑。",
						"french": "La beauté est la tentation la plus dangereuse.",
						"spanish": "La belleza es la tentación más peligrosa.",
						"vietnamese": "Vẻ đẹp là cám dỗ nguy hiểm nhất.",
						"thai": "ความงามคือสิ่งล่อลวงที่อันตรายที่สุด",
						"hindi": "सुंदरता सबसे खतरनाक प्रलोभन है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 모래 속에는 부서지고 녹슨 검들이 수도 없이 잠들어 있어.",
						"english": "Countless broken and rusted swords lie dormant in this sand.",
						"japanese": "この砂の中には、数えきれないほどの壊れた錆びた剣が眠っている。",
						"chinese": "在这片沙子里，无数破碎生锈的剑沉睡着。",
						"french": "D'innombrables épées brisées et rouillées sommeillent dans ce sable.",
						"spanish": "Innumerables espadas rotas y oxidadas yacen dormidas en esta arena.",
						"vietnamese": "Vô số thanh kiếm gãy nát và rỉ sét đang ngủ yên trong cát này.",
						"thai": "ดาบที่หักและขึ้นสนิมนับไม่ถ้วนหลับใหลอยู่ในผืนทรายนี้",
						"hindi": "इस रेत में अनगिनत टूटी और जंग लगी तलवारें सोई हुई हैं।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아미르, 방금… 노랫소리가 또 들렸어요.",
						"english": "Amir, just now... I heard the song again.",
						"japanese": "アミール、今…また歌声が聞こえました。",
						"chinese": "阿米尔，刚才…我又听到歌声了。",
						"french": "Amir, à l'instant... j'ai encore entendu le chant.",
						"spanish": "Amir, justo ahora... volví a escuchar la canción.",
						"vietnamese": "Amir, vừa nãy... tôi lại nghe thấy tiếng hát.",
						"thai": "อามีร์ เมื่อกี้... ฉันได้ยินเสียงเพลงอีกแล้ว",
						"hindi": "अमीर, अभी-अभी... मैंने फिर से गाना सुना।"
					}
				},
				{
					"content": {
						"korean": "그게 바로 '빛의 인도자'의 노래다.",
						"english": "That is the song of the 'Lightbringer'.",
						"japanese": "それが『光の導き手』の歌だ。",
						"chinese": "那就是‘引光者’的歌。",
						"french": "C'est le chant du 'Porteur de Lumière'.",
						"spanish": "Esa es la canción del 'Portador de Luz'.",
						"vietnamese": "Đó chính là bài hát của 'Người dẫn lối ánh sáng'.",
						"thai": "นั่นคือเพลงของ 'ผู้ชี้นำแห่งแสง'",
						"hindi": "वह 'प्रकाश लाने वाले' का गीत है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 사막에 갇힌 블레이드마스터 영혼들의 절규지.",
						"english": "It's the cry of the Blade Master souls trapped in this desert.",
						"japanese": "この砂漠に囚われたブレードマスターたちの魂の叫びだ。",
						"chinese": "那是被困在这片沙漠中的剑圣之魂的哀嚎。",
						"french": "C'est le cri des âmes des Maîtres-Lames piégées dans ce désert.",
						"spanish": "Es el grito de las almas de los Maestros de la Espada atrapadas en este desierto.",
						"vietnamese": "Đó là tiếng kêu than của những linh hồn Kiếm Sư bị mắc kẹt trong sa mạc này.",
						"thai": "มันคือเสียงกรีดร้องของวิญญาณมาสเตอร์เบลดที่ติดอยู่ในทะเลทรายนี้",
						"hindi": "यह इस रेगिस्तान में फंसी ब्लेडमास्टर आत्माओं की चीख है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "영혼들의… 절규라고요?",
						"english": "The souls'... cries?",
						"japanese": "魂たちの…叫び、ですか？",
						"chinese": "灵魂们的…哀嚎？",
						"french": "Les âmes'... des cris ?",
						"spanish": "¿Los gritos... de las almas?",
						"vietnamese": "Tiếng kêu than của... linh hồn sao?",
						"thai": "เสียงกรีดร้องของ... วิญญาณเหรอ?",
						"hindi": "आत्माओं की... चीख?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 사막에 갇힌 자들은 영원히 갈증에 시달린다.",
						"english": "Those trapped in this desert suffer eternal thirst.",
						"japanese": "この砂漠に囚われた者たちは、永遠に渇きに苦しむ。",
						"chinese": "被困在这片沙漠里的人将永远遭受干渴。",
						"french": "Ceux qui sont piégés dans ce désert souffrent d'une soif éternelle.",
						"spanish": "Los atrapados en este desierto sufren sed eterna.",
						"vietnamese": "Những người bị mắc kẹt trong sa mạc này phải chịu khát vĩnh viễn.",
						"thai": "ผู้ที่ถูกขังอยู่ในทะเลทรายนี้จะต้องทนทุกข์ทรมานจากความกระหายชั่วนิรันดร์",
						"hindi": "इस रेगिस्तान में फंसे लोग हमेशा के लिए प्यास से पीड़ित रहते हैं।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어. 한 번 그 노래에 홀리면…",
						"english": "There's no turning back now. Once you're enchanted by that song...",
						"japanese": "もう戻れない。一度あの歌に魅了されてしまえば…",
						"chinese": "现在回不去了。一旦被那首歌迷惑…",
						"french": "Il n'y a plus de retour possible. Une fois que l'on est ensorcelé par ce chant...",
						"spanish": "Ya no hay vuelta atrás. Una vez que te dejas seducir por esa canción...",
						"vietnamese": "Không thể quay lại nữa rồi. Một khi đã bị bài hát đó mê hoặc...",
						"thai": "กลับไม่ได้แล้ว เมื่อถูกมนต์สะกดของเพลงนั้น...",
						"hindi": "अब वापस नहीं जा सकते। एक बार उस गीत से मोहित होने के बाद..."
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리는 진실을 밝혀야 해요.",
						"english": "We must uncover the truth.",
						"japanese": "私たちは真実を明かさなければなりません。",
						"chinese": "我们必须揭露真相。",
						"french": "Nous devons révéler la vérité.",
						"spanish": "Debemos descubrir la verdad.",
						"vietnamese": "Chúng ta phải phơi bày sự thật.",
						"thai": "เราต้องเปิดเผยความจริง",
						"hindi": "हमें सच का खुलासा करना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "진실은 항상 잔인한 법이지.",
						"english": "The truth is always cruel.",
						"japanese": "真実は常に残酷なものだ。",
						"chinese": "真相总是残酷的。",
						"french": "La vérité est toujours cruelle.",
						"spanish": "La verdad siempre es cruel.",
						"vietnamese": "Sự thật luôn tàn nhẫn.",
						"thai": "ความจริงมักจะโหดร้ายเสมอ",
						"hindi": "सच हमेशा क्रूर होता है।"
					}
				},
				{
					"content": {
						"korean": "이곳에서 영원히 헤맬 수도 있어.",
						"english": "We might wander here forever.",
						"japanese": "ここで永遠にさまようかもしれない。",
						"chinese": "我们可能会永远迷失在这里。",
						"french": "Nous pourrions errer ici pour toujours.",
						"spanish": "Podríamos vagar aquí para siempre.",
						"vietnamese": "Chúng ta có thể lạc lối ở đây mãi mãi.",
						"thai": "เราอาจจะหลงทางอยู่ที่นี่ตลอดไป",
						"hindi": "हम यहाँ हमेशा के लिए भटक सकते हैं।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 속으로 사라지는 탐험대. 사막의 저주는 그들을 삼켰다.",
						"english": "The expedition vanished into the sand. The desert's curse swallowed them.",
						"japanese": "探検隊は砂の中に消えた。砂漠の呪いが彼らを飲み込んだ。",
						"chinese": "探险队消失在沙中。沙漠的诅咒吞噬了他们。",
						"french": "L'expédition disparut dans le sable. La malédiction du désert les a engloutis.",
						"spanish": "La expedición desapareció en la arena. La maldición del desierto los devoró.",
						"vietnamese": "Đoàn thám hiểm biến mất vào cát. Lời nguyền sa mạc đã nuốt chửng họ.",
						"thai": "คณะสำรวจหายไปในผืนทราย คำสาปแห่งทะเลทรายกลืนกินพวกเขา",
						"hindi": "अभियान रेत में गायब हो गया। रेगिस्तान के अभिशाप ने उन्हें निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들… 영원히 이 사막을 떠돌아라…",
						"english": "Insignificant beings... Wander this desert forever...",
						"japanese": "くだらない者たちめ…永遠にこの砂漠を彷徨い続けろ…",
						"chinese": "渺小的存在……永远在这片沙漠中徘徊吧……",
						"french": "Êtres insignifiants... Errez dans ce désert pour l'éternité...",
						"spanish": "Seres insignificantes... Vagad por este desierto para siempre...",
						"vietnamese": "Những kẻ tầm thường... Hãy lang thang trong sa mạc này mãi mãi...",
						"thai": "เจ้าพวกไร้ค่า... จงร่อนเร่ในทะเลทรายนี้ไปชั่วนิรันดร์...",
						"hindi": "तुच्छ प्राणी... इस रेगिस्तान में हमेशा के लिए भटकते रहो..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어…!",
						"english": "Ugh... It's not over yet...!",
						"japanese": "くっ…まだ終わってないぞ…！",
						"chinese": "呃……还没结束……！",
						"french": "Ugh... Ce n'est pas encore fini... !",
						"spanish": "Ugh... ¡Todavía no ha terminado...!",
						"vietnamese": "Ư... Vẫn chưa kết thúc đâu...!",
						"thai": "อึก... ยังไม่จบหรอก...!",
						"hindi": "उफ़... अभी खत्म नहीं हुआ है...!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재는 쓰러졌다. 그러나 노랫소리는 멈추지 않았다.",
						"english": "The unknown entity fell. But the singing did not stop.",
						"japanese": "正体不明の存在は倒れた。しかし、歌声は止まらなかった。",
						"chinese": "不明实体倒下了。但歌声并未停止。",
						"french": "L'entité inconnue est tombée. Mais le chant ne s'est pas arrêté.",
						"spanish": "La entidad desconocida cayó. Pero el canto no se detuvo.",
						"vietnamese": "Thực thể không rõ danh tính đã ngã xuống. Nhưng tiếng hát không dừng lại.",
						"thai": "สิ่งมีชีวิตปริศนาล้มลงแล้ว แต่เสียงเพลงยังคงไม่หยุด",
						"hindi": "अज्ञात इकाई गिर गई। लेकिन गाना नहीं रुका।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이것은… 시작에 불과해… 진짜 갈증은… 아직 끝나지 않았다…",
						"english": "This is... just the beginning... The true thirst... is not over yet...",
						"japanese": "これは…始まりに過ぎない…本当の渇きは…まだ終わっていない…",
						"chinese": "这只是……开始……真正的渴望……尚未结束……",
						"french": "Ce n'est... que le début... La vraie soif... n'est pas encore terminée...",
						"spanish": "Esto es... solo el principio... La verdadera sed... aún no ha terminado...",
						"vietnamese": "Đây chỉ là... khởi đầu... Cơn khát thực sự... vẫn chưa kết thúc...",
						"thai": "นี่เป็น...แค่จุดเริ่มต้น...ความกระหายที่แท้จริง...ยังไม่จบลง...",
						"hindi": "यह... बस शुरुआत है... असली प्यास... अभी खत्म नहीं हुई है..."
					}
				},
				{
					"content": {
						"korean": "아직… 끝이 아니라고?",
						"english": "It's... not over yet?",
						"japanese": "まだ…終わっていないのか？",
						"chinese": "还没……结束？",
						"french": "Ce n'est... pas encore fini ?",
						"spanish": "¿Todavía... no ha terminado?",
						"vietnamese": "Chưa... kết thúc sao?",
						"thai": "ยัง...ไม่จบงั้นเหรอ?",
						"hindi": "अभी... खत्म नहीं हुआ?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사막의 저주는 더욱 깊어졌다. 진정한 빛을 찾아야 할 때였다.",
						"english": "The desert's curse deepened. It was time to find the true light.",
						"japanese": "砂漠の呪いはさらに深まった。真の光を見つける時が来たのだ。",
						"chinese": "沙漠的诅咒愈发深重。是时候寻找真正的光明了。",
						"french": "La malédiction du désert s'est approfondie. Il était temps de trouver la vraie lumière.",
						"spanish": "La maldición del desierto se hizo más profunda. Era hora de encontrar la verdadera luz.",
						"vietnamese": "Lời nguyền sa mạc càng thêm sâu sắc. Đã đến lúc tìm kiếm ánh sáng thật sự.",
						"thai": "คำสาปแห่งทะเลทรายลึกซึ้งยิ่งขึ้น ได้เวลาค้นหาแสงสว่างที่แท้จริงแล้ว",
						"hindi": "रेगिस्तान का अभिशाप गहरा हो गया। यह सच्चा प्रकाश खोजने का समय था。"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 나타났다. 정체 모를 존재가 그들을 가로막았다.",
						"english": "A giant shadow emerged from the sandstorm. An unknown entity blocked their path.",
						"japanese": "砂嵐の中から巨大な影が現れた。正体不明の存在が彼らの行く手を阻んだ。",
						"chinese": "一个巨大的影子从沙尘暴中出现。一个不明实体挡住了他们的去路。",
						"french": "Une ombre gigantesque est apparue de la tempête de sable. Une entité inconnue leur a barré la route.",
						"spanish": "Una sombra gigante emergió de la tormenta de arena. Una entidad desconocida les bloqueó el paso.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ bão cát. Một thực thể không rõ danh tính đã chặn đường họ.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย สิ่งมีชีวิตปริศนาขวางทางพวกเขาไว้",
						"hindi": "रेगिस्तानी तूफान से एक विशाल छाया उभरी। एक अज्ञात इकाई ने उनका रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 인간들… 감히 여기까지 오다니.",
						"english": "Foolish humans... How dare you come this far.",
						"japanese": "愚かな人間ども… よくもここまで来られたな。",
						"chinese": "愚蠢的人类……竟敢来到这里。",
						"french": "Humains insensés... Comment osez-vous venir jusqu'ici.",
						"spanish": "Humanos estúpidos... ¿Cómo os atrevéis a llegar tan lejos?",
						"vietnamese": "Loài người ngu ngốc... Dám đến tận đây.",
						"thai": "มนุษย์โง่เขลา... กล้าดียังไงถึงมาได้ไกลขนาดนี้",
						"hindi": "मूर्ख इंसान... इतनी दूर आने की हिम्मत कैसे हुई।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "사막의 저주를 끝내러 왔다!",
						"english": "We've come to end the desert's curse!",
						"japanese": "砂漠の呪いを終わらせに来た！",
						"chinese": "我们来结束沙漠的诅咒！",
						"french": "Nous sommes venus mettre fin à la malédiction du désert !",
						"spanish": "¡Hemos venido a acabar con la maldición del desierto!",
						"vietnamese": "Chúng tôi đến để kết thúc lời nguyền của sa mạc!",
						"thai": "เรามาที่นี่เพื่อยุติคำสาปของทะเลทราย!",
						"hindi": "हम रेगिस्तान के अभिशाप को खत्म करने आए हैं!"
					}
				},
				{
					"content": {
						"korean": "너희도 결국 검집이 될 뿐이다.",
						"english": "You too shall merely become scabbards.",
						"japanese": "お前たちも結局、刀の鞘に過ぎない。",
						"chinese": "你们最终也只会成为剑鞘。",
						"french": "Vous aussi ne serez que des fourreaux.",
						"spanish": "Vosotros también seréis meras vainas.",
						"vietnamese": "Các ngươi cuối cùng cũng chỉ là vỏ kiếm thôi.",
						"thai": "พวกเจ้าก็เป็นได้แค่ฝักดาบเท่านั้น",
						"hindi": "तुम भी केवल तलवार का म्यान बनोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 모래, 끝나지 않는 갈증.",
			"전설 속 '오팔의 사막'이 환영처럼 모습을 드러냈다.",
			"그러나 그 아름다운 빛 뒤에는, 죽음으로 이끄는 노랫소리가 울리고 있었다.",
			"사막은 모든 것을 삼키고, 모든 희망을 앗아가는 곳이었다."
		],
		"english": [
			"Endless sands, unyielding thirst.",
			"The legendary 'Opal Desert' appeared like a mirage.",
			"Yet, behind its beautiful light, a song leading to death echoed.",
			"The desert was a place that swallowed everything, stripping away all hope."
		],
		"japanese": [
			"終わりなき砂、尽きぬ渇き。",
			"伝説の「オパールの砂漠」が幻影のように姿を現した。",
			"しかし、その美しい光の裏には、死へと誘う歌声が響いていた。",
			"砂漠はすべてを飲み込み、すべての希望を奪い去る場所だった。"
		],
		"chinese": [
			"无尽的沙，永不消逝的渴望。",
			"传说中的“欧泊沙漠”如幻影般浮现。",
			"然而，在那美丽的光芒背后，回荡着引向死亡的歌声。",
			"沙漠是一个吞噬一切、夺走所有希望的地方。"
		],
		"french": [
			"Sables infinis, soif intarissable.",
			"Le légendaire «Désert d'Opale» apparut comme un mirage.",
			"Pourtant, derrière sa belle lumière, un chant menant à la mort résonnait.",
			"Le désert était un lieu qui engloutissait tout, anéantissant tout espoir."
		],
		"spanish": [
			"Arenas infinitas, sed inextinguible.",
			"El legendario \"Desierto de Ópalo\" apareció como un espejismo.",
			"Sin embargo, tras su hermosa luz, resonaba una canción que conducía a la muerte.",
			"El desierto era un lugar que lo engullía todo, despojando toda esperanza."
		],
		"vietnamese": [
			"Cát vô tận, khát khao không dứt.",
			"\"Sa mạc Opal\" huyền thoại hiện ra như một ảo ảnh.",
			"Tuy nhiên, đằng sau ánh sáng tuyệt đẹp đó, một bài hát dẫn đến cái chết đang vang vọng.",
			"Sa mạc là nơi nuốt chửng mọi thứ, cướp đi mọi hy vọng."
		],
		"thai": [
			"ทรายไร้ที่สิ้นสุด, ความกระหายไม่รู้จบ.",
			"“ทะเลทรายโอปอล” ในตำนานปรากฏขึ้นราวกับภาพลวงตา.",
			"ทว่า, เบื้องหลังแสงอันงดงามนั้น, เสียงเพลงที่นำไปสู่ความตายกลับดังก้องอยู่.",
			"ทะเลทรายคือสถานที่ที่กลืนกินทุกสิ่ง, และพรากเอาความหวังทั้งหมดไป."
		],
		"hindi": [
			"अंतहीन रेत, अनबुझ प्यास।",
			"पौराणिक 'ओपल रेगिस्तान' एक मृगतृष्णा की तरह प्रकट हुआ।",
			"फिर भी, उसकी सुंदर रोशनी के पीछे, मृत्यु की ओर ले जाने वाला एक गीत गूँज रहा था।",
			"रेगिस्तान एक ऐसी जगह थी जो सब कुछ निगल जाती थी, सारी उम्मीदें छीन लेती थी।"
		]
	}
} as const;
