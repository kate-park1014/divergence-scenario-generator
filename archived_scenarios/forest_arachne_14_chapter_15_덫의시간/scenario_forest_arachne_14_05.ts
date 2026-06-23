export const scenario_forest_arachne_14_05 = {
	"scenario_id": "forest_arachne_14_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "pool_CunningShadow_Arachne_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "유물은 탐험대의 손에 들려 있었다. 거미줄이 길을 안내하는 듯했다.",
						"english": "The artifact was in the explorer's hand. Cobwebs seemed to guide the way.",
						"japanese": "遺物は探検隊の手にあった。蜘蛛の巣が道を案内しているようだった。",
						"chinese": "遗物在探险队手中。蜘蛛网似乎在指引方向。",
						"french": "L'artefact était entre les mains de l'explorateur. Les toiles d'araignée semblaient guider le chemin.",
						"spanish": "El artefacto estaba en la mano del explorador. Las telarañas parecían guiar el camino.",
						"vietnamese": "Hiện vật nằm trong tay nhà thám hiểm. Mạng nhện dường như đang dẫn đường.",
						"thai": "วัตถุโบราณอยู่ในมือของนักสำรวจ ใยแมงมุมดูเหมือนจะนำทาง",
						"hindi": "कलाकृति खोजकर्ता के हाथ में थी। मकड़ी के जाले रास्ता दिखा रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… 거의 다 왔군.",
						"english": "We're... almost there.",
						"japanese": "もう…すぐそこだ。",
						"chinese": "差不多…到了。",
						"french": "Nous sommes… presque arrivés.",
						"spanish": "Ya… casi hemos llegado.",
						"vietnamese": "Chúng ta… gần đến nơi rồi.",
						"thai": "เรา…ใกล้จะถึงแล้ว",
						"hindi": "हम… लगभग पहुँच गए हैं।"
					}
				},
				{
					"content": {
						"korean": "몸이… 점점 더 무거워져. 저주가 강해지는 것 같아.",
						"english": "My body… it's getting heavier. The curse seems to be strengthening.",
						"japanese": "体が…どんどん重くなる。呪いが強くなっているようだ。",
						"chinese": "身体…越来越沉重。诅咒似乎在加强。",
						"french": "Mon corps… devient de plus en plus lourd. La malédiction semble s'intensifier.",
						"spanish": "Mi cuerpo… se está volviendo más pesado. La maldición parece fortalecerse.",
						"vietnamese": "Cơ thể tôi… càng lúc càng nặng nề. Lời nguyền dường như đang mạnh lên.",
						"thai": "ร่างกายของฉัน…หนักขึ้นเรื่อยๆ คำสาปดูเหมือนจะแข็งแกร่งขึ้น",
						"hindi": "मेरा शरीर… और भारी होता जा रहा है। अभिशाप मजबूत होता जा रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아라크네만이 이걸 풀 수 있어. 믿어야 해.",
						"english": "Only Arachne can break this. I have to believe.",
						"japanese": "アラクネだけがこれを解ける。信じなければ。",
						"chinese": "只有阿拉克涅能解除。我必须相信。",
						"french": "Seule Arachne peut briser cela. Je dois croire.",
						"spanish": "Solo Aracne puede romper esto. Tengo que creer.",
						"vietnamese": "Chỉ Arachne mới có thể hóa giải điều này. Tôi phải tin tưởng.",
						"thai": "มีเพียงอะแรคนี่เท่านั้นที่ไขสิ่งนี้ได้ ฉันต้องเชื่อ",
						"hindi": "केवल अराक्ने ही इसे तोड़ सकती है। मुझे विश्वास करना होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "숲이… 마치 살아있는 것 같지 않나? 모든 것이 우릴 지켜보는 느낌이야.",
						"english": "Doesn't the forest… feel alive? It feels like everything is watching us.",
						"japanese": "森が…まるで生きているようだと思わないか？全てが私たちを見ている気がする。",
						"chinese": "这森林…难道不像活的一样吗？感觉一切都在注视着我们。",
						"french": "La forêt… ne semble-t-elle pas vivante ? On dirait que tout nous observe.",
						"spanish": "¿No parece el bosque… como si estuviera vivo? Siento que todo nos observa.",
						"vietnamese": "Rừng… không phải là như đang sống sao? Cứ như mọi thứ đang theo dõi chúng ta vậy.",
						"thai": "ป่า…ไม่รู้สึกเหมือนมีชีวิตงั้นหรือ? รู้สึกเหมือนทุกสิ่งกำลังจับตามองเรา",
						"hindi": "क्या जंगल… जीवंत नहीं लगता? ऐसा लगता है जैसे सब कुछ हमें देख रहा है।"
					}
				},
				{
					"content": {
						"korean": "이 유물… 정말 저주를 풀 수 있는 거야? 아무런 변화가 없어.",
						"english": "This artifact… can it really break the curse? There's no change.",
						"japanese": "この遺物…本当に呪いを解けるのか？何の変わりもない。",
						"chinese": "这遗物…真能解除诅咒吗？一点变化都没有。",
						"french": "Cet artefact… peut-il vraiment briser la malédiction ? Il n'y a aucun changement.",
						"spanish": "Este artefacto… ¿puede realmente romper la maldición? No hay ningún cambio.",
						"vietnamese": "Hiện vật này… thực sự có thể hóa giải lời nguyền sao? Chẳng có thay đổi nào cả.",
						"thai": "วัตถุโบราณนี้…จะแก้คำสาปได้จริงหรือ? ไม่มีอะไรเปลี่ยนแปลงเลย",
						"hindi": "यह कलाकृति… क्या यह वास्तव में अभिशाप को तोड़ सकती है? कोई बदलाव नहीं है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "아라크네가 말했다. 이건 마지막 의식을 위한 과정일 뿐이라고.",
						"english": "Arachne said. This is just part of the final ritual.",
						"japanese": "アラクネが言った。これは最後の儀式のための過程に過ぎないと。",
						"chinese": "阿拉克涅说。这只是最后仪式的过程。",
						"french": "Arachne a dit. Ce n'est qu'une partie du rituel final.",
						"spanish": "Aracne dijo. Esto es solo parte del ritual final.",
						"vietnamese": "Arachne đã nói. Đây chỉ là một phần của nghi lễ cuối cùng.",
						"thai": "อะแรคนี่บอกว่า นี่เป็นเพียงส่วนหนึ่งของพิธีกรรมสุดท้าย",
						"hindi": "अराक्ने ने कहा। यह अंतिम अनुष्ठान का सिर्फ एक हिस्सा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "브라켄, 몸에 검은 반점이… 저주가 더 깊어지고 있어. 아라크네가 정말 막을 수 있을까?",
						"english": "Bracken, black spots on your body… the curse is deepening. Can Arachne really stop it?",
						"japanese": "ブラッケン、体に黒い斑点が…呪いが深まっている。アラクネは本当に止められるのか？",
						"chinese": "布拉肯，你身上有黑斑…诅咒正在加深。阿拉克涅真的能阻止吗？",
						"french": "Bracken, des taches noires sur ton corps… la malédiction s'aggrave. Arachne peut-elle vraiment l'arrêter ?",
						"spanish": "Bracken, manchas negras en tu cuerpo… la maldición se está profundizando. ¿Podrá Aracne detenerla de verdad?",
						"vietnamese": "Bracken, những đốm đen trên người… lời nguyền đang trở nên sâu sắc hơn. Liệu Arachne có thể thực sự ngăn chặn nó không?",
						"thai": "แบรกเคน จุดดำบนตัวนาย…คำสาปกำลังลึกขึ้น อะแรคนี่จะหยุดมันได้จริงหรือ?",
						"hindi": "ब्रेकेन, तुम्हारे शरीर पर काले धब्बे… अभिशाप गहरा होता जा रहा है। क्या अराक्ने सच में इसे रोक सकती है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "멈춰야만 해… 그녀는 약속했어.",
						"english": "It has to stop… she promised.",
						"japanese": "止めなければ…彼女は約束したんだ。",
						"chinese": "必须阻止…她承诺过。",
						"french": "Ça doit s'arrêter… elle a promis.",
						"spanish": "Tiene que parar… ella lo prometió.",
						"vietnamese": "Nó phải dừng lại… cô ấy đã hứa rồi.",
						"thai": "มันต้องหยุด…เธอสัญญาไว้แล้ว",
						"hindi": "इसे रोकना ही होगा… उसने वादा किया था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 거미줄은 더욱 촘촘해졌다. 모든 발소리가 먹히는 듯했다.",
						"english": "The forest's cobwebs grew denser. Every footstep seemed muffled.",
						"japanese": "森の蜘蛛の巣はさらに緻密になった。全ての足音が吸い込まれるようだった。",
						"chinese": "森林的蜘蛛网变得更加密集。所有的脚步声似乎都被吞噬了。",
						"french": "Les toiles d'araignée de la forêt devinrent plus denses. Chaque pas semblait étouffé.",
						"spanish": "Las telarañas del bosque se hicieron más densas. Cada pisada parecía amortiguada.",
						"vietnamese": "Mạng nhện trong rừng trở nên dày đặc hơn. Mọi tiếng bước chân dường như đều bị nuốt chửng.",
						"thai": "ใยแมงมุมในป่าหนาแน่นขึ้น ทุกย่างก้าวดูเหมือนจะถูกกลืนหายไป",
						"hindi": "जंगल के मकड़ी के जाले और घने हो गए। हर कदम की आवाज दब गई।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상은… 힘들어. 온몸이 저주에 잠식되고 있어.",
						"english": "I... can't go on. My body's consumed by the curse.",
						"japanese": "もう…無理だ。全身が呪いに侵されていく。",
						"chinese": "我…撑不住了。诅咒正在吞噬我的全身。",
						"french": "Je... n'en peux plus. Mon corps est dévoré par la malédiction.",
						"spanish": "No puedo más... La maldición consume mi cuerpo.",
						"vietnamese": "Tôi... không thể tiếp tục được nữa. Cơ thể tôi đang bị lời nguyền xâm chiếm.",
						"thai": "ไม่ไหวแล้ว... ร่างกายข้าถูกคำสาปกลืนกิน.",
						"hindi": "मैं... अब और नहीं सह सकता। मेरा शरीर श्राप से ग्रसित हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아라크네. 제발, 네 말이 사실이길 빌겠어.",
						"english": "...Arachne. Please, I hope your words are true.",
						"japanese": "…アラクネ。頼む、お前の言葉が真実であることを願う。",
						"chinese": "……阿剌克涅。拜托了，希望你说的是实话。",
						"french": "...Arachné. S'il te plaît, j'espère que tes paroles sont vraies.",
						"spanish": "...Aracne. Por favor, espero que tus palabras sean ciertas.",
						"vietnamese": "...Arachne. Làm ơn, tôi hy vọng lời của cô là sự thật.",
						"thai": "...อราคเน่. ได้โปรดเถอะ, ข้าหวังว่าคำพูดของเจ้าจะเป็นจริง.",
						"hindi": "...अराक्ने। कृपया, मुझे उम्मीद है कि तुम्हारी बातें सच होंगी।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부, 거대한 거미줄의 중심이 드러났다. 돌이킬 수 없는 길이었다.",
						"english": "The heart of the forest, the center of the colossal web, was revealed. It was a path of no return.",
						"japanese": "森の心臓部、巨大な蜘蛛の巣の中心が露わになった。それは、もう後戻りできない道だった。",
						"chinese": "森林的心脏，巨大蜘蛛网的中心显露出来。这是一条不归路。",
						"french": "Le cœur de la forêt, le centre de la toile colossale, se révéla. C'était un chemin sans retour.",
						"spanish": "El corazón del bosque, el centro de la telaraña colosal, se reveló. Era un camino sin retorno.",
						"vietnamese": "Trái tim của khu rừng, trung tâm của mạng nhện khổng lồ, đã hiện ra. Đó là một con đường không thể quay lại.",
						"thai": "ใจกลางป่า, ศูนย์กลางของใยแมงมุมมหึมา, ปรากฏขึ้น. มันเป็นเส้นทางที่ไม่อาจย้อนกลับได้.",
						"hindi": "जंगल का हृदय, विशाल जाले का केंद्र, प्रकट हुआ। यह एक ऐसा मार्ग था जिससे वापस नहीं लौटा जा सकता।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 거미줄의 심장부. 아라크네가 탐험대를 기다리고 있었다.",
						"english": "At the heart of the colossal web, Arachne awaited the expedition.",
						"japanese": "巨大な蜘蛛の巣の心臓部で、アラクネが探検隊を待ち受けていた。",
						"chinese": "在巨大蜘蛛网的中心，阿剌克涅正等待着探险队。",
						"french": "Au cœur de la toile colossale, Arachné attendait l'expédition.",
						"spanish": "En el corazón de la telaraña colosal, Aracne esperaba a la expedición.",
						"vietnamese": "Tại trung tâm của mạng nhện khổng lồ, Arachne đang chờ đợi đoàn thám hiểm.",
						"thai": " ณ ใจกลางของใยแมงมุมมหึมา อราคเน่กำลังรอคอยคณะสำรวจอยู่.",
						"hindi": "विशाल जाले के हृदय में, अराक्ने अभियान दल का इंतज़ार कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "잘 했군. 드디어 고대 유물을 가져왔구나.",
						"english": "Well done. You've finally brought the ancient artifact.",
						"japanese": "よくやった。ついに古代の遺物を持ってきたな。",
						"chinese": "干得好。你们终于把古代遗物带来了。",
						"french": "Bien. Vous avez enfin apporté l'artefact ancien.",
						"spanish": "Bien hecho. Por fin habéis traído el artefacto antiguo.",
						"vietnamese": "Làm tốt lắm. Cuối cùng các ngươi cũng đã mang di vật cổ xưa đến rồi.",
						"thai": "ทำได้ดีมาก. ในที่สุดเจ้าก็นำสิ่งประดิษฐ์โบราณมาให้ข้าแล้ว.",
						"hindi": "शाबाश। तुम आखिरकार प्राचीन कलाकृति ले आए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이제 너희는 내 거미줄의 가장 중요한 매듭이 되었다.",
						"english": "Now you shall become the most important knots in my web.",
						"japanese": "お前たちは今、私の蜘蛛の巣の最も重要な結び目となるだろう。",
						"chinese": "现在，你们将成为我蜘蛛网中最重要的结。",
						"french": "Maintenant, vous deviendrez les nœuds les plus importants de ma toile.",
						"spanish": "Ahora os convertiréis en los nudos más importantes de mi telaraña.",
						"vietnamese": "Giờ đây, các ngươi sẽ trở thành những nút thắt quan trọng nhất trong mạng nhện của ta.",
						"thai": "บัดนี้พวกเจ้าจักกลายเป็นปมที่สำคัญที่สุดในใยแมงมุมของข้า.",
						"hindi": "अब तुम मेरे जाल की सबसे महत्वपूर्ण गांठें बनोगे।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你这是什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Cô nói vậy là sao?",
						"thai": "เจ้าหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아라크네… 약속과 달라! 저주를 풀기로 했잖아!",
						"english": "Arachne... This isn't what you promised! You said you'd lift the curse!",
						"japanese": "アラクネ…約束と違う！呪いを解くって言ったじゃないか！",
						"chinese": "阿剌克涅……这和说好的不一样！你不是说要解除诅咒吗！",
						"french": "Arachné... Ce n'est pas ce que tu as promis ! Tu as dit que tu lèverais la malédiction !",
						"spanish": "Aracne... ¡No es lo que prometiste! ¡Dijiste que levantarías la maldición!",
						"vietnamese": "Arachne... Đây không phải là điều cô đã hứa! Cô đã nói sẽ giải lời nguyền mà!",
						"thai": "อราคเน่... นี่ไม่ใช่สิ่งเจ้าสัญญา! เจ้าบอกว่าจะถอนคำสาปนี่นา!",
						"hindi": "अराक्ने... यह तुमने वादा नहीं किया था! तुमने कहा था कि तुम श्राप हटा दोगी!"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 아마존의 여왕들은 이 숲이 내 마지막 안식처라고 생각했겠지…",
						"english": "The foolish Amazon queens must have thought this forest was my final resting place...",
						"japanese": "愚かなアマゾンの女王たちは、この森が私の最後の安息の地だと思ったのだろうな…",
						"chinese": "那些愚蠢的亚马逊女王们，一定以为这片森林是我最后的安息之地……",
						"french": "Les stupides reines amazones ont dû penser que cette forêt était mon dernier lieu de repos...",
						"spanish": "Las estúpidas reinas amazonas deben haber pensado que este bosque era mi último lugar de descanso...",
						"vietnamese": "Những nữ hoàng Amazon ngu ngốc hẳn đã nghĩ khu rừng này là nơi an nghỉ cuối cùng của ta...",
						"thai": "ราชินีชาวอเมซอนโง่เขลาคงคิดว่าป่าแห่งนี้คือที่พำนักสุดท้ายของข้า...",
						"hindi": "मूर्ख अमेज़न रानियों ने सोचा होगा कि यह जंगल मेरा अंतिम विश्राम स्थल था..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "하지만 이곳은 나의 새로운 왕국이고, 너희는 그 왕국에 바쳐질 첫 제물이다.",
						"english": "But this is my new kingdom, and you are the first sacrifices to be offered to it.",
						"japanese": "だが、ここは私の新しい王国であり、お前たちはその王国に捧げられる最初の犠牲なのだ。",
						"chinese": "但这里是我的新王国，而你们，将是献给这个王国的第一个祭品。",
						"french": "Mais ceci est mon nouveau royaume, et vous êtes les premières offrandes à lui être sacrifiées.",
						"spanish": "Pero este es mi nuevo reino, y vosotras sois los primeros sacrificios que se le ofrecerán.",
						"vietnamese": "Nhưng đây là vương quốc mới của ta, và các ngươi là những vật tế đầu tiên được dâng lên cho nó.",
						"thai": "แต่ที่นี่คืออาณาจักรใหม่ของข้า, และพวกเจ้าคือเครื่องบูชาแรกที่จะถูกสังเวยให้แก่มัน.",
						"hindi": "लेकिन यह मेरा नया राज्य है, और तुम इस राज्य को अर्पित किए जाने वाले पहले बलिदान हो।"
					}
				},
				{
					"content": {
						"korean": "숲 전체가 너의 감시망이었단 말이야?",
						"english": "The entire forest was your surveillance network?",
						"japanese": "森全体がお前の監視網だったのか？",
						"chinese": "整个森林都是你的监控网络吗？",
						"french": "Toute la forêt était ton réseau de surveillance ?",
						"spanish": "¿Todo el bosque era tu red de vigilancia?",
						"vietnamese": "Cả khu rừng này là mạng lưới giám sát của ngươi sao?",
						"thai": "ป่าทั้งป่าคือเครือข่ายเฝ้าระวังของเจ้าอย่างนั้นหรือ?",
						"hindi": "क्या पूरा जंगल तुम्हारी निगरानी में था?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "그렇지. 이 저주 또한 나의 힘. 이제, 춤출 시간이다.",
						"english": "Indeed. This curse, too, is my power. Now, it's time to dance.",
						"japanese": "そうだ。この呪いも私の力。さあ、踊る時間だ。",
						"chinese": "没错。这份诅咒也是我的力量。现在，是时候跳舞了。",
						"french": "Exactement. Cette malédiction aussi est mon pouvoir. Maintenant, il est temps de danser.",
						"spanish": "Así es. Esta maldición también es mi poder. Ahora, es hora de bailar.",
						"vietnamese": "Đúng vậy. Lời nguyền này cũng là sức mạnh của ta. Giờ thì, đến lúc khiêu vũ rồi.",
						"thai": "ถูกต้อง คำสาปนี้ก็เป็นพลังของข้า ถึงเวลาเต้นรำแล้ว",
						"hindi": "हाँ। यह शाप भी मेरी शक्ति है। अब, नाचने का समय है।"
					}
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "…모든 것이 거짓이었어. 난 뭘 믿었던 거지?",
						"english": "...Everything was a lie. What did I even believe?",
						"japanese": "…全てが嘘だった。何を信じていたんだ…？",
						"chinese": "...一切都是谎言。我究竟相信了什么？",
						"french": "...Tout n'était que mensonge. Qu'ai-je bien pu croire ?",
						"spanish": "...Todo fue una mentira. ¿En qué creía yo?",
						"vietnamese": "...Tất cả chỉ là dối trá. Ta đã tin vào điều gì chứ?",
						"thai": "…ทุกอย่างเป็นเรื่องโกหก ฉันเชื่ออะไรไปกันแน่?",
						"hindi": "...सब कुछ झूठ था। मैंने किस पर विश्वास किया था?"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 고작 이 정도인가. 하지만 기억해라… 내 복수는… 끝나지 않았다…",
						"english": "Ugh... Is this all you've got? But remember... my revenge... is not over...",
						"japanese": "くっ…たかがこれしきか。だが覚えておけ…私の復讐は…終わっていない…",
						"chinese": "呃…就这点本事吗。但记住…我的复仇…还没有结束…",
						"french": "Ugh... C'est tout ce que tu as ? Mais souviens-toi... ma vengeance... n'est pas terminée...",
						"spanish": "Ugh... ¿Es todo lo que tienes? Pero recuerda... mi venganza... no ha terminado...",
						"vietnamese": "Khặc... Chỉ có thế thôi sao. Nhưng hãy nhớ lấy... mối thù của ta... chưa kết thúc đâu...",
						"thai": "อึก... แค่นี้เองหรือไง? แต่จำไว้... การแก้แค้นของข้า... ยังไม่จบ...",
						"hindi": "उफ़... बस इतना ही? लेकिन याद रखना... मेरा बदला... खत्म नहीं हुआ है..."
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "끝났어… 이제야 모든 게…",
						"english": "It's over... Finally, everything...",
						"japanese": "終わった…ようやく全てが…",
						"chinese": "结束了…终于，一切都…",
						"french": "C'est fini... Enfin, tout...",
						"spanish": "Se acabó... Por fin, todo...",
						"vietnamese": "Kết thúc rồi... Cuối cùng, mọi thứ...",
						"thai": "จบแล้ว... ในที่สุด ทุกสิ่ง...",
						"hindi": "खत्म हो गया... आखिरकार, सब कुछ..."
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…하지만 숲의 저주는… 그녀의 죽음으로도 완전히 사라지지 않은 것 같아.",
						"english": "...But the forest's curse... doesn't seem to have fully vanished even with her death.",
						"japanese": "…だが森の呪いは…彼女の死をもってしても、完全に消え去ってはいないようだ。",
						"chinese": "...但森林的诅咒…似乎并没有因她的死而完全消失。",
						"french": "...Mais la malédiction de la forêt... ne semble pas avoir complètement disparu même avec sa mort.",
						"spanish": "...Pero la maldición del bosque... no parece haber desaparecido por completo ni con su muerte.",
						"vietnamese": "...Nhưng lời nguyền của khu rừng... dường như vẫn chưa hoàn toàn biến mất ngay cả khi cô ấy chết.",
						"thai": "...แต่คำสาปของป่า... ดูเหมือนจะยังไม่หายไปทั้งหมดแม้เธอจะตายแล้วก็ตาม",
						"hindi": "...लेकिन जंगल का शाप... उसकी मौत के बाद भी पूरी तरह से खत्म नहीं हुआ है।"
					},
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 심장이 멎은 듯 고요해졌다. 그러나 거미줄의 잔재는 여전히 꿈틀거렸다.",
						"english": "The forest grew silent, as if its heart had stopped. Yet, the remnants of the spiderwebs still writhed.",
						"japanese": "森の心臓が止まったかのように静まり返った。しかし、蜘蛛の巣の残骸はまだ蠢いていた。",
						"chinese": "森林寂静下来，仿佛它的心脏停止了跳动。然而，蜘蛛网的残余仍在蠕动。",
						"french": "La forêt devint silencieuse, comme si son cœur s'était arrêté. Pourtant, les vestiges des toiles d'araignée continuaient de frémir.",
						"spanish": "El bosque enmudeció, como si su corazón se hubiera detenido. Sin embargo, los restos de las telarañas aún se retorcían.",
						"vietnamese": "Khu rừng trở nên tĩnh lặng, như thể trái tim nó đã ngừng đập. Tuy nhiên, tàn dư của mạng nhện vẫn còn rung động.",
						"thai": "ป่าเงียบสงัดราวกับหัวใจหยุดเต้น แต่ใยแมงมุมที่เหลืออยู่ยังคงบิดตัว",
						"hindi": "जंगल शांत हो गया, मानो उसका दिल रुक गया हो। फिर भी, मकड़ी के जालों के अवशेष अभी भी रेंग रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "복수는 끝났지만, 또 다른 거대한 그림자가 다가오고 있었다.",
						"english": "Revenge was over, but another vast shadow was approaching.",
						"japanese": "復讐は終わったが、また別の巨大な影が近づいていた。",
						"chinese": "复仇结束了，但另一个巨大的阴影正在逼近。",
						"french": "La vengeance était terminée, but une autre ombre immense approchait.",
						"spanish": "La venganza había terminado, pero otra enorme sombra se acercaba.",
						"vietnamese": "Mối thù đã kết thúc, nhưng một bóng tối khổng lồ khác đang đến gần.",
						"thai": "การแก้แค้นจบลงแล้ว แต่เงาขนาดใหญ่อีกตนกำลังคืบคลานเข้ามา",
						"hindi": "बदला खत्म हो गया था, लेकिन एक और विशाल छाया आ रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "멍청한 것들. 내 거미줄에서 영원히 허우적대라.",
						"english": "Fools. Drown yourselves in my web forever.",
						"japanese": "愚か者どもめ。私の蜘蛛の巣で永遠にもがけ。",
						"chinese": "蠢货们。永远在我的蜘蛛网中挣扎吧。",
						"french": "Imbéciles. Nagez dans ma toile pour l'éternité.",
						"spanish": "Necios. Atrapaos en mi telaraña para siempre.",
						"vietnamese": "Lũ ngu ngốc. Hãy vẫy vùng mãi mãi trong mạng nhện của ta đi.",
						"thai": "พวกโง่เง่า จงดิ้นรนอยู่ในใยแมงมุมของข้าไปตลอดกาล",
						"hindi": "मूर्खों। मेरे जाल में हमेशा के लिए फँसते रहो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 아직 끝이 아니야…",
						"english": "Damn it... Not... Not over yet...",
						"japanese": "くそ…まだ…まだ終わりじゃない…",
						"chinese": "该死…还没…还没结束…",
						"french": "Maudit... Pas... Pas encore fini...",
						"spanish": "Maldita sea... No... No ha terminado todavía...",
						"vietnamese": "Chết tiệt... Vẫn... Vẫn chưa kết thúc đâu...",
						"thai": "บ้าจริง... ยัง... ยังไม่จบ...",
						"hindi": "धिक्कार है... अभी... अभी खत्म नहीं हुआ है..."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "…이대로 끝낼 순 없어. 다시 일어서야 해.",
						"english": "...I can't let it end like this. I must rise again.",
						"japanese": "…このままでは終われない。もう一度立ち上がらなければ。",
						"chinese": "…不能就这样结束。我必须重新振作起来。",
						"french": "...Je ne peux pas laisser ça se terminer comme ça. Je dois me relever.",
						"spanish": "...No puedo dejar que termine así. Debo levantarme de nuevo.",
						"vietnamese": "...Không thể kết thúc thế này được. Mình phải đứng dậy một lần nữa.",
						"thai": "...จะจบแบบนี้ไม่ได้ ฉันต้องลุกขึ้นอีกครั้ง",
						"hindi": "...मैं इसे ऐसे खत्म नहीं कर सकता। मुझे फिर से खड़ा होना होगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 속삭였다. 진실은 거미줄처럼 얽혀 있었다.",
			"고대 유물을 손에 쥔 탐험대, 마지막 희망을 향해 나아갔다.",
			"아라크네의 미소 뒤에 숨겨진 차가운 진실이 드러나는 순간.",
			"모든 것이 복수를 위한 거대한 무대였다.",
			"브라켄의 선택. 숲은 피로 물들기 시작한다."
		],
		"english": [
			"The forest whispered. Truth, a tangled web.",
			"Expedition, ancient relic in hand, pressed toward final hope.",
			"The moment the cold truth behind Arachne's smile was revealed.",
			"All was a grand stage for vengeance.",
			"Braken's choice. The forest began to bleed."
		],
		"japanese": [
			"森は囁いた。真実は蜘蛛の巣のように絡み合っていた。",
			"古代の遺物を手に、探検隊は最後の希望へと進んだ。",
			"アラクネの微笑みの裏に隠された冷たい真実が露わになる瞬間。",
			"全ては復讐のための巨大な舞台だった。",
			"ブラケンの選択。森は血に染まり始める。"
		],
		"chinese": [
			"森林在低语。真相如蛛网般缠绕。",
			"探险队手握古老遗物，迈向最后的希望。",
			"阿拉赫涅笑容背后隐藏的冰冷真相揭露的瞬间。",
			"一切都是为了复仇的巨大舞台。",
			"布拉肯的选择。森林开始流血。"
		],
		"french": [
			"La forêt chuchotait. La vérité, une toile emmêlée.",
			"L'expédition, relique ancienne en main, avançait vers le dernier espoir.",
			"Le moment où la froide vérité derrière le sourire d'Arachné fut révélée.",
			"Tout n'était qu'une vaste scène pour la vengeance.",
			"Le choix de Braken. La forêt commença à saigner."
		],
		"spanish": [
			"El bosque susurraba. La verdad, una telaraña enredada.",
			"La expedición, con una reliquia antigua en mano, avanzó hacia la última esperanza.",
			"El momento en que la fría verdad tras la sonrisa de Aracne fue revelada.",
			"Todo era un gran escenario para la venganza.",
			"La elección de Braken. El bosque comenzó a sangrar."
		],
		"vietnamese": [
			"Rừng thì thầm. Sự thật, một mạng nhện rối bời.",
			"Đoàn thám hiểm, cầm cổ vật, tiến về phía hy vọng cuối cùng.",
			"Khoảnh khắc sự thật lạnh lùng ẩn sau nụ cười của Arachne hé lộ.",
			"Tất cả chỉ là một sân khấu lớn cho sự báo thù.",
			"Lựa chọn của Braken. Rừng bắt đầu nhuộm máu."
		],
		"thai": [
			"ป่ากระซิบ ความจริงพันกันยุ่งเหยิงเหมือนใยแมงมุม",
			"คณะสำรวจพร้อมวัตถุโบราณในมือ มุ่งหน้าสู่ความหวังสุดท้าย",
			"ช่วงเวลาที่ความจริงอันเยือกเย็นเบื้องหลังรอยยิ้มของอารัคนีถูกเปิดเผย",
			"ทั้งหมดคืองานแสดงอันยิ่งใหญ่เพื่อการแก้แค้น",
			"ทางเลือกของบราเคน ป่าเริ่มเปื้อนเลือด"
		],
		"hindi": [
			"जंगल फुसफुसाया। सच, एक उलझा हुआ जाल।",
			"प्राचीन अवशेष हाथ में लिए अभियान दल, अंतिम आशा की ओर बढ़ा।",
			"अराक्ने की मुस्कान के पीछे छिपी ठंडी सच्चाई का खुलासा होने का क्षण।",
			"सब कुछ प्रतिशोध के लिए एक भव्य मंच था।",
			"ब्रेकेन की पसंद। जंगल खून से रंगने लगा।"
		]
	},
	"epilogue": {
		"korean": [
			"거미줄의 여왕은 쓰러졌다. 숲을 옥죄던 저주도 잠시 멈췄다.",
			"그러나 브라켄의 눈빛은 흔들렸다. 그가 믿었던 구원은, 가장 잔혹한 기만이었다.",
			"숲은 깊은 침묵 속에 잠겼다. 찢겨진 진실은 상처로 남았다.",
			"복수의 끝, 새로운 시작인가. 혹은 더 깊은 절망의 입구인가.",
			"숲은 여전히 속삭였다. 다음 희생자를 기다리며."
		],
		"english": [
			"The Queen of Webs fell. The forest's curse, momentarily hushed.",
			"Yet Braken's gaze wavered. The salvation he trusted was the cruellest deception.",
			"The forest fell silent. The torn truth remained a wound.",
			"End of vengeance, a new beginning? Or an entrance to deeper despair?",
			"The forest still whispered. Awaiting its next victim."
		],
		"japanese": [
			"蜘蛛の女王は倒れた。森を縛り付けていた呪いも一時的に止まった。",
			"しかし、ブラケンの眼差しは揺らいだ。彼が信じた救いは、最も残酷な欺瞞だった。",
			"森は深い沈黙に包まれた。引き裂かれた真実は傷として残った。",
			"復讐の終わり、新たな始まりか。あるいは、より深い絶望の入り口か。",
			"森はまだ囁いていた。次の犠牲者を待ちながら。"
		],
		"chinese": [
			"蛛网女王倒下了。束缚森林的诅咒也暂时停止。",
			"然而，布拉肯的眼神动摇了。他所相信的救赎，是最残酷的欺骗。",
			"森林陷入了深沉的沉默。被撕裂的真相留下了一道伤疤。",
			"复仇的终结，是新的开始吗？亦或是更深绝望的入口？",
			"森林仍在低语。等待着下一个牺牲者。"
		],
		"french": [
			"La Reine des Toiles tomba. La malédiction de la forêt, momentanément apaisée.",
			"Pourtant, le regard de Braken vacilla. Le salut auquel il croyait était la plus cruelle des tromperies.",
			"La forêt plongea dans un profond silence. La vérité déchirée resta une blessure.",
			"Fin de la vengeance, un nouveau départ ? Ou une entrée vers un désespoir plus profond ?",
			"La forêt chuchotait toujours. Attendant sa prochaine victime."
		],
		"spanish": [
			"La Reina de las Telarañas cayó. La maldición del bosque, momentáneamente silenciada.",
			"Sin embargo, la mirada de Braken vaciló. La salvación en la que confiaba era el engaño más cruel.",
			"El bosque se sumió en un profundo silencio. La verdad desgarrada quedó como una herida.",
			"Fin de la venganza, ¿un nuevo comienzo? ¿O la entrada a una desesperación más profunda?",
			"El bosque seguía susurrando. Esperando a su próxima víctima."
		],
		"vietnamese": [
			"Nữ hoàng Mạng nhện gục ngã. Lời nguyền trói buộc rừng cũng tạm lắng.",
			"Tuy nhiên, ánh mắt của Braken dao động. Sự cứu rỗi anh tin tưởng lại là sự lừa dối tàn nhẫn nhất.",
			"Rừng chìm vào im lặng sâu thẳm. Sự thật bị xé nát vẫn là một vết thương.",
			"Kết thúc báo thù, là một khởi đầu mới? Hay là lối vào của tuyệt vọng sâu thẳm hơn?",
			"Rừng vẫn thì thầm. Chờ đợi nạn nhân tiếp theo."
		],
		"thai": [
			"ราชินีแห่งใยแมงมุมล้มลง คำสาปที่รัดรึงป่าหยุดลงชั่วคราว",
			"ทว่าสายตาของบราเคนสั่นไหว ความรอดที่เขาเชื่อคือการหลอกลวงที่โหดร้ายที่สุด",
			"ป่าจมดิ่งสู่ความเงียบงัน ความจริงที่ฉีกขาดกลายเป็นบาดแผล",
			"จุดจบแห่งการแก้แค้น จุดเริ่มต้นใหม่? หรือทางเข้าสู่ความสิ้นหวังที่ลึกซึ้งกว่า",
			"ป่ายังคงกระซิบ รอคอยเหยื่อรายต่อไป"
		],
		"hindi": [
			"जाल की रानी गिरी। जंगल को कसने वाला अभिशाप भी क्षण भर के लिए रुक गया।",
			"फिर भी ब्रेकेन की नजरें डगमगाईं। जिस मोक्ष पर उसे भरोसा था, वह सबसे क्रूर छल था।",
			"जंगल गहरी चुप्पी में डूब गया। फटी हुई सच्चाई एक घाव बन कर रह गई।",
			"प्रतिशोध का अंत, एक नई शुरुआत? या गहरे निराशा का द्वार?",
			"जंगल अभी भी फुसफुसा रहा था। अपने अगले शिकार का इंतजार करते हुए।"
		]
	}
} as const;
