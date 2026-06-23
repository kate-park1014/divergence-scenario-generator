export const scenario_modern_solace_33_04 = {
	"scenario_id": "modern_solace_33_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전광판의 숫자가 빠르게 줄어들었다. 도시의 풍경이 일그러지기 시작한다.",
						"english": "The numbers on the display board rapidly decreased. The cityscape began to distort.",
						"japanese": "電光掲示板の数字が急速に減った。都市の風景が歪み始める。",
						"chinese": "电子屏幕上的数字迅速减少。城市景象开始扭曲。",
						"french": "Les chiffres du panneau d'affichage diminuaient rapidement. Le paysage urbain commençait à se déformer.",
						"spanish": "Los números en el marcador disminuían rápidamente. El paisaje urbano comenzó a distorsionarse.",
						"vietnamese": "Các con số trên bảng điện tử giảm nhanh chóng. Cảnh quan thành phố bắt đầu biến dạng.",
						"thai": "ตัวเลขบนป้ายดิจิทัลลดลงอย่างรวดเร็ว ทิวทัศน์ของเมืองเริ่มบิดเบี้ยว",
						"hindi": "डिस्प्ले बोर्ड पर अंक तेज़ी से कम हो गए। शहर का नज़ारा विकृत होने लगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 대체… 무슨 일이야?",
						"english": "What in the world… is happening?",
						"japanese": "これ一体…何が起きてるんだ？",
						"chinese": "这到底…是怎么回事？",
						"french": "Qu'est-ce que… c'est que ça ?",
						"spanish": "¿Qué demonios… está pasando?",
						"vietnamese": "Chuyện gì… đang xảy ra vậy?",
						"thai": "นี่มัน… เรื่องอะไรกัน?",
						"hindi": "ये सब… क्या हो रहा है?"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "드디어 막이 오르는군. 아름다운 비극의 서막이.",
						"english": "Finally, the curtain rises. The prelude to a beautiful tragedy.",
						"japanese": "ついに幕が上がるな。美しい悲劇の序幕が。",
						"chinese": "终于，大幕拉开了。一场美丽悲剧的序幕。",
						"french": "Enfin, le rideau se lève. Le prélude d'une belle tragédie.",
						"spanish": "Finalmente, el telón se alza. El preludio de una hermosa tragedia.",
						"vietnamese": "Cuối cùng, màn đã vén. Khúc dạo đầu của một bi kịch đẹp đẽ.",
						"thai": "ในที่สุด ม่านก็เปิดขึ้น อารัมภบทของโศกนาฏกรรมอันงดงาม",
						"hindi": "आखिरकार, पर्दा उठता है। एक खूबसूरत त्रासदी की प्रस्तावना।"
					},
					"emotion": "base",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "애써봐야 소용 없어. 이미 정해진 엔딩인데.",
						"english": "It's no use trying. It's an ending already decided.",
						"japanese": "頑張っても無駄だよ。もう決まったエンディングなんだから。",
						"chinese": "努力也白费。结局早已注定。",
						"french": "Ça ne sert à rien d'essayer. C'est une fin déjà décidée.",
						"spanish": "Es inútil intentarlo. Es un final ya decidido.",
						"vietnamese": "Cố gắng cũng vô ích. Đó là một kết thúc đã định rồi.",
						"thai": "พยายามไปก็ไร้ประโยชน์ มันเป็นตอนจบที่ถูกกำหนดไว้แล้ว",
						"hindi": "कोशिश करना बेकार है। यह पहले से तय अंत है।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야. 우리가 멈출 수 있어!",
						"english": "What are you talking about? We can stop it!",
						"japanese": "何を言ってるんだ。俺たちが止められる！",
						"chinese": "你在说什么。我们能阻止它！",
						"french": "De quoi parles-tu ? On peut l'arrêter !",
						"spanish": "¿De qué hablas? ¡Podemos detenerlo!",
						"vietnamese": "Bạn đang nói gì vậy. Chúng ta có thể ngăn chặn nó!",
						"thai": "คุณกำลังพูดถึงอะไร เราหยุดมันได้!",
						"hindi": "तुम क्या कह रहे हो। हम इसे रोक सकते हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 카운트다운은 시작이 아니야. 그저 예정된 끝을 알리는 시계일 뿐.",
						"english": "That countdown isn't a beginning. It's just a clock announcing the fated end.",
						"japanese": "あのカウントダウンは始まりじゃない。ただの、定められた終わりを告げる時計にすぎない。",
						"chinese": "那个倒计时不是开始。它只是一个预告既定结局的时钟。",
						"french": "Ce compte à rebours n'est pas un début. C'est juste une horloge annonçant la fin prédestinée.",
						"spanish": "Esa cuenta atrás no es un comienzo. Es solo un reloj que anuncia el final predestinado.",
						"vietnamese": "Đồng hồ đếm ngược đó không phải là sự bắt đầu. Nó chỉ là một chiếc đồng hồ báo hiệu kết thúc đã định.",
						"thai": "การนับถอยหลังนั่นไม่ใช่จุดเริ่มต้น มันเป็นเพียงนาฬิกาที่ประกาศจุดจบที่กำหนดไว้",
						"hindi": "वह काउंटडाउन शुरुआत नहीं है। यह सिर्फ नियत अंत की घोषणा करने वाली घड़ी है।"
					}
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
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "솔라스의 노래는 이미 시작되었어. 모두가 잃어버린 것을 그리워할 시간이지.",
						"english": "Solas's song has already begun. It's time for everyone to mourn what they've lost.",
						"japanese": "ソラスの歌はもう始まった。誰もが失ったものを惜しむ時だ。",
						"chinese": "索拉斯的歌声已经响起。是时候让所有人追忆逝去之物了。",
						"french": "Le chant de Solas a déjà commencé. C'est le moment pour chacun de regretter ce qu'il a perdu.",
						"spanish": "La canción de Solas ya ha comenzado. Es hora de que todos lamenten lo que han perdido.",
						"vietnamese": "Khúc ca của Solas đã bắt đầu rồi. Đã đến lúc mọi người thương tiếc những gì đã mất.",
						"thai": "บทเพลงของโซลาสได้เริ่มต้นขึ้นแล้ว ถึงเวลาที่ทุกคนจะโศกเศร้ากับสิ่งที่สูญเสียไป",
						"hindi": "सोलास का गीत पहले ही शुरू हो चुका है। अब सभी के लिए अपने खोए हुए को याद करने का समय है।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "밤거리 사람들이 멜랑콜리에 젖어, 잃어버린 기억을 더듬는 듯했다.",
						"english": "People on the night streets seemed drenched in melancholy, fumbling for lost memories.",
						"japanese": "夜の街の人々はメランコリーに浸り、失われた記憶を手探りしているようだった。",
						"chinese": "夜色下的人们沉浸在忧郁之中，仿佛在追寻逝去的记忆。",
						"french": "Les gens dans les rues nocturnes semblaient imprégnés de mélancolie, fouillant leurs souvenirs perdus.",
						"spanish": "La gente en las calles nocturnas parecía empapada de melancolía, rebuscando recuerdos perdidos.",
						"vietnamese": "Người trên phố đêm đắm chìm trong nỗi buồn, như đang mò mẫm những ký ức đã mất.",
						"thai": "ผู้คนบนถนนยามค่ำคืนดูเหมือนจะจมดิ่งในความหดหู่ ค้นหาความทรงจำที่หายไป",
						"hindi": "रात की सड़कों पर लोग उदासी में डूबे हुए थे, मानो खोई हुई यादों को टटोल रहे हों।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그게 대체 뭔데! 뭘 잃어버린다는 거야?",
						"english": "What on earth is that?! What are we supposed to lose?",
						"japanese": "それが一体何だってんだ！何を失うって言うんだ？",
						"chinese": "那到底是什么？！要失去什么？",
						"french": "Qu'est-ce que c'est que ça ?! Qu'est-ce qu'on est censé perdre ?",
						"spanish": "¿Qué demonios es eso? ¿Qué se supone que vamos a perder?",
						"vietnamese": "Cái đó là cái gì chứ! Mất mát cái gì cơ?",
						"thai": "นั่นมันอะไรกันแน่! จะสูญเสียอะไรไป?",
						"hindi": "वह आखिर क्या है! क्या खोने की बात कर रहे हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 거야. 이 모든 것이 얼마나 무의미한 저항이었는지.",
						"english": "You'll soon find out. How meaningless all this resistance was.",
						"japanese": "すぐにわかるだろう。この抵抗がいかに無意味なものだったか。",
						"chinese": "你很快就会明白。所有这些抵抗都是多么毫无意义。",
						"french": "Tu le sauras bientôt. À quel point toute cette résistance était insignifiante.",
						"spanish": "Pronto lo descubrirás. Cuán insignificante fue toda esta resistencia.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Tất cả sự phản kháng này vô nghĩa đến nhường nào.",
						"thai": "เจ้าจะรู้ในไม่ช้า ว่าการต่อต้านทั้งหมดนี้ไร้ความหมายเพียงใด",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। यह सारा प्रतिरोध कितना व्यर्थ था।"
					},
					"speaker": "kai",
					"emotion": "base"
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
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "현실과 환상이 뒤섞였지? 네 주변의 모든 게 이질적으로 느껴질 걸.",
						"english": "Reality and illusion have mingled, haven't they? Everything around you will feel alien.",
						"japanese": "現実と幻想が混じり合っただろう？君の周りの全てが異質に感じるはずだ。",
						"chinese": "现实与幻象已然交织，对吗？你周围的一切都会让你感到格格不入。",
						"french": "La réalité et l'illusion se sont mêlées, n'est-ce pas ? Tout ce qui t'entoure te semblera étranger.",
						"spanish": "Realidad e ilusión se han mezclado, ¿verdad? Todo a tu alrededor te parecerá extraño.",
						"vietnamese": "Thực tại và ảo ảnh đã hòa lẫn vào nhau rồi, phải không? Mọi thứ xung quanh ngươi sẽ cảm thấy xa lạ.",
						"thai": "ความจริงกับภาพลวงตาปะปนกันแล้วใช่ไหม? ทุกสิ่งรอบตัวเจ้าจะรู้สึกแปลกแยก",
						"hindi": "वास्तविकता और भ्रम आपस में मिल गए हैं, है ना? तुम्हारे आस-पास की हर चीज़ तुम्हें पराई लगेगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "...！",
						"chinese": "...！",
						"french": "... !",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "발버둥 쳐봐. 그 절망마저 솔라스의 완성을 위한 예술이 될 테니.",
						"english": "Struggle all you want. Even that despair will become art for Solas's completion.",
						"japanese": "もがいてみろ。その絶望すら、ソラスの完成のための芸術となるだろうから。",
						"chinese": "挣扎吧。即使那绝望，也会成为索拉斯完成的艺术。",
						"french": "Bats-toi tant que tu veux. Même ce désespoir deviendra un art pour l'accomplissement de Solas.",
						"spanish": "Lucha cuanto quieras. Incluso esa desesperación se convertirá en arte para la consumación de Solas.",
						"vietnamese": "Cứ giãy giụa đi. Ngay cả sự tuyệt vọng đó cũng sẽ trở thành nghệ thuật để Solas hoàn thành.",
						"thai": "ดิ้นรนไปเถอะ แม้ความสิ้นหวังนั้นก็จะกลายเป็นศิลปะเพื่อความสมบูรณ์ของโซลาส",
						"hindi": "जितना चाहे संघर्ष कर लो। वह निराशा भी सोलास की पूर्णता के लिए कला बन जाएगी।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "무의미한… 저항… 영원히….",
						"english": "Meaningless... resistance... forever...",
						"japanese": "無意味な… 抵抗… 永遠に…。",
						"chinese": "毫无意义的……抵抗……永远……",
						"french": "Résistance... inutile... pour toujours...",
						"spanish": "Resistencia... inútil... para siempre...",
						"vietnamese": "Kháng cự... vô nghĩa... mãi mãi...",
						"thai": "การต่อต้าน... ที่ไร้ความหมาย... ชั่วนิรันดร์...",
						"hindi": "व्यर्थ... प्रतिरोध... हमेशा के लिए..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어! 포기할 수 없어!",
						"english": "It's not over yet! I can't give up!",
						"japanese": "まだ終わってない！諦められない！",
						"chinese": "还没结束！我不能放弃！",
						"french": "Ce n'est pas encore fini ! Je ne peux pas abandonner !",
						"spanish": "¡Todavía no ha terminado! ¡No puedo rendirme!",
						"vietnamese": "Chưa kết thúc đâu! Không thể bỏ cuộc được!",
						"thai": "ยังไม่จบ! ฉันยอมแพ้ไม่ได้!",
						"hindi": "अभी खत्म नहीं हुआ है! मैं हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…거짓된 승리… 다시… 반복될… 비극…",
						"english": "...A false victory... Again... A tragedy... to be repeated...",
						"japanese": "…偽りの勝利… また… 繰り返される… 悲劇…",
						"chinese": "……虚假的胜利……再次……重演的……悲剧……",
						"french": "...Une fausse victoire... Encore... Une tragédie... qui se répétera...",
						"spanish": "...Una victoria falsa... Otra vez... Una tragedia... que se repetirá...",
						"vietnamese": "...Một chiến thắng giả dối... Lại... Một bi kịch... sẽ lặp lại...",
						"thai": "...ชัยชนะที่หลอกลวง... อีกครั้ง... โศกนาฏกรรม... ที่จะซ้ำรอย...",
						"hindi": "...एक झूठी जीत... फिर से... एक त्रासदी... जो दोहराई जाएगी..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이겼지만… 이상해….",
						"english": "We won... but it feels strange...",
						"japanese": "勝ったけど… 変だ…。",
						"chinese": "赢了……但感觉很奇怪……",
						"french": "On a gagné... mais c'est étrange...",
						"spanish": "Gané... pero es extraño...",
						"vietnamese": "Đã thắng... nhưng thật kỳ lạ...",
						"thai": "ชนะแล้ว... แต่รู้สึกแปลกๆ...",
						"hindi": "हम जीत गए... पर अजीब लग रहा है..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적은 사라졌으나, 도시는 여전히 광기에 휩싸여 있었다.",
						"english": "The unknown enemy vanished, but the city remained engulfed in madness.",
						"japanese": "正体不明の敵は消え去ったが、都市は依然として狂気に包まれていた。",
						"chinese": "不明身份的敌人消失了，但城市依然被疯狂笼罩着。",
						"french": "L'ennemi inconnu avait disparu, mais la ville restait plongée dans la folie.",
						"spanish": "El enemigo desconocido desapareció, pero la ciudad seguía sumida en la locura.",
						"vietnamese": "Kẻ thù không rõ danh tính đã biến mất, nhưng thành phố vẫn chìm trong điên loạn.",
						"thai": "ศัตรูที่ไม่ระบุตัวตนหายไปแล้ว แต่เมืองยังคงถูกความบ้าคลั่งเข้าครอบงำ",
						"hindi": "अज्ञात शत्रु गायब हो गया, लेकिन शहर अभी भी पागलपन में डूबा हुआ था।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "카운트다운은 멈췄지만, 진정한 비극은 이제부터 시작될 것 같았다.",
						"english": "The countdown stopped, but it felt as though the true tragedy was only just beginning.",
						"japanese": "カウントダウンは止まったが、真の悲劇はこれから始まるようだった。",
						"chinese": "倒计时停止了，但真正的悲剧似乎才刚刚开始。",
						"french": "Le compte à rebours s'était arrêté, mais il semblait que la véritable tragédie ne faisait que commencer.",
						"spanish": "La cuenta atrás se detuvo, pero parecía que la verdadera tragedia apenas comenzaba.",
						"vietnamese": "Đếm ngược đã dừng lại, nhưng có vẻ như bi kịch thực sự chỉ mới bắt đầu.",
						"thai": "การนับถอยหลังหยุดลงแล้ว แต่ดูเหมือนว่าโศกนาฏกรรมที่แท้จริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "उलटी गिनती रुक गई, लेकिन ऐसा लगा जैसे असली त्रासदी अब शुरू होने वाली थी।"
					}
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "여기까지 왔군. 하지만 예정된 결말은 변치 않아.",
						"english": "You've made it this far. But the fated end remains unchanged.",
						"japanese": "ここまで来たか。だが、予定された結末は変わらない。",
						"chinese": "你走到这里了。但注定的结局不会改变。",
						"french": "Tu es arrivé jusqu'ici. Mais la fin prédestinée reste inchangée.",
						"spanish": "Has llegado hasta aquí. Pero el final predestinado no cambia.",
						"vietnamese": "Ngươi đã đến đây rồi. Nhưng kết cục đã định sẽ không thay đổi.",
						"thai": "เจ้ามาถึงตรงนี้แล้ว แต่จุดจบที่กำหนดไว้ไม่เปลี่ยนแปลง",
						"hindi": "तुम इतनी दूर आ गए हो। लेकिन नियति का अंत अपरिवर्तित रहेगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "자, 너희의 절망을 완성할 무대가 펼쳐진다.",
						"english": "Now, the stage for your despair's completion unfolds.",
						"japanese": "さあ、お前たちの絶望を完成させる舞台が広がる。",
						"chinese": "来吧，完成你们绝望的舞台即将展开。",
						"french": "Voici, la scène pour l'achèvement de votre désespoir se déploie.",
						"spanish": "Ahora, el escenario para la consumación de vuestra desesperación se despliega.",
						"vietnamese": "Nào, sân khấu hoàn thành sự tuyệt vọng của các ngươi đã mở ra.",
						"thai": "เอาล่ะ เวทีเพื่อเติมเต็มความสิ้นหวังของพวกเจ้ากำลังจะเปิดฉากขึ้น",
						"hindi": "अब, तुम्हारे निराशा को पूरा करने वाला मंच खुल रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…침묵만이 진정한 완성….",
						"english": "...Only silence is true completion....",
						"japanese": "...沈黙だけが真の完成…。",
						"chinese": "...唯有寂静才是真正的完成...。",
						"french": "...Seul le silence est un véritable accomplissement....",
						"spanish": "...Solo el silencio es la verdadera consumación....",
						"vietnamese": "...Chỉ có sự im lặng mới là hoàn thành thật sự....",
						"thai": "...มีเพียงความเงียบงันเท่านั้นคือความสมบูรณ์ที่แท้จริง...",
						"hindi": "...केवल मौन ही सच्ची पूर्णता है...."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈춰! 끝내줄게!",
						"english": "Stop! I'll end this!",
						"japanese": "止まれ！終わらせてやる！",
						"chinese": "住手！我来终结你！",
						"french": "Arrête ! Je vais en finir !",
						"spanish": "¡Detente! ¡Acabaré con esto!",
						"vietnamese": "Dừng lại! Ta sẽ kết thúc ngươi!",
						"thai": "หยุดนะ! ฉันจะจบเรื่องนี้เอง!",
						"hindi": "रुको! मैं इसे खत्म करूँगा!"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 카운트다운이 미친 듯이 흐른다.",
			"현실은 환영과 뒤섞여 기묘한 광기로 물들고,",
			"모든 저항이 무의미한 몸부림일 뿐이라고 속삭이는 목소리.",
			"예정된 비극 앞에서, 영웅은 절망에 무릎 꿇는가."
		],
		"english": [
			"The city's countdown rushes madly.",
			"Reality, mingled with illusions, is tinged with strange madness,",
			"A voice whispers that all resistance is but a meaningless struggle.",
			"Before the fated tragedy, will the hero kneel in despair?"
		],
		"japanese": [
			"街のカウントダウンが狂ったように進む。",
			"現実は幻影と混じり合い、奇妙な狂気に染まる、",
			"すべての抵抗は無意味なもがきだと囁く声。",
			"定められた悲劇を前に、英雄は絶望にひざまずくのか。"
		],
		"chinese": [
			"城市的倒计时疯狂地流逝。",
			"现实与幻象交织，染上诡异的疯狂，",
			"一个声音低语着，所有抵抗都只是徒劳的挣扎。",
			"在注定的悲剧面前，英雄会向绝望屈膝吗？"
		],
		"french": [
			"Le compte à rebours de la ville s'accélère follement.",
			"La réalité, mêlée aux illusions, se teinte d'une étrange folie,",
			"Une voix chuchote que toute résistance n'est qu'une lutte futile.",
			"Face à la tragédie annoncée, le héros s'agenouillera-t-il dans le désespoir ?"
		],
		"spanish": [
			"La cuenta atrás de la ciudad avanza frenéticamente.",
			"La realidad, mezclada con ilusiones, se tiñe de una extraña locura,",
			"Una voz susurra que toda resistencia es solo una lucha sin sentido.",
			"¿Ante la tragedia predestinada, se arrodillará el héroe ante la desesperación?"
		],
		"vietnamese": [
			"Đồng hồ đếm ngược của thành phố trôi đi điên cuồng.",
			"Thực tại hòa lẫn ảo ảnh, nhuốm màu điên loạn kỳ lạ,",
			"Một giọng nói thì thầm rằng mọi sự kháng cự chỉ là một cuộc vùng vẫy vô nghĩa.",
			"Trước bi kịch định mệnh, người hùng sẽ quỳ gối trong tuyệt vọng?"
		],
		"thai": [
			"การนับถอยหลังของเมืองดำเนินไปอย่างบ้าคลั่ง",
			"ความจริงปะปนกับภาพลวงตา ย้อมด้วยความบ้าคลั่งแปลกประหลาด",
			"เสียงกระซิบว่าทุกการต่อต้านเป็นเพียงการดิ้นรนที่ไร้ความหมาย",
			"ต่อหน้าโศกนาฏกรรมที่กำหนดไว้ วีรบุรุษจะคุกเข่าในความสิ้นหวังหรือไม่?"
		],
		"hindi": [
			"शहर का काउंटडाउन तेज़ी से चल रहा है।",
			"वास्तविकता भ्रमों से मिलकर एक अजीब पागलपन में रंगी है,",
			"एक आवाज़ फुसफुसाती है कि हर प्रतिरोध सिर्फ एक अर्थहीन संघर्ष है।",
			"नियत त्रासदी के सामने, क्या नायक निराशा में घुटने टेकेगा?"
		]
	}
} as const;
