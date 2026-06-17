export const scenario_snowy_fenrir_26_05 = {
	"scenario_id": "snowy_fenrir_26_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "설원이 갈라지고, 거대한 공허가 그 모습을 드러냈다.",
						"english": "The snowfield split open, revealing a colossal void.",
						"japanese": "雪原が裂け、巨大な虚空がその姿を現した。",
						"chinese": "雪原裂开，巨大的虚空显露出来。",
						"french": "La plaine enneigée se fendit, révélant un vide colossal.",
						"spanish": "El campo de nieve se partió, revelando un vacío colosal.",
						"vietnamese": "Tuyết trường nứt ra, một khoảng không khổng lồ hiện hình.",
						"thai": "ทุ่งหิมะแยกออก เผยให้เห็นความว่างเปล่าอันมหึมา",
						"hindi": "हिमक्षेत्र फट गया, और एक विशाल शून्य प्रकट हुआ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저게… Fenrir라고?",
						"english": "Is that... Fenrir?",
						"japanese": "あれが…フェンリルだと？",
						"chinese": "那个…是芬里尔吗？",
						"french": "C'est... Fenrir ?",
						"spanish": "¿Eso es... Fenrir?",
						"vietnamese": "Đó là… Fenrir sao?",
						"thai": "นั่นคือ... Fenrir งั้นหรือ?",
						"hindi": "क्या वह... फेन्रिर है?"
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이건 사냥감이 아냐. 재앙이다.",
						"english": "This isn't prey. It's a calamity.",
						"japanese": "これは獲物じゃない。災厄だ。",
						"chinese": "这不是猎物。这是灾祸。",
						"french": "Ce n'est pas une proie. C'est une calamité.",
						"spanish": "Esto no es una presa. Es una calamidad.",
						"vietnamese": "Đây không phải con mồi. Đây là tai ương.",
						"thai": "นี่ไม่ใช่เหยื่อ มันคือหายนะ",
						"hindi": "यह शिकार नहीं है। यह एक आपदा है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그럼 우린… 어떻게 해야 해요?",
						"english": "So what... should we do?",
						"japanese": "じゃあ私たちは…どうすればいいんですか？",
						"chinese": "那我们…该怎么办？",
						"french": "Alors… que devons-nous faire ?",
						"spanish": "Entonces... ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta… phải làm gì đây?",
						"thai": "แล้วเรา... ควรทำอย่างไรดี?",
						"hindi": "तो हमें... क्या करना चाहिए?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "물러설 곳은 없어. 에이라가 방법을 찾을 때까지 버틴다.",
						"english": "There's no turning back. Hold out until Eira finds a way.",
						"japanese": "退路はない。エイラが方法を見つけるまで持ちこたえるんだ。",
						"chinese": "无路可退。坚持到艾拉找到办法为止。",
						"french": "Il n'y a pas de retraite possible. Tenez bon jusqu'à ce qu'Eira trouve un moyen.",
						"spanish": "No hay retirada. Aguantemos hasta que Eira encuentre una solución.",
						"vietnamese": "Không còn đường lùi. Cứ giữ vững cho đến khi Eira tìm ra cách.",
						"thai": "ไม่มีทางถอย ทนไว้จนกว่าไอราจะหาวิธีได้",
						"hindi": "पीछे हटने का कोई रास्ता नहीं है। जब तक एइरा कोई रास्ता नहीं ढूंढ लेती, तब तक टिके रहो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설원의 온기가 빠르게 빨려들었다. 모든 생명력이 굶주림에 잠식되는 듯했다.",
						"english": "The warmth of the snowfield rapidly drained away. All life seemed to be devoured by hunger.",
						"japanese": "雪原の温かさが急速に吸い取られた。あらゆる生命力が飢餓に蝕まれていくようだった。",
						"chinese": "雪原的温暖迅速被吸走。所有生命力似乎都被饥饿侵蚀。",
						"french": "La chaleur de la plaine enneigée fut rapidement aspirée. Toute vie semblait dévorée par la faim.",
						"spanish": "El calor del campo de nieve se drenó rápidamente. Toda la vida parecía ser devorada por el hambre.",
						"vietnamese": "Hơi ấm của tuyết trường nhanh chóng bị hút cạn. Mọi sinh lực dường như bị nuốt chửng bởi sự đói khát.",
						"thai": "ความอบอุ่นของทุ่งหิมะถูกดูดหายไปอย่างรวดเร็ว ทุกชีวิตดูเหมือนถูกความหิวโหยกลืนกิน",
						"hindi": "हिमक्षेत्र की गर्मी तेजी से सूख गई। ऐसा लग रहा था मानो सारा जीवन भूख से ग्रसित हो गया हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "추워… 온몸이 얼어붙는 것 같아.",
						"english": "It's cold... I feel like my whole body is freezing.",
						"japanese": "寒い…全身が凍りつくようだ。",
						"chinese": "好冷…感觉全身都要冻僵了。",
						"french": "Il fait froid... J'ai l'impression que tout mon corps gèle.",
						"spanish": "Hace frío... Siento que todo mi cuerpo se congela.",
						"vietnamese": "Lạnh quá… Cả người cứ như đóng băng.",
						"thai": "หนาว... รู้สึกเหมือนร่างกายกำลังจะแข็ง",
						"hindi": "ठंड है... ऐसा लग रहा है जैसे मेरा पूरा शरीर जम रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라가 말한 '공허'가… 이것인가.",
						"english": "Is this... the 'void' Eira spoke of?",
						"japanese": "エイラが言っていた「虚空」が…これなのか。",
						"chinese": "艾拉说的“虚空”…就是这个吗？",
						"french": "C'est ça... le « vide » dont Eira parlait ?",
						"spanish": "¿Es esto... el 'vacío' del que habló Eira?",
						"vietnamese": "Đây có phải là… \"hư không\" mà Eira đã nói?",
						"thai": "นี่คือ... 'ความว่างเปล่า' ที่ไอราพูดถึงงั้นหรือ?",
						"hindi": "क्या यह... वही 'शून्य' है जिसके बारे में एइरा ने बताया था?"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Fenrir가… 더 커지고 있어요.",
						"english": "Fenrir is... getting bigger.",
						"japanese": "フェンリルが…さらに大きくなっている。",
						"chinese": "芬里尔…变得更大了。",
						"french": "Fenrir... grossit.",
						"spanish": "Fenrir... está creciendo.",
						"vietnamese": "Fenrir… đang lớn hơn.",
						"thai": "Fenrir... กำลังตัวใหญ่ขึ้น",
						"hindi": "फेन्रिर... बड़ा होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "늑대의 형상은 무너진 사체들의 집합이었다. 텅 빈 동공에서 눈보라가 뿜어져 나왔다.",
						"english": "The wolf's form was a collection of shattered corpses. Snowstorms erupted from its empty eye sockets.",
						"japanese": "狼の姿は崩れ落ちた死体の集合だった。空虚な瞳から吹雪が噴き出した。",
						"chinese": "狼的形态是破碎尸体的集合。暴风雪从其空洞的眼窝中喷涌而出。",
						"french": "La forme du loup était un assemblage de cadavres brisés. Des blizzards jaillissaient de ses orbites vides.",
						"spanish": "La forma del lobo era una colección de cadáveres destrozados. Tormentas de nieve brotaban de sus cuencas oculares vacías.",
						"vietnamese": "Dáng vẻ con sói là một tập hợp các xác chết đổ nát. Bão tuyết phun ra từ hốc mắt trống rỗng của nó.",
						"thai": "ร่างของหมาป่าคือกลุ่มของซากศพที่พังทลาย พายุหิมะพวยพุ่งออกมาจากเบ้าตาที่ว่างเปล่า",
						"hindi": "भेड़िये का रूप टूटे हुए शवों का एक संग्रह था। उसकी खाली आँखों से बर्फीले तूफान निकल रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저건… 살아있는 게 아니야. 그냥… 뼈와 살덩어리들…",
						"english": "That's... not alive. Just... bones and flesh...",
						"japanese": "あれは…生きていない。ただの…骨と肉塊だ…",
						"chinese": "那不是…活物。只是…一堆骨肉…",
						"french": "Ça... n'est pas vivant. Juste... des os et de la chair...",
						"spanish": "Eso... no está vivo. Solo... huesos y carne...",
						"vietnamese": "Đó... không phải vật sống. Chỉ là... xương và thịt thôi...",
						"thai": "นั่น...ไม่ใช่มันมีชีวิต แค่...กระดูกกับเนื้อ...",
						"hindi": "वह... जीवित नहीं है। बस... हड्डियां और मांस के लोथड़े..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…배고파… 배고파… 멈출 수가… 없어…",
						"english": "...Hungry... Hungry... Can't stop...",
						"japanese": "…腹減った…腹減った…止まらない…",
						"chinese": "…好饿…好饿…停不下来…",
						"french": "...Faim... Faim... Je ne peux pas m'arrêter...",
						"spanish": "...Hambre... Hambre... No puedo parar...",
						"vietnamese": "...Đói... Đói... Không thể ngừng lại...",
						"thai": "...หิว... หิว... หยุดไม่ได้เลย...",
						"hindi": "...भूखा... भूखा... रुक नहीं सकता..."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "(충격) 저 비명… 수많은 짐승들의 고통인가.",
						"english": "(Shock) That scream... Is it the agony of countless beasts?",
						"japanese": "（衝撃）あの悲鳴…無数の獣たちの苦痛なのか。",
						"chinese": "(震惊) 那尖叫…是无数野兽的痛苦吗？",
						"french": "(Choc) Ce cri... Est-ce l'agonie d'innombrables bêtes ?",
						"spanish": "(Impacto) Ese grito... ¿Es la agonía de incontables bestias?",
						"vietnamese": "(Sốc) Tiếng hét đó... Có phải là sự đau đớn của vô số quái vật?",
						"thai": "(ตกใจ) เสียงกรีดร้องนั่น...คือความทรมานของสัตว์ร้ายนับไม่ถ้วนหรือเปล่า?",
						"hindi": "(सदमा) वह चीख... क्या यह अनगिनत जानवरों की पीड़ा है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 소리… 멀리서 들리던 뼈 부딪히는 소리였어…",
						"english": "That sound... It was the clatter of bones from afar...",
						"japanese": "あの音…遠くから聞こえていた骨のぶつかる音だった…",
						"chinese": "那声音…是远处传来的骨头碰撞声…",
						"french": "Ce son... C'était le cliquetis d'os venant de loin...",
						"spanish": "Ese sonido... Era el entrechocar de huesos desde lejos...",
						"vietnamese": "Âm thanh đó... Là tiếng xương va vào nhau từ xa...",
						"thai": "เสียงนั่น...คือเสียงกระดูกกระทบกันที่ได้ยินจากที่ไกลๆ...",
						"hindi": "वह आवाज़... दूर से आ रही हड्डियों के टकराने की आवाज़ थी..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "공허는 이미 설원 전체를 집어삼키고 있었다. 돌아갈 길은 보이지 않았다.",
						"english": "The Void had already consumed the entire snowfield. There was no way back.",
						"japanese": "虚無は既に雪原全体を飲み込んでいた。帰り道は見えなかった。",
						"chinese": "虚空已吞噬了整个雪原。归路已断。",
						"french": "Le Vide avait déjà englouti toute la plaine enneigée. Aucun chemin de retour n'était visible.",
						"spanish": "El Vacío ya había consumido todo el campo de nieve. No había camino de regreso.",
						"vietnamese": "Hư vô đã nuốt chửng toàn bộ tuyết nguyên. Không còn đường quay về.",
						"thai": "ความว่างเปล่าได้กลืนกินทุ่งหิมะทั้งหมดแล้ว ไม่มีทางย้อนกลับได้",
						"hindi": "शून्य ने पहले ही पूरे बर्फीले मैदान को निगल लिया था। लौटने का कोई रास्ता नहीं दिख रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "우리가 할 수 있는 건… 강함의 끝을 보여주는 것뿐이다.",
						"english": "All we can do... is demonstrate the ultimate strength.",
						"japanese": "我々にできるのは…強さの極限を見せることだけだ。",
						"chinese": "我们能做的…唯有展现力量的极限。",
						"french": "Tout ce que nous pouvons faire... est de démontrer la force ultime.",
						"spanish": "Todo lo que podemos hacer... es demostrar la fuerza definitiva.",
						"vietnamese": "Tất cả những gì chúng ta có thể làm... là thể hiện sức mạnh tột cùng.",
						"thai": "สิ่งที่เราทำได้...คือแสดงให้เห็นถึงขีดสุดของความแข็งแกร่งเท่านั้น",
						"hindi": "हम बस इतना ही कर सकते हैं... अपनी शक्ति की पराकाष्ठा दिखाना।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 불가능해요, 이바르! 모두 죽을 거예요!",
						"english": "This is impossible, Ivar! We'll all die!",
						"japanese": "これは無理です、イヴァル！皆死んでしまいます！",
						"chinese": "这不可能，伊瓦尔！我们都会死的！",
						"french": "C'est impossible, Ivar ! Nous allons tous mourir !",
						"spanish": "¡Esto es imposible, Ivar! ¡Todos moriremos!",
						"vietnamese": "Chuyện này là không thể, Ivar! Chúng ta sẽ chết hết!",
						"thai": "นี่มันเป็นไปไม่ได้ ไอบาร์! พวกเราจะต้องตายกันหมด!",
						"hindi": "यह असंभव है, इवार! हम सब मर जाएंगे!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "살아남아라! 그것이 나의 명령이다!",
						"english": "Survive! That is my command!",
						"japanese": "生き残れ！それが私の命令だ！",
						"chinese": "活下去！那是我的命令！",
						"french": "Survivrez ! C'est mon ordre !",
						"spanish": "¡Sobrevivid! ¡Esa es mi orden!",
						"vietnamese": "Hãy sống sót! Đó là mệnh lệnh của ta!",
						"thai": "จงรอดชีวิต! นั่นคือคำสั่งของข้า!",
						"hindi": "जीवित रहो! यह मेरा आदेश है!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 굶주림이 모든 것을 뒤덮었다. 더 이상 설원은 존재하지 않았다.",
						"english": "A colossal hunger enveloped everything. The snowfield no longer existed.",
						"japanese": "巨大な飢餓が全てを覆い尽くした。もはや雪原は存在しなかった。",
						"chinese": "巨大的饥饿吞噬了一切。雪原已不复存在。",
						"french": "Une faim colossale a tout englouti. La plaine enneigée n'existait plus.",
						"spanish": "Un hambre colosal lo envolvió todo. El campo de nieve ya no existía.",
						"vietnamese": "Một cơn đói khổng lồ bao trùm mọi thứ. Tuyết nguyên không còn tồn tại.",
						"thai": "ความหิวโหยอันใหญ่หลวงได้กลืนกินทุกสิ่ง ทุ่งหิมะไม่เหลืออยู่แล้ว",
						"hindi": "एक विशाल भूख ने सब कुछ ढक लिया। बर्फीला मैदान अब मौजूद नहीं था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…공허… 그 자체… 나는 멈출 수 없어…",
						"english": "...The Void... itself... I can't stop...",
						"japanese": "…虚無…それ自体が…止められない…",
						"chinese": "…虚空…本身…我无法停止…",
						"french": "...Le Vide... lui-même... Je ne peux pas m'arrêter...",
						"spanish": "...El Vacío... en sí mismo... No puedo parar...",
						"vietnamese": "...Hư vô... chính nó... Ta không thể dừng lại...",
						"thai": "...ความว่างเปล่า...ตัวมันเอง...ข้าหยุดไม่ได้...",
						"hindi": "...शून्य... स्वयं... मैं रुक नहीं सकता..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 끝이다.",
						"english": "...Damn it. It's over.",
						"japanese": "「…ちくしょう。終わりだ。」",
						"chinese": "“……该死。结束了。”",
						"french": "...Maudit. C'est fini.",
						"spanish": "...Maldita sea. Se acabó.",
						"vietnamese": "...Chết tiệt. Hết rồi.",
						"thai": "...ให้ตายสิ จบแล้ว",
						"hindi": "...धिक्कार है। यह खत्म हो गया है।"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 마라! 마지막까지 싸운다!",
						"english": "Don't give up! Fight to the very end!",
						"japanese": "「諦めるな！最後まで戦う！」",
						"chinese": "“别放弃！战斗到最后一刻！”",
						"french": "N'abandonne pas ! Bats-toi jusqu'au bout !",
						"spanish": "¡No te rindas! ¡Lucha hasta el final!",
						"vietnamese": "Đừng bỏ cuộc! Chiến đấu đến cùng!",
						"thai": "อย่ายอมแพ้! สู้จนถึงที่สุด!",
						"hindi": "हार मत मानो! अंत तक लड़ो!"
					},
					"emotion": "angry",
					"speaker": "ivar"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "공허의 심장이 멎었다. 그러나 굶주림의 상흔은 영원히 남았다.",
						"english": "The heart of the Void stopped. But the scars of hunger remained forever.",
						"japanese": "「虚無の心臓は止まった。しかし、飢餓の傷跡は永遠に残った。」",
						"chinese": "“虚空之心停止了跳动。但饥饿的伤痕却永远留存。”",
						"french": "Le cœur du Vide s'est arrêté. Mais les cicatrices de la faim sont restées à jamais.",
						"spanish": "El corazón del Vacío se detuvo. Pero las cicatrices del hambre permanecieron para siempre.",
						"vietnamese": "Trái tim Hư Vô ngừng đập. Nhưng những vết sẹo của cơn đói vẫn còn mãi.",
						"thai": "หัวใจแห่งความว่างเปล่าหยุดลง แต่รอยแผลเป็นแห่งความหิวกระหายยังคงอยู่ตลอดไป",
						"hindi": "शून्य का हृदय रुक गया। लेकिन भूख के निशान हमेशा के लिए रह गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…결국… 아무것도… 채울 수… 없었어…",
						"english": "...In the end... nothing... could be filled...",
						"japanese": "「…結局…何も…満たせなかった…」",
						"chinese": "“……最终……什么也……无法填补……”",
						"french": "...Au final... rien... n'a pu être comblé...",
						"spanish": "...Al final... nada... pudo llenarse...",
						"vietnamese": "...Cuối cùng... không gì... có thể lấp đầy...",
						"thai": "...ท้ายที่สุด...ไม่มีอะไร...เติมเต็มได้เลย...",
						"hindi": "...आखिरकार... कुछ भी... नहीं भर सका..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝난 건가…? 우리가 해냈어…",
						"english": "Is it over...? We did it...",
						"japanese": "「終わったのか…？俺たちがやったんだ…」",
						"chinese": "“结束了吗……？我们做到了……”",
						"french": "C'est fini...? Nous l'avons fait...",
						"spanish": "¿Se acabó...? Lo logramos...",
						"vietnamese": "Kết thúc rồi sao...? Chúng ta đã làm được...",
						"thai": "จบแล้วเหรอ...? เราทำได้แล้ว...",
						"hindi": "क्या यह खत्म हो गया है...? हमने कर दिखाया..."
					},
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "(지쳐 쓰러지며) …우린… 살아남았다.",
						"english": "(Collapsing in exhaustion) ...We... survived.",
						"japanese": "「（疲れ果てて倒れ込み）…俺たちは…生き残った。」",
						"chinese": "“（筋疲力尽地倒下）……我们……活下来了。”",
						"french": "(S'effondrant d'épuisement) ...Nous... avons survécu.",
						"spanish": "(Cayendo exhausto) ...Sobrevivimos.",
						"vietnamese": "(Gục xuống vì kiệt sức) ...Chúng ta... đã sống sót.",
						"thai": "(ทรุดตัวลงด้วยความเหนื่อยล้า) ...พวกเรา...รอดชีวิตมาได้",
						"hindi": "(थकान से गिरते हुए) ...हम... बच गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "설원은 회복될 수 없는 상처를 입었지만, 살아남은 자들에게는 새로운 지혜가 남았다.",
						"english": "The snowfield suffered irreparable wounds, but new wisdom remained for the survivors.",
						"japanese": "「雪原は回復不能な傷を負ったが、生き残った者たちには新たな知恵が残された。」",
						"chinese": "“雪原遭受了无法弥补的创伤，但幸存者们却留下了新的智慧。”",
						"french": "La toundra subit des blessures irréparables, mais une nouvelle sagesse demeura pour les survivants.",
						"spanish": "El campo nevado sufrió heridas irreparables, pero una nueva sabiduría permaneció para los supervivientes.",
						"vietnamese": "Cánh đồng tuyết chịu những vết thương không thể hàn gắn, nhưng trí tuệ mới vẫn còn lại cho những người sống sót.",
						"thai": "ทุ่งหิมะได้รับบาดแผลที่ไม่อาจฟื้นฟูได้ แต่ภูมิปัญญาใหม่ยังคงอยู่สำหรับผู้รอดชีวิต",
						"hindi": "बर्फ के मैदान को अपूरणीय घाव लगे, लेकिन बचे हुए लोगों के लिए नई बुद्धिमत्ता शेष रही।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 끝났지만… 아직, 끝나지 않은 이야기가 있었다.",
						"english": "Everything ended... but there was still a story untold.",
						"japanese": "「全てが終わったが…まだ、終わらない物語があった。」",
						"chinese": "“一切都结束了……但还有一个未完待续的故事。”",
						"french": "Tout était fini... mais il y avait encore une histoire inachevée.",
						"spanish": "Todo terminó... pero aún quedaba una historia sin contar.",
						"vietnamese": "Mọi thứ đã kết thúc... nhưng vẫn còn một câu chuyện chưa kể.",
						"thai": "ทุกสิ่งจบลงแล้ว...แต่ก็ยังมีเรื่องราวที่ยังไม่จบ",
						"hindi": "सब कुछ खत्म हो गया... लेकिन अभी भी एक अनकही कहानी बाकी थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "공허는 모든 것을 집어삼켰다. 모든 빛이 사라졌다.",
						"english": "The Void devoured everything. All light vanished.",
						"japanese": "「虚無は全てを飲み込んだ。全ての光が消え去った。」",
						"chinese": "“虚空吞噬了一切。所有的光都消失了。”",
						"french": "Le Vide a tout englouti. Toute lumière a disparu.",
						"spanish": "El Vacío lo devoró todo. Toda la luz desapareció.",
						"vietnamese": "Hư Vô nuốt chửng mọi thứ. Mọi ánh sáng đều biến mất.",
						"thai": "ความว่างเปล่ากลืนกินทุกสิ่ง แสงสว่างทั้งหมดหายไป",
						"hindi": "शून्य ने सब कुछ निगल लिया। सारी रोशनी गायब हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…결국… 너희도… 날 채울 수 없어…",
						"english": "...In the end... even you... cannot fill me...",
						"japanese": "「…結局…お前たちも…俺を満たせない…」",
						"chinese": "“……最终……你们也……无法填补我……”",
						"french": "...Au final... même vous... ne pouvez pas me combler...",
						"spanish": "...Al final... ni siquiera vosotros... podéis llenarme...",
						"vietnamese": "...Cuối cùng... ngay cả các ngươi... cũng không thể lấp đầy ta...",
						"thai": "...ท้ายที่สุด...แม้แต่พวกเจ้า...ก็ไม่อาจเติมเต็มข้าได้...",
						"hindi": "...आखिरकार... तुम भी... मुझे भर नहीं सकते..."
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 아직… 끝나지 않았어!",
						"english": "No... it's not over yet!",
						"japanese": "いや…まだ…終わってない！",
						"chinese": "不…还没有…结束！",
						"french": "Non... Ce n'est pas fini !",
						"spanish": "¡No... aún no ha terminado!",
						"vietnamese": "Không... chưa kết thúc!",
						"thai": "ไม่... ยังไม่จบ!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "(절규) …다시, 일어설 거다!",
						"english": "(Screaming) ...I will rise again!",
						"japanese": "（絶叫）…また、立ち上がる！",
						"chinese": "（尖叫）…我会再次站起来！",
						"french": "(Criant) ...Je me relèverai !",
						"spanish": "¡(Gritando) ...Me levantaré de nuevo!",
						"vietnamese": "(Hét lớn) ...Tôi sẽ đứng dậy một lần nữa!",
						"thai": "(กรีดร้อง) ...ฉันจะลุกขึ้นยืนอีกครั้ง!",
						"hindi": "(चीखते हुए) ...मैं फिर से खड़ा होऊंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 전체가 굶주리는 입이 되었다.",
			"되살아난 늑대는, 더 이상 늑대가 아니었다.",
			"이바르는 마지막 명령을 내렸다. 살아서 돌아가라.",
			"그러나 공허는 모든 것을 집어삼키려 했다.",
			"최후의 저항. 그것만이 남았다."
		],
		"english": [
			"The entire snowfield became a ravenous maw.",
			"The resurrected wolf was no longer a wolf.",
			"Ivarr gave his final command: \"Return alive.\"",
			"But the Void sought to devour all.",
			"Only the final resistance remained."
		],
		"japanese": [
			"雪原全体が飢えた口となった。",
			"蘇った狼は、もはや狼ではなかった。",
			"イヴァールは最後の命令を下した。「生きて帰れ。」",
			"しかし、虚無はすべてを飲み込もうとした。",
			"残されたのは、最後の抵抗のみ。"
		],
		"chinese": [
			"整个雪原都化作了饥饿的巨口。",
			"重生的狼，已不再是狼。",
			"伊瓦尔下达了最后一道命令：活着回去。",
			"然而，虚空却试图吞噬一切。",
			"唯有最后的抵抗，仍在延续。"
		],
		"french": [
			"La toundra entière devint une gueule affamée.",
			"Le loup ressuscité n'était plus un loup.",
			"Ivarr donna son dernier ordre : « Retournez vivants. »",
			"Cependant, le Néant cherchait à tout dévorer.",
			"Il ne restait que la résistance finale."
		],
		"spanish": [
			"Toda la llanura nevada se convirtió en una boca hambrienta.",
			"El lobo resucitado ya no era un lobo.",
			"Ivarr dio su última orden: \"Regresen con vida\".",
			"Sin embargo, el Vacío intentaba devorarlo todo.",
			"Solo quedaba la resistencia final."
		],
		"vietnamese": [
			"Cả vùng tuyết nguyên hóa thành một cái miệng đói khát.",
			"Con sói hồi sinh không còn là sói nữa.",
			"Ivarr ra lệnh cuối cùng: \"Hãy sống sót trở về.\"",
			"Nhưng Hư Vô muốn nuốt chửng mọi thứ.",
			"Chỉ còn lại sự kháng cự cuối cùng."
		],
		"thai": [
			"ทุ่งหิมะทั้งหมดกลายเป็นปากที่หิวโหย.",
			"หมาป่าที่ฟื้นคืนชีพไม่ใชหมาป่าอีกต่อไป.",
			"อิวาร์ออกคำสั่งสุดท้าย: \"จงกลับไปอย่างมีชีวิต.\"",
			"แต่ความว่างเปล่าพยายามจะกลืนกินทุกสิ่ง.",
			"เหลือเพียงการต่อต้านครั้งสุดท้าย."
		],
		"hindi": [
			"पूरा बर्फीला मैदान एक भूखा मुंह बन गया।",
			"पुनर्जीवित भेड़िया अब भेड़िया नहीं रहा।",
			"इवार ने अपना अंतिम आदेश दिया: \"जीवित लौटो।\"",
			"परन्तु शून्यता सब कुछ निगलने वाली थी।",
			"केवल अंतिम प्रतिरोध ही बचा था।"
		]
	},
	"epilogue": {
		"korean": [
			"끝없는 굶주림의 시대는 막을 내렸다.",
			"설원은 영원히 과거의 모습을 되찾을 수 없었다.",
			"살아남은 자들은 걸었다. 공허가 남긴 상처를 안고.",
			"그것은 승리였을까, 혹은 더 큰 비극의 시작이었을까.",
			"다만, 차가운 바람 속에서 새로운 희망의 씨앗이 움트고 있었다."
		],
		"english": [
			"The age of endless hunger came to an end.",
			"The snowfield could never reclaim its past form.",
			"The survivors walked on, bearing the scars left by the Void.",
			"Was it a victory, or the beginning of a greater tragedy?",
			"Yet, amidst the cold wind, the seeds of a new hope were sprouting."
		],
		"japanese": [
			"終わりのない飢餓の時代は幕を閉じた。",
			"雪原は永遠に過去の姿を取り戻すことはできなかった。",
			"生き残った者たちは、虚無が残した傷を抱えて歩んだ。",
			"それは勝利だったのか、あるいはさらなる悲劇の始まりだったのか。",
			"ただ、冷たい風の中で、新たな希望の種が芽吹いていた。"
		],
		"chinese": [
			"无尽饥饿的时代落下了帷幕。",
			"雪原永远无法恢复往昔的模样。",
			"幸存者们前行着，带着虚空留下的创伤。",
			"那是胜利，亦或是一场更大悲剧的开端？",
			"然而，在寒风中，新的希望之种正在萌芽。"
		],
		"french": [
			"L'ère de la faim sans fin prit fin.",
			"La toundra ne put jamais retrouver son aspect d'antan.",
			"Les survivants marchèrent, portant les cicatrices laissées par le Néant.",
			"Était-ce une victoire, ou le début d'une tragédie plus grande ?",
			"Cependant, dans le vent froid, les graines d'un nouvel espoir germaient."
		],
		"spanish": [
			"La era del hambre sin fin llegó a su fin.",
			"La llanura nevada nunca pudo recuperar su forma pasada.",
			"Los supervivientes caminaron, cargando las cicatrices que dejó el Vacío.",
			"¿Fue una victoria o el comienzo de una tragedia mayor?",
			"Sin embargo, en el viento frío, las semillas de una nueva esperanza germinaban."
		],
		"vietnamese": [
			"Thời đại đói khát vô tận đã kết thúc.",
			"Vùng tuyết nguyên không bao giờ có thể trở lại hình dạng xưa.",
			"Những người sống sót bước đi, mang theo những vết sẹo do Hư Vô để lại.",
			"Đó là chiến thắng, hay là khởi đầu của một bi kịch lớn hơn?",
			"Tuy nhiên, trong làn gió lạnh, hạt giống hy vọng mới đang nảy mầm."
		],
		"thai": [
			"ยุคแห่งความหิวโหยไม่สิ้นสุดได้สิ้นลงแล้ว.",
			"ทุ่งหิมะไม่สามารถคืนสู่สภาพเดิมได้ตลอดไป.",
			"ผู้รอดชีวิตเดินต่อไป พร้อมกับรอยแผลที่ความว่างเปล่าทิ้งไว้.",
			"มันคือชัยชนะ หรือจุดเริ่มต้นของโศกนาฏกรรมที่ยิ่งใหญ่กว่ากัน?",
			"กระนั้นท่ามกลางลมหนาว เมล็ดพันธุ์แห่งความหวังใหม่ก็กำลังผลิบาน."
		],
		"hindi": [
			"अंतहीन भूख का युग समाप्त हो गया।",
			"बर्फीला मैदान कभी भी अपना पुराना रूप वापस नहीं पा सका।",
			"बचे हुए लोग चले, शून्यता के छोड़े हुए घावों को सहते हुए।",
			"क्या यह एक जीत थी, या एक बड़ी त्रासदी की शुरुआत?",
			"हालांकि, ठंडी हवा में, एक नई उम्मीद के बीज अंकुरित हो रहे थे।"
		]
	}
} as const;
