export const scenario_modern_minsu_1_01 = {
	"scenario_id": "modern_minsu_1_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
						"korean": "아련한 햇살이 가득한, 잊혀진 마을의 풍경이 펼쳐졌다. 모든 것이 따뜻하고 평화로웠다.",
						"english": "A forgotten village, bathed in soft sunlight, unfolded. Everything felt warm and peaceful.",
						"japanese": "柔らかな日差しに満ちた忘れられた村の風景が広がった。すべてが暖かく、穏やかだった。",
						"chinese": "一个充满朦胧阳光的被遗忘的村庄的景象展开了。一切都温暖而宁静。",
						"french": "Un village oublié, baigné d'un soleil doux, se dévoilait. Tout était chaud et paisible.",
						"spanish": "Un paisaje de un pueblo olvidado, lleno de una luz tenue, se desplegó. Todo era cálido y pacífico.",
						"vietnamese": "Một khung cảnh làng quê bị lãng quên, ngập tràn nắng dịu, hiện ra. Mọi thứ đều ấm áp và bình yên.",
						"thai": "ภาพหมู่บ้านที่ถูกลืมเลือน สว่างไสวด้วยแสงแดดอ่อนๆ คลี่คลายออก ทุกสิ่งอบอุ่นและสงบสุข",
						"hindi": "एक भूले हुए गाँव का दृश्य, मंद धूप से नहाया हुआ, सामने आया। सब कुछ गर्म और शांतिपूर्ण था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…여기가 우리가 찾던 곳인가?",
						"english": "...Is this the place we've been looking for?",
						"japanese": "…ここが私たちが探していた場所なのか？",
						"chinese": "…这就是我们一直在找的地方吗？",
						"french": "...C'est ça l'endroit que nous cherchions ?",
						"spanish": "¿...Es este el lugar que estábamos buscando?",
						"vietnamese": "...Đây có phải là nơi chúng ta đang tìm kiếm không?",
						"thai": "...ที่นี่คือที่เรากำลังตามหาหรือเปล่า?",
						"hindi": "...क्या यही वह जगह है जिसकी हम तलाश कर रहे थे?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…이 냄새. 할머니가 끓여주시던 수프 냄새 같아.",
						"english": "...This scent. It's like the soup Grandma used to make.",
						"japanese": "…この匂い。おばあちゃんが作ってくれたスープの匂いみたいだ。",
						"chinese": "…这个味道。好像奶奶做的汤的味道。",
						"french": "...Cette odeur. On dirait la soupe que ma grand-mère me préparait.",
						"spanish": "...Este olor. Es como la sopa que cocinaba la abuela.",
						"vietnamese": "...Mùi này. Giống mùi súp bà ngoại hay nấu.",
						"thai": "...กลิ่นนี้ กลิ่นเหมือนซุปที่คุณยายเคยทำให้เลย",
						"hindi": "...यह गंध। यह दादी माँ के बनाए सूप की गंध जैसी है।"
					},
					"emotion": "base",
					"speaker": "max",
					"type": "speech"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "너무 따뜻해… 진짜 같아.",
						"english": "So warm... it feels real.",
						"japanese": "すごく暖かい…本物みたいだ。",
						"chinese": "好温暖…感觉好真实。",
						"french": "Tellement chaud... ça semble réel.",
						"spanish": "Tan cálido... parece real.",
						"vietnamese": "Ấm áp quá... cứ như thật vậy.",
						"thai": "อบอุ่นมาก... เหมือนจริงเลย",
						"hindi": "बहुत गर्म... यह असली लगता है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "맥스의 눈빛은 환상에 완전히 사로잡힌 듯했다.",
						"english": "Max's eyes seemed completely captivated by the illusion.",
						"japanese": "マックスの目は完全に幻に魅せられているようだった。",
						"chinese": "麦克斯的眼神似乎完全被幻象所吸引。",
						"french": "Le regard de Max semblait entièrement captivé par l'illusion.",
						"spanish": "Los ojos de Max parecían completamente cautivados por la ilusión.",
						"vietnamese": "Ánh mắt của Max dường như hoàn toàn bị cuốn hút vào ảo ảnh.",
						"thai": "แววตาของแม็กซ์ดูเหมือนถูกมนต์สะกดโดยภาพลวงตาอย่างสมบูรณ์",
						"hindi": "मैक्स की आँखें पूरी तरह से भ्रम में फँसी हुई लग रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…어? 방금… 풍경이 흔들렸나?",
						"english": "...Huh? Did the scenery just... waver?",
						"japanese": "…あれ？今…景色が揺れたか？",
						"chinese": "…嗯？刚才…景色晃动了一下吗？",
						"french": "...Hein ? Le paysage vient de... trembler ?",
						"spanish": "...¿Eh? ¿Acaba de... temblar el paisaje?",
						"vietnamese": "...Ơ? Vừa nãy... cảnh vật có rung chuyển không?",
						"thai": "...หือ? เมื่อกี้... ทิวทัศน์สั่นไหวเหรอ?",
						"hindi": "...क्या? क्या अभी... दृश्य हिल गया?"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 아무렇지도 않은데.",
						"english": "What are you talking about? I'm fine.",
						"japanese": "何を言ってるんだ？何ともないよ。",
						"chinese": "你说什么？我没事。",
						"french": "De quoi tu parles ? Je vais bien.",
						"spanish": "¿De qué hablas? Estoy bien.",
						"vietnamese": "Cậu nói gì vậy? Tớ không sao.",
						"thai": "พูดอะไรน่ะ? ฉันไม่เป็นอะไรเลย.",
						"hindi": "क्या बात कर रहे हो? मुझे कुछ नहीं हुआ।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "모두가 웃고 있어… 잊었던 시간인데, 이렇게 생생하게 기억나다니.",
						"english": "Everyone's laughing... I'd forgotten this moment, yet it feels so vivid now.",
						"japanese": "みんなが笑ってる…忘れてた時間なのに、こんなにも鮮明に思い出せるなんて。",
						"chinese": "大家都在笑… 这是我遗忘的时光，此刻却如此生动地浮现。",
						"french": "Tout le monde rit... J'avais oublié ce moment, et pourtant, il est si vif maintenant.",
						"spanish": "Todos están riendo... Había olvidado este momento, y sin embargo, lo recuerdo tan vívidamente ahora.",
						"vietnamese": "Mọi người đang cười... Một khoảnh khắc đã quên lãng, vậy mà giờ lại hiện ra rõ mồn một.",
						"thai": "ทุกคนกำลังหัวเราะ... เป็นช่วงเวลาที่ฉันลืมไปแล้ว แต่กลับจำได้ชัดเจนขนาดนี้.",
						"hindi": "सब हंस रहे हैं… यह एक भूला हुआ पल था, फिर भी अब इतना जीवंत याद आ रहा है।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "맥스, 너무 빠져들지 마. 이건 환상일 뿐이야.",
						"english": "Max, don't get too lost in it. It's just an illusion.",
						"japanese": "マックス、深入りしすぎないで。これはただの幻想だよ。",
						"chinese": "麦克斯，别陷得太深。这只是一场幻觉。",
						"french": "Max, ne te perds pas trop. Ce n'est qu'une illusion.",
						"spanish": "Max, no te dejes llevar demasiado. Esto es solo una ilusión.",
						"vietnamese": "Max, đừng chìm đắm quá. Đây chỉ là một ảo ảnh thôi.",
						"thai": "แม็กซ์ อย่าหลงใหลไปกับมันมากเกินไป นี่เป็นแค่ภาพลวงตาเท่านั้น.",
						"hindi": "मैक्स, इसमें ज़्यादा मत उलझो। यह सिर्फ़ एक भ्रम है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니… 진짜 같아. 여기서 영원히 머물고 싶어.",
						"english": "No... it feels real. I want to stay here forever.",
						"japanese": "いや…本物みたいだ。ここに永遠にいたい。",
						"chinese": "不… 这感觉是真的。我想永远留在这里。",
						"french": "Non... ça a l'air réel. Je veux rester ici pour toujours.",
						"spanish": "No... parece real. Quiero quedarme aquí para siempre.",
						"vietnamese": "Không... nó giống như thật vậy. Tớ muốn ở đây mãi mãi.",
						"thai": "ไม่นะ... มันรู้สึกเหมือนจริงเลย ฉันอยากอยู่ที่นี่ตลอดไป.",
						"hindi": "नहीं… यह सच लगता है। मैं हमेशा के लिए यहीं रहना चाहता हूँ।"
					},
					"emotion": "happy",
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맥스는 주변 풍경 속에서 문득 미세한 노이즈를 포착했다. 그러나 이내 기억의 물결에 휩쓸려 사라졌다.",
						"english": "Suddenly, Max noticed a faint static amidst the scenery. But it was soon swept away by the wave of memories.",
						"japanese": "マックスは周囲の風景の中に微かなノイズを捉えた。しかし、それはすぐに記憶の波に飲み込まれて消えた。",
						"chinese": "麦克斯在周围的风景中突然捕捉到了一丝微弱的噪音。然而，它很快就被记忆的洪流所吞噬，消失不见。",
						"french": "Soudain, Max perçut un léger bruit dans le paysage. Mais il fut rapidement emporté par la vague de souvenirs.",
						"spanish": "De repente, Max detectó un ruido sutil en el paisaje circundante. Sin embargo, pronto fue arrastrado por la ola de recuerdos y desapareció.",
						"vietnamese": "Max chợt nhận ra một tiếng nhiễu nhẹ trong khung cảnh xung quanh. Nhưng nó nhanh chóng bị cuốn trôi bởi dòng chảy ký ức.",
						"thai": "ทันใดนั้น แม็กซ์ก็สังเกตเห็นเสียงรบกวนเล็กน้อยท่ามกลางทิวทัศน์รอบตัว แต่ไม่นานมันก็ถูกพัดพาหายไปในกระแสคลื่นแห่งความทรงจำ.",
						"hindi": "मैक्स ने अचानक आसपास के दृश्यों में एक हल्की सी गड़बड़ महसूस की। लेकिन जल्द ही वह यादों की लहर में बह गई और गायब हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
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
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "내가 원했던 모든 게 여기 있어. …왜 우리가 떠나야 하는 거지?",
						"english": "Everything I ever wanted is here. ...Why must we leave?",
						"japanese": "私が望んだすべてがここにある。…なぜ、私たちは去らなければならないの？",
						"chinese": "我想要的一切都在这里。…我们为什么要离开？",
						"french": "Tout ce que j'ai toujours voulu est ici. ...Pourquoi devons-nous partir ?",
						"spanish": "Todo lo que siempre quise está aquí. ...¿Por qué tenemos que irnos?",
						"vietnamese": "Mọi thứ tớ muốn đều ở đây. ...Tại sao chúng ta phải rời đi chứ?",
						"thai": "ทุกสิ่งที่ฉันต้องการอยู่ที่นี่แล้ว... ทำไมเราต้องไปล่ะ?",
						"hindi": "जो कुछ भी मैं चाहता था, सब यहाँ है। ...हम क्यों जाएं?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맥스! 정신 차려! 우리는 진실을 찾으러 온 거야.",
						"english": "Max! Snap out of it! We came here to find the truth.",
						"japanese": "マックス！しっかりして！私たちは真実を見つけに来たんだ。",
						"chinese": "麦克斯！清醒点！我们是为了寻找真相才来的。",
						"french": "Max ! Reprends-toi ! Nous sommes venus ici pour trouver la vérité.",
						"spanish": "¡Max! ¡Espabila! Hemos venido a encontrar la verdad.",
						"vietnamese": "Max! Tỉnh táo lại đi! Chúng ta đến đây để tìm sự thật mà.",
						"thai": "แม็กซ์! ตั้งสติหน่อย! เรามาที่นี่เพื่อตามหาความจริงนะ.",
						"hindi": "मैक्स! होश में आओ! हम सच ढूंढने आए हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실…? 지금 이게 진실이 아니라고? 이 행복이?",
						"english": "Truth...? This isn't the truth? This happiness isn't?",
						"japanese": "真実…？これが真実じゃないって？この幸せが？",
						"chinese": "真相…？这难道不是真相吗？这份幸福不是吗？",
						"french": "La vérité...? Ce n'est pas la vérité ? Ce bonheur ne l'est pas ?",
						"spanish": "¿Verdad...? ¿Esto no es la verdad? ¿Esta felicidad no lo es?",
						"vietnamese": "Sự thật...? Bây giờ đây không phải là sự thật sao? Hạnh phúc này ư?",
						"thai": "ความจริง...? นี่ไม่ใช่ความจริงเหรอ? ความสุขนี้ไม่ใช่เหรอ?",
						"hindi": "सच…? क्या यह सच नहीं है? यह खुशी नहीं है?"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…근데, 저기 저 나무… 잎사귀가 똑같은 모양으로 계속 반복돼. 이상하지 않아?",
						"english": "...But that tree over there... the leaves keep repeating the same shape. Isn't that strange?",
						"japanese": "…でも、あそこの木…葉っぱが同じ形でずっと繰り返されてる。おかしくない？",
						"chinese": "…但是，那边的树… 叶子都以相同的形状不断重复。这不奇怪吗？",
						"french": "...Mais cet arbre là-bas... les feuilles se répètent à l'identique. C'est pas bizarre ?",
						"spanish": "...Pero ese árbol de allí... las hojas se repiten con la misma forma. ¿No es extraño?",
						"vietnamese": "...Nhưng cái cây đằng kia... lá cứ lặp lại cùng một hình dạng. Không lạ sao?",
						"thai": "...แต่ต้นไม้นั่น... ใบไม้มีรูปร่างเดียวกันซ้ำไปซ้ำมา ไม่แปลกเหรอ?",
						"hindi": "…लेकिन वह पेड़… पत्ते एक ही आकार में बार-बार दोहराए जा रहे हैं। अजीब नहीं है क्या?"
					},
					"type": "speech",
					"speaker": "max"
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
						2
					],
					"speaker": "max",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "어린 시절, 모두와 함께 소풍 갔던 언덕이야! 이렇게 선명할 수가…",
						"english": "It's the hill where we all went on a picnic in childhood! I can't believe how vivid it is...",
						"japanese": "子供の頃、みんなでピクニックに行った丘だ！こんなに鮮明だなんて…",
						"chinese": "这是小时候我们大家一起去野餐的山丘！竟然这么清晰…",
						"french": "C'est la colline où nous sommes allés pique-niquer quand j'étais enfant ! C'est incroyable comme c'est net...",
						"spanish": "¡Es la colina donde fuimos de picnic de niños! No puedo creer lo vívida que es...",
						"vietnamese": "Đây là ngọn đồi mà hồi bé chúng ta cùng đi dã ngoại! Sao mà rõ ràng đến thế...",
						"thai": "นี่คือเนินเขาที่เราไปปิกนิกด้วยกันตอนเด็กๆ! ช่างชัดเจนเหลือเกิน...",
						"hindi": "यह वही पहाड़ी है जहाँ हम बचपन में सब साथ पिकनिक पर गए थे! यह कितनी स्पष्ट है, विश्वास नहीं होता…"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "맥스! 제발! 여기가 어디라고 생각하는 거야!",
						"english": "Max! Please! Where do you think you are!",
						"japanese": "マックス！お願い！ここをどこだと思ってるの！",
						"chinese": "麦克斯！拜托！你以为这里是哪儿啊！",
						"french": "Max ! S'il te plaît ! Où crois-tu que tu es !",
						"spanish": "¡Max! ¡Por favor! ¿Dónde crees que estás?",
						"vietnamese": "Max! Làm ơn! Cậu nghĩ đây là đâu vậy hả!",
						"thai": "แม็กซ์! ได้โปรด! นายคิดว่าที่นี่คือที่ไหนกันแน่!",
						"hindi": "मैक्स! प्लीज़! तुम कहाँ सोचते हो कि तुम हो!"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "몰라… 그냥… 행복해. 근데… 저기 멀리 보이는 하늘에…",
						"english": "I don't know... I'm just... happy. But... in the sky far away...",
						"japanese": "分からない…ただ…幸せだ。でも…遠くに見える空に…",
						"chinese": "不知道……只是……很幸福。但是……在远处的天空中……",
						"french": "Je ne sais pas... Je suis juste... heureux. Mais... dans le ciel lointain...",
						"spanish": "No sé... solo... soy feliz. Pero... en el cielo a lo lejos...",
						"vietnamese": "Không biết... Chỉ là... hạnh phúc thôi. Nhưng... trên bầu trời xa xăm kia...",
						"thai": "ไม่รู้สิ... แค่... มีความสุข. แต่... บนท้องฟ้าไกลๆ นั่น...",
						"hindi": "मुझे नहीं पता... बस... खुश हूँ। लेकिन... दूर आसमान में..."
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "먹구름이 아주 잠깐… 일렁였어. 기분 탓인가…?",
						"english": "Dark clouds... flickered for a moment. Is it just my imagination...?",
						"japanese": "暗い雲が…ほんの一瞬…揺らめいた。気のせいかな…？",
						"chinese": "乌云…只是短暂地…翻涌了一下。是我的错觉吗……？",
						"french": "Des nuages sombres... ont frémi un instant. Est-ce mon imagination...?",
						"spanish": "Nubes oscuras... parpadearon por un momento. ¿Será mi imaginación...?",
						"vietnamese": "Mây đen... chợt lóe lên một chút... Là do mình cảm thấy vậy thôi sao...?",
						"thai": "เมฆดำ... สั่นไหวเพียงชั่วครู่... ฉันคิดไปเองรึเปล่า...?",
						"hindi": "काले बादल... पल भर के लिए... लहराए। क्या यह सिर्फ मेरा वहम है...?"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은… 환상은 영원해. 너희가 부순 건, 껍데기일 뿐…",
						"english": "Fools... Illusions are eternal. What you broke was merely a shell...",
						"japanese": "愚かな…幻想は永遠だ。お前たちが壊したのは、ただの抜け殻に過ぎない…",
						"chinese": "愚蠢……幻象是永恒的。你们所摧毁的，只不过是具空壳……",
						"french": "Insensés... Les illusions sont éternelles. Ce que vous avez brisé n'était qu'une coquille...",
						"spanish": "Necios... Las ilusiones son eternas. Lo que rompisteis fue solo una cáscara...",
						"vietnamese": "Đồ ngu ngốc... Ảo ảnh là vĩnh cửu. Cái các ngươi phá hủy, chỉ là một cái vỏ rỗng...",
						"thai": "เจ้าพวกโง่... ภาพลวงตาเป็นนิรันดร์. สิ่งที่พวกเจ้าทำลายเป็นเพียงเปลือกนอก...",
						"hindi": "मूर्खों... भ्रम शाश्वत हैं। तुमने जो तोड़ा, वह सिर्फ एक खोल था..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "껍데기라고? 감히 우리를 속여!",
						"english": "A shell? How dare you deceive us!",
						"japanese": "抜け殻だと？よくも我々を欺いたな！",
						"chinese": "空壳？竟敢欺骗我们！",
						"french": "Une coquille ? Comment oses-tu nous tromper !",
						"spanish": "¿Una cáscara? ¡Cómo osas engañarnos!",
						"vietnamese": "Vỏ rỗng ư? Ngươi dám lừa dối chúng ta sao!",
						"thai": "เปลือกนอกงั้นหรือ? กล้าดียังไงมาหลอกลวงพวกเรา!",
						"hindi": "एक खोल? तुम्हारी हिम्मत कैसे हुई हमें धोखा देने की!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "…깨달았어. 행복하다고 믿었을 뿐이라는 걸.",
						"english": "...I realized. I only believed I was happy.",
						"japanese": "…気づいたわ。幸せだと、信じ込んでいただけだと。",
						"chinese": "……我明白了。我只是自以为幸福罢了。",
						"french": "...J'ai réalisé. Que je ne faisais que croire être heureux.",
						"spanish": "...Me di cuenta. Solo creía ser feliz.",
						"vietnamese": "...Ta đã nhận ra. Chỉ là ta cứ ngỡ mình hạnh phúc mà thôi.",
						"thai": "...ฉันตระหนักได้แล้ว. ว่าฉันแค่หลงเชื่อว่ามีความสุขเท่านั้นเอง.",
						"hindi": "...मुझे एहसास हुआ। मैं बस खुश होने का दिखावा कर रहा था。"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억의 관리자는 사라졌다. 하지만 파괴된 환상 너머에는 또 다른 문이 열렸다. 진실은, 더욱 복잡해질 뿐이었다.",
						"english": "The Memory Keeper vanished. But beyond the shattered illusion, another door opened. The truth only grew more complex.",
						"japanese": "記憶の管理者は消え去った。だが、破壊された幻の向こうには、別の扉が開いていた。真実は、より複雑になるばかりだった。",
						"chinese": "记忆的管理者消失了。然而，在破碎的幻象之后，另一扇门打开了。真相只会变得更加复杂。",
						"french": "Le Gardien des Souvenirs a disparu. Mais au-delà de l'illusion brisée, une autre porte s'est ouverte. La vérité n'allait faire que se complexifier.",
						"spanish": "El Guardián de la Memoria desapareció. Pero más allá de la ilusión destruida, otra puerta se abrió. La verdad solo se volvería más compleja.",
						"vietnamese": "Người giữ ký ức đã biến mất. Nhưng sau ảo ảnh tan vỡ, một cánh cửa khác đã mở ra. Sự thật chỉ trở nên phức tạp hơn mà thôi.",
						"thai": "ผู้พิทักษ์ความทรงจำได้หายไปแล้ว. แต่เบื้องหลังภาพลวงตาที่แตกสลาย, ประตูอีกบานได้เปิดออก. ความจริงก็ยิ่งซับซ้อนขึ้นเท่านั้น.",
						"hindi": "स्मृति का रक्षक गायब हो गया। लेकिन टूटे हुए भ्रम के पार, एक और दरवाजा खुल गया। सच्चाई और भी जटिल होती जा रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "기억의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest part of memory. A colossal shadow appeared.",
						"japanese": "記憶の最も深い場所。巨大な影が現れた。",
						"chinese": "记忆最深处。一道巨大的黑影出现了。",
						"french": "La partie la plus profonde de la mémoire. Une ombre colossale apparut.",
						"spanish": "La parte más profunda de la memoria. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu thẳm nhất của ký ức. Một bóng đen khổng lồ hiện ra.",
						"thai": "ส่วนที่ลึกที่สุดของความทรงจำ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "स्मृति के सबसे गहरे हिस्से में। एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왔군. 아름다운 기억 속에서, 진실을 찾는 어리석은 자들이여.",
						"english": "...You've come. You fools who seek truth within beautiful memories.",
						"japanese": "…来たか。美しい記憶の中で、真実を探す愚かな者たちよ。",
						"chinese": "……来了吗。在美好记忆中，寻找真相的愚蠢之人啊。",
						"french": "...Vous êtes venus. Insensés qui cherchez la vérité dans de beaux souvenirs.",
						"spanish": "...Habéis venido. Necios que buscáis la verdad en bellos recuerdos.",
						"vietnamese": "...Các ngươi đã đến. Hỡi những kẻ ngu ngốc đi tìm sự thật trong ký ức đẹp đẽ.",
						"thai": "...มาแล้วสินะ. พวกเจ้าผู้โง่เขลาที่แสวงหาความจริงในความทรงจำอันงดงาม",
						"hindi": "तुम आ गए। तुम मूर्ख जो सुंदर यादों में सच तलाशते हो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… 이 환상을 만든 장본인이군!",
						"english": "So you... are the one who created this illusion!",
						"japanese": "あなたが…この幻想を作り出した張本人だな！",
						"chinese": "你就是……创造这个幻象的罪魁祸首！",
						"french": "C'est toi... l'auteur de cette illusion !",
						"spanish": "¡Así que tú... eres quien creó esta ilusión!",
						"vietnamese": "Vậy ra ngươi... chính là kẻ đã tạo ra ảo ảnh này!",
						"thai": "แก... คือผู้สร้างภาพลวงตานี้!",
						"hindi": "तो तुम... इस भ्रम को बनाने वाले हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "아름다운… 환상…? 하지만… {random_boss}, 당신의 모습이…",
						"english": "Beautiful... illusion...? But... {random_boss}, your form...",
						"japanese": "美しい…幻想…？しかし…{random_boss}、あなたの姿が…",
						"chinese": "美丽的……幻象……？但是……{random_boss}，你的样子……",
						"french": "Belle... illusion...? Mais... {random_boss}, ton apparence...",
						"spanish": "¿Hermosa... ilusión...? Pero... {random_boss}, tu forma...",
						"vietnamese": "Ảo ảnh... đẹp đẽ ư...? Nhưng... {random_boss}, hình dáng của ngươi...",
						"thai": "ภาพลวงตา... ที่สวยงาม...? แต่ว่า... {random_boss} ร่างของท่าน...",
						"hindi": "सुंदर... भ्रम...? लेकिन... {random_boss}, तुम्हारा रूप..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…방금, 갈라지는 것처럼 보였어.",
						"english": "...Just now, it seemed to be splitting apart.",
						"japanese": "…たった今、ひび割れるように見えた。",
						"chinese": "……刚刚，好像裂开了。",
						"french": "...À l'instant, elle a semblé se fissurer.",
						"spanish": "...Justo ahora, parecía dividirse.",
						"vietnamese": "...Vừa nãy, nó như thể đang rạn nứt ra vậy.",
						"thai": "...เมื่อครู่ ดูเหมือนมันกำลังจะแยกออกจากกัน",
						"hindi": "अभी-अभी, ऐसा लगा जैसे वह फट रहा था।"
					},
					"emotion": "base",
					"speaker": "max",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "도망칠 수 없어. 이 아름다운 기억 속에서, 영원히 갇혀라.",
						"english": "You can't escape. Be trapped forever in these beautiful memories.",
						"japanese": "逃れられぬ。この美しい記憶の中で、永遠に囚われよ。",
						"chinese": "你逃不掉的。永远被困在这美好的记忆中吧。",
						"french": "Tu ne peux pas t'échapper. Reste piégé pour l'éternité dans ces beaux souvenirs.",
						"spanish": "No puedes escapar. Quédate atrapado para siempre en estos hermosos recuerdos.",
						"vietnamese": "Ngươi không thể thoát. Hãy bị giam cầm vĩnh viễn trong những ký ức tuyệt đẹp này.",
						"thai": "เจ้าหนีไม่พ้น. จงติดอยู่ในความทรงจำอันงดงามเหล่านี้ชั่วนิรันดร์.",
						"hindi": "तुम बच नहीं सकते। इन खूबसूरत यादों में हमेशा के लिए कैद रहो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "포기 안 해! 진짜 기억을 찾아낼 거야!",
						"english": "I won't give up! I'll find the real memories!",
						"japanese": "諦めない！本当の記憶を見つけ出す！",
						"chinese": "我不会放弃！我一定会找到真正的记忆！",
						"french": "Je n'abandonnerai pas ! Je trouverai les vrais souvenirs !",
						"spanish": "¡No me rendiré! ¡Encontraré los verdaderos recuerdos!",
						"vietnamese": "Ta sẽ không bỏ cuộc! Ta sẽ tìm ra ký ức thật sự!",
						"thai": "ฉันจะไม่ยอมแพ้! ฉันจะหาความทรงจำที่แท้จริงให้เจอ!",
						"hindi": "मैं हार नहीं मानूँगा! मैं असली यादें ढूंढ निकालूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니야… 여기가… 여기가 진짜는 아니야…",
						"english": "No... This place... This isn't real...",
						"japanese": "違う…ここは…ここは本物じゃない…",
						"chinese": "不……这里……这里不是真的……",
						"french": "Non... Cet endroit... Ce n'est pas la réalité...",
						"spanish": "No... Este lugar... Esto no es real...",
						"vietnamese": "Không... Nơi này... Nơi này không phải thật...",
						"thai": "ไม่... ที่นี่... ที่นี่ไม่ใช่ของจริง...",
						"hindi": "नहीं... यह जगह... यह असली नहीं है..."
					},
					"type": "speech",
					"speaker": "max"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"과거의 기억들이 파도처럼 밀려오는 곳.",
			"잃어버렸던 낙원이 눈앞에 펼쳐졌다.",
			"하지만 가장 아름다운 환상 속에서,",
			"가장 끔찍한 진실이 숨 쉬고 있었다."
		],
		"english": [
			"Where past memories surge like waves.",
			"A lost paradise unfolded before my eyes.",
			"But within the most beautiful illusion,",
			"The most terrible truth lay hidden."
		],
		"japanese": [
			"過去の記憶が波のように押し寄せる場所。",
			"失われた楽園が目の前に広がった。",
			"しかし、最も美しい幻想の中で、",
			"最も恐ろしい真実が息づいていた。"
		],
		"chinese": [
			"往昔记忆如潮水般涌来之地。",
			"失落的乐园在我眼前展开。",
			"然而，在最美的幻象之中，",
			"最可怕的真相正在呼吸。"
		],
		"french": [
			"Là où les souvenirs du passé déferlent comme des vagues.",
			"Un paradis perdu se dévoilait sous mes yeux.",
			"Mais au sein de la plus belle des illusions,",
			"La plus horrible des vérités respirait."
		],
		"spanish": [
			"Donde los recuerdos del pasado irrumpen como olas.",
			"Un paraíso perdido se desplegó ante mis ojos.",
			"Pero dentro de la ilusión más hermosa,",
			"La verdad más terrible respiraba."
		],
		"vietnamese": [
			"Nơi ký ức quá khứ ùa về như sóng.",
			"Một thiên đường đã mất mở ra trước mắt.",
			"Nhưng trong ảo ảnh đẹp nhất,",
			"Sự thật kinh hoàng nhất đang ẩn chứa."
		],
		"thai": [
			"ที่ที่ความทรงจำในอดีตหลั่งไหลเข้ามาเหมือนคลื่น",
			"สรวงสวรรค์ที่หายไปปรากฏขึ้นตรงหน้า",
			"แต่ในภาพลวงตาที่สวยงามที่สุด",
			"ความจริงที่น่าสะพรึงกลัวที่สุดกำลังซ่อนอยู่"
		],
		"hindi": [
			"जहाँ अतीत की यादें लहरों की तरह उमड़ती हैं।",
			"एक खोया हुआ स्वर्ग मेरी आँखों के सामने खुल गया।",
			"लेकिन सबसे खूबसूरत भ्रम के भीतर,",
			"सबसे भयानक सच्चाई छिपी हुई थी।"
		]
	}
} as const;
