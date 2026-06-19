export const scenario_modern_evan_10_02 = {
	"scenario_id": "modern_evan_10_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 다른 대기실. 벽에 걸린 시계는 영원히 멈춰 있었다.",
						"english": "Another waiting room. The clock on the wall was stopped forever.",
						"japanese": "また別の待合室。壁の時計は永遠に止まっていた。",
						"chinese": "另一个等候室。墙上的时钟永远停滞了。",
						"french": "Une autre salle d'attente. L'horloge au mur était arrêtée pour toujours.",
						"spanish": "Otra sala de espera. El reloj en la pared se había detenido para siempre.",
						"vietnamese": "Một phòng chờ khác. Chiếc đồng hồ treo tường đã ngừng chạy vĩnh viễn.",
						"thai": "ห้องรออีกห้อง นาฬิกาแขวนผนังหยุดเดินตลอดกาล",
						"hindi": "एक और प्रतीक्षा कक्ष। दीवार पर लगी घड़ी हमेशा के लिए रुक गई थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "괜찮아, 에반이 그랬어. '다음 기회는 올 거야'.",
						"english": "It's okay, Evan said. 'The next chance will come.'",
						"japanese": "大丈夫、エバンが言った。「次の機会は来るだろう」。",
						"chinese": "没关系，埃文说过。“下一次机会会来的。”",
						"french": "Ça va, Evan a dit. « La prochaine chance viendra. »",
						"spanish": "Está bien, dijo Evan. 'La próxima oportunidad llegará.'",
						"vietnamese": "Không sao đâu, Evan đã nói. 'Cơ hội tiếp theo sẽ đến thôi.'",
						"thai": "ไม่เป็นไร อีวานบอกว่า 'โอกาสหน้าจะมีมา'",
						"hindi": "कोई बात नहीं, एवान ने कहा था। 'अगला मौका ज़रूर आएगा।'"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그 말이 이젠 좀 낯설어.",
						"english": "...That phrase feels a bit strange now.",
						"japanese": "…その言葉が、今は少し馴染めない。",
						"chinese": "……那句话现在听起来有点陌生。",
						"french": "...Ces mots me semblent un peu étranges maintenant.",
						"spanish": "...Esas palabras me resultan un poco extrañas ahora.",
						"vietnamese": "...Câu nói đó giờ nghe hơi lạ.",
						"thai": "...คำพูดนั้นตอนนี้รู้สึกแปลกๆ",
						"hindi": "...वह बात अब थोड़ी अजीब लगती है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "우리가 얼마나 많은 '다음'을 기다렸지?",
						"english": "How many 'nexts' have we waited for?",
						"japanese": "私たちはどれだけ多くの「次」を待っただろう？",
						"chinese": "我们等了多少个“下一个”？",
						"french": "Combien de « prochains » avons-nous attendus ?",
						"spanish": "¿Cuántos 'siguientes' hemos esperado?",
						"vietnamese": "Chúng ta đã chờ bao nhiêu 'lần tiếp theo' rồi?",
						"thai": "เราได้รอ 'ครั้งหน้า' มาแล้วกี่ครั้งกันนะ?",
						"hindi": "हमने कितने 'अगले' की प्रतीक्षा की है?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…끝없이.",
						"english": "...Endlessly.",
						"japanese": "…際限なく。",
						"chinese": "……无尽地。",
						"french": "...Sans fin.",
						"spanish": "...Interminablemente.",
						"vietnamese": "...Vô tận.",
						"thai": "...ไม่สิ้นสุด",
						"hindi": "...अनंत।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "에반은 항상 희망을 말했지. '준비된 자에게 기회는 온다'.",
						"english": "Evan always spoke of hope. 'Opportunity comes to those who are prepared.'",
						"japanese": "エバンはいつも希望を語っていた。「準備された者に機会は訪れる」。",
						"chinese": "埃文总是谈论希望。“机会只留给有准备的人。”",
						"french": "Evan parlait toujours d'espoir. « L'opportunité vient à ceux qui sont préparés. »",
						"spanish": "Evan siempre hablaba de esperanza. 'La oportunidad llega a quienes están preparados.'",
						"vietnamese": "Evan luôn nói về hy vọng. 'Cơ hội sẽ đến với những người đã chuẩn bị sẵn sàng.'",
						"thai": "อีวานมักจะพูดถึงความหวังเสมอ 'โอกาสจะมาถึงผู้ที่พร้อม'",
						"hindi": "एवान हमेशा आशा की बात करता था। 'अवसर उन्हें मिलता है जो तैयार रहते हैं।'"
					},
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하지만 우린 뭘 준비했지? 똑같은 이력서, 똑같은 면접 질문.",
						"english": "But what did we prepare? The same resume, the same interview questions.",
						"japanese": "しかし、私たちは何を準備した？同じ履歴書、同じ面接の質問。",
						"chinese": "但我们准备了什么？同样的简历，同样的面试问题。",
						"french": "Mais qu'avons-nous préparé ? Le même CV, les mêmes questions d'entretien.",
						"spanish": "Pero, ¿qué preparamos? El mismo currículum, las mismas preguntas de entrevista.",
						"vietnamese": "Nhưng chúng ta đã chuẩn bị gì? Cùng một CV, cùng một câu hỏi phỏng vấn.",
						"thai": "แต่เราเตรียมอะไรไว้บ้าง? เรซูเม่แบบเดิม, คำถามสัมภาษณ์แบบเดิมๆ",
						"hindi": "लेकिन हमने क्या तैयारी की? वही बायोडाटा, वही साक्षात्कार के प्रश्न।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 '다음'이 아니야. 그저 무한한 '다시'일 뿐.",
						"english": "This isn't 'next'. It's just an endless 'again'.",
						"japanese": "これは「次」じゃない。ただの無限の「繰り返し」だ。",
						"chinese": "这不是“下一个”。这只是无尽的“重新来过”。",
						"french": "Ce n'est pas \"la suite\". C'est juste un \"encore\" infini.",
						"spanish": "Esto no es un \"siguiente\". Es solo un \"otra vez\" interminable.",
						"vietnamese": "Đây không phải 'tiếp theo'. Chỉ là 'lặp lại' vô tận thôi.",
						"thai": "นี่ไม่ใช่ 'ต่อไป' มันเป็นแค่ 'อีกครั้ง' ที่ไม่มีที่สิ้นสุด",
						"hindi": "यह 'अगला' नहीं है। यह सिर्फ एक अंतहीन 'फिर से' है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "벡스…",
						"english": "Vex...",
						"japanese": "ベックス…",
						"chinese": "贝克斯…",
						"french": "Vex...",
						"spanish": "Vex...",
						"vietnamese": "Vex...",
						"thai": "เวกซ์...",
						"hindi": "वेक्स..."
					}
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "우린 진정으로 나아간 적 없어. 계속 같은 자리를 맴돌았어.",
						"english": "We never truly moved forward. We kept circling the same spot.",
						"japanese": "私たちは本当に前に進んだことなどなかった。ずっと同じ場所をぐるぐる回っていただけだ。",
						"chinese": "我们从未真正前进。我们一直在原地打转。",
						"french": "Nous n'avons jamais vraiment avancé. Nous tournions en rond au même endroit.",
						"spanish": "Nunca avanzamos de verdad. Seguimos dando vueltas en el mismo lugar.",
						"vietnamese": "Chúng ta chưa bao giờ thực sự tiến lên. Chỉ luẩn quẩn ở cùng một chỗ.",
						"thai": "เราไม่เคยก้าวหน้าอย่างแท้จริง เราเอาแต่วนเวียนอยู่กับที่",
						"hindi": "हम कभी आगे नहीं बढ़े। हम उसी जगह पर चक्कर काटते रहे।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모든 게 가짜였어. 에반의 그 긍정적인 말도 족쇄였어!",
						"english": "All of this was fake. Evan's positive words were also shackles!",
						"japanese": "これらすべてが偽物だった。エヴァンのあのポジティブな言葉さえ足枷だったんだ！",
						"chinese": "这所有的一切都是假的。伊万那些积极的话语也是枷锁！",
						"french": "Tout cela était faux. Les mots positifs d'Evan étaient aussi des chaînes !",
						"spanish": "Todo esto era falso. ¡Las palabras positivas de Evan también eran grilletes!",
						"vietnamese": "Tất cả đều giả dối. Những lời tích cực của Evan cũng là xiềng xích!",
						"thai": "ทั้งหมดนี้เป็นของปลอม คำพูดเชิงบวกของอีวานก็เป็นพันธนาการ!",
						"hindi": "यह सब नकली था। ईवान के वे सकारात्मक शब्द भी बेड़ियाँ थीं!"
					},
					"emotion": "angry",
					"speaker": "bex"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "안 돼! 돌아가! 여긴 진짜 끝이 아니야!",
						"english": "No! Go back! This isn't the real end!",
						"japanese": "だめだ！戻れ！ここは本当の終わりじゃない！",
						"chinese": "不！回去！这里不是真正的终点！",
						"french": "Non ! Retourne ! Ce n'est pas la vraie fin !",
						"spanish": "¡No! ¡Regresa! ¡Este no es el verdadero final!",
						"vietnamese": "Không! Quay lại! Đây không phải là kết thúc thực sự!",
						"thai": "ไม่นะ! กลับไป! นี่ไม่ใช่จุดจบที่แท้จริง!",
						"hindi": "नहीं! वापस जाओ! यह असली अंत नहीं है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자가 앞을 가로막았다.",
						"english": "An unknown shadow blocked the way.",
						"japanese": "正体不明の影が前を遮った。",
						"chinese": "一个不明身份的影子挡住了去路。",
						"french": "Une ombre inconnue bloqua le chemin.",
						"spanish": "Una sombra desconocida bloqueó el camino.",
						"vietnamese": "Một bóng đen không rõ danh tính đã chặn đường.",
						"thai": "เงาปริศนาขวางทางไว้",
						"hindi": "एक अज्ञात छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "어딜 가려는가? 아직 준비가 안 됐는데.",
						"english": "Where are you trying to go? You're not ready yet.",
						"japanese": "どこへ行こうというのだ？まだ準備ができていないのに。",
						"chinese": "你想去哪里？你还没准备好。",
						"french": "Où comptes-tu aller ? Tu n'es pas encore prêt.",
						"spanish": "¿Adónde quieres ir? Aún no estás listo.",
						"vietnamese": "Ngươi định đi đâu? Ngươi chưa sẵn sàng.",
						"thai": "เจ้าจะไปที่ไหน? เจ้ายังไม่พร้อม",
						"hindi": "कहाँ जाना चाहते हो? तुम अभी तैयार नहीं हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "빌어먹을…!",
						"english": "Damn it...!",
						"japanese": "くそっ…！",
						"chinese": "该死…！",
						"french": "Bon sang… !",
						"spanish": "¡Maldita sea...!",
						"vietnamese": "Khỉ thật...!",
						"thai": "ให้ตายสิ...!",
						"hindi": "धिक्कार है...!"
					},
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "하…하하… 너 역시 깨닫게 될 거다… 진정한 '다음'은 없다는 것을.",
						"english": "Ha... haha... You too will realize... there is no true 'next'.",
						"japanese": "ハ…ハハ…お前も気づくだろう…真の「次」などないと。",
						"chinese": "哈……哈哈……你也会明白的……没有真正的“下一个”。",
						"french": "Ha... haha... Toi aussi, tu réaliseras... qu'il n'y a pas de véritable 'prochain'.",
						"spanish": "Ja... jaja... Tú también te darás cuenta... de que no hay un verdadero 'siguiente'.",
						"vietnamese": "Ha…haha… Ngươi rồi cũng sẽ nhận ra thôi… rằng không có 'tiếp theo' thật sự nào cả.",
						"thai": "ฮ่า...ฮ่าฮ่า...เจ้าเองก็จะตระหนักได้...ว่าไม่มี 'ครั้งหน้า' ที่แท้จริง.",
						"hindi": "हा... हाहा... तुम्हें भी एहसास होगा... कि कोई सच्चा 'अगला' नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…벡스의 말이 맞았어.",
						"english": "...Bex was right.",
						"japanese": "…ベックスの言う通りだった。",
						"chinese": "……贝克斯说得对。",
						"french": "...Bex avait raison.",
						"spanish": "...Bex tenía razón.",
						"vietnamese": "...Bex đã đúng.",
						"thai": "...ที่เบ็กซ์พูดน่ะถูกแล้ว.",
						"hindi": "...बेक्स सही था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'다음'을 향한 문은 계속 나타났다. 하지만 등 뒤의 길은 사라져 있었다.",
						"english": "Doors to 'next' kept appearing. But the path behind me had vanished.",
						"japanese": "「次」への扉は現れ続けた。だが、背後の道は消え去っていた。",
						"chinese": "通往“下一个”的门不断出现。但身后的路却消失了。",
						"french": "Les portes vers le 'prochain' continuaient d'apparaître. Mais le chemin derrière moi avait disparu.",
						"spanish": "Las puertas al 'siguiente' seguían apareciendo. Pero el camino detrás de mí había desaparecido.",
						"vietnamese": "Cánh cửa dẫn đến 'tiếp theo' liên tục xuất hiện. Nhưng con đường phía sau lưng đã biến mất.",
						"thai": "ประตูสู่ 'ครั้งหน้า' ปรากฏขึ้นเรื่อยๆ แต่ทางด้านหลังกลับหายไปแล้ว.",
						"hindi": "'अगले' के दरवाज़े लगातार आते रहे। लेकिन मेरे पीछे का रास्ता गायब हो गया था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 문이 열리고, 압도적인 기운이 밀려왔다.",
						"english": "A massive door opened, and an overwhelming aura surged forth.",
						"japanese": "巨大な扉が開き、圧倒的な気が押し寄せてきた。",
						"chinese": "巨大的门打开了，一股压倒性的气息扑面而来。",
						"french": "Une porte colossale s'ouvrit, et une aura écrasante en émana.",
						"spanish": "Una puerta gigantesca se abrió, y una aura abrumadora surgió.",
						"vietnamese": "Một cánh cửa khổng lồ mở ra, và một luồng khí áp đảo ùa tới.",
						"thai": "ประตูบานมหึมาเปิดออก พร้อมกับพลังอันน่าท่วมท้นที่ถาโถมเข้ามา",
						"hindi": "एक विशाल द्वार खुला, और एक जबरदस्त आभा उमड़ पड़ी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래, 너도 '다음'을 꿈꾸는가?",
						"english": "So, you also dream of 'next'?",
						"japanese": "そう、君も「次」を夢見るのか？",
						"chinese": "那么，你也梦想着“下一个”吗？",
						"french": "Alors, toi aussi tu rêves du 'prochain' ?",
						"spanish": "¿Así que tú también sueñas con el 'siguiente'?",
						"vietnamese": "Vậy, ngươi cũng mơ về 'tiếp theo' sao?",
						"thai": "งั้น เจ้าก็ฝันถึง 'ครั้งหน้า' ด้วยหรือ?",
						"hindi": "तो, तुम भी 'अगले' का सपना देखते हो?"
					}
				},
				{
					"content": {
						"korean": "난 이 지옥 같은 '다음'을 끝낼 거야.",
						"english": "I'll end this hellish 'next'.",
						"japanese": "俺は、この地獄のような「次」を終わらせる。",
						"chinese": "我会结束这地狱般的“下一个”。",
						"french": "Je mettrai fin à ce 'prochain' infernal.",
						"spanish": "Acabaré con este 'siguiente' infernal.",
						"vietnamese": "Ta sẽ kết thúc cái 'tiếp theo' địa ngục này.",
						"thai": "ข้าจะจบ 'ครั้งหน้า' ที่เหมือนนรกนี่ซะ.",
						"hindi": "मैं इस नरक जैसे 'अगले' को खत्म करूँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석군. '다음'은 영원히 오지 않아. 그게 규칙이다.",
						"english": "Foolish. 'Next' will never come. That's the rule.",
						"japanese": "愚かだな。「次」は永遠に来ない。それがルールだ。",
						"chinese": "愚蠢。“下一个”永远不会到来。那是规则。",
						"french": "Imbécile. Le 'prochain' ne viendra jamais. C'est la règle.",
						"spanish": "Qué estúpido. El 'siguiente' nunca llegará. Esa es la regla.",
						"vietnamese": "Ngốc nghếch. 'Tiếp theo' sẽ không bao giờ đến. Đó là quy tắc.",
						"thai": "โง่เขลา 'ครั้งหน้า' จะไม่มีวันมาถึง นั่นคือกฎ.",
						"hindi": "मूर्ख। 'अगला' कभी नहीं आएगा। यही नियम है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이런 식으로 계속 '다음'을 준비해라.",
						"english": "Keep preparing for 'next' like this.",
						"japanese": "この調子で「次」を準備し続けろ。",
						"chinese": "这样一直准备“下一个”吧。",
						"french": "Continue à te préparer pour le 'prochain' comme ça.",
						"spanish": "Sigue preparándote para el 'siguiente' así.",
						"vietnamese": "Cứ tiếp tục chuẩn bị cho 'tiếp theo' như thế này đi.",
						"thai": "เตรียมตัวสำหรับ 'ครั้งหน้า' แบบนี้ไปเรื่อยๆ.",
						"hindi": "ऐसे ही 'अगले' के लिए तैयारी करते रहो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 우린 여기서 벗어날 거야.",
						"english": "It's not over yet. We'll get out of here.",
						"japanese": "まだ終わってない。俺たちはここから抜け出すんだ。",
						"chinese": "还没结束。我们会离开这里的。",
						"french": "Ce n'est pas encore fini. Nous sortirons d'ici.",
						"spanish": "Aún no ha terminado. Saldremos de aquí.",
						"vietnamese": "Vẫn chưa kết thúc. Chúng ta sẽ thoát khỏi đây.",
						"thai": "ยังไม่จบ เราจะออกไปจากที่นี่.",
						"hindi": "अभी खत्म नहीं हुआ। हम यहाँ से निकलेंगे।"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 문들이 이어지는 대기실.",
			"벡스는 또 다른 '다음'을 준비했다.",
			"하지만 그 기대는 절망으로, 순응은 분노로 변해갔다.",
			"깨어나는 동료의 절규가 이 무한한 공간에 울려 퍼진다."
		],
		"english": [
			"A waiting room with endless doors.",
			"Vex prepared for yet another 'next'.",
			"But that anticipation turned to despair, and compliance to rage.",
			"The cries of awakening comrades echo through this infinite space."
		],
		"japanese": [
			"無限の扉が続く待合室。",
			"ベックスはまた別の「次」を準備した。",
			"しかし、その期待は絶望に、順応は怒りに変わっていった。",
			"目覚める仲間の絶叫が、この無限の空間に響き渡る。"
		],
		"chinese": [
			"无尽之门连接的等候室。",
			"维克斯准备了另一个“下一个”。",
			"然而，那份期待变成了绝望，顺从变成了愤怒。",
			"醒来同伴的哭喊声在这无限空间中回荡。"
		],
		"french": [
			"Une salle d'attente avec des portes infinies.",
			"Vex se préparait pour un autre « prochain ».",
			"Mais cette attente se transforma en désespoir, et l'obéissance en rage.",
			"Les cris des camarades qui s'éveillent résonnent dans cet espace infini."
		],
		"spanish": [
			"Una sala de espera con puertas interminables.",
			"Vex se preparó para otro 'siguiente'.",
			"Pero esa expectativa se convirtió en desesperación, y la sumisión en ira.",
			"Los gritos de los compañeros que despiertan resuenan en este espacio infinito."
		],
		"vietnamese": [
			"Một phòng chờ với những cánh cửa vô tận.",
			"Vex đã chuẩn bị cho một 'lần tiếp theo' khác.",
			"Nhưng sự mong đợi ấy biến thành tuyệt vọng, và sự tuân thủ hóa thành phẫn nộ.",
			"Tiếng kêu thét của đồng đội thức tỉnh vang vọng khắp không gian vô tận này."
		],
		"thai": [
			"ห้องโถงรอที่มีประตูไม่สิ้นสุด",
			"เวกซ์เตรียมพร้อมสำหรับ 'ครั้งหน้า' อีกครั้ง",
			"แต่ความคาดหวังนั้นกลายเป็นความสิ้นหวัง และการยอมรับกลายเป็นความโกรธ",
			"เสียงกรีดร้องของสหายที่ตื่นขึ้นก้องกังวานไปทั่วพื้นที่อันไร้ขีดจำกัดนี้"
		],
		"hindi": [
			"अंतहीन दरवाज़ों वाला प्रतीक्षा कक्ष।",
			"वेक्स ने एक और 'अगले' की तैयारी की।",
			"लेकिन वह उम्मीद निराशा में, और आज्ञाकारिता क्रोध में बदल गई।",
			"जागते हुए साथियों की चीखें इस अनंत स्थान में गूँज रही हैं।"
		]
	}
} as const;
