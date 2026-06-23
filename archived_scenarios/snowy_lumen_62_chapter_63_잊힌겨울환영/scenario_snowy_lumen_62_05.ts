export const scenario_snowy_lumen_62_05 = {
	"scenario_id": "snowy_lumen_62_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "pool_ArcticEcho_Lumen_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "유적의 심장부. 차가운 공기가 폐부를 찢었다.",
						"english": "The heart of the ruins. The cold air tore at our lungs.",
						"japanese": "遺跡の心臓部。冷たい空気が肺を裂いた。",
						"chinese": "遗迹之心。冰冷空气撕裂肺腑。",
						"french": "Le cœur des ruines. L'air froid nous déchirait les poumons.",
						"spanish": "El corazón de las ruinas. El aire frío nos desgarraba los pulmones.",
						"vietnamese": "Trung tâm của di tích. Khí lạnh xé rách phổi.",
						"thai": "ใจกลางซากปรักหักพัง อากาศเย็นเฉียบฉีกปอด",
						"hindi": "खंडहर का हृदय। ठंडी हवा फेफड़ों को फाड़ रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "드디어 여기까지 왔어.",
						"english": "Finally, we're here.",
						"japanese": "ついにここまで来たか。",
						"chinese": "终于走到这里了。",
						"french": "Nous sommes enfin arrivés ici.",
						"spanish": "Finalmente, hemos llegado aquí.",
						"vietnamese": "Cuối cùng chúng ta cũng đến đây.",
						"thai": "ในที่สุดเราก็มาถึงที่นี่",
						"hindi": "आखिरकार हम यहाँ आ गए।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "이곳… 점점 더 선명해져요.",
						"english": "This place... it's becoming more vivid.",
						"japanese": "ここ…だんだんはっきりしてきます。",
						"chinese": "这里…越来越清晰了。",
						"french": "Cet endroit... ça devient de plus en plus clair.",
						"spanish": "Este lugar... se está volviendo más nítido.",
						"vietnamese": "Nơi này... ngày càng rõ ràng hơn.",
						"thai": "ที่นี่... ชัดเจนขึ้นเรื่อยๆ เลยค่ะ",
						"hindi": "यह जगह… और साफ़ होती जा रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรคะ?",
						"hindi": "क्या?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "희미하게 보이던 것들이… 마치, 살아있는 기억처럼.",
						"english": "The things that were faint... like living memories.",
						"japanese": "ぼんやり見えていたものが…まるで、生きている記憶のように。",
						"chinese": "那些模糊的东西…就像，活着的记忆一样。",
						"french": "Ce qui était flou... comme des souvenirs vivants.",
						"spanish": "Las cosas que se veían borrosas... como recuerdos vivos.",
						"vietnamese": "Những thứ mờ ảo... như những ký ức sống động.",
						"thai": "สิ่งที่ดูเลือนลาง... เหมือนกับความทรงจำที่มีชีวิต",
						"hindi": "जो चीजें धुंधली दिख रही थीं… मानो, जीती-जागती यादें हों।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 유적… 진실을 보는 자는 저주에 걸린대요.",
						"english": "This ruin... they say whoever sees the truth is cursed.",
						"japanese": "この遺跡…真実を見た者は呪われるそうです。",
						"chinese": "这片遗迹…据说看见真相的人会受到诅咒。",
						"french": "Cette ruine... on dit que celui qui voit la vérité est maudit.",
						"spanish": "Esta ruina... dicen que quien ve la verdad es maldecido.",
						"vietnamese": "Di tích này... người thấy sự thật sẽ bị nguyền rủa.",
						"thai": "ซากปรักหักพังนี้... ว่ากันว่าใครที่เห็นความจริงจะถูกสาป",
						"hindi": "इस खंडहर में… कहते हैं, सच देखने वाले पर शाप लगता है।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실? 그게 뭔데.",
						"english": "Truth? What is it?",
						"japanese": "真実？それって何？",
						"chinese": "真相？那是什么？",
						"french": "La vérité ? C'est quoi ?",
						"spanish": "¿Verdad? ¿Qué es eso?",
						"vietnamese": "Sự thật? Nó là gì?",
						"thai": "ความจริง? มันคืออะไร?",
						"hindi": "सच? वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "…모르겠어요. 하지만, 너무 슬픈 이야기 같아요.",
						"english": "...I don't know. But it feels like a very sad story.",
						"japanese": "…分かりません。でも、とても悲しい物語のようです。",
						"chinese": "…我不知道。但是，听起来像一个非常悲伤的故事。",
						"french": "...Je ne sais pas. Mais ça ressemble à une histoire très triste.",
						"spanish": "...No lo sé. Pero parece una historia muy triste.",
						"vietnamese": "...Tôi không biết. Nhưng nó có vẻ là một câu chuyện rất buồn.",
						"thai": "...ไม่ทราบค่ะ แต่ดูเหมือนจะเป็นเรื่องราวที่เศร้ามากเลย",
						"hindi": "...मुझे नहीं पता। पर यह बहुत दुखद कहानी लगती है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 흐느끼는 듯했다. 어딘가에서 자장가 소리가 들려오는 듯했다.",
						"english": "The cold wind seemed to sob. A lullaby seemed to drift from somewhere.",
						"japanese": "冷たい風がすすり泣くようだった。どこかから子守歌が聞こえてくるようだった。",
						"chinese": "寒风似乎在呜咽。仿佛有摇篮曲从某处传来。",
						"french": "Le vent froid semblait sangloter. Une berceuse semblait venir de quelque part.",
						"spanish": "El viento frío parecía sollozar. Una canción de cuna parecía venir de algún lugar.",
						"vietnamese": "Gió lạnh như đang thổn thức. Một khúc hát ru như vọng đến từ đâu đó.",
						"thai": "สายลมเย็นยะเยือกราวกับกำลังสะอื้น ราวกับมีเสียงเพลงกล่อมเด็กแว่วมาจากที่ไหนสักแห่ง",
						"hindi": "ठंडी हवा सिसकती हुई लग रही थी। कहीं से लोरी की आवाज़ आती हुई लग रही थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "저기… 저거 보여요? 작은 인형….",
						"english": "Over there... do you see that? A small doll...",
						"japanese": "あれ…あれ見えますか？小さな人形…。",
						"chinese": "那边…你看到那个了吗？一个小玩偶…。",
						"french": "Là-bas... vous voyez ça ? Une petite poupée...",
						"spanish": "Allí... ¿ves eso? Una pequeña muñeca...",
						"vietnamese": "Kia... anh/chị có thấy cái đó không? Một con búp bê nhỏ...",
						"thai": "ตรงนั้น... คุณเห็นนั่นไหม? ตุ๊กตาตัวเล็ก...",
						"hindi": "वहाँ… वह दिख रहा है क्या? एक छोटी गुड़िया…।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영이야. 피곤해서 그래.",
						"english": "It's a hallucination. You're just tired.",
						"japanese": "幻影だ。疲れているんだ。",
						"chinese": "那是幻觉。你只是太累了。",
						"french": "C'est une illusion. C'est la fatigue.",
						"spanish": "Es una ilusión. Estás cansado.",
						"vietnamese": "Đó là ảo ảnh thôi. Anh/chị mệt mỏi rồi.",
						"thai": "มันคือภาพหลอน คุณแค่เหนื่อย",
						"hindi": "वह एक भ्रम है। तुम बस थके हुए हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아뇨… 이건 너무 선명해요. 분명히 아이의 것이었는데…",
						"english": "No... it's too vivid. It was clearly a child's...",
						"japanese": "いいえ…これはあまりに鮮明です。あれは明らかに子供のものでしたが…。",
						"chinese": "不…这太清晰了。明明是孩子的东西…。",
						"french": "Non... c'est trop clair. C'était clairement à un enfant...",
						"spanish": "No... es demasiado nítido. Claramente era de un niño...",
						"vietnamese": "Không... nó quá rõ ràng. Rõ ràng là của một đứa trẻ...",
						"thai": "ไม่ค่ะ... มันชัดเจนเกินไป เห็นได้ชัดว่าเป็นของเด็ก...",
						"hindi": "नहीं… यह बहुत साफ़ है। वह यकीनन एक बच्चे का था…।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바닥에 떨어진 낡은 나무 조각. 이름이 희미하게 새겨져 있었다.",
						"english": "A worn wooden shard on the floor. A name faintly carved into it.",
						"japanese": "床に落ちた古い木の破片。名前がかすかに刻まれていた。",
						"chinese": "地板上掉落的旧木片。上面隐约刻着一个名字。",
						"french": "Un morceau de bois usé sur le sol. Un nom y était faiblement gravé.",
						"spanish": "Un trozo de madera gastado en el suelo. Un nombre débilmente grabado en él.",
						"vietnamese": "Một mảnh gỗ cũ nằm trên sàn. Một cái tên được khắc mờ trên đó.",
						"thai": "เศษไม้เก่าที่ตกลงบนพื้น มีชื่อสลักไว้อย่างเลือนราง",
						"hindi": "फर्श पर पड़ा एक पुराना लकड़ी का टुकड़ा। उस पर एक नाम धुंधला खुदा हुआ था।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제 정말… 돌이킬 수 없을 것 같아요.",
						"english": "Now it truly feels... irreversible.",
						"japanese": "もう本当に…引き返せないみたい。",
						"chinese": "现在真的…好像无法挽回了。",
						"french": "Maintenant, il semble vraiment… irréversible.",
						"spanish": "Ahora realmente… parece irreversible.",
						"vietnamese": "Giờ thì thật sự... không thể quay lại được nữa rồi.",
						"thai": "ตอนนี้มันรู้สึก… ย้อนกลับไปไม่ได้แล้ว",
						"hindi": "अब सच में... ऐसा लगता है कि इसे पलटा नहीं जा सकता।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "무슨 소리야? 거의 다 왔어.",
						"english": "What are you talking about? We're almost there.",
						"japanese": "何を言ってるんだ？もうすぐだ。",
						"chinese": "你说什么？我们快到了。",
						"french": "De quoi parles-tu ? Nous y sommes presque.",
						"spanish": "¿De qué hablas? Ya casi llegamos.",
						"vietnamese": "Cậu nói gì vậy? Chúng ta gần đến rồi.",
						"thai": "คุณกำลังพูดถึงอะไร? เราใกล้จะถึงแล้ว",
						"hindi": "क्या बकवास है? हम लगभग पहुँच गए हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요. 이 유적… 모든 게 비명이었어요. 슬픔으로 얼어붙은….",
						"english": "No. These ruins… everything was a scream. Frozen with sorrow…",
						"japanese": "違う。この遺跡…全てが悲鳴だった。悲しみで凍りついた…。",
						"chinese": "不。这些遗迹…一切都是尖叫。被悲伤冻结的…。",
						"french": "Non. Ces ruines… tout était un cri. Figé par la tristesse…",
						"spanish": "No. Estas ruinas… todo fue un grito. Congelado por la tristeza…",
						"vietnamese": "Không. Di tích này… mọi thứ đều là tiếng thét. Đóng băng trong đau khổ…",
						"thai": "ไม่ใช่. ซากปรักหักพังเหล่านี้… ทุกสิ่งคือเสียงกรีดร้อง แช่แข็งด้วยความโศกเศร้า…",
						"hindi": "नहीं। ये खंडहर… सब कुछ एक चीख थी। दुख से जमी हुई…।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "심장이 얼어붙는 듯한 비명이 들렸다. 모든 환영이 실체처럼 다가왔다.",
						"english": "A heart-freezing scream echoed. All illusions came to life.",
						"japanese": "心臓が凍りつくような悲鳴が響いた。全ての幻影が実体のように迫ってきた。",
						"chinese": "传来一声令人心寒的尖叫。所有的幻象都变得真实起来。",
						"french": "Un cri à glacer le sang résonna. Toutes les illusions prirent corps.",
						"spanish": "Un grito helado resonó. Todas las ilusiones cobraron vida.",
						"vietnamese": "Một tiếng thét lạnh tim vang lên. Mọi ảo ảnh đều trở nên như thật.",
						"thai": "เสียงกรีดร้องที่ทำให้หัวใจหยุดนิ่งดังขึ้น ภาพลวงตาทั้งหมดกลับกลายเป็นจริง",
						"hindi": "दिल को जमा देने वाली एक चीख सुनाई दी। सभी भ्रम हकीकत बन गए।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 얼음 인형이 우리를 응시했다.",
						"english": "The deepest part of the ruins. A gigantic ice doll stared at us.",
						"japanese": "遺跡の最も深い場所。巨大な氷の人形が私たちを見つめていた。",
						"chinese": "遗迹的最深处。一个巨大的冰人偶凝视着我们。",
						"french": "La partie la plus profonde des ruines. Une gigantesque poupée de glace nous fixa.",
						"spanish": "La parte más profunda de las ruinas. Una gigantesca muñeca de hielo nos miró fijamente.",
						"vietnamese": "Nơi sâu nhất của di tích. Một con búp bê băng khổng lồ nhìn chằm chằm vào chúng tôi.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง ตุ๊กตาน้ำแข็งขนาดยักษ์จ้องมองเรา",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक विशालकाय बर्फीली गुड़िया हमें घूर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "…누구세요. 제 아이에게… 가까이 오지 마세요.",
						"english": "…Who are you. Don't… come near my child.",
						"japanese": "…誰だ。私の子供に…近づくな。",
						"chinese": "…你是谁。不要…靠近我的孩子。",
						"french": "…Qui êtes-vous. Ne vous… approchez pas de mon enfant.",
						"spanish": "…¿Quiénes sois? No os… acerquéis a mi hijo.",
						"vietnamese": "…Ngươi là ai. Đừng… lại gần con ta.",
						"thai": "…พวกคุณเป็นใคร? อย่า… เข้าใกล้ลูกของฉัน",
						"hindi": "…तुम कौन हो। मेरे बच्चे के… पास मत आना।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게… 루멘인가?",
						"english": "Is that… Lumen?",
						"japanese": "あれが…ルーメンなのか？",
						"chinese": "那是…卢门吗？",
						"french": "C'est… Lumen ?",
						"spanish": "¿Es eso… Lumen?",
						"vietnamese": "Kia là… Lumen sao?",
						"thai": "นั่นคือ… ลูเมนหรือเปล่า?",
						"hindi": "क्या वह… ल्यूमेन है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…인형이 아니야. 저건….",
						"english": "…It's not a doll. That's…",
						"japanese": "…人形じゃない。あれは…。",
						"chinese": "…那不是人偶。那是…。",
						"french": "…Ce n'est pas une poupée. C'est…",
						"spanish": "…No es una muñeca. Eso es…",
						"vietnamese": "…Đó không phải là búp bê. Đó là…",
						"thai": "…มันไม่ใช่ตุ๊กตา นั่นคือ…",
						"hindi": "…यह गुड़िया नहीं है। वह है…।"
					},
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 잠을 방해하는 자들.",
						"english": "How dare you… disturb my slumber.",
						"japanese": "よくも…私の眠りを妨げる者たち。",
						"chinese": "竟敢…打扰我的沉睡。",
						"french": "Comment osez-vous… troubler mon sommeil.",
						"spanish": "¿Cómo os atrevéis… a perturbar mi sueño?",
						"vietnamese": "Dám… quấy rầy giấc ngủ của ta.",
						"thai": "บังอาจ… มารบกวนการหลับใหลของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरी नींद में खलल डालने की।"
					},
					"speaker": "boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 인형이 쓰러졌다. 그리고 숨겨진 진실이 드러났다.",
						"english": "The giant doll fell. And the hidden truth was revealed.",
						"japanese": "巨大な人形が倒れた。そして、隠された真実が明らかになった。",
						"chinese": "巨大人偶倒下了。隐藏的真相也随之揭露。",
						"french": "La poupée géante est tombée. La vérité cachée a été révélée.",
						"spanish": "La muñeca gigante cayó. Y la verdad oculta fue revelada.",
						"vietnamese": "Con búp bê khổng lồ đã ngã xuống. Và sự thật ẩn giấu đã được tiết lộ.",
						"thai": "ตุ๊กตายักษ์ล้มลง และความจริงที่ซ่อนอยู่ก็ถูกเปิดเผย",
						"hindi": "विशाल गुड़िया गिर गई। और छिपा हुआ सच सामने आ गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어머니는, 어디에 계세요? 제가, 제가 더 강해져서, 아이를… 아이를 찾아야 하는데…",
						"english": "...Mother, where are you? I, I need to get stronger, to find... to find my child...",
						"japanese": "「…お母さん、どこにいるの？私が、もっと強くなって、子どもを…子どもを見つけないと…」",
						"chinese": "“……妈妈，你在哪里？我，我必须变得更强，去寻找……寻找我的孩子……”",
						"french": "...Mère, où es-tu ? Je, je dois devenir plus forte, pour retrouver... retrouver mon enfant...",
						"spanish": "...Madre, ¿dónde estás? Yo, yo debo hacerme más fuerte para encontrar... encontrar a mi hijo...",
						"vietnamese": "...Mẹ ơi, mẹ đang ở đâu? Con, con phải mạnh mẽ hơn, để tìm... tìm đứa bé...",
						"thai": "...แม่คะ, แม่ไปอยู่ไหน? ฉัน, ฉันต้องแข็งแกร่งขึ้น เพื่อตามหา... ตามหาลูกของฉัน...",
						"hindi": "...माँ, तुम कहाँ हो? मुझे, मुझे और मज़बूत बनना होगा, बच्चे को... बच्चे को ढूंढना होगा..."
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "왜 이렇게, 추울까요…",
						"english": "Why is it so cold...?",
						"japanese": "「どうしてこんなに、寒いの…？」",
						"chinese": "“为什么会这么冷……”",
						"french": "Pourquoi fait-il si froid...?",
						"spanish": "¿Por qué hace tanto frío...?",
						"vietnamese": "Sao mà, lạnh thế này...?",
						"thai": "ทำไมมันถึงได้หนาวขนาดนี้คะ...",
						"hindi": "इतनी ठंड क्यों है...?"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아이의… 아이의 기억이었어…!",
						"english": "It was the child's... the child's memory...!",
						"japanese": "「子どもの…子どもの記憶だった…！」",
						"chinese": "“是孩子的……孩子的记忆……！”",
						"french": "C'était la mémoire de l'enfant... de l'enfant...!",
						"spanish": "¡Era la memoria del niño... del niño...!",
						"vietnamese": "Là ký ức của đứa bé... của đứa bé...!",
						"thai": "มันเป็นความทรงจำของเด็ก... ของเด็ก...!",
						"hindi": "यह बच्चे की... बच्चे की याददाश्त थी...!"
					},
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…우리가, 뭘 한 거지.",
						"english": "...What have we done?",
						"japanese": "「…私たちは、何をしたんだ。」",
						"chinese": "“……我们，都做了些什么。”",
						"french": "...Qu'avons-nous fait ?",
						"spanish": "...¿Qué hemos hecho?",
						"vietnamese": "...Chúng ta, đã làm gì vậy.",
						"thai": "...พวกเราทำอะไรลงไป...",
						"hindi": "...हमने क्या किया?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "승리는 허무했다. 남은 것은 비극적인 진실뿐이었다.",
						"english": "The victory was hollow. All that remained was a tragic truth.",
						"japanese": "勝利は虚しかった。残されたのは、悲劇的な真実だけだった。",
						"chinese": "胜利是虚无的。剩下的只有悲剧性的真相。",
						"french": "La victoire était vaine. Il ne restait qu'une vérité tragique.",
						"spanish": "La victoria fue vana. Solo quedaba una trágica verdad.",
						"vietnamese": "Chiến thắng thật trống rỗng. Tất cả những gì còn lại là một sự thật bi thảm.",
						"thai": "ชัยชนะช่างว่างเปล่า สิ่งที่เหลืออยู่คือความจริงอันน่าเศร้า",
						"hindi": "जीत खोखली थी। जो बचा था वह एक दुखद सच्चाई थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "인형의 품에서 거대한 얼음 결정이 뿜어져 나왔다.",
						"english": "A colossal ice crystal erupted from the doll's embrace.",
						"japanese": "人形の懐から巨大な氷の結晶が噴き出した。",
						"chinese": "巨大人偶的怀中喷涌出巨大的冰晶。",
						"french": "Un cristal de glace colossal a jailli de l'étreinte de la poupée.",
						"spanish": "Un cristal de hielo colosal brotó del abrazo de la muñeca.",
						"vietnamese": "Một tinh thể băng khổng lồ phun ra từ lòng con búp bê.",
						"thai": "คริสตัลน้ำแข็งขนาดยักษ์พุ่งออกมาจากอ้อมกอดของตุ๊กตา",
						"hindi": "गुड़िया के आलिंगन से एक विशाल बर्फीला क्रिस्टल फूट पड़ा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누구도… 내 아이를… 데려갈 수 없어.",
						"english": "No one... can take my child...",
						"japanese": "「誰も…私の子どもを…連れて行かせない。」",
						"chinese": "“谁也……不能带走我的孩子……”",
						"french": "Personne... ne peut prendre mon enfant...",
						"spanish": "Nadie... puede llevarse a mi hijo...",
						"vietnamese": "Không ai... có thể đưa con của ta đi...",
						"thai": "ไม่มีใคร... สามารถพาลูกของฉันไปได้...",
						"hindi": "कोई नहीं... मेरे बच्चे को... ले जा सकता।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 멈출 수 없는 슬픔이에요.",
						"english": "This is... an unstoppable sorrow.",
						"japanese": "「これは…止められない悲しみだ。」",
						"chinese": "“这是……无法阻止的悲伤。”",
						"french": "C'est... une tristesse inarrêtable.",
						"spanish": "Esto es... una tristeza imparable.",
						"vietnamese": "Đây là... một nỗi buồn không thể ngăn cản.",
						"thai": "นี่คือ... ความโศกเศร้าที่ไม่อาจหยุดยั้งได้",
						"hindi": "यह... एक न रुकने वाला दुख है।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은… 우리가 밝혀야 해.",
						"english": "...It's not over yet. The truth... we must reveal it.",
						"japanese": "「…まだ終わっていない。真実は…私たちが暴かなければならない。」",
						"chinese": "“……还没结束。真相……必须由我们来揭露。”",
						"french": "...Ce n'est pas encore fini. La vérité... nous devons la révéler.",
						"spanish": "...Aún no ha terminado. La verdad... debemos revelarla.",
						"vietnamese": "...Chưa kết thúc đâu. Sự thật... chúng ta phải tiết lộ nó.",
						"thai": "...ยังไม่จบหรอก ความจริง... เราต้องเปิดเผยมัน",
						"hindi": "...अभी खत्म नहीं हुआ है। सच्चाई... हमें इसे उजागर करना होगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"루멘의 울음이 멎자, 유적은 다시 얼어붙은 침묵 속으로 잠겼다.",
			"우리가 찾던 보물은 없었다. 오직, 가슴 시린 비극의 흔적만이.",
			"승리했지만, 얻은 것은 절망뿐이었다.",
			"차가운 눈보라 속, 우리는 길을 잃은 듯 서 있었다."
		],
		"english": [
			"As Lumen's cries ceased, the ruins once again fell into frozen silence.",
			"There was no treasure we sought. Only the poignant traces of tragedy.",
			"We triumphed, but all we gained was despair.",
			"In the cold blizzard, we stood as if lost."
		],
		"japanese": [
			"ルーメンの叫びが止むと、遺跡は再び凍てついた沈黙に包まれた。",
			"私たちが求めた宝はなかった。ただ、胸締め付けられるような悲劇の痕跡だけが。",
			"勝利したが、得たのは絶望だけだった。",
			"冷たい吹雪の中、私たちは途方に暮れたように立っていた。"
		],
		"chinese": [
			"卢门哭声止息，遗迹重归冰冷沉寂。",
			"我们所寻的宝藏不复存在。唯余，令人心碎的悲剧痕迹。",
			"虽胜，所得唯有绝望。",
			"在冰冷的暴风雪中，我们仿若迷途般伫立。"
		],
		"french": [
			"Quand les cris de Lumen cessèrent, les ruines retombèrent dans un silence gelé.",
			"Il n'y avait aucun trésor que nous cherchions. Seulement les traces poignantes d'une tragédie.",
			"Nous avons triomphé, mais tout ce que nous avons gagné fut le désespoir.",
			"Dans la froide tempête de neige, nous nous tenions là, comme perdus."
		],
		"spanish": [
			"Cuando los gritos de Lumen cesaron, las ruinas volvieron a sumergirse en un silencio helado.",
			"No había ningún tesoro que buscáramos. Solo las conmovedoras huellas de una tragedia.",
			"Triunfamos, pero todo lo que obtuvimos fue desesperación.",
			"En la fría tormenta de nieve, nos quedamos de pie como perdidos."
		],
		"vietnamese": [
			"Khi tiếng khóc của Lumen ngừng lại, di tích lại chìm vào sự im lặng đóng băng.",
			"Không có kho báu nào chúng ta tìm kiếm. Chỉ còn lại những dấu vết bi thương làm nhói lòng.",
			"Chúng ta đã thắng, nhưng tất cả những gì chúng ta nhận được chỉ là sự tuyệt vọng.",
			"Trong cơn bão tuyết lạnh giá, chúng tôi đứng đó như lạc lối."
		],
		"thai": [
			"เมื่อเสียงครวญของลูเมนเงียบลง ซากปรักหักพังก็กลับคืนสู่ความเงียบงันที่เยือกแข็งอีกครั้ง",
			"ไม่มีสมบัติที่เราตามหา มีเพียงร่องรอยของโศกนาฏกรรมที่บาดลึกในใจ",
			"เราชนะ แต่สิ่งที่เราได้มาคือความสิ้นหวังเท่านั้น",
			"ท่ามกลางพายุหิมะอันหนาวเหน็บ เรายืนอยู่ราวกับหลงทาง"
		],
		"hindi": [
			"जब ल्यूमेन का रोना रुका, तो खंडहर फिर से जमी हुई चुप्पी में डूब गए।",
			"हमने जो खजाना ढूंढा, वह नहीं था। केवल, दिल को चीर देने वाली त्रासदी के निशान ही।",
			"हम जीते, पर जो मिला, वह केवल निराशा थी।",
			"ठंडी बर्फीली हवा में, हम खोए हुए से खड़े थे।"
		]
	},
	"prologue": {
		"korean": [
			"얼어붙은 유적. 그 끝에 다다랐다.",
			"수많은 환영과 비극적인 소문이 우리를 집어삼켰다.",
			"이제 남은 건, 이 모든 고통의 근원.",
			"혹은, 또 다른 비극의 시작일 뿐."
		],
		"english": [
			"Frozen ruins. We reached their end.",
			"Countless illusions and tragic rumors consumed us.",
			"All that remains is the source of all this suffering.",
			"Or, merely the beginning of another tragedy."
		],
		"japanese": [
			"凍てついた遺跡。その果てに辿り着いた。",
			"無数の幻影と悲劇的な噂が、私たちを飲み込んだ。",
			"残されたのは、この全ての苦痛の根源だけ。",
			"あるいは、また別の悲劇の始まりに過ぎない。"
		],
		"chinese": [
			"冰冻的遗迹。已至尽头。",
			"无数幻象与悲惨传闻将我们吞噬。",
			"仅存的，是这所有痛苦的根源。",
			"亦或，只是另一场悲剧的开端。"
		],
		"french": [
			"Ruines gelées. Nous avons atteint leur fin.",
			"D'innombrables illusions et rumeurs tragiques nous ont consumés.",
			"Il ne reste que la source de toute cette souffrance.",
			"Ou, simplement le début d'une autre tragédie."
		],
		"spanish": [
			"Ruinas heladas. Hemos llegado a su fin.",
			"Incontables ilusiones y rumores trágicos nos devoraron.",
			"Ahora solo queda la fuente de todo este sufrimiento.",
			"O, simplemente el comienzo de otra tragedia."
		],
		"vietnamese": [
			"Di tích băng giá. Đã đến cuối cùng.",
			"Vô số ảo ảnh và tin đồn bi thảm đã nuốt chửng chúng ta.",
			"Giờ chỉ còn lại nguồn gốc của mọi đau khổ này.",
			"Hoặc, chỉ là khởi đầu của một bi kịch khác."
		],
		"thai": [
			"ซากปรักหักพังที่เยือกแข็ง เรามาถึงจุดสิ้นสุดแล้ว",
			"ภาพหลอนนับไม่ถ้วนและข่าวลือโศกนาฏกรรมกลืนกินเรา",
			"สิ่งที่เหลืออยู่คือต้นกำเนิดของความทุกข์ทรมานทั้งหมดนี้",
			"หรือเป็นเพียงจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่"
		],
		"hindi": [
			"जमी हुई खंडहर। हम उसके अंत तक पहुँच गए।",
			"अनगिनत भ्रम और दुखद अफवाहें हमें निगल गईं।",
			"अब बचा है, इस सभी पीड़ा का मूल।",
			"या, बस एक और त्रासदी की शुरुआत।"
		]
	}
} as const;
