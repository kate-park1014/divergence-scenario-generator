export const scenario_hell_pool_105_05 = {
	"scenario_id": "hell_pool_105_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "pool_105"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지옥의 미로, 그 최심부. 고대 지식이 잠든 아카이브의 틈새로 빛이 스며든다.",
						"english": "The labyrinth of hell, its deepest part. Light seeps through the cracks of an archive where ancient knowledge slumbers.",
						"japanese": "地獄の迷宮、その最深部。古の知識が眠る書庫の隙間から光が差し込む。",
						"chinese": "地狱迷宫的最深处。古老知识沉睡的档案缝隙中，渗入了光芒。",
						"french": "Le labyrinthe de l'enfer, en son point le plus profond. La lumière filtre à travers les fissures d'une archive où sommeille un savoir ancien.",
						"spanish": "El laberinto del infierno, en su parte más profunda. La luz se filtra a través de las grietas de un archivo donde yace el conocimiento antiguo.",
						"vietnamese": "Mê cung địa ngục, nơi sâu thẳm nhất. Ánh sáng len lỏi qua khe hở của một kho lưu trữ nơi tri thức cổ xưa đang ngủ yên.",
						"thai": "เขาวงกตนรก ส่วนที่ลึกที่สุด แสงส่องลอดผ่านรอยแยกของคลังเก็บที่ความรู้โบราณหลับใหลอยู่",
						"hindi": "नर्क की भूलभुलैया, उसका सबसे गहरा हिस्सा। प्राचीन ज्ञान के सोए हुए अभिलेखागार की दरारों से रोशनी रिसती है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "…여기까지 오다니. 당신, 정말 특별한 영혼이군요.",
						"english": "...You've made it this far. You truly are a special soul.",
						"japanese": "「…ここまで来るとは。あなた、本当に特別な魂ですね。」",
						"chinese": "……你竟然能走到这里。你真是一个特别的灵魂。",
						"french": "...Vous êtes venu jusqu'ici. Vous êtes vraiment une âme spéciale.",
						"spanish": "...Has llegado hasta aquí. Eres un alma verdaderamente especial.",
						"vietnamese": "...Ngươi đã đến được đây. Ngươi thực sự là một linh hồn đặc biệt.",
						"thai": "...เจ้ามาได้ถึงขนาดนี้ เจ้าช่างเป็นวิญญาณที่พิเศษจริงๆ",
						"hindi": "...तुम यहाँ तक आ पहुँचे। तुम वास्तव में एक विशेष आत्मा हो。"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "키란 테즈는 어디 있지? 모든 진실을 밝혀야겠어.",
						"english": "Where is Kiran Tez? I need to uncover the whole truth.",
						"japanese": "「キラン・テズはどこだ？すべての真実を明らかにしなければ。」",
						"chinese": "基兰·泰兹在哪里？我必须揭露所有真相。",
						"french": "Où est Kiran Tez ? Je dois découvrir toute la vérité.",
						"spanish": "¿Dónde está Kiran Tez? Necesito descubrir toda la verdad.",
						"vietnamese": "Kiran Tez ở đâu? Ta cần phải làm rõ mọi sự thật.",
						"thai": "คิรัน เตซอยู่ที่ไหน? ฉันต้องเปิดเผยความจริงทั้งหมด",
						"hindi": "किरण तेज़ कहाँ है? मुझे सारी सच्चाई उजागर करनी होगी।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는... 당신을 기다리고 있어요. 그의 '마지막 별의 의식'을 위해.",
						"english": "He... is waiting for you. For his 'Ritual of the Last Star'.",
						"japanese": "「彼は…あなたを待っています。彼の『最後の星の儀式』のために。」",
						"chinese": "他……正在等你。为了他的‘最后一颗星的仪式’。",
						"french": "Il... vous attend. Pour son 'Rituel de la Dernière Étoile'.",
						"spanish": "Él... te está esperando. Para su 'Ritual de la Última Estrella'.",
						"vietnamese": "Hắn... đang chờ ngươi. Cho 'Nghi lễ Ngôi sao Cuối cùng' của hắn.",
						"thai": "เขา... กำลังรอคุณอยู่ สำหรับ 'พิธีกรรมแห่งดาวดวงสุดท้าย' ของเขา",
						"hindi": "वह... तुम्हारा इंतजार कर रहा है। अपने 'अंतिम तारे के अनुष्ठान' के लिए।"
					},
					"emotion": "sad",
					"speaker": "mara"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "mara",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이곳은 감옥이 아니에요. 처음부터… 그의 '관측소'였죠.",
						"english": "This isn't a prison. From the very beginning... it was his 'Observatory'.",
						"japanese": "「ここは牢獄ではありません。最初から…彼の『観測所』だったのです。」",
						"chinese": "这里不是监狱。从一开始……它就是他的‘观测站’。",
						"french": "Ce n'est pas une prison. Dès le début... c'était son 'Observatoire'.",
						"spanish": "Esto no es una prisión. Desde el principio... fue su 'Observatorio'.",
						"vietnamese": "Đây không phải là nhà tù. Ngay từ đầu... nó đã là 'Đài quan sát' của hắn.",
						"thai": "ที่นี่ไม่ใช่คุก ตั้งแต่แรกเริ่ม... มันคือ 'หอดูดาว' ของเขา",
						"hindi": "यह जेल नहीं है। शुरू से ही... यह उसकी 'वेधशाला' थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "관측소? 그게 무슨 소리야?",
						"english": "Observatory? What does that mean?",
						"japanese": "「観測所？どういうことだ？」",
						"chinese": "观测站？那是什么意思？",
						"french": "Observatoire ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Observatorio? ¿Qué significa eso?",
						"vietnamese": "Đài quan sát? Ý ngươi là gì?",
						"thai": "หอดูดาว? นั่นหมายความว่ายังไง?",
						"hindi": "वेधशाला? उसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 수많은 영혼의 정수를 모아… 새로운 우주를 창조하거나 정복하려 해요.",
						"english": "He gathers the essence of countless souls... to create or conquer a new universe.",
						"japanese": "「彼は数多くの魂の精髄を集めて…新しい宇宙を創造するか、征服しようとしています。」",
						"chinese": "他收集了无数灵魂的精华……试图创造或征服一个新宇宙。",
						"french": "Il rassemble l'essence d'innombrables âmes... pour créer ou conquérir un nouvel univers.",
						"spanish": "Él reúne la esencia de innumerables almas... para crear o conquistar un nuevo universo.",
						"vietnamese": "Hắn thu thập tinh túy của vô số linh hồn... để tạo ra hoặc chinh phục một vũ trụ mới.",
						"thai": "เขารวบรวมแก่นแท้ของวิญญาณนับไม่ถ้วน... เพื่อสร้างหรือพิชิตจักรวาลใหม่",
						"hindi": "वह अनगिनत आत्माओं का सार एकत्र करता है... एक नया ब्रह्मांड बनाने या जीतने के लिए।"
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "영혼을... 재료로 쓴다는 건가? 말도 안 돼!",
						"english": "Using souls... as materials? That's insane!",
						"japanese": "「魂を…材料にするだと？とんでもない！」",
						"chinese": "灵魂……被当作材料？开什么玩笑！",
						"french": "Utiliser des âmes... comme matériaux ? C'est insensé !",
						"spanish": "¿Usar almas... como materiales? ¡Eso es una locura!",
						"vietnamese": "Dùng linh hồn... làm nguyên liệu? Thật điên rồ!",
						"thai": "ใช้วิญญาณ... เป็นวัตถุดิบงั้นเหรอ? บ้าไปแล้ว!",
						"hindi": "आत्माओं को... सामग्री के रूप में इस्तेमाल करना? यह तो पागलपन है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 계획은 이미 오래전부터 시작되었어요. 이 지옥은 그저 거대한 실험실.",
						"english": "His plan began long ago. This hell is merely a colossal laboratory.",
						"japanese": "「彼の計画はもうずっと前から始まっていました。この地獄はただの巨大な実験室です。」",
						"chinese": "他的计划早已开始。这个地狱只不过是一个巨大的实验室。",
						"french": "Son plan a commencé il y a longtemps. Cet enfer n'est qu'un immense laboratoire.",
						"spanish": "Su plan comenzó hace mucho tiempo. Este infierno es simplemente un laboratorio colosal.",
						"vietnamese": "Kế hoạch của hắn đã bắt đầu từ rất lâu rồi. Địa ngục này chỉ là một phòng thí nghiệm khổng lồ.",
						"thai": "แผนการของเขาเริ่มต้นมานานแล้ว นรกแห่งนี้เป็นเพียงห้องทดลองขนาดมหึมา",
						"hindi": "उसकी योजना बहुत पहले ही शुरू हो गई थी। यह नरक महज़ एक विशाल प्रयोगशाला है।"
					},
					"speaker": "mara"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "mara",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도... 한때 그의 손아귀에 있었어. 이용당했지.",
						"english": "I, too... was once in his grasp. Used.",
						"japanese": "「私も…かつては彼の掌中にあった。利用されたのさ。」",
						"chinese": "我……也曾一度落入他的掌控。被利用了。",
						"french": "Moi aussi... j'étais autrefois sous son emprise. Utilisé.",
						"spanish": "Yo también... estuve una vez en sus manos. Fui utilizado.",
						"vietnamese": "Ta cũng... từng nằm trong tay hắn. Bị lợi dụng.",
						"thai": "ฉันเองก็... เคยอยู่ในกำมือของเขา ถูกใช้เป็นเครื่องมือ",
						"hindi": "मैं भी... एक समय उसके शिकंजे में था। इस्तेमाल किया गया।"
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럼 왜 날 도왔던 거야? 그의 계획에 가담한 거 아니었어?",
						"english": "Then why did you help me? Weren't you part of his plan?",
						"japanese": "「なら、なぜ私を助けたんだ？彼の計画に加担していたんじゃないのか？」",
						"chinese": "那你为什么帮助我？你不是参与了他的计划吗？",
						"french": "Alors pourquoi m'as-tu aidé ? Tu ne faisais pas partie de son plan ?",
						"spanish": "¿Entonces por qué me ayudaste? ¿No eras parte de su plan?",
						"vietnamese": "Vậy tại sao ngươi lại giúp ta? Ngươi không phải là một phần trong kế hoạch của hắn sao?",
						"thai": "แล้วทำไมถึงช่วยฉันล่ะ? คุณไม่ได้เป็นส่วนหนึ่งของแผนการของเขาเหรอ?",
						"hindi": "तो तुमने मेरी मदद क्यों की? क्या तुम उसकी योजना का हिस्सा नहीं थे?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그에게서 벗어날 수 없었지만... 당신을 통해 희망을 봤어.",
						"english": "I couldn't escape him... but through you, I saw hope.",
						"japanese": "彼から逃れることはできなかったが…あなたを通して希望を見た。",
						"chinese": "我无法摆脱他...但通过你，我看到了希望。",
						"french": "Je ne pouvais pas lui échapper... mais à travers toi, j'ai vu l'espoir.",
						"spanish": "No pude escapar de él... pero a través de ti, vi esperanza.",
						"vietnamese": "Tôi không thể thoát khỏi hắn... nhưng qua bạn, tôi đã thấy hy vọng.",
						"thai": "ฉันหนีจากเขาไม่ได้... แต่ผ่านคุณ ฉันเห็นความหวัง",
						"hindi": "मैं उससे बच नहीं पाई... लेकिन तुम्हारे माध्यम से, मैंने आशा देखी।"
					},
					"emotion": "base",
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "키란 테즈는 영혼의 정수를 흡수해. 그의 에너지를 불안정하게 만들면…",
						"english": "Kiran Tez absorbs the essence of souls. If we destabilize his energy...",
						"japanese": "キラン・テズは魂の精髄を吸収する。彼のエネルギーを不安定にすれば…",
						"chinese": "奇兰·特兹吸收灵魂的精华。如果我们将他的能量变得不稳定...",
						"french": "Kiran Tez absorbe l'essence des âmes. Si nous déstabilisons son énergie...",
						"spanish": "Kiran Tez absorbe la esencia de las almas. Si desestabilizamos su energía...",
						"vietnamese": "Kiran Tez hấp thụ tinh hoa linh hồn. Nếu chúng ta làm năng lượng của hắn bất ổn...",
						"thai": "คิรัน เทซดูดซับแก่นวิญญาณ ถ้าเราทำให้พลังงานของเขาไม่เสถียร...",
						"hindi": "किरण तेज आत्माओं का सार अवशोषित करता है। अगर हम उसकी ऊर्जा को अस्थिर कर दें..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그를 막을 수 있다는 거야?",
						"english": "You mean we can stop him?",
						"japanese": "彼を止められると？",
						"chinese": "你的意思是我们可以阻止他？",
						"french": "Tu veux dire qu'on peut l'arrêter ?",
						"spanish": "¿Quieres decir que podemos detenerlo?",
						"vietnamese": "Ý bạn là chúng ta có thể ngăn hắn?",
						"thai": "คุณหมายความว่าเราหยุดเขาได้เหรอ?",
						"hindi": "तुम्हारा मतलब है हम उसे रोक सकते हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래. 그의 '마지막 별의 의식'이 시작되기 전에... 핵심 에너지를 파괴해야 해.",
						"english": "Yes. Before his 'Last Star Ritual' begins... we must destroy his core energy.",
						"japanese": "そうだ。彼の『最後の星の儀式』が始まる前に…核となるエネルギーを破壊しなければならない。",
						"chinese": "是的。在他的“最后一颗星的仪式”开始之前...我们必须摧毁他的核心能量。",
						"french": "Oui. Avant que son 'Rituel de la Dernière Étoile' ne commence... nous devons détruire son énergie centrale.",
						"spanish": "Sí. Antes de que comience su 'Ritual de la Última Estrella'... debemos destruir su energía central.",
						"vietnamese": "Đúng vậy. Trước khi 'Nghi thức Ngôi sao Cuối cùng' của hắn bắt đầu... chúng ta phải phá hủy năng lượng cốt lõi của hắn.",
						"thai": "ใช่ ก่อนที่ 'พิธีกรรมดาวดวงสุดท้าย' ของเขาจะเริ่ม... เราต้องทำลายพลังงานหลักของเขา",
						"hindi": "हाँ। उसके 'आखिरी तारे के अनुष्ठान' के शुरू होने से पहले... हमें उसकी मूल ऊर्जा को नष्ट करना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "mara",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 곳은 없어. 모든 걸 끝낼 거야.",
						"english": "There's no turning back now. I'll end everything.",
						"japanese": "もう後戻りはできない。全てを終わらせる。",
						"chinese": "现在没有回头路了。我将结束一切。",
						"french": "Plus de retour en arrière possible. Je vais tout finir.",
						"spanish": "Ya no hay vuelta atrás. Voy a acabar con todo.",
						"vietnamese": "Giờ không còn đường lui nữa. Tôi sẽ kết thúc tất cả.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ฉันจะจบทุกอย่าง",
						"hindi": "अब पीछे हटने का कोई रास्ता नहीं है। मैं सब कुछ खत्म कर दूँगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 당신의 분노마저 이용하려 들 거예요. 절대 흔들리지 마세요.",
						"english": "He'll even try to use your rage. Don't waver.",
						"japanese": "彼はあなたの怒りさえ利用しようとするでしょう。決して揺らがないでください。",
						"chinese": "他甚至会试图利用你的愤怒。千万不要动摇。",
						"french": "Il tentera même d'utiliser ta colère. Ne fléchis pas.",
						"spanish": "Él incluso intentará usar tu ira. No te tambalees.",
						"vietnamese": "Hắn sẽ cố lợi dụng cả cơn giận của bạn. Đừng lung lay.",
						"thai": "เขาจะพยายามใช้แม้กระทั่งความโกรธของคุณ อย่าหวั่นไหวเด็ดขาด",
						"hindi": "वह तुम्हारे क्रोध का भी उपयोग करने की कोशिश करेगा। डगमगाना मत।"
					}
				},
				{
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "mara"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마라의 모습이 어둠 속으로 사라졌다. 남은 것은 키란 테즈와의 대결뿐.",
						"english": "Mara vanished into the darkness. Only a confrontation with Kiran Tez remained.",
						"japanese": "マーラの姿は闇の中へ消えた。残されたのはキラン・テズとの対決のみ。",
						"chinese": "玛拉的身影消失在黑暗中。只剩下与奇兰·特兹的对决。",
						"french": "La silhouette de Mara disparut dans les ténèbres. Seule une confrontation avec Kiran Tez demeurait.",
						"spanish": "La figura de Mara desapareció en la oscuridad. Solo quedaba un enfrentamiento con Kiran Tez.",
						"vietnamese": "Bóng dáng Mara biến mất vào bóng tối. Chỉ còn lại cuộc đối đầu với Kiran Tez.",
						"thai": "ร่างของมาราหายไปในความมืดมิด เหลือเพียงการเผชิญหน้ากับคิรัน เทซเท่านั้น",
						"hindi": "मारा की आकृति अँधेरे में गायब हो गई। केवल किरण तेज के साथ टकराव बचा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이걸로 날 막을 수 있을 거라 생각하나? 나의 계획은… 이미 시작되었다.",
						"english": "...Do you truly think this meager effort can stop me? My plan... has already begun.",
						"japanese": "…これしきで私を止められるとでも？私の計画は…既に始まっている。",
						"chinese": "…你真以为凭这点就能阻止我？我的计划…已经开始了。",
						"french": "...Penses-tu vraiment que ça puisse m'arrêter ? Mon plan... a déjà commencé.",
						"spanish": "...¿De verdad crees que esto puede detenerme? Mi plan... ya ha comenzado.",
						"vietnamese": "...Ngươi nghĩ chỉ vậy có thể ngăn được ta sao? Kế hoạch của ta... đã bắt đầu rồi.",
						"thai": "...เจ้าคิดว่าแค่แค่นี้จะหยุดข้าได้งั้นรึ? แผนการของข้า... ได้เริ่มขึ้นแล้ว",
						"hindi": "...क्या तुम्हें लगता है कि बस इससे मुझे रोका जा सकता है? मेरी योजना... पहले ही शुरू हो चुकी है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직도 뭘 꾸미고 있는 거지? 모든 게 끝났다고!",
						"english": "What are you still plotting? It's all over!",
						"japanese": "まだ何か企んでいるのか？全ては終わったんだ！",
						"chinese": "你还在策划什么？一切都结束了！",
						"french": "Que complotes-tu encore ? C'est fini !",
						"spanish": "¿Qué sigues tramando? ¡Todo ha terminado!",
						"vietnamese": "Ngươi còn âm mưu gì nữa? Mọi chuyện đã kết thúc rồi!",
						"thai": "เจ้ายังคิดจะทำอะไรอีก? ทุกอย่างมันจบแล้ว!",
						"hindi": "तुम अभी भी क्या साजिश कर रहे हो? सब खत्म हो गया!"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그의 육체는 쓰러졌지만… 그의 의식은 아직…",
						"english": "...His body has fallen... but his consciousness remains...",
						"japanese": "…彼の肉体は倒れたが…彼の意識はまだ…",
						"chinese": "…他的肉体倒下了…但他的意识还在…",
						"french": "...Son corps est tombé... mais sa conscience demeure...",
						"spanish": "...Su cuerpo ha caído... pero su conciencia aún...",
						"vietnamese": "...Thể xác hắn đã gục ngã... nhưng ý thức hắn vẫn còn...",
						"thai": "...ร่างของเขาล้มลงแล้ว... แต่สติของเขายังคงอยู่...",
						"hindi": "...उसका शरीर तो गिर गया... लेकिन उसकी चेतना अभी भी..."
					},
					"emotion": "sad",
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우주의 균형은 위태롭게 유지되었다. 그러나 진정한 끝은 아직 오지 않았다.",
						"english": "The balance of the cosmos was precariously maintained. Yet, the true end has not yet come.",
						"japanese": "宇宙の均衡は危うく保たれた。しかし、真の終わりはまだ来ていない。",
						"chinese": "宇宙的平衡得以岌岌可危地维持。然而，真正的终结尚未到来。",
						"french": "L'équilibre du cosmos fut précairement maintenu. Pourtant, la vraie fin n'est pas encore venue.",
						"spanish": "El equilibrio del cosmos se mantuvo precariamente. Sin embargo, el verdadero fin aún no ha llegado.",
						"vietnamese": "Sự cân bằng của vũ trụ được duy trì một cách mong manh. Thế nhưng, cái kết thực sự vẫn chưa đến.",
						"thai": "สมดุลของจักรวาลถูกรักษาไว้อย่างเปราะบาง ทว่า จุดจบที่แท้จริงยังมาไม่ถึง",
						"hindi": "ब्रह्मांड का संतुलन नाजुक रूप से बना रहा। फिर भी, असली अंत अभी बाकी है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "셀 수 없는 저주받은 영혼의 정수 한가운데, 키란 테즈가 서 있었다.",
						"english": "Amidst countless cursed souls, Kiran Tez stood.",
						"japanese": "数え切れない呪われた魂の精髄の真ん中に、キラン・テズは立っていた。",
						"chinese": "在无数被诅咒的灵魂精华之中，奇兰·特兹屹立着。",
						"french": "Au milieu d'innombrables âmes maudites, Kiran Tez se tenait.",
						"spanish": "En medio de incontables almas malditas, Kiran Tez se erguía.",
						"vietnamese": "Giữa vô số tinh hoa linh hồn bị nguyền rủa, Kiran Tez đứng đó.",
						"thai": "ท่ามกลางแก่นวิญญาณต้องสาปนับไม่ถ้วน คิรัน เทซยืนอยู่",
						"hindi": "अनगिनत शापित आत्माओं के सार के बीच, किरण तेज खड़ा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "왔군, 나의 마지막 별이여. 어리석은 필멸자들.",
						"english": "You've come, my last star. Foolish mortals.",
						"japanese": "来たな、我が最後の星よ。愚かなる定命の者たちよ。",
						"chinese": "你来了，我最后的星辰。愚蠢的凡人。",
						"french": "Tu es venu, ma dernière étoile. Mortels insensés.",
						"spanish": "Has venido, mi última estrella. Necios mortales.",
						"vietnamese": "Ngươi đã đến, ngôi sao cuối cùng của ta. Những kẻ phàm trần ngu ngốc.",
						"thai": "เจ้ามาแล้ว, ดาวดวงสุดท้ายของข้า. มนุษย์ผู้โง่เขลาเอ๋ย",
						"hindi": "तुम आ गए, मेरे आखिरी तारे। मूर्ख नश्वर।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈이 꾸민 짓이었군! 이 지옥의 모든 영혼을 이용해?",
						"english": "So this was your doing! Using all the souls in this hell?",
						"japanese": "お前が仕組んだことだったのか！この地獄の全ての魂を利用して？",
						"chinese": "原来是你搞的鬼！利用这地狱里所有的灵魂？",
						"french": "C'était donc ton œuvre ! Utiliser toutes les âmes de cet enfer ?",
						"spanish": "¡Así que esto era obra tuya! ¿Usando todas las almas de este infierno?",
						"vietnamese": "Vậy ra đây là âm mưu của ngươi! Lợi dụng tất cả linh hồn trong địa ngục này?",
						"thai": "นี่เป็นฝีมือแกงั้นเหรอ! ใช้ประโยชน์จากวิญญาณทั้งหมดในนรกนี้?",
						"hindi": "तो यह तुम्हारी करतूत थी! इस नर्क की सभी आत्माओं का उपयोग कर रहे हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "내가 이곳에 갇혔다고 생각했나? 이곳은 나의 다음 '관측소'일 뿐이다.",
						"english": "Did you think I was trapped here? This is merely my next 'observatory'.",
						"japanese": "私がここに閉じ込められたとでも思ったか？ここは次の『観測所』に過ぎない。",
						"chinese": "你以为我被困在这里了吗？这里不过是我的下一个'观测站'罢了。",
						"french": "Tu pensais que j'étais piégé ici ? Ce n'est que mon prochain 'observatoire'.",
						"spanish": "¿Pensaste que estaba atrapado aquí? Esto es meramente mi próximo 'observatorio'.",
						"vietnamese": "Ngươi nghĩ ta bị nhốt ở đây sao? Đây chỉ là 'đài quan sát' tiếp theo của ta thôi.",
						"thai": "เจ้าคิดว่าข้าติดอยู่ที่นี่งั้นรึ? ที่นี่เป็นเพียง 'หอดูดาว' แห่งต่อไปของข้าเท่านั้น",
						"hindi": "क्या तुम्हें लगा मैं यहाँ फँस गया हूँ? यह तो बस मेरा अगला 'वेधशाला' है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그리고 너는, 나의 위대한 설계에서 가장 중요한 마지막 별이지!",
						"english": "And you, you are the final, most crucial star in my grand design!",
						"japanese": "そして貴様は、我が偉大な設計において最も重要な最後の星だ！",
						"chinese": "而你，你就是我宏伟设计中最重要的最后一颗星辰！",
						"french": "Et toi, tu es la dernière et la plus cruciale étoile de mon grand dessein !",
						"spanish": "¡Y tú, tú eres la última y más crucial estrella en mi gran diseño!",
						"vietnamese": "Và ngươi, ngươi là ngôi sao cuối cùng, quan trọng nhất trong kế hoạch vĩ đại của ta!",
						"thai": "และเจ้า เจ้าคือดวงดาวสุดท้ายที่สำคัญที่สุดในแผนการอันยิ่งใหญ่ของข้า!",
						"hindi": "और तुम, तुम मेरी भव्य योजना में सबसे महत्वपूर्ण, आखिरी सितारे हो!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우주의 질서를 가지고 놀 생각 마! 여기서 끝내주겠어!",
						"english": "Don't toy with the order of the cosmos! I'll end you here!",
						"japanese": "宇宙の秩序を弄ぶな！ここで終わりにしてやる！",
						"chinese": "别玩弄宇宙的秩序！我会在这里终结你！",
						"french": "Ne joue pas avec l'ordre du cosmos ! Je vais t'achever ici !",
						"spanish": "¡No juegues con el orden del cosmos! ¡Te acabaré aquí!",
						"vietnamese": "Đừng đùa giỡn với trật tự vũ trụ! Ta sẽ kết thúc ngươi tại đây!",
						"thai": "อย่ามาเล่นกับระเบียบของจักรวาล! ข้าจะจัดการเจ้าที่นี่!",
						"hindi": "ब्रह्मांड के क्रम से मत खेलो! मैं तुम्हें यहीं खत्म कर दूँगा!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석군. 너의 분노는 그저 나의 영원한 실험에 불을 지필 뿐이다.",
						"english": "Foolish. Your rage merely fuels my eternal experiment.",
						"japanese": "愚か者め。貴様の怒りは、ただ我が永遠の実験に火を注ぐだけだ。",
						"chinese": "愚蠢。你的愤怒只会为我永恒的实验火上浇油。",
						"french": "Imbécile. Ta rage ne fait qu'alimenter mon éternelle expérience.",
						"spanish": "Necio. Tu ira solo alimenta mi experimento eterno.",
						"vietnamese": "Thật ngốc nghếch. Cơn giận của ngươi chỉ làm bùng cháy thêm thí nghiệm vĩnh cửu của ta thôi.",
						"thai": "โง่เขลา ความโกรธของเจ้าเป็นเพียงเชื้อเพลิงให้การทดลองชั่วนิรันดร์ของข้าเท่านั้น",
						"hindi": "मूर्ख। तुम्हारा क्रोध बस मेरे अनंत प्रयोग को और हवा देता है।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽... 아직... 끝나지 않았어. 포기하지 않아!",
						"english": "Urgh... It's not... over yet. I won't give up!",
						"japanese": "くっ…まだ…終わってない。諦めないぞ！",
						"chinese": "呃…还没…结束。我不会放弃的！",
						"french": "Ugh... Ce n'est pas... encore fini. Je n'abandonnerai pas !",
						"spanish": "Ugh... Todavía no... ha terminado. ¡No me rendiré!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc. Ta sẽ không bỏ cuộc!",
						"thai": "อึก... ยังไม่... จบ! ข้าไม่ยอมแพ้!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ। मैं हार नहीं मानूँगा!"
					}
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"키란 테즈의 야망은 꺾였다. 그러나 지옥의 심연은 여전히 침묵 속에 잠겨 있다.",
			"수많은 영혼들의 정수는 우주로 되돌아갔을까, 아니면…",
			"마라의 눈빛 속에는 여전히 풀리지 않은 의문이 드리워져 있었다.",
			"모든 것이 끝난 것 같지만, 어쩌면 진정한 이야기는 이제부터 시작될지도 모른다.",
			"차원 간의 징검다리는 여전히 존재했다."
		],
		"english": [
			"Kiran Tez's ambition was thwarted. Yet, the abyss of hell remains steeped in silence.",
			"Did the essence of countless souls return to the cosmos, or...?",
			"Unanswered questions still lingered in Mara's eyes.",
			"It seems everything has ended, but perhaps the true story is just beginning.",
			"The bridge between dimensions still existed."
		],
		"japanese": [
			"キラン・テズの野望は潰えた。しかし、地獄の深淵は依然として沈黙に包まれている。",
			"無数の魂の精髄は宇宙へと還ったのか、あるいは…？",
			"マーラの瞳には、いまだ解かれぬ疑問が漂っていた。",
			"全てが終わったように見えるが、もしかしたら真の物語はここから始まるのかもしれない。",
			"次元間の架け橋は、依然として存在していた。"
		],
		"chinese": [
			"基兰·泰兹的野心破灭了。然而，地狱的深渊依然沉寂无声。",
			"无数灵魂的精粹是否回到了宇宙，抑或是……",
			"玛拉的眼中依然笼罩着未解的疑问。",
			"一切似乎都已结束，但或许真正的故事才刚刚开始。",
			"次元之间的桥梁依然存在。"
		],
		"french": [
			"L'ambition de Kiran Tez fut anéantie. Pourtant, l'abysse de l'enfer demeure plongé dans le silence.",
			"L'essence d'innombrables âmes est-elle retournée au cosmos, ou...?",
			"Des questions sans réponse planaient toujours dans les yeux de Mara.",
			"Tout semble terminé, mais peut-être que la véritable histoire ne fait que commencer.",
			"Le pont entre les dimensions existait toujours."
		],
		"spanish": [
			"La ambición de Kiran Tez fue frustrada. Sin embargo, el abismo del infierno sigue sumido en el silencio.",
			"¿Regresó la esencia de incontables almas al cosmos, o...?",
			"Preguntas sin respuesta aún persistían en los ojos de Mara.",
			"Todo parece haber terminado, pero quizás la verdadera historia apenas esté comenzando.",
			"El puente entre dimensiones aún existía."
		],
		"vietnamese": [
			"Tham vọng của Kiran Tez đã bị dập tắt. Tuy nhiên, vực sâu địa ngục vẫn chìm trong im lặng.",
			"Tinh túy của vô số linh hồn đã trở về vũ trụ, hay là...?",
			"Trong ánh mắt của Mara vẫn còn vương vấn những câu hỏi chưa được giải đáp.",
			"Mọi thứ dường như đã kết thúc, nhưng có lẽ câu chuyện thật sự chỉ mới bắt đầu.",
			"Cầu nối giữa các chiều không gian vẫn còn tồn tại."
		],
		"thai": [
			"ความทะเยอทะยานของคิรัน เตซถูกหยุดยั้ง แต่ห้วงลึกของนรกยังคงเงียบงัน",
			"แก่นแท้ของวิญญาณนับไม่ถ้วนกลับคืนสู่จักรวาลแล้วหรือ หรือว่า...",
			"ในดวงตาของมารา ยังคงมีคำถามที่ยังไม่คลี่คลาย",
			"ทุกสิ่งดูเหมือนจะจบลงแล้ว แต่อาจเป็นไปได้ว่าเรื่องราวที่แท้จริงกำลังจะเริ่มต้นขึ้น",
			"สะพานเชื่อมระหว่างมิติยังคงอยู่"
		],
		"hindi": [
			"किरण तेज़ की महत्वाकांक्षा विफल हो गई। फिर भी, नर्क की खाई अभी भी खामोशी में डूबी है।",
			"क्या अनगिनत आत्माओं का सार ब्रह्मांड में लौट आया, या...?",
			"मारा की आँखों में अभी भी अनसुलझे सवाल मंडरा रहे थे।",
			"ऐसा लगता है कि सब कुछ खत्म हो गया है, लेकिन शायद सच्ची कहानी अब शुरू हो रही है।",
			"आयामों के बीच का पुल अभी भी मौजूद था।"
		]
	},
	"prologue": {
		"korean": [
			"지옥의 심연, 끝없는 고통의 소용돌이 속.",
			"키란 테즈, 추방된 대마법사의 그림자가 모든 것을 집어삼킨다.",
			"영혼의 정수로 빚어낼 새로운 우주. 혹은, 완벽한 정복.",
			"마지막 별의 의식이 시작된다. 이 모든 것을 끝낼 최후의 결전이."
		],
		"english": [
			"In the abyss of hell, a vortex of endless torment.",
			"Kiran Tez, the shadow of the exiled archmage, devours all.",
			"A new universe forged from the essence of souls. Or, perfect conquest.",
			"The ritual of the last star begins. The final showdown to end all of this."
		],
		"japanese": [
			"地獄の深淵、終わりなき苦痛の渦の中。",
			"追放されし大魔導師、キラン・テズの影が全てを飲み込む。",
			"魂の精髄で織りなす新たな宇宙。あるいは、完璧なる征服。",
			"最後の星の儀式が始まる。この全てを終わらせる最後の決戦が。"
		],
		"chinese": [
			"地狱深渊，无尽痛苦的漩涡之中。",
			"被放逐的大魔法师基兰·泰兹的影子吞噬一切。",
			"由灵魂精粹铸就的新宇宙。亦或是，完美的征服。",
			"最后一颗星辰的仪式开始了。终结这一切的最终决战。"
		],
		"french": [
			"Dans l'abysse de l'enfer, un tourbillon de souffrance infinie.",
			"Kiran Tez, l'ombre de l'archimage exilé, dévore tout.",
			"Un nouvel univers forgé de l'essence des âmes. Ou, la conquête parfaite.",
			"Le rituel de la dernière étoile commence. L'ultime confrontation pour mettre fin à tout cela."
		],
		"spanish": [
			"En el abismo del infierno, un torbellino de tormento sin fin.",
			"Kiran Tez, la sombra del archimago exiliado, lo devora todo.",
			"Un nuevo universo forjado con la esencia de las almas. O, la conquista perfecta.",
			"El ritual de la última estrella comienza. La confrontación final que pondrá fin a todo."
		],
		"vietnamese": [
			"Trong vực sâu địa ngục, giữa vòng xoáy đau khổ vô tận.",
			"Kiran Tez, bóng tối của đại pháp sư bị trục xuất, nuốt chửng tất cả.",
			"Một vũ trụ mới được tạo nên từ tinh túy linh hồn. Hoặc, sự chinh phục hoàn hảo.",
			"Nghi lễ của ngôi sao cuối cùng bắt đầu. Trận quyết chiến cuối cùng để kết thúc tất cả."
		],
		"thai": [
			"ในห้วงลึกของนรก หมุนวนด้วยความทรมานไม่สิ้นสุด",
			"คิรัน เตซ เงาของจอมเวทผู้ถูกเนรเทศ กลืนกินทุกสิ่ง",
			"จักรวาลใหม่ที่หลอมรวมจากแก่นแท้ของวิญญาณ หรือการพิชิตอันสมบูรณ์แบบ",
			"พิธีกรรมแห่งดวงดาวสุดท้ายเริ่มขึ้น การต่อสู้ครั้งสุดท้ายที่จะจบสิ้นทุกสิ่ง"
		],
		"hindi": [
			"नर्क की खाई में, अंतहीन पीड़ा के भंवर में।",
			"किरण तेज़, निर्वासित महाजादूगर की परछाई, सब कुछ निगल लेती है।",
			"आत्माओं के सार से बना एक नया ब्रह्मांड। या, पूर्ण विजय।",
			"अंतिम तारे का अनुष्ठान शुरू होता है। इस सब को समाप्त करने के लिए अंतिम मुकाबला।"
		]
	}
} as const;
