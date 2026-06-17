export const scenario_snowy_skuld_1_04 = {
	"scenario_id": "snowy_skuld_1_04",
	"order": 4,
	"act": "rising",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하가 거대한 생물처럼 꿈틀거렸다. 사방에서 균열음이 들려왔다.",
						"english": "The glacier writhed like a colossal creature. Cracking sounds echoed from all directions.",
						"japanese": "氷河は巨大な生物のように蠢いた。四方八方から亀裂の音が聞こえてきた。",
						"chinese": "冰川像一个巨大的生物般蠕动着。四面八方传来裂开的声音。",
						"french": "Le glacier se tordait comme une créature colossale. Des craquements résonnaient de toutes parts.",
						"spanish": "El glaciar se retorcía como una criatura colosal. Sonidos de crujidos resonaban desde todas direcciones.",
						"vietnamese": "Sông băng vặn vẹo như một sinh vật khổng lồ. Tiếng nứt vỡ vang lên từ mọi phía.",
						"thai": "ธารน้ำแข็งบิดตัวเหมือนสิ่งมีชีวิตขนาดมหึมา เสียงแตกดังมาจากทุกทิศทาง",
						"hindi": "ग्लेशियर एक विशाल जीव की तरह छटपटा रहा था। चारों दिशाओं से दरारें पड़ने की आवाजें आ रही थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이쪽으로! 서둘러야 해!",
						"english": "This way! We need to hurry!",
						"japanese": "こっちだ！急がなきゃ！",
						"chinese": "这边！快点！",
						"french": "Par ici ! Il faut se dépêcher !",
						"spanish": "¡Por aquí! ¡Tenemos que darnos prisa!",
						"vietnamese": "Lối này! Chúng ta phải nhanh lên!",
						"thai": "ทางนี้! เราต้องรีบแล้ว!",
						"hindi": "इस तरफ! हमें जल्दी करनी होगी!"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빙하가 무너지고 있어요!",
						"english": "The glacier is collapsing!",
						"japanese": "氷河が崩壊してる！",
						"chinese": "冰川正在坍塌！",
						"french": "Le glacier s'effondre !",
						"spanish": "¡El glaciar se está derrumbando!",
						"vietnamese": "Sông băng đang sụp đổ!",
						"thai": "ธารน้ำแข็งกำลังถล่ม!",
						"hindi": "ग्लेशियर ढह रहा है!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "침착해! 이런 균열은 자연 현상이 아니야.",
						"english": "Calm down! These cracks aren't natural.",
						"japanese": "落ち着いて！こんな亀裂は自然現象じゃない。",
						"chinese": "冷静！这些裂缝不是自然现象。",
						"french": "Calmez-vous ! Ces fissures ne sont pas naturelles.",
						"spanish": "¡Cálmate! Estas grietas no son naturales.",
						"vietnamese": "Bình tĩnh! Những vết nứt này không phải tự nhiên.",
						"thai": "ใจเย็นไว้! รอยแตกพวกนี้ไม่เป็นธรรมชาติ",
						"hindi": "शांत हो जाओ! ये दरारें प्राकृतिक नहीं हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 얼음… 이상해요. 부자연스러워요.",
						"english": "This ice... it's strange. It feels unnatural.",
						"japanese": "この氷…おかしいわ。不自然よ。",
						"chinese": "这冰……很奇怪。不自然。",
						"french": "Cette glace… c'est étrange. C'est contre nature.",
						"spanish": "Este hielo... es extraño. No es natural.",
						"vietnamese": "Lớp băng này… thật lạ. Nó không tự nhiên.",
						"thai": "น้ำแข็งนี่...มันแปลกๆ มันไม่เป็นธรรมชาติ",
						"hindi": "यह बर्फ...अजीब है। यह अप्राकृतिक है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "더 이상 지체할 시간이 없어! 저 소리를 들어봐.",
						"english": "No more time to delay! Listen to that sound.",
						"japanese": "もう遅れてる暇はない！あの音を聞いて。",
						"chinese": "没有时间再耽搁了！听那个声音。",
						"french": "Plus de temps à perdre ! Écoutez ce son.",
						"spanish": "¡No hay más tiempo que perder! Escucha ese sonido.",
						"vietnamese": "Không còn thời gian để chần chừ nữa! Hãy nghe âm thanh đó.",
						"thai": "ไม่มีเวลาจะช้าอีกแล้ว! ฟังเสียงนั่นสิ",
						"hindi": "और देर करने का समय नहीं है! उस आवाज को सुनो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어디선가… 슬픈 소리가 들리는 것 같아요.",
						"english": "I hear a sad sound… from somewhere.",
						"japanese": "どこかから… 悲しい音が聞こえる気がします。",
						"chinese": "我好像听到… 某种悲伤的声音。",
						"french": "J'entends… un son triste, quelque part.",
						"spanish": "Parece que oigo… un sonido triste, de algún lugar.",
						"vietnamese": "Tôi nghe thấy… một âm thanh buồn từ đâu đó.",
						"thai": "ฉันได้ยินเสียงเศร้า… จากที่ไหนสักแห่ง",
						"hindi": "मुझे कहीं से… एक उदास आवाज़ सुनाई दे रही है。"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 빙하의 울음이 아니야. 무언가 우리를 쫓고 있어.",
						"english": "That's not just the glacier's groan. Something is chasing us.",
						"japanese": "ただの氷河の咆哮じゃない。何かが私たちを追っている。",
						"chinese": "那不只是冰川的咆哮。有什么东西在追我们。",
						"french": "Ce n'est pas le simple gémissement du glacier. Quelque chose nous poursuit.",
						"spanish": "No es solo el lamento del glaciar. Algo nos persigue.",
						"vietnamese": "Đó không chỉ là tiếng gầm của sông băng. Có thứ gì đó đang đuổi theo chúng ta.",
						"thai": "นั่นไม่ใช่แค่เสียงครางของธารน้ำแข็ง มีบางอย่างกำลังไล่ตามเรามา",
						"hindi": "यह सिर्फ ग्लेशियर की दहाड़ नहीं है। कुछ हमारा पीछा कर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 빙하가 굉음과 함께 갈라졌다. 탈출로는 순식간에 사라졌다.",
						"english": "The massive glacier split with a roar. Our escape route vanished instantly.",
						"japanese": "巨大な氷河が轟音と共に裂けた。脱出路は一瞬にして消え去った。",
						"chinese": "巨大的冰川轰鸣着裂开。逃生路线瞬间消失了。",
						"french": "L'énorme glacier s'est fendu avec un rugissement. La voie d'évacuation a disparu instantanément.",
						"spanish": "El enorme glaciar se partió con un rugido. La ruta de escape desapareció al instante.",
						"vietnamese": "Sông băng khổng lồ nứt ra với tiếng gầm. Lối thoát đã biến mất ngay lập tức.",
						"thai": "ธารน้ำแข็งมหึมาแยกออกด้วยเสียงคำราม เส้นทางหลบหนีหายไปในพริบตา",
						"hindi": "विशाल ग्लेशियर गर्जना के साथ फट गया। हमारा भागने का रास्ता तुरंत गायब हो गया।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "빨리! 여기도 안전하지 않아!",
						"english": "Quick! It's not safe here either!",
						"japanese": "急げ！ここも安全じゃない！",
						"chinese": "快！这里也不安全！",
						"french": "Vite ! Ce n'est pas sûr ici non plus !",
						"spanish": "¡Rápido! ¡Aquí tampoco estamos a salvo!",
						"vietnamese": "Nhanh lên! Ở đây cũng không an toàn!",
						"thai": "เร็วเข้า! ที่นี่ก็ไม่ปลอดภัยแล้ว!",
						"hindi": "जल्दी करो! यहां भी सुरक्षित नहीं है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사방이 막혔어요, 에이라 대장!",
						"english": "We're surrounded, Captain Eira!",
						"japanese": "四方八方塞がれてます、エイラ隊長！",
						"chinese": "我们被包围了，艾拉队长！",
						"french": "Nous sommes cernés, Capitaine Eira !",
						"spanish": "¡Estamos rodeados, Capitana Eira!",
						"vietnamese": "Chúng ta bị bao vây rồi, Đại úy Eira!",
						"thai": "เราถูกล้อมหมดแล้วครับ, กัปตันไอรา!",
						"hindi": "हम चारों तरफ से घिर गए हैं, कैप्टन एइरा!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "빙하의 공명음이 더 강해졌어. 마치… 흐느끼는 것 같아.",
						"english": "The glacier's resonance is stronger. It sounds like… sobbing.",
						"japanese": "氷河の共鳴音がいっそう強くなった。まるで…すすり泣いているようだ。",
						"chinese": "冰川的共鸣声更强了。听起来像是…啜泣。",
						"french": "La résonance du glacier est plus forte. On dirait… des sanglots.",
						"spanish": "La resonancia del glaciar es más fuerte. Parece… un sollozo.",
						"vietnamese": "Tiếng cộng hưởng của sông băng mạnh hơn. Giống như… tiếng khóc nức nở.",
						"thai": "เสียงสะท้อนของธารน้ำแข็งแรงขึ้น เหมือน… เสียงสะอื้น",
						"hindi": "ग्लेशियर की गूंज और तेज़ हो गई है। यह… सिसकने जैसी लग रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "흐느낀다고요? 그게 무슨…",
						"english": "Sobbing? What do you mean…?",
						"japanese": "すすり泣く？それは一体…",
						"chinese": "啜泣？那是什么意思…",
						"french": "Des sanglots ? Qu'est-ce que vous voulez dire… ?",
						"spanish": "¿Sollozos? ¿Qué quiere decir…?",
						"vietnamese": "Khóc nức nở? Ý anh là gì…?",
						"thai": "สะอื้นเหรอ? นั่นหมายความว่าไง...",
						"hindi": "सिसकना? इसका क्या मतलब है…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "시간 없어! 일단 위로!",
						"english": "No time! Upwards, now!",
						"japanese": "時間がない！とにかく上へ！",
						"chinese": "没时间了！先往上走！",
						"french": "Pas le temps ! En haut, maintenant !",
						"spanish": "¡No hay tiempo! ¡Hacia arriba, ahora!",
						"vietnamese": "Không có thời gian! Lên trên, ngay!",
						"thai": "ไม่มีเวลาแล้ว! ขึ้นไปก่อน!",
						"hindi": "समय नहीं है! ऊपर, अभी!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 도망칠 곳이 없어. 여기서 끝낼 수밖에 없어.",
						"english": "Nowhere left to run. We have to end this here.",
						"japanese": "もう逃げ場はない。ここで終わらせるしかない。",
						"chinese": "无处可逃了。我们只能在这里了结。",
						"french": "Plus d'endroit où fuir. Nous devons en finir ici.",
						"spanish": "No queda dónde huir. Tenemos que acabar con esto aquí.",
						"vietnamese": "Không còn nơi nào để chạy. Chúng ta phải kết thúc chuyện này ở đây.",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว เราต้องจบเรื่องนี้ที่นี่",
						"hindi": "अब भागने की कोई जगह नहीं। हमें इसे यहीं खत्म करना होगा।"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 그림자… 다가오고 있어요!",
						"english": "That shadow… it's coming closer!",
						"japanese": "あの影…近づいてきてる！",
						"chinese": "那个影子…它过来了！",
						"french": "Cette ombre… elle approche !",
						"spanish": "Esa sombra… ¡se acerca!",
						"vietnamese": "Cái bóng đó… nó đang đến gần!",
						"thai": "เงานั่น… มันกำลังเข้ามาใกล้!",
						"hindi": "वह परछाई… करीब आ रही है!"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "두려워하지 마! 우리는 살아남을 거야!",
						"english": "Don't be afraid! We will survive!",
						"japanese": "恐れるな！我々は生き残る！",
						"chinese": "别害怕！我们会活下去的！",
						"french": "N'aie pas peur ! Nous survivrons !",
						"spanish": "¡No tengas miedo! ¡Sobreviviremos!",
						"vietnamese": "Đừng sợ! Chúng ta sẽ sống sót!",
						"thai": "อย่ากลัว! เราจะรอด!",
						"hindi": "डरो मत! हम बचेंगे!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼킬 듯 다가왔다. 차가운 공포가 목을 조여왔다.",
						"english": "A colossal shadow loomed, threatening to swallow the expedition. A cold dread choked them.",
						"japanese": "巨大な影が探検隊を飲み込むように迫り、冷たい恐怖が彼らの喉を締め付けた。",
						"chinese": "巨大的阴影仿佛要吞噬探险队，冰冷的恐惧扼住了喉咙。",
						"french": "Une ombre colossale s'approcha, menaçant d'engloutir l'expédition. Une terreur glaciale leur serra la gorge.",
						"spanish": "Una sombra colosal se cernió, amenazando con devorar a la expedición. Un frío terror les atenazó la garganta.",
						"vietnamese": "Bóng tối khổng lồ bao trùm, như muốn nuốt chửng đoàn thám hiểm. Nỗi sợ hãi lạnh lẽo bóp nghẹt cổ họng.",
						"thai": "เงาขนาดมหึมาคืบคลานเข้าใกล้ ราวกับจะกลืนกินคณะสำรวจ ความหวาดกลัวเย็นยะเยือกบีบคอพวกเขา",
						"hindi": "एक विशाल छाया अभियान दल को निगलने के लिए करीब आ रही थी। एक ठंडे डर ने उनका गला घोंट दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						5,
						5
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 자들… 이 슬픔은… 끝나지 않아…",
						"english": "…Foolish mortals… This sorrow… will not end…",
						"japanese": "…愚かな者たちよ…この悲しみは…終わらない…",
						"chinese": "……愚蠢的人类……这份悲伤……不会结束……",
						"french": "…Mortels insensés… Cette tristesse… ne finira pas…",
						"spanish": "…Necios… Esta tristeza… no terminará…",
						"vietnamese": "…Những kẻ ngu ngốc… Nỗi buồn này… sẽ không kết thúc…",
						"thai": "…พวกโง่เขลา… ความเศร้านี้… จะไม่สิ้นสุด…",
						"hindi": "…मूर्ख प्राणी… यह दुख… खत्म नहीं होगा…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"direction": "up",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…이게 끝이 아닐지도 몰라. 그 슬픔… 심상치 않아.",
						"english": "…This might not be the end. That sorrow… it's unsettling.",
						"japanese": "…これが終わりではないのかもしれない。あの悲しみ…尋常ではない。",
						"chinese": "……这也许不是结束。那份悲伤……非同寻常。",
						"french": "…Ce n'est peut-être pas la fin. Cette tristesse… est troublante.",
						"spanish": "…Esto quizás no sea el final. Esa tristeza… no es normal.",
						"vietnamese": "…Đây có thể chưa phải là kết thúc. Nỗi buồn đó… thật bất thường.",
						"thai": "…นี่อาจไม่ใช่จุดจบ ความเศร้าโศกนั้น… ไม่ใช่เรื่องธรรมดา",
						"hindi": "…यह अंत नहीं हो सकता है। वह दुख… सामान्य नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 빙하는 다시 침묵을 찾았지만, 알 수 없는 슬픔의 공명음은 여전히 맴돌았다.",
						"english": "The colossal glacier found its silence once more, yet the echoing resonance of an unknown sorrow still lingered.",
						"japanese": "巨大な氷河は再び沈黙を取り戻したが、未知の悲しみの共鳴音はまだ響き渡っていた。",
						"chinese": "巨大的冰川再次归于沉寂，但未知悲伤的共鸣声仍在回荡。",
						"french": "Le glacier colossal retrouva son silence, mais la résonance d'une tristesse inconnue persistait.",
						"spanish": "El colosal glaciar recuperó su silencio, pero la resonancia de una tristeza desconocida aún perduraba.",
						"vietnamese": "Sông băng khổng lồ trở lại vẻ tĩnh lặng, nhưng âm hưởng của nỗi buồn không tên vẫn còn vang vọng.",
						"thai": "ธารน้ำแข็งมหึมากลับคืนสู่ความเงียบสงบอีกครั้ง แต่เสียงสะท้อนของความเศร้าโศกที่ไม่รู้จักยังคงก้องกังวาน",
						"hindi": "विशाल हिमनद फिर से शांत हो गया, फिर भी एक अज्ञात दुख की प्रतिध्वनि अभी भी गूंज रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 더욱 깊은 곳으로 향한다. 진실을 마주하기 위해.",
						"english": "The expedition ventures deeper, to confront the truth.",
						"japanese": "探検隊はさらに深部へと向かう。真実と向き合うために。",
						"chinese": "探险队继续深入，去面对真相。",
						"french": "L'expédition s'enfonce davantage, pour affronter la vérité.",
						"spanish": "La expedición se adentra más, para enfrentar la verdad.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn, để đối mặt với sự thật.",
						"thai": "คณะสำรวจมุ่งหน้าสู่เบื้องลึกยิ่งขึ้น เพื่อเผชิญหน้ากับความจริง",
						"hindi": "अभियान दल सच्चाई का सामना करने के लिए और गहराई में जाता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내, 거대한 빙하의 심장부. 그곳에서 정체 모를 존재가 모습을 드러냈다.",
						"english": "Finally, in the heart of the colossal glacier, an unknown entity revealed itself.",
						"japanese": "ついに、巨大な氷河の心臓部。そこで正体不明の存在が姿を現した。",
						"chinese": "终于，在巨大冰川的心脏地带，一个不明实体显露了真身。",
						"french": "Finalement, au cœur du glacier colossal, une entité inconnue se révéla.",
						"spanish": "Finalmente, en el corazón del colosal glaciar, una entidad desconocida se reveló.",
						"vietnamese": "Cuối cùng, tại trung tâm của sông băng khổng lồ, một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "ในที่สุด ณ ใจกลางธารน้ำแข็งขนาดยักษ์ สิ่งมีชีวิตปริศนาก็ปรากฏตัวขึ้น",
						"hindi": "अंततः, विशाल हिमनद के केंद्र में, एक अज्ञात सत्ता ने स्वयं को प्रकट किया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들… 감히 나의 영역을 더럽히는가.",
						"english": "Intruders… How dare you defile my domain.",
						"japanese": "侵入者たち…よくも私の領域を汚したな。",
						"chinese": "入侵者……竟敢玷污我的领域。",
						"french": "Intrus… Comment osez-vous souiller mon domaine.",
						"spanish": "Intrusos… ¿Cómo osáis profanar mi dominio?",
						"vietnamese": "Những kẻ xâm nhập… Dám làm ô uế lãnh địa của ta sao.",
						"thai": "พวกผู้บุกรุก… กล้าดียังไงมาแปดเปื้อนอาณาเขตของข้า",
						"hindi": "घुसपैठियों… तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र को अपवित्र करने की।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 도망치지 않아! 당신의 광기를 멈추겠어!",
						"english": "We won't run! We'll stop your madness!",
						"japanese": "我々は逃げない！お前の狂気を止めてみせる！",
						"chinese": "我们不会逃跑！我们会阻止你的疯狂！",
						"french": "Nous ne fuirons pas ! Nous arrêterons ta folie !",
						"spanish": "¡No huiremos! ¡Detendremos tu locura!",
						"vietnamese": "Chúng tôi sẽ không bỏ chạy! Chúng tôi sẽ ngăn chặn sự điên loạn của ngươi!",
						"thai": "เราจะไม่หนี! เราจะหยุดความบ้าคลั่งของเจ้า!",
						"hindi": "हम भागेंगे नहीं! हम तुम्हारी सनक को रोकेंगे!"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "헛된 저항… 모두 얼어붙으리라.",
						"english": "Futile resistance… All shall freeze.",
						"japanese": "無駄な抵抗…全て凍り付かせよう。",
						"chinese": "徒劳的抵抗……都将冻结。",
						"french": "Résistance futile… Tous gèleront.",
						"spanish": "Resistencia inútil… Todos se congelarán.",
						"vietnamese": "Sự kháng cự vô ích… Tất cả sẽ đóng băng.",
						"thai": "การต่อต้านที่ไร้ผล… ทุกสิ่งจะแข็งตัว",
						"hindi": "व्यर्थ प्रतिरोध… सभी जम जाएंगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다. 끝없는 어둠이 밀려왔다.",
						"english": "Cold ice swallowed everything. Endless darkness descended.",
						"japanese": "冷たい氷がすべてを飲み込んだ。終わりのない闇が押し寄せた。",
						"chinese": "冰冷的寒意吞噬了一切。无尽的黑暗袭来。",
						"french": "La glace froide a tout englouti. Une obscurité sans fin a envahi.",
						"spanish": "El hielo frío lo consumió todo. Una oscuridad interminable se acercó.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ. Bóng tối vô tận ập đến.",
						"thai": "น้ำแข็งอันเย็นยะเยือกกลืนกินทุกสิ่ง ความมืดมิดอันไร้ที่สิ้นสุดได้คืบคลานเข้ามา",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया। अनंत अंधेरा छा गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가… 약해빠진 인간들.",
						"english": "Is this all...? Such pathetic mortals.",
						"japanese": "たったこれだけか… 弱り切った人間どもめ。",
						"chinese": "就这点本事吗…… 弱不禁风的人类。",
						"french": "C'est tout ce que vous avez... Humains faibles.",
						"spanish": "¿Esto es todo...? Humanos patéticos.",
						"vietnamese": "Chỉ có vậy thôi sao…? Loài người yếu đuối.",
						"thai": "แค่นี้เองหรือไง… มนุษย์ที่อ่อนแอ",
						"hindi": "बस इतना ही…? कमज़ोर इंसान।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어! 반드시 다시 돌아온다!",
						"english": "...It's not over! I will return!",
						"japanese": "…まだ終わってない！必ず戻ってくる！",
						"chinese": "……还没结束！我一定会回来的！",
						"french": "...Ce n'est pas fini ! Je reviendrai !",
						"spanish": "...¡Todavía no ha terminado! ¡Volveré sin falta!",
						"vietnamese": "…Chưa kết thúc đâu! Ta nhất định sẽ trở lại!",
						"thai": "…ยังไม่จบ! ข้าจะกลับมาแน่นอน!",
						"hindi": "...अभी खत्म नहीं हुआ है! मैं निश्चित रूप से वापस आऊंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하가 울부짖었다. 스컬드의 추격은 더욱 잔혹해졌다.",
			"얼음이 갈라지고 눈사태가 덮치는 아비규환 속에서, 탐험대는 필사적으로 도망쳤다.",
			"그들을 쫓는 것은 단순한 자연의 분노가 아니었다.",
			"거대한 빙하에서 울려 퍼지는, 알 수 없는 슬픔이 담긴 공명음이 발목을 붙잡았다."
		],
		"english": [
			"The glacier roared. Skuld's pursuit grew more relentless.",
			"Amidst the chaos of cracking ice and avalanches, the expedition team fled desperately.",
			"What pursued them was not merely nature's wrath.",
			"A resonant sound, imbued with an unknown sorrow, echoed from the colossal glacier, holding them back."
		],
		"japanese": [
			"氷河が咆哮した。スカルドの追撃はさらに苛烈になった。",
			"氷が裂け、雪崩が押し寄せる阿鼻叫喚の中、探検隊は必死に逃げた。",
			"彼らを追うのは、単なる自然の猛威ではなかった。",
			"巨大な氷河から響く、未知の悲しみを帯びた共鳴音が彼らの足元を捉えた。"
		],
		"chinese": [
			"冰川咆哮着。斯库尔德的追击愈发残酷。",
			"在冰裂雪崩的混乱中，探险队拼命逃亡。",
			"追逐他们的并非仅仅是自然的愤怒。",
			"巨大的冰川中回荡着一声蕴含着未知悲伤的共鸣，缠住了他们的脚步。"
		],
		"french": [
			"Le glacier rugissait. La poursuite de Skuld devenait plus impitoyable.",
			"Au milieu du chaos de la glace qui craque et des avalanches, l'équipe d'expédition s'enfuit désespérément.",
			"Ce qui les poursuivait n'était pas seulement la fureur de la nature.",
			"Un son résonnant, empreint d'une tristesse inconnue, émanait du glacier colossal, les retenant."
		],
		"spanish": [
			"El glaciar rugió. La persecución de Skuld se volvió más implacable.",
			"En medio del caos de hielo que se resquebrajaba y avalanchas, el equipo de expedición huyó desesperadamente.",
			"Lo que los perseguía no era solo la ira de la naturaleza.",
			"Un sonido resonante, imbuido de una tristeza desconocida, resonaba desde el glaciar colosal, deteniéndolos."
		],
		"vietnamese": [
			"Sông băng gầm thét. Cuộc truy đuổi của Skuld càng thêm tàn khốc.",
			"Giữa cảnh hỗn loạn của băng nứt và tuyết lở, đoàn thám hiểm đã chạy trốn trong tuyệt vọng.",
			"Thứ truy đuổi họ không chỉ là cơn thịnh nộ của thiên nhiên.",
			"Một âm thanh cộng hưởng, mang nỗi buồn không tên, vang vọng từ sông băng khổng lồ, níu chân họ."
		],
		"thai": [
			"ธารน้ำแข็งคำราม การไล่ล่าของสคูลด์ทวีความโหดร้ายยิ่งขึ้น",
			"ท่ามกลางความโกลาหลของน้ำแข็งที่แตกและหิมะถล่ม ทีมสำรวจหนีเอาชีวิตรอดอย่างสิ้นหวัง",
			"สิ่งที่ไล่ตามพวกเขาไม่ใช่แค่ความโกรธแค้นของธรรมชาติ",
			"เสียงสะท้อนที่เต็มไปด้วยความโศกเศร้าที่ไม่รู้จัก ดังก้องจากธารน้ำแข็งขนาดมหึมาตรึงเท้าพวกเขาไว้"
		],
		"hindi": [
			"ग्लेशियर गर्जना कर रहा था। स्कल्ड का पीछा और भी निर्मम हो गया।",
			"दरकती बर्फ और हिमस्खलन के तांडव के बीच, अभियान दल हताश होकर भागा।",
			"उनका पीछा करने वाला केवल प्रकृति का प्रकोप नहीं था।",
			"विशाल ग्लेशियर से गूंजती, एक अज्ञात उदासी से भरी अनुनाद ध्वनि ने उनके पैरों को रोक दिया।"
		]
	}
} as const;
